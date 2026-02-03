import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const clamp01 = (v) => Math.min(1, Math.max(0, v));

export default function WarpFX({ warp }) {
  const mesh = useRef();
  const { camera } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uWarp: { value: 0 },
      uFlash: { value: 0 },
    }),
    []
  );

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;

    // smooth warp (warp prop is 0/1 spike)
    const target = warp ? 1 : 0;
    uniforms.uWarp.value += (target - uniforms.uWarp.value) * 0.10;

    // quick flash that decays
    uniforms.uFlash.value += ((warp ? 1 : 0) - uniforms.uFlash.value) * 0.18;
    uniforms.uFlash.value *= 0.92;

    // keep overlay in front of camera
    if (mesh.current) {
      const z = -2.2;
      mesh.current.position.copy(camera.position);
      mesh.current.quaternion.copy(camera.quaternion);
      mesh.current.translateZ(z);
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;
    varying vec2 vUv;
    uniform float uTime;
    uniform float uWarp;
    uniform float uFlash;

    float hash(vec2 p){
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) + (c - a)*u.y*(1.0-u.x) + (d - b)*u.x*u.y;
    }

    void main() {
      vec2 uv = vUv;
      vec2 p = uv - 0.5;

      // radial coordinate
      float r = length(p);

      // warp lines: stretch along radius
      float a = atan(p.y, p.x);
      float line = sin(a * 18.0 + uTime * 6.0) * 0.5 + 0.5;

      // noisy streaks
      float n = noise(p * 6.0 + uTime * 0.6);
      float streak = smoothstep(0.55, 1.0, line * 0.7 + n * 0.6);

      // stronger near center during warp
      float core = smoothstep(0.35, 0.0, r);

      float intensity = uWarp * (0.35 + 0.85 * core) * streak;

      // edge fade so it doesn't cover everything
      float fade = smoothstep(0.9, 0.25, r);

      // subtle color shift
      vec3 col = vec3(0.55, 0.75, 1.0) * intensity;
      col += vec3(1.0, 0.55, 0.9) * intensity * 0.35;

      // flash at start
      col += vec3(1.0) * uFlash * 0.20 * fade;

      float alpha = clamp(intensity * 0.55 * fade + uFlash * 0.10, 0.0, 0.22);

      gl_FragColor = vec4(col, alpha);
    }
  `;

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[6, 3.5, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
