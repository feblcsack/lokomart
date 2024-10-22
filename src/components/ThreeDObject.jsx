import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const ThreeDObject = ({ modelUrl }) => {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const meshRef = useRef(null);

  useEffect(() => {
    if (meshRef.current) {
      console.log(`Loaded model from ${modelUrl}`);
      
    }
  }, [gltf, modelUrl]);

  return (
    <Canvas 
      style={{ width: '100%', height: '100%' }} 
      camera={{ position: [4, 5, 7], fov: 35 }} // Mengatur posisi dan FOV kamera
    >
      {/* Ambient light to provide basic lighting */}
      <ambientLight intensity={0.5} /> {/* Meningkatkan intensitas untuk pencahayaan dasar */}
      {/* Point light to highlight specific areas */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} /> {/* Tambahkan titik cahaya lain */}
      {/* Directional light to cast shadows */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <primitive object={gltf.scene} ref={meshRef} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDObject;
