import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Main component that sets up the Three.js canvas
const ThreeJSModel = ({ modelUrl = '/models/default-model.glb', position = [0, 0, 0], scale = 1 }) => {
  const mountRef = useRef(null);
  
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
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    
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
        
        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened loading the model:', error);
      }
    );
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (model) {
        model.rotation.y += 0.005;
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
      window.removeEventListener('resize', handleResize);
      currentRef.removeChild(renderer.domElement);
      
      // Dispose resources
      if (model) {
        scene.remove(model);
      }
      
      renderer.dispose();
    };
  }, [modelUrl, position, scale]);
  
  return (
    <>
        <div 
        ref={mountRef} 
        style={{ 
            position: 'absolute', 
            bottom: 0,
            right: 0,
            width: '10%', 
            height: '10%', 
            pointerEvents: 'none' 
        }}
        />
        {/* <span style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          color: 'white',
          fontSize: '8px',
        }}>Flower by Poly by Google [CC-BY] via Poly Pizza</span> */}
    </>
  );
};

export default ThreeJSModel; 