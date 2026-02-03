import { Float, useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export default function Astronaut({ quality = "high" }) {
  // change filename if needed
  const url = "/models/astronaut.glb";

  // Hook MUST be called unconditionally
  const gltf = useGLTF(url);

  const scale = useMemo(() => (quality === "low" ? 0.7 : 0.9), [quality]);

  return (
    <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.55}>
      <primitive
        object={gltf.scene}
        position={[2.2, -0.1, 0.4]}
        rotation={[0, -0.55, 0]}
        scale={scale}
      />
    </Float>
  );
}

// Optional preload (safe)
useGLTF.preload("/models/astronaut.glb");
