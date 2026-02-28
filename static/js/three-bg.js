// ============================================
// THREE.JS 3D ANIMATED BACKGROUND
// SybTech Neon Cyber Theme
// ============================================

(function () {
    'use strict';

    // ── CONFIGURATION ──
    const CONFIG = {
        particleCount: 500,
        geometryCount: 8,
        colors: {
            cyan: 0x00e1ff,
            purple: 0xbc13fe,
            pink: 0xff2cdf,
            background: 0x020617
        },
        mouse: { sensitivity: 0.0003 },
        camera: { fov: 60, near: 0.1, far: 1000, z: 30 }
    };

    // ── GLOBALS ──
    let scene, camera, renderer;
    let geometries = [];
    let particleSystem;
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;
    let animationId;

    // ── INIT ──
    function init() {
        const canvas = document.getElementById('bg3d');
        if (!canvas) return;

        // Scene
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(CONFIG.colors.background, 0.015);

        // Camera
        camera = new THREE.PerspectiveCamera(
            CONFIG.camera.fov,
            window.innerWidth / window.innerHeight,
            CONFIG.camera.near,
            CONFIG.camera.far
        );
        camera.position.z = CONFIG.camera.z;

        // Renderer
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(CONFIG.colors.background, 1);

        // Build Scene
        createParticles();
        createFloatingGeometries();
        createAmbientLights();

        // Events
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('resize', onResize, { passive: true });

        // Start Loop
        animate();
    }

    // ── PARTICLES ──
    function createParticles() {
        const count = CONFIG.particleCount;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const colorOptions = [
            new THREE.Color(CONFIG.colors.cyan),
            new THREE.Color(CONFIG.colors.purple),
            new THREE.Color(CONFIG.colors.pink)
        ];

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Spread particles in a large sphere
            positions[i3] = (Math.random() - 0.5) * 80;
            positions[i3 + 1] = (Math.random() - 0.5) * 80;
            positions[i3 + 2] = (Math.random() - 0.5) * 80;

            // Random neon color
            const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            sizes[i] = Math.random() * 2.5 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            sizeAttenuation: true
        });

        particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);
    }

    // ── FLOATING GEOMETRIES ──
    function createFloatingGeometries() {
        const geoTypes = [
            () => new THREE.IcosahedronGeometry(1.5, 0),
            () => new THREE.OctahedronGeometry(1.3, 0),
            () => new THREE.TorusGeometry(1.2, 0.4, 8, 16),
            () => new THREE.TetrahedronGeometry(1.4, 0),
            () => new THREE.DodecahedronGeometry(1.2, 0),
            () => new THREE.TorusKnotGeometry(0.8, 0.3, 64, 8)
        ];

        const colorArray = [CONFIG.colors.cyan, CONFIG.colors.purple, CONFIG.colors.pink];

        for (let i = 0; i < CONFIG.geometryCount; i++) {
            const geoFn = geoTypes[i % geoTypes.length];
            const geo = geoFn();
            const color = colorArray[i % colorArray.length];

            const material = new THREE.MeshBasicMaterial({
                color: color,
                wireframe: true,
                transparent: true,
                opacity: 0.25
            });

            const mesh = new THREE.Mesh(geo, material);

            // Random position in 3D space
            mesh.position.set(
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 30
            );

            // Random scale
            const scale = Math.random() * 1.5 + 0.8;
            mesh.scale.set(scale, scale, scale);

            // Store animation properties
            mesh.userData = {
                rotSpeedX: (Math.random() - 0.5) * 0.008,
                rotSpeedY: (Math.random() - 0.5) * 0.008,
                rotSpeedZ: (Math.random() - 0.5) * 0.005,
                floatSpeed: Math.random() * 0.3 + 0.2,
                floatAmplitude: Math.random() * 2 + 1,
                initialY: mesh.position.y,
                phase: Math.random() * Math.PI * 2
            };

            geometries.push(mesh);
            scene.add(mesh);
        }
    }

    // ── LIGHTS ──
    function createAmbientLights() {
        // Ambient light for subtle fill
        const ambient = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambient);

        // Point lights with neon colors
        const lights = [
            { color: CONFIG.colors.cyan, pos: [15, 10, 10], intensity: 0.5 },
            { color: CONFIG.colors.purple, pos: [-15, -10, 10], intensity: 0.3 },
            { color: CONFIG.colors.pink, pos: [0, 15, -10], intensity: 0.2 }
        ];

        lights.forEach(l => {
            const light = new THREE.PointLight(l.color, l.intensity, 50);
            light.position.set(...l.pos);
            scene.add(light);
        });
    }

    // ── MOUSE TRACKING ──
    function onMouseMove(e) {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    // ── RESIZE ──
    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // ── ANIMATION LOOP ──
    function animate() {
        animationId = requestAnimationFrame(animate);

        const time = performance.now() * 0.001;

        // Smooth camera follow mouse
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        camera.position.x += (mouseX * 5 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 3 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        // Rotate particle system slowly
        if (particleSystem) {
            particleSystem.rotation.y += 0.0003;
            particleSystem.rotation.x += 0.0001;
        }

        // Animate floating geometries
        geometries.forEach(mesh => {
            const d = mesh.userData;
            mesh.rotation.x += d.rotSpeedX;
            mesh.rotation.y += d.rotSpeedY;
            mesh.rotation.z += d.rotSpeedZ;

            // Float up and down
            mesh.position.y = d.initialY + Math.sin(time * d.floatSpeed + d.phase) * d.floatAmplitude;
        });

        renderer.render(scene, camera);
    }

    // ── STARTUP ──
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
