import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Main component that sets up the Three.js canvas
const ThreeJSModel = ({ 
  modelUrl = '/models/default-model.glb', 
  position = [0, 0, 0], 
  scale = 1,
  initialRotation = { x: -90, y: 0, z: 0 }
}) => {
  const mountRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const isMobile = useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  const [showHint, setShowHint] = useState(true);
  
  useEffect(() => {
    // Current reference to the mounting point div
    const currentRef = mountRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentRef.clientWidth / currentRef.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    renderer.setClearColor(0x000000, 0);
    currentRef.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(10, 10, 10);
    scene.add(spotLight);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 1;
    
    // Particle materials with different colors for variety
    const particleMaterials = [
      new THREE.PointsMaterial({ color: 0xffaacc, size: 0.05, transparent: true }),
      new THREE.PointsMaterial({ color: 0xaaffcc, size: 0.05, transparent: true }),
      new THREE.PointsMaterial({ color: 0xccaaff, size: 0.05, transparent: true })
    ];
    
    // Load 3D model
    let model;
    const loader = new GLTFLoader();

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        
        // Apply position
        model.position.set(position[0], position[1], position[2]);
        
        // Apply scale
        model.scale.set(scale, scale, scale);
        
        // Store initial rotation in radians
        const initialYRad = initialRotation.y * Math.PI / 180;
        model.userData.initialRotation = {
          x: initialRotation.x * Math.PI / 180,
          y: initialYRad,
          z: initialRotation.z * Math.PI / 180
        };
        
        // Apply initial rotation
        model.rotation.set(
          model.userData.initialRotation.x,
          model.userData.initialRotation.y,
          model.userData.initialRotation.z
        );
        
        scene.add(model);
      },
      (xhr) => {
        // console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened loading the model:', error);
      }
    );
    
    // Create a particle burst
    const createParticleBurst = (x, y) => {
      // Convert 2D screen coordinates to 3D world coordinates
      const vector = new THREE.Vector3();
      vector.set(x, y, 0.5);
      vector.unproject(camera);
      
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      
      // Slightly adjust position to be near the model
      pos.z -= 0.5; 
      
      // Create particle geometry
      const particleCount = 50;
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      
      // Initial positions
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = pos.x;
        positions[i + 1] = pos.y;
        positions[i + 2] = pos.z;
      }
      
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      // Random velocities
      const velocities = [];
      for (let i = 0; i < particleCount; i++) {
        velocities.push({
          x: (Math.random() - 0.5) * 0.08,
          y: (Math.random() - 0.5) * 0.08,
          z: (Math.random() - 0.5) * 0.08
        });
      }
      
      // Random material from our selection
      const material = particleMaterials[Math.floor(Math.random() * particleMaterials.length)];
      const particleSystem = new THREE.Points(particles, material);
      
      particleSystem.userData = {
        velocities,
        life: 100, // Lifespan of particles
        positions
      };
      
      scene.add(particleSystem);
      particlesRef.current.push(particleSystem);
      
      // Hide the hint after first interaction
      setShowHint(false);

      return () => {
  
        scene.remove(particleSystem);
      };
    };
    
    // Mouse move handler
    const handleMouseMove = (event) => {
      // Calculate normalized mouse coordinates (-1 to 1)
      const rect = currentRef.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / currentRef.clientWidth) * 2 - 1;
      const y = ((event.clientY - rect.top) / currentRef.clientHeight) * 2.1;
      mousePosition.current = { x, y };
    };

    // Click/touch handler
    const handleInteraction = (event) => {
      // Get coordinates (works for both touch and click)
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;
      
      const rect = currentRef.getBoundingClientRect();
      const x = ((clientX - rect.left) / currentRef.clientWidth) * 2 - 1;
      const y = (-(clientY - rect.top) / currentRef.clientHeight) * 2 + 1;
      
      createParticleBurst(x, y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    currentRef.addEventListener('click', handleInteraction);
    currentRef.addEventListener('touchstart', handleInteraction);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update particle systems
      particlesRef.current.forEach((system, index) => {
        system.userData.life -= 1;
        
        if (system.userData.life <= 0) {
          // Remove dead particle systems
          scene.remove(system);
          particlesRef.current.splice(index, 1);
          return;
        }
        
        const positions = system.geometry.attributes.position.array;
        const velocities = system.userData.velocities;
        
        // Update particle positions
        for (let i = 0; i < positions.length; i += 3) {
          const particleIndex = i / 3;
          
          positions[i] += velocities[particleIndex].x;
          positions[i + 1] += velocities[particleIndex].y;
          positions[i + 2] += velocities[particleIndex].z;
          
          // Slow down velocity over time
          velocities[particleIndex].x *= 0.99;
          velocities[particleIndex].y *= 0.99;
          velocities[particleIndex].z *= 0.99;
        }
        
        // Fade out particles over time
        system.material.opacity = system.userData.life / 100;
        
        system.geometry.attributes.position.needsUpdate = true;
      });
      
      if (model) {
        // Calculate target rotation based on mouse position
        const targetRotationY = Math.atan2(mousePosition.current.x, 1) + model.userData.initialRotation.y;
        // Adjust X rotation calculation for better up/down movement
        const targetRotationX = (Math.PI / 3) * mousePosition.current.y + model.userData.initialRotation.x;
        
        // Smoothly interpolate current rotation to target rotation
        model.rotation.y += (targetRotationY - model.rotation.y) * 0.1;
        model.rotation.x += (targetRotationX - model.rotation.x) * 0.15; // Slightly faster interpolation for vertical movement
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      currentRef.removeEventListener('click', handleInteraction);
      currentRef.removeEventListener('touchstart', handleInteraction);
      currentRef.removeChild(renderer.domElement);
      
      // Dispose resources
      // eslint-disable-next-line
      particlesRef.current.forEach(system => {
        scene.remove(system);
      });
      
      if (model) {
        scene.remove(model);
      }
      
      renderer.dispose();
    };
  }, [modelUrl, position, scale, initialRotation]);
  
  return (
    <>
      <div 
        ref={mountRef} 
        style={{ 
          position: 'absolute', 
          bottom: 0,
          right: 0,
          width: '100%', 
          height: '100%', 
          pointerEvents: 'auto'
        }}
      />
      {showHint && isMobile.current && (
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '20px',
          fontFamily: 'sans-serif',
          fontSize: '14px',
          animation: 'pulse 2s infinite',
          zIndex: 10
        }}>
          {isMobile.current ? 'Tap to interact' : 'Click to interact'}
        </div>
      )}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </>
  );
};

export default ThreeJSModel;
