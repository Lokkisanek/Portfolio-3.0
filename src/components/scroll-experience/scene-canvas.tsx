"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, useGLTF } from "@react-three/drei";
import type { Group } from "three";

type ModelProps = {
  url: string;
  scale: number;
  variant: "iphone" | "echo" | "drone" | "pc";
  progress: number;
};

function ScrollModel({ url, scale, variant, progress }: ModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(url);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.elapsedTime;

    switch (variant) {
      case "iphone":
        g.rotation.y = progress * Math.PI * 1.8 - 0.6;
        g.rotation.x = Math.sin(progress * Math.PI) * 0.25;
        g.position.y = Math.sin(t * 1.4) * 0.12;
        g.position.x = Math.sin(progress * Math.PI * 2) * 0.25;
        break;
      case "echo":
        g.rotation.y = t * 0.35 + progress * Math.PI;
        g.position.y = Math.sin(t * 0.9) * 0.08;
        break;
      case "drone":
        g.rotation.y = progress * Math.PI * 2 + t * 0.2;
        g.rotation.z = Math.sin(t * 0.8) * 0.08;
        g.position.y = 0.2 + Math.sin(t * 1.1) * 0.2;
        g.position.x = Math.sin(progress * Math.PI) * 0.3;
        break;
      case "pc":
        g.rotation.y = progress * Math.PI * 0.8 + t * 0.15;
        break;
    }
  });

  return (
    <Center>
      <group ref={groupRef} scale={scale}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

type SceneCanvasProps = {
  url: string;
  scale: number;
  variant: "iphone" | "echo" | "drone" | "pc";
  progress: number;
};

export function SceneCanvas({ url, scale, variant, progress }: SceneCanvasProps) {
  return (
    <div className="h-[min(50vh,440px)] w-full">
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#07090d"]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 5]} intensity={1.2} />
        <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#2dd4bf" />
        <Suspense fallback={null}>
          <ScrollModel url={url} scale={scale} variant={variant} progress={progress} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

scrollScenesPreload();

function scrollScenesPreload() {
  const urls = [
    "/models/iphone_x_lowpoly/scene.gltf",
    "/models/echo_dot__alexa/scene.gltf",
    "/models/dji_spark_-_low_poly_medium/scene.gltf",
    "/models/gaming_pc_low-poly/scene.gltf",
  ];
  urls.forEach((url) => useGLTF.preload(url));
}
