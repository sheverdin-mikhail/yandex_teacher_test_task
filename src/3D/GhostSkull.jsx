import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function GhostSkull({ hovered, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Ghost_Skull.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Flying_Idle'].reset().fadeIn(0.5).play();
    return () => actions && actions['Flying_Idle']?.fadeOut(0.5);
  }, [hovered, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Ghost_Skull">
            <skinnedMesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.Ghost_Secondary} skeleton={nodes.Cube001.skeleton} />
            <skinnedMesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials.Ghost_Main} skeleton={nodes.Cube001_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Ghost_Skull.gltf')
