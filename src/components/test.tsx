"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Selection, Select } from "@react-three/postprocessing";

function Box(props: any) {
  const ref = useRef();
  const [hovered, hover] = useState<boolean>(false);

  useFrame(
    (state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta)
  );
  return (
    <Select enabled={hovered}>
      <mesh
        ref={ref}
        {...props}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </Select>
  );
}

export default function Boxes() {
  return (
    <Canvas dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Selection>
        <Box position={[-1, 0, 0]} />
        <Box position={[1, 0, 0]} />
      </Selection>
      <OrbitControls />
    </Canvas>
  );
}
