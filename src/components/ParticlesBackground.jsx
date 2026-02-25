import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: -1 },

        background: {
          color: "#08294a"
        },

        particles: {
          number: { value: 120 },

          color: { value: "#f122c8" },

          links: {
            enable: true,
            distance: 150,
            color: "#fffeff",
            opacity: 0.5
          },

          move: {
            enable: true,
            speed: 2
          },

          size: {
            value: 2
          }
        }
      }}
      init={particlesInit}
    />
  );
}