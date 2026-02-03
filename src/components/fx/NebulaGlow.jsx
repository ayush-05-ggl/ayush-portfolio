import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const clamp01 = (v) => Math.min(1, Math.max(0, v));

export default function NebulaGlow({ theme = "hero", intensity = 1.15 }) {
  const mesh = useRef();

  const THEMES = useMemo(
    () => ({
      hero: ["#3b2fff", "#ff3bd4", "#22d3ee"],
      about: ["#22d3ee", "#3b2fff", "#a78bfa"],
      projects: ["#ff3bd4", "#fb7185", "#22d3ee"],
      contact: ["#a78bfa", "#22d3ee", "#f472b6"],
    }),
    []
  );

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color(THEMES.hero[0]) },
      uColorB: { value: new THREE.Color(THEMES.hero[1]) },
      uColorC: { value: new THREE.Color(THEMES.hero[2]) },
      uIntensity: { value: intensity },
      uFade: { value: 0.65 },
      uMix: { value: 0 }, // for smooth transitions
    }),
    [THEMES, intensity]
  );

  // Smoothly transition colors when theme changes
  const lastTheme = useRef("hero");
  const mixT = useRef(0);

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    if (mesh.current) mesh.current.rotation.z += delta * 0.02;

    const next = theme || "hero";
    if (next !== lastTheme.current) {
      lastTheme.current = next;
      mixT.current = 0;
    }

    mixT.current = clamp01(mixT.current + delta * 1.2);
    uniforms.uMix.value = mixT.current;

    const [a, b, c] = THEMES[next] || THEMES.hero;

    // Lerp colors gently
    uniforms.uColorA.value.lerp(new THREE.Color(a), 0.06);
    uniforms.uColorB.value.lerp(new THREE.Color(b), 0.06);
    uniforms.uColorC.value.lerp(new THREE.Color(c), 0.06);

    // Allow runtime intensity changes (perf toggle)
    uniforms.uIntensity.value += (intensity - uniforms.uIntensity.value) * 0.06;
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
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    uniform float uIntensity;
    uniform float uFade;

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

    float fbm(vec2 p){
      float v = 0.0;
      float a = 0.5;
      for(int i=0; i<5; i++){
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = vUv;
      vec2 p = (uv - 0.5) * vec2(1.8, 1.0);

      float t = uTime * 0.08;

      float n1 = fbm(p * 1.2 + vec2(t, -t));
      float n2 = fbm(p * 2.2 + vec2(-t * 1.2, t * 0.7));
      float n = smoothstep(0.15, 0.95, n1 * 0.65 + n2 * 0.55);

      float r = length(p);
      float mask = smoothstep(1.25, 0.15, r);

      vec3 col = mix(uColorA, uColorB, n);
      col = mix(col, uColorC, smoothstep(0.2, 0.9, n2));

      float glow = pow(n, 1.6) * mask;
      col *= glow * uIntensity;

      float vignette = smoothstep(1.2, uFade, r);
      col *= vignette;

      float alpha = clamp(glow * 0.85, 0.0, 0.22);

      gl_FragColor = vec4(col, alpha);
    }
  `;

  return (
    <mesh ref={mesh} position={[0, 0, -6]} scale={[18, 10, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
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
