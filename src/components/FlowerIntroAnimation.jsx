import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const SimplifiedFlowerIntro = ({ onComplete, onSkip }) => {
  const containerRef = useRef(null);
  const [showSkip, setShowSkip] = useState(true);
  const [interactionText, setInteractionText] = useState('Scroll to grow the flower');
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);
  const animState = useRef({
    scene: null,
    camera: null,
    renderer: null,
    flower: null,
    clock: new THREE.Clock(),
    animationProgress: 0,
    completed: false,
  });

  // Check if user has visited before
  useEffect(() => {
    try {
      const visited = localStorage.getItem('hasVisitedBefore');
      if (visited) {
        setHasVisitedBefore(true);
        const timer = setTimeout(() => onComplete(), 1000);
        return () => clearTimeout(timer);
      } else {
        localStorage.setItem('hasVisitedBefore', 'true');
      }
    } catch (e) {
      // If localStorage fails, just continue
      console.warn("LocalStorage not available:", e);
    }
  }, [onComplete]);

  // Initialize Three.js scene
  useEffect(() => {
    if (hasVisitedBefore) return;

    // Safety check
    if (!window.requestAnimationFrame || !THREE) {
      console.error("Required APIs not available");
      onComplete();
      return;
    }
    
    const animation = animState.current;
    const container = containerRef.current;
    
    if (!container) {
      console.error("Container reference not available");
      onComplete();
      return;
    }
    
    // Setup scene
    animation.scene = new THREE.Scene();
    animation.scene.background = new THREE.Color(0x000033);
    
    // Setup camera
    animation.camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    animation.camera.position.z = 5;
    
    // Setup renderer
    try {
      animation.renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true
      });
      animation.renderer.setSize(window.innerWidth, window.innerHeight);
      animation.renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(animation.renderer.domElement);
    } catch (e) {
      console.error("Could not initialize WebGL:", e);
      onComplete();
      return;
    }
    
    // Create a simple flower
    const createFlower = () => {
      const flowerGroup = new THREE.Group();
      
      // Stem
      const stemGeometry = new THREE.CylinderGeometry(0.05, 0.1, 3, 16);
      const stemMaterial = new THREE.MeshBasicMaterial({ color: 0x00aa00 });
      const stem = new THREE.Mesh(stemGeometry, stemMaterial);
      stem.position.y = -1.5;
      stem.scale.set(0, 0, 0); // Start invisible
      flowerGroup.add(stem);
      
      // Petals
      const petalGroup = new THREE.Group();
      petalGroup.position.y = 1;
      
      const petalGeometry = new THREE.CircleGeometry(0.5, 8);
      const petalColors = [0xff00ff, 0xaa00aa, 0xdd00dd];
      
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const petalMaterial = new THREE.MeshBasicMaterial({ 
          color: petalColors[i % petalColors.length],
          side: THREE.DoubleSide
        });
        
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        petal.position.set(
          Math.cos(angle) * 0.2,
          0,
          Math.sin(angle) * 0.2
        );
        
        petal.rotation.set(
          0.5,
          angle,
          0
        );
        
        petal.scale.set(0, 0, 0); // Start invisible
        petalGroup.add(petal);
      }
      
      // Center
      const centerGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const centerMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const center = new THREE.Mesh(centerGeometry, centerMaterial);
      center.scale.set(0, 0, 0); // Start invisible
      petalGroup.add(center);
      
      petalGroup.scale.set(0, 0, 0); // Start invisible
      flowerGroup.add(petalGroup);
      
      // Simple roots
      const rootsGroup = new THREE.Group();
      
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const rootGeometry = new THREE.CylinderGeometry(0.03, 0.01, 1, 8);
        const rootMaterial = new THREE.MeshBasicMaterial({ color: 0x663300 });
        const root = new THREE.Mesh(rootGeometry, rootMaterial);
        
        root.position.set(
          Math.cos(angle) * 0.2,
          -2.5,
          Math.sin(angle) * 0.2
        );
        
        root.rotation.set(
          Math.PI/2 + (Math.random() - 0.5) * 0.5,
          0,
          angle
        );
        
        root.scale.set(0, 0, 0); // Start invisible
        rootsGroup.add(root);
      }
      
      flowerGroup.add(rootsGroup);
      
      return {
        group: flowerGroup,
        stem: stem,
        petalGroup: petalGroup,
        center: center,
        petals: petalGroup.children.slice(0, -1), // All children except center
        roots: rootsGroup.children
      };
    };
    
    const flower = createFlower();
    animation.flower = flower;
    animation.scene.add(flower.group);
    
    // Add a light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    animation.scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0x404040);
    animation.scene.add(ambientLight);
    
    // Handle window resize
    const handleResize = () => {
      if (!animation.camera || !animation.renderer) return;
      
      animation.camera.aspect = window.innerWidth / window.innerHeight;
      animation.camera.updateProjectionMatrix();
      animation.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      if (animation.completed || !animation.renderer || !animation.scene || !animation.camera) return;
      
      requestAnimationFrame(animate);
      
      const progress = animation.animationProgress;
      
      if (animation.flower) {
        const { stem, petalGroup, center, petals, roots } = animation.flower;
        
        // Grow stem (0-30%)
        if (progress < 0.3 && stem && stem.scale) {
          const stemScale = Math.min(progress / 0.25, 1);
          stem.scale.set(stemScale, stemScale, stemScale);
        }
        
        // Grow petals (30-60%)
        if (progress >= 0.3 && progress < 0.6) {
          // Grow petal group
          if (petalGroup && petalGroup.scale) {
            const petalGroupScale = Math.min((progress - 0.3) / 0.2, 1);
            petalGroup.scale.set(petalGroupScale, petalGroupScale, petalGroupScale);
          }
          
          // Grow individual petals with delay
          if (petals && petals.length) {
            petals.forEach((petal, i) => {
              if (!petal || !petal.scale) return;
              
              const petalDelay = i * 0.02;
              const petalProgress = Math.max(0, Math.min((progress - 0.3 - petalDelay) / 0.2, 1));
              petal.scale.set(petalProgress, petalProgress, petalProgress);
            });
          }
          
          // Grow center
          if (center && center.scale && progress > 0.4) {
            const centerScale = Math.min((progress - 0.4) / 0.2, 1);
            center.scale.set(centerScale, centerScale, centerScale);
          }
        }
        
        // Pause at breakpoint (60-70%)
        if (progress >= 0.6 && progress < 0.7) {
          if (progress > 0.65 && interactionText !== "Continue scrolling to grow roots...") {
            setInteractionText("Continue scrolling to grow roots...");
          }
        }
        
        // Grow roots (70-90%)
        if (progress >= 0.7 && progress < 0.9 && roots && roots.length) {
          const rootProgress = Math.min((progress - 0.7) / 0.2, 1);
          
          roots.forEach((root, i) => {
            if (!root || !root.scale) return;
            
            const rootDelay = i * 0.05;
            const singleRootProgress = Math.max(0, Math.min((rootProgress - rootDelay) / 0.8, 1));
            root.scale.set(singleRootProgress, singleRootProgress, singleRootProgress);
          });
          
          if (rootProgress > 0.5 && interactionText !== "Almost there...") {
            setInteractionText("Almost there...");
          }
        }
        
        // Fade out (90-100%)
        if (progress >= 0.9) {
          const fadeOut = (progress - 0.9) / 0.1;
          
          if (animation.scene.background) {
            const r = Math.min(fadeOut, 1);
            animation.scene.background = new THREE.Color(r, r, r);
          }
          
          if (fadeOut >= 1 && !animation.completed) {
            animation.completed = true;
            onComplete();
          }
        }
      }
      
      animation.renderer.render(animation.scene, animation.camera);
    };
    
    try {
      animate();
    } catch (e) {
      console.error("Animation error:", e);
      onComplete();
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animation.renderer && animation.renderer.domElement && container.contains(animation.renderer.domElement)) {
        container.removeChild(animation.renderer.domElement);
      }
      
      if (animation.scene) {
        animation.scene.traverse((object) => {
          if (object.geometry) {
            try { object.geometry.dispose(); } catch (e) {}
          }
          
          if (object.material) {
            try {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
              } else {
                object.material.dispose();
              }
            } catch (e) {}
          }
        });
      }
    };
  }, [hasVisitedBefore, onComplete, interactionText]);
  
  // Handle scroll to control animation progress
  useEffect(() => {
    if (hasVisitedBefore) return;
    
    const handleScroll = () => {
      // Get scroll position as percentage
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;
      
      if (docHeight <= 0) return;
      
      // Map scroll position to animation progress
      let progress = Math.min(scrollTop / docHeight, 1);
      animState.current.animationProgress = progress;
      
      // Hide skip button after scrolling starts
      if (progress > 0.1) {
        setShowSkip(false);
      }
    };
    
    try {
      window.addEventListener('scroll', handleScroll);
    
      // Add scroll space
      const originalBodyHeight = document.body.style.height;
      document.body.style.height = '500vh';
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.height = originalBodyHeight;
      };
    } catch (e) {
      console.error("Scroll handler error:", e);
      onComplete();
      return () => {};
    }
  }, [hasVisitedBefore, onComplete]);
  
  // Show brief welcome for returning visitors
  if (hasVisitedBefore) {
    return (
      <div className="fixed inset-0 z-50 bg-white bg-opacity-80 flex items-center justify-center">
        <div className="text-2xl font-light text-gray-800 animate-pulse">
          Welcome back...
        </div>
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 z-50">
      <div ref={containerRef} className="w-full h-full" />
      
      {showSkip && (
        <button 
          onClick={onSkip}
          className="fixed bottom-8 right-8 bg-black bg-opacity-70 text-white px-6 py-3 rounded-full shadow-lg transition-all hover:bg-opacity-100"
        >
          Skip Animation
        </button>
      )}
      
      <div className="fixed bottom-8 left-0 right-0 text-center text-white text-lg font-light animate-pulse">
        {interactionText}
      </div>
    </div>
  );
};

export default SimplifiedFlowerIntro;