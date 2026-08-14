import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useEffect } from "react";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

const HeaderCarModel = () => {
  // model
  const car = useLoader(GLTFLoader, "./models/buggatti.glb", (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });
  useEffect(() => {
    if (car) {
      car.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.roughness -= 0.5;
        }
      });
    }
  }, [car]);
  return <primitive object={car.scene} scale={90} position={[0, 0.1, -5]} />;
};
export default HeaderCarModel;
