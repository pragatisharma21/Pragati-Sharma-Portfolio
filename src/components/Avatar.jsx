/* eslint-disable react/no-unknown-property */


import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useEffect } from "react";

export function Avatar(props) {
  const { nodes, materials } = useGLTF("Models/pragati.glb");
  const [inViewport, setInViewport] = useState(true);

  // Load animations
  const { animations } = useGLTF("/Animations/AnimationPragati.glb");
  const avatarGroup = useRef();
  const { actions } = useAnimations(animations, avatarGroup);


  useEffect(() => {
    const wavingAction = actions["waving"];
    const idleAction = actions["Idle"];

    if (wavingAction && idleAction && inViewport) {
 
      wavingAction.reset().fadeIn(0.5).play();

      setTimeout(() => {
        wavingAction.fadeOut(0.5);
        idleAction.reset().fadeIn(0.5).play();
      }, wavingAction.getClip().duration * 1000); 
    }
  }, [inViewport, actions]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    const element = document.getElementById("avatar-container");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);


  return (
    <group
      {...props}
      dispose={null}
      ref={avatarGroup}
      position={[0.6, -0.3, 0.5]}
      rotation={[0, -Math.PI / 9, 0]}
      
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
}

useGLTF.preload("Models/pragati.glb");
