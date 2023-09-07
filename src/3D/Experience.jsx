import {
  CameraControls,
  Environment,
  Text,
  useCursor,
} from "@react-three/drei";
import {  useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Cactoro } from "./Cactoro";
import { DragonEvolved } from "./Dragon_Evolved";
import { MonsterStage } from "./MonsterStage";
import { GhostSkull } from "./GhostSkull";


export const Experience = () => {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  useCursor(hovered);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active, scene]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />

       <Text
          font="fonts/Caprasimo-Regular.ttf"
          fontSize={0.3}
          position={[0, 2, 0.051]}
          anchorY={"bottom"}
        >
          Click twice for coming into portal :)
          <meshBasicMaterial color={'#642f6c'} toneMapped={false} />
        </Text>
       <Text
          font="fonts/Caprasimo-Regular.ttf"
          fontSize={0.3}
          position={[0, -2.5, 0.051]}
          anchorY={"bottom"}
        >
          You can do more interesting things with JavaScript!
          <meshBasicMaterial color={'#642f6c'} toneMapped={false} />
        </Text>
      <MonsterStage
        name="Ghost Skull"
        color="#642f6c"
        texture={
          "textures/Violet_Ghosts_world.jpg"
        }
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <GhostSkull scale={0.6} position-y={-1} hovered={hovered === "Ghost Skull"} />
      </MonsterStage>
      <MonsterStage
        texture={"textures/anime_art_style_lava_world.jpg"}
        name="Dragon"
        color={"#df8d52"}
        position-x={-2.5}
        rotation-y={Math.PI / 8}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <DragonEvolved
          scale={0.5}
          position-y={-1}
          hovered={hovered === "Dragon"}
        />
      </MonsterStage>
      <MonsterStage
        name="Cactoro"
        color="#739d3c"
        texture={"textures/anime_art_style_cactus_forest.jpg"}
        position-x={2.5}
        rotation-y={-Math.PI / 8}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <Cactoro scale={0.45} position-y={-1} hovered={hovered === "Cactoro"} />
      </MonsterStage>
    </>
  );
};

