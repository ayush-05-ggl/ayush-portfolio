
import { useMemo } from "react";
import * as THREE from "three";

function createGlowTexture() {
  const size = 128;
  const data = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x - size / 2) / (size / 2);
      const dy = (y - size / 2) / (size / 2);
      const r = Math.sqrt(dx * dx + dy * dy);

      const alpha = Math.pow(
        Math.max(0, 1 - r),
        3.5
      );

      const i = (y * size + x) * 4;

      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = Math.round(alpha * 255);
    }
  }

  const texture = new THREE.DataTexture(
    data,
    size,
    size,
    THREE.RGBAFormat
  );

  texture.needsUpdate = true;
  return texture;
}

export default function CinematicNebula({
  quality = "high",
}) {
  const texture = useMemo(
    () => createGlowTexture(),
    []
  );

  const clouds = [
    {
      position: [-5.5, 2.8, -9],
      scale: [10, 7, 1],
      color: "#3b4bc0",
      opacity: 0.20,
    },
    {
      position: [6, -2.5, -10],
      scale: [11, 8, 1],
      color: "#513c9c",
      opacity: 0.16,
    },
    {
      position: [2.5, 4.5, -12],
      scale: [9, 6, 1],
      color: "#125b83",
      opacity: 0.13,
    },
  ];

  return (
    <group>
      {clouds
        .slice(0, quality === "low" ? 2 : 3)
        .map((cloud, index) => (
          <mesh
            key={index}
            position={cloud.position}
            scale={cloud.scale}
            frustumCulled={false}
          >
            <planeGeometry args={[1, 1]} />

            <meshBasicMaterial
              map={texture}
              color={cloud.color}
              transparent
              opacity={cloud.opacity}
              depthWrite={false}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
              toneMapped={false}
            />
          </mesh>
        ))}
    </group>
  );
}
