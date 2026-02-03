import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const lerp = (a, b, t) => a + (b - a) * t;

function lerpVec3(out, a, b, t) {
  out[0] = lerp(a[0], b[0], t);
  out[1] = lerp(a[1], b[1], t);
  out[2] = lerp(a[2], b[2], t);
  return out;
}

function sampleKeyframes(frames, t) {
  t = clamp01(t);
  for (let i = 0; i < frames.length - 1; i++) {
    const a = frames[i];
    const b = frames[i + 1];
    if (t >= a.t && t <= b.t) {
      const local = (t - a.t) / Math.max(1e-6, b.t - a.t);
      return {
        pos: [
          lerp(a.pos[0], b.pos[0], local),
          lerp(a.pos[1], b.pos[1], local),
          lerp(a.pos[2], b.pos[2], local),
        ],
        look: [
          lerp(a.look[0], b.look[0], local),
          lerp(a.look[1], b.look[1], local),
          lerp(a.look[2], b.look[2], local),
        ],
      };
    }
  }
  return frames[frames.length - 1];
}

function sectionFromScroll(s) {
  // thresholds match your 4 sections
  if (s < 0.20) return "hero";
  if (s < 0.48) return "about";
  if (s < 0.82) return "projects";
  return "contact";
}

export default function CameraRig({ scrollRef, onSectionChange }) {
  const t = useRef(0);
  const smoothPos = useRef([0, 0.5, 5]);
  const smoothLook = useRef([0, 0.15, 0]);
  const lastSection = useRef("hero");

  const frames = useRef([
    { t: 0.0, pos: [0.0, 0.55, 5.2], look: [0.0, 0.15, 0.0] }, // Hero
    { t: 0.33, pos: [-0.6, 0.65, 4.4], look: [0.0, 0.20, 0.0] }, // About
    { t: 0.66, pos: [0.7, 0.40, 3.9], look: [0.0, 0.12, 0.0] }, // Projects
    { t: 1.0, pos: [0.0, 0.55, 4.8], look: [0.0, 0.15, 0.0] }, // Contact
  ]);

  useFrame((state, delta) => {
    t.current += delta;
    const { camera, pointer } = state;

    const el = scrollRef?.current;
    let s = 0;
    if (el) {
      const max = Math.max(1, el.scrollHeight - el.clientHeight);
      s = clamp01(el.scrollTop / max);
    }

    // section theme callback
    const sec = sectionFromScroll(s);
    if (sec !== lastSection.current) {
      lastSection.current = sec;
      onSectionChange?.(sec);
    }

    const target = sampleKeyframes(frames.current, s);

    const px = pointer.x * 0.35;
    const py = pointer.y * 0.22;

    const targetPos = [target.pos[0] + px, target.pos[1] + py, target.pos[2]];
    const targetLook = [target.look[0], target.look[1], target.look[2]];

    targetPos[2] += Math.sin(t.current * 0.25) * 0.10;

    lerpVec3(smoothPos.current, smoothPos.current, targetPos, 0.05);
    lerpVec3(smoothLook.current, smoothLook.current, targetLook, 0.05);

    camera.position.set(smoothPos.current[0], smoothPos.current[1], smoothPos.current[2]);
    camera.lookAt(smoothLook.current[0], smoothLook.current[1], smoothLook.current[2]);
  });

  return null;
}
