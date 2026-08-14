import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const useTexture_loader = (
  repeatX,
  repeatY,
  textureName,
  isTextureHaveAO = false,
) => {
  const TextureColor = useLoader(
    TextureLoader,
    `./public/textures/${textureName}_1K-JPG_Color.jpg`,
  );
  TextureColor.wrapS = THREE.RepeatWrapping;
  TextureColor.wrapT = THREE.RepeatWrapping;
  TextureColor.colorSpace = THREE.SRGBColorSpace;
  TextureColor.magFilter = THREE.LinearFilter;
  TextureColor.minFilter = THREE.LinearMipmapLinearFilter;
  TextureColor.repeat.set(repeatX, repeatY);
  const TextureAO = isTextureHaveAO
    ? useLoader(
        TextureLoader,
        `./textures/${textureName}_1K-JPG_AmbientOcclusion.jpg`,
      )
    : "";
  const TextureDisp = useLoader(
    TextureLoader,
    `./textures/${textureName}_1K-JPG_Displacement.jpg`,
  );
  const TextureRoughness = useLoader(
    TextureLoader,
    `./textures/${textureName}_1K-JPG_Roughness.jpg`,
  );
  const TextureNormal = useLoader(
    TextureLoader,
    `./textures/${textureName}_1K-JPG_NormalGL.jpg`,
  );
  return {
    TextureColor,
    TextureDisp,
    TextureRoughness,
    TextureNormal,
    TextureAO,
  };
};
export default useTexture_loader;
