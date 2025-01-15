/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { vertexShader } from "./shader";

const Particles = () => {
  const planePositions = useMemo(() => {
    const planeGeometry = new THREE.PlaneGeometry(6, 6, 128, 128);
    const positions = planeGeometry.attributes.position.array;

    return positions;
  }, []);

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(1, 1, 1) },
        uOpacity: { value: 0.5 }, 
      },
      vertexShader,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity; // Uniform for opacity
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(uColor, uOpacity); // Apply opacity to particles
        }
      `,
    }),
    []
  );

  useFrame(() => {
    shaderArgs.uniforms.uTime.value++;
  }, []);

  return (
    <points rotation={[0, 0, 0]} scale={[10, 10, 10]} position={[-2, 0, -0.5]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={planePositions}
          itemSize={3}
          count={planePositions.length / 3}
        />
      </bufferGeometry>
      <shaderMaterial
        args={[shaderArgs]}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
