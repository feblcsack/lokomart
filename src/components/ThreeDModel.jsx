import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ThreeDModel = () => {
  const gltf = useGLTF('/public/pop.glb');
  return <primitive object={gltf.scene} />;
};

export default ThreeDModel;
