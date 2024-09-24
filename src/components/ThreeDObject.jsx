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
      meshRef.current.position.set(0, 0, 0); 
    }
  }, [gltf, modelUrl]);

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={gltf.scene} ref={meshRef} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDObject;
