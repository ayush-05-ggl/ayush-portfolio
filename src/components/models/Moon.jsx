import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function createMoonTexture() {
  const width = 512, height = 256;
  const canvas = document.createElement("canvas");
  canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(width, height);
  let seed = 90210;
  const random = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296; };
  const craters = Array.from({ length: 65 }, () => ({
    x: random() * width, y: random() * height, r: 2 + random() * 18,
  }));
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = x / width * Math.PI * 2;
      const b = y / height * Math.PI;
      let v = 116 + 20 * Math.sin(a * 7 + Math.cos(b * 9)) * Math.sin(b * 11)
        + 12 * Math.sin(a * 21 + b * 15) + (random() - 0.5) * 22;
      for (const c of craters) {
        const dx = Math.min(Math.abs(x - c.x), width - Math.abs(x - c.x));
        const dy = y - c.y;
        const d = Math.hypot(dx, dy) / c.r;
        if (d < 0.78) v -= 25 * (1 - d / 0.78);
        else if (d < 1.15) v += 25 * (1 - Math.abs(d - 0.97) / 0.18);
      }
      const k = (y * width + x) * 4;
      const shade = Math.max(55, Math.min(195, v));
      img.data[k] = shade;
      img.data[k + 1] = shade * 0.98;
      img.data[k + 2] = shade * 0.94;
      img.data[k + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}

export default function Moon({ quality = "high" }) {
  const mesh = useRef();
  const texture = useMemo(createMoonTexture, []);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += Math.min(delta, 0.05) * 0.025;
  });
  return (
    <mesh ref={mesh} position={[3.0, 0.85, -1.8]} rotation={[0.08, 0, -0.08]}>
      <sphereGeometry args={[0.95, quality === "low" ? 48 : 96, quality === "low" ? 32 : 64]} />
      <meshStandardMaterial map={texture} bumpMap={texture} bumpScale={0.035} roughness={1} metalness={0} color="#eaf0fcff" />
    </mesh>
  );
}
