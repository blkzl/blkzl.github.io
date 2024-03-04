"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

function SpinningText() {
  const textRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    // Ensure the ref is attached to the object
    if (textRef.current) {
      // Rotate the text object around its Y axis
      textRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <Text
        ref={textRef}
        color="royalblue" // Default color
        fontSize={1}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"center"}
        anchorX="center" // Horizontal alignment
        anchorY="middle" // Vertical alignment
      >
        B
      </Text>
      <Text
        ref={textRef}
        color="royalblue" // Default color
        fontSize={10}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"center"}
        anchorX="center" // Horizontal alignment
        anchorY="middle" // Vertical alignment
      >
        L
      </Text>
    </>
  );
}

export default function Logo() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SpinningText />
    </Canvas>
  );
}
