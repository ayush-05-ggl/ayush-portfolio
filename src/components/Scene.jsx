import { Canvas } from "@react-three/fiber";
import { Environment, Float, Stars, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import CameraRig from "./camera/CameraRig";
import NebulaGlow from "./fx/NebulaGlow";
import ProjectsPanels from "./ProjectsPanels";
import WarpFX from "./fx/WarpFX";
import Astronaut from "./models/Astronauts.jsx";
import ErrorBoundary from "./ErrorBoundary";

<mesh position={[0, -0.2, -1.2]}>
  <sphereGeometry args={[1.6, 128, 128]} />
  <meshStandardMaterial
    color="#0b1220"
    roughness={0.85}
    metalness={0.05}
    emissive="#0b1220"
    emissiveIntensity={0.1}
  />
</mesh>

{/* Rim light */}
<pointLight
  position={[2.5, 1.5, 2]}
  intensity={0.8}
  color="#8ab4ff"
/>


function Planet({ quality }) {
  // reduce segments slightly on low quality
  const seg = quality === "low" ? 64 : 128;

  return (
    <Float speed={1.2} rotationIntensity={0.45} floatIntensity={0.9}>
      <Sphere args={[1.25, seg, seg]} position={[0, 0.2, 0]}>
        <MeshDistortMaterial distort={0.25} speed={1.6} roughness={0.25} metalness={0.2} />
      </Sphere>
    </Float>
  );
}

export default function Scene({
  scrollRef,
  projects,
  onSelectProject,
  warp,
  section = "hero",
  quality = "high",
  onSectionChange,
}) {
  const starsCount = useMemo(() => (quality === "low" ? 3000 : 8000), [quality]);
  const nebulaIntensity = useMemo(() => (quality === "low" ? 0.75 : 1.15), [quality]);

  return (
    <Canvas
      className="canvas"
      camera={{ position: [0, 0.5, 5], fov: 50 }}
      dpr={quality === "low" ? 1 : [1, 1.5]}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#03040a"]} />
        <fog attach="fog" args={["#03040a", 6, 18]} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 7, 5]} intensity={1.2} />

        <Stars
          radius={60}
          depth={40}
          count={starsCount}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Nebula that changes color per section */}
        {/* <NebulaGlow theme={section} intensity={nebulaIntensity} /> */}

        {/* Warp burst overlay */}
        <WarpFX warp={warp} />

        {/* Camera rig now also reports section changes */}
        <CameraRig scrollRef={scrollRef} onSectionChange={onSectionChange} />

        <Planet quality={quality} />

        {/* 3D model */}
       {/* 3D model */}
        <ErrorBoundary
        fallback={
            <mesh position={[2.2, -0.1, 0.4]}>
            <sphereGeometry args={[0.22, 24, 24]} />
            <meshStandardMaterial emissive="#88ccff" emissiveIntensity={0.9} />
            </mesh>
        }
        >
        <Suspense
            fallback={
            <mesh position={[2.2, -0.1, 0.4]}>
                <sphereGeometry args={[0.18, 24, 24]} />
                <meshStandardMaterial emissive="#88ccff" emissiveIntensity={0.7} />
            </mesh>
            }
        >
            <Astronaut quality={quality} />
        </Suspense>
        </ErrorBoundary>


        <ProjectsPanels scrollRef={scrollRef} projects={projects} onSelect={onSelectProject} />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
