/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Text3D } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

const Text = ({ gradientColors, title, ...props }) => {
  // Create a custom shader material for the gradient
  const material = useMemo(() => {
    if (gradientColors && gradientColors.length >= 2) {
      const uniforms = {
        color1: { value: new THREE.Color(gradientColors[0]) },
        color2: { value: new THREE.Color(gradientColors[1]) },
      };

      return new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
          varying vec3 vPosition;
          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec3 vPosition;
          void main() {
            float mixRatio = (vPosition.y + 1.0) / 2.0; // Normalize y to range [0,1]
            gl_FragColor = vec4(mix(color1, color2, mixRatio), 1.0);
          }
        `,
      });
    }

    return new THREE.MeshStandardMaterial({ color: "#ffffff" });
  }, [gradientColors]);

  return (
    <Text3D
      font="/fonts/helvetiker_regular.typeface.json"
      height={0.2} 
      curveSegments={12} 
      bevelEnabled 
      bevelThickness={0.03}
      bevelSize={0.02}
      bevelSegments={5}
      {...props} 
    >
      {title}
      <primitive object={material} attach="material" />
    </Text3D>
  );
};

export default Text;
