/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, Text3D } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Avatar } from "./Avatar";
import Particles from "./Particles";
import Text from "./3DText/Text";

const ThreeCanvas = () => {
  return (
    <Canvas className="h-screen">
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <PerspectiveCamera
        makeDefault
        position={[0, 1, 5]} 
        fov={50} 
      />
{/* 
      <group position={[-2, 0, 0]}>
        <Text
          title="hello I am"
          gradientColors={["#f011cd", "#dacd09"]}
          position={[-2, 1, 0]}
          rotation={[0, Math.PI/60, 0]}
          scale={0.4}
        />

        <Text
          title="Pragati Sharma"
          gradientColors={["#f011cd", "#dacd09"]}
          position={[-2, 0, 0]}
          rotation={[0, Math.PI/90, 0]}
          scale={0.5}
        />
      </group> */}

      <group scale={(3.8, 2.8, 2.8)} position-y={-2.2}>
        <Particles />
        <Avatar />
      </group>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default ThreeCanvas;
