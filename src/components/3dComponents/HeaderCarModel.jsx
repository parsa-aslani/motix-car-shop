import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import { useEffect, useMemo } from "react";
import useTexture_loader from "./TextureLoader";

const HeaderCarModel = () => {
  // texture
  const fabricTexture = useTexture_loader(1, 1, "Fabric030", true);
  // materials
  const fabricMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      map: fabricTexture.TextureColor,
      aoMap: fabricTexture.TextureAO,
      displacementMap: fabricTexture.TextureDisp,
      displacementScale: 0.01,
      roughnessMap: fabricTexture.TextureRoughness,
      normalMap: fabricTexture.TextureNormal,
      roughness: 1,
      metalness: 0,
      sheen: 1,
      sheenRoughness: 0.7,
    });
  }, [fabricTexture]);
  // model
  const car = useLoader(
    GLTFLoader,
    "./models/bugatti_tourbillon_2026__www.vecarz.com.glb",
  );
  useEffect(() => {
    if (car) {
      car.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.roughness -= 0.8;
        }
      });
    }
  }, [car, fabricMaterial]);
  return <primitive object={car.scene} scale={90} position={[0, 0.1, -5]} />;
};
export default HeaderCarModel;
