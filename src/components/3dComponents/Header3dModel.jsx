import { Canvas } from "@react-three/fiber";
import HeaderCarModel from "./HeaderCarModel";
import { Loader, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer, SSAO } from "@react-three/postprocessing";
import * as THREE from "three";
const Header3dModel = () => {
  return (
    <>
      <Canvas
        scene={{ background: "red" }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(window.devicePixelRatio);
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.5;
        }}
        camera={{ position: [-2.9, 0.4, -5] }}
      >
        <fogExp2 attach="fog" args={["#ffffff", 0.005]} />
        <ambientLight color={"#d0ccb9"} intensity={0.1} />
        <directionalLight
          color={"#b7b799"}
          intensity={0.1}
          position={[-15, 5, -5]}
          castShadow
        />
        <directionalLight
          color="#ffffdb"
          intensity={6}
          position={[-15, 13, 40]}
          castShadow
        />

        <EffectComposer enableNormalPass>
          <Bloom
            intensity={0.2}
            luminanceThreshold={5}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <SSAO samples={31} radius={0.1} intensity={25} />
        </EffectComposer>
        <OrbitControls
          target={[0, 0.1, -5]}
          enablePan={false}
          maxDistance={3}
          minDistance={2.5}
        />
        <HeaderCarModel />
      </Canvas>
      <Loader />
    </>
  );
};
export default Header3dModel;
