import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "transparent"
          },

          particles: {
            number: { value: 90 },

            color: { value: "#22d3ee" },

            links: {
              enable: true,
              distance: 150,
              color: "#22d3ee",
              opacity: 0.5
            },

            move: {
              enable: true,
              speed: 1.5
            },

            size: {
              value: 2
            }
          }
        }}
      />
    </div>
  );
}