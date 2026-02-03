import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import { useTexture } from "@react-three/drei";

const FALLBACK_TEX =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+XrAAAAABJRU5ErkJggg==";

const clamp01 = (v) => Math.min(1, Math.max(0, v));

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function ProjectsPanels({ scrollRef, projects, onSelect }) {
  const group = useRef();
  const [hovered, setHovered] = useState(null);

  // Layout: 3 panels in a row, slightly arced
  const layout = useMemo(() => {
    const spacing = 2.15;
    return projects.map((p, i) => {
      const x = (i - (projects.length - 1) / 2) * spacing;
      const y = -1.15;
      const z = 0.7 + Math.abs(i - 1) * -0.25; // slight depth
      const ry = (i - 1) * 0.18;
      return { id: p.id, x, y, z, ry };
    });
  }, [projects]);

  useFrame((state, delta) => {
    // Fade panels in around the Projects section (roughly mid scroll)
    const el = scrollRef?.current;
    let s = 0;
    if (el) {
      const max = Math.max(1, el.scrollHeight - el.clientHeight);
      s = clamp01(el.scrollTop / max);
    }

    // Visible mainly around projects section
    // Tune these if you want: startFade/endFade define where it appears
    const startFade = 0.40;
    const endFade = 0.82;

    let t = (s - startFade) / Math.max(1e-6, endFade - startFade);
    t = clamp01(t);
    const vis = easeInOut(t);

    if (group.current) {
      group.current.visible = vis > 0.01;
      group.current.position.y = -0.1 + (1 - vis) * -0.15;
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.06;
      group.current.userData.vis = vis;
    }
  });

  return (
    <group ref={group}>
      {projects.map((p, idx) => (
        <PanelCard
          key={p.id}
          project={p}
          layout={layout[idx]}
          hovered={hovered === p.id}
          setHovered={setHovered}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}

function PanelCard({ project, layout, hovered, setHovered, onSelect }) {
  const ref = useRef();

  // Load thumbnail texture (if missing, it still renders)
  const tex = useTexture(project.thumb || FALLBACK_TEX);

  useFrame(() => {
    if (!ref.current) return;

    const lift = hovered ? 0.16 : 0.0;
    ref.current.position.y += ((layout.y + lift) - ref.current.position.y) * 0.08;

    const targetRotX = hovered ? -0.10 : -0.04;
    const targetRotY = layout.ry + (hovered ? 0.06 : 0.0);

    ref.current.rotation.x += (targetRotX - ref.current.rotation.x) * 0.08;
    ref.current.rotation.y += (targetRotY - ref.current.rotation.y) * 0.08;
  });

  return (
    <group
      ref={ref}
      position={[layout.x, layout.y, layout.z]}
      rotation={[-0.04, layout.ry, 0]}
      onPointerEnter={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
        setHovered(project.id);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "default";
        setHovered(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(project);
      }}
    >
      {/* Glass frame */}
      <RoundedBox args={[1.75, 1.05, 0.06]} radius={0.12} smoothness={8}>
        <meshStandardMaterial transparent opacity={0.20} roughness={0.15} metalness={0.25} />
      </RoundedBox>

      {/* Thumbnail screen */}
      <mesh position={[0, 0.06, 0.055]}>
        <planeGeometry args={[1.62, 0.62]} />
        <meshBasicMaterial map={tex} transparent opacity={hovered ? 0.95 : 0.85} />
      </mesh>

      {/* Text strip */}
      <mesh position={[0, -0.30, 0.055]}>
        <planeGeometry args={[1.62, 0.30]} />
        <meshBasicMaterial transparent opacity={hovered ? 0.20 : 0.14} />
      </mesh>

      <Text position={[-0.76, -0.24, 0.06]} fontSize={0.10} anchorX="left" anchorY="middle">
        {project.title}
      </Text>

      <Text position={[-0.76, -0.38, 0.06]} fontSize={0.075} anchorX="left" anchorY="middle">
        {project.tag}
      </Text>

      <Text position={[0.64, -0.42, 0.06]} fontSize={0.07} anchorX="right">
        Click →
      </Text>

      {/* Subtle glow */}
      <mesh position={[0, 0, -0.04]}>
        <planeGeometry args={[1.85, 1.15]} />
        <meshBasicMaterial transparent opacity={hovered ? 0.10 : 0.06} />
      </mesh>
    </group>
  );
}
