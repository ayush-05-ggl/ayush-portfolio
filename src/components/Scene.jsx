
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

import Moon from "./models/Moon";
import CameraRig from "./camera/CameraRig";
import CinematicNebula from "./fx/CinematicNebula";
import ProjectsPanels from "./ProjectsPanels";
import WarpFX from "./fx/WarpFX";

export default function Scene({
  scrollRef,
  projects,
  onSelectProject,
  warp,
  section = "hero",
  quality = "high",
  onSectionChange,
}) {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  const effectiveQuality =
    isMobile ? "low" : quality;

  const starCount =
    effectiveQuality === "low" ? 1300 : 3500;

  return (
    <Canvas
      className="canvas"
      camera={{
        position: [0, 0.5, 5],
        fov: 50,
      }}
      dpr={
        effectiveQuality === "low"
          ? 1
          : [1, 1.5]
      }
      gl={{
        antialias: effectiveQuality !== "low",
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <color
          attach="background"
          args={["#03040a"]}
        />

        <fog
          attach="fog"
          args={["#03040a", 12, 55]}
        />

        <ambientLight intensity={0.12} />

        <directionalLight
          position={[5, 3, 4]}
          intensity={1.5}
          color="#e3ecff"
        />

        {/* Distant starfield */}
        <Stars
          radius={90}
          depth={50}
          count={starCount}
          factor={3}
          saturation={0}
          fade
          speed={0.15}
        />

        {/* Secondary, smaller stars */}
        <Stars
          radius={55}
          depth={35}
          count={Math.floor(starCount * 0.4)}
          factor={1.2}
          saturation={0}
          fade
          speed={0.05}
        />

        {/* Cinematic atmospheric glow */}
        <CinematicNebula
          quality={effectiveQuality}
        />

        {/* Existing warp animation */}
        <WarpFX warp={warp} />

        {/* Improved camera */}
        <CameraRig
          scrollRef={scrollRef}
          onSectionChange={onSectionChange}
        />

        {/* Existing Moon */}
        <Moon quality={effectiveQuality} />

        {/* Interactive project panels */}
        <ProjectsPanels
          scrollRef={scrollRef}
          projects={projects}
          onSelect={onSelectProject}
        />
      </Suspense>
    </Canvas>
  );
}
