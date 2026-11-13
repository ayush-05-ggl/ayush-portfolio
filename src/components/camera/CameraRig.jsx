
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const clamp01 = (v) =>
  Math.min(1, Math.max(0, v));

function sampleKeyframes(frames, t) {
  t = clamp01(t);

  for (let i = 0; i < frames.length - 1; i++) {
    const a = frames[i];
    const b = frames[i + 1];

    if (t >= a.t && t <= b.t) {
      const local =
        (t - a.t) / Math.max(1e-6, b.t - a.t);

      return {
        pos: a.pos.map((v, index) =>
          THREE.MathUtils.lerp(v, b.pos[index], local)
        ),
        look: a.look.map((v, index) =>
          THREE.MathUtils.lerp(v, b.look[index], local)
        ),
      };
    }
  }

  return frames[frames.length - 1];
}

function sectionFromScroll(s) {
  if (s < 0.20) return "hero";
  if (s < 0.48) return "about";
  if (s < 0.82) return "projects";
  return "contact";
}

export default function CameraRig({
  scrollRef,
  onSectionChange,
}) {
  const time = useRef(0);
  const reducedMotion = useRef(false);
  const smoothPos = useRef(
    new THREE.Vector3(0, 0.5, 5)
  );
  const smoothLook = useRef(
    new THREE.Vector3(0, 0.15, 0)
  );
  const lastSection = useRef("hero");

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      reducedMotion.current = media.matches;
    };

    update();
    media.addEventListener("change", update);

    return () =>
      media.removeEventListener("change", update);
  }, []);

  const frames = useRef([
    {
      t: 0,
      pos: [0, 0.55, 5.2],
      look: [0, 0.15, 0],
    },
    {
      t: 0.33,
      pos: [-0.35, 0.6, 4.7],
      look: [0, 0.2, 0],
    },
    {
      t: 0.66,
      pos: [0.45, 0.4, 4.4],
      look: [0, 0.12, 0],
    },
    {
      t: 1,
      pos: [0, 0.55, 5],
      look: [0, 0.15, 0],
    },
  ]);

  useFrame((state, delta) => {
    time.current += delta;

    const { camera, pointer } = state;

    const el = scrollRef?.current;

    let scroll = 0;

    if (el) {
      const max = Math.max(
        1,
        el.scrollHeight - el.clientHeight
      );

      scroll = clamp01(el.scrollTop / max);
    }

    const section = sectionFromScroll(scroll);

    if (section !== lastSection.current) {
      lastSection.current = section;
      onSectionChange?.(section);
    }

    const target = sampleKeyframes(
      frames.current,
      scroll
    );

    const motion = !reducedMotion.current;

    const px = motion ? pointer.x * 0.12 : 0;
    const py = motion ? pointer.y * 0.08 : 0;

    const float = motion
      ? Math.sin(time.current * 0.18) * 0.035
      : 0;

    const targetPos = new THREE.Vector3(
      target.pos[0] + px,
      target.pos[1] + py,
      target.pos[2] + float
    );

    const targetLook = new THREE.Vector3(
      ...target.look
    );

    const smoothing = 1 - Math.exp(-3 * delta);

    smoothPos.current.lerp(
      targetPos,
      smoothing
    );

    smoothLook.current.lerp(
      targetLook,
      smoothing
    );

    camera.position.copy(smoothPos.current);
    camera.lookAt(smoothLook.current);
  });

  return null;
}
