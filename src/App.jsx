import { useCallback, useEffect, useRef, useState } from "react";
import Scene from "./components/Scene";
import Overlay from "./components/Overlay";
import { PROJECTS } from "./data/projects";
import LoaderScreen from "./components/LoaderScreen";

export default function App() {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const [warp, setWarp] = useState(0);
  const triggerWarp = useCallback(() => {
    setWarp(1);
    window.setTimeout(() => setWarp(0), 380);
  }, []);

  const [section, setSection] = useState("hero");
  const [quality, setQuality] = useState("high");

  // loader
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 900);
    return () => clearTimeout(t);
  }, []);

  const scrollToId = useCallback(
    (id) => {
      const el = scrollRef.current;
      if (!el) return;
      const target = el.querySelector(`#${id}`);
      if (!target) return;
      triggerWarp();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [triggerWarp]
  );

  return (
    <div className="app">
      <LoaderScreen isDone={ready} />

      <Scene
        scrollRef={scrollRef}
        projects={PROJECTS}
        onSelectProject={setSelectedProject}
        warp={warp}
        section={section}
        quality={quality}
        onSectionChange={(sec) => setSection(sec)}
        ready={ready}
      />

      <Overlay
        ref={scrollRef}
        projects={PROJECTS}
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        onNav={(id) => scrollToId(id)}
        quality={quality}
        onToggleQuality={() => setQuality((q) => (q === "high" ? "low" : "high"))}
        section={section}
      />
    </div>
  );
}
