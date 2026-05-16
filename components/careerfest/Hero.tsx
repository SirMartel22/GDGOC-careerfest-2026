"use client";

import { motion } from "framer-motion";
import Matter from "matter-js";
import { useEffect, useRef } from "react";

const GOOGLE_COLORS = [
  { bg: "#4285F4", text: "#FFFFFF" }, // Blue [cite: 40]
  { bg: "#34A853", text: "#FFFFFF" }, // Green [cite: 38]
  { bg: "#FAAB00", text: "#1E1E1E" }, // Yellow [cite: 39]
  { bg: "#EA4336", text: "#FFFFFF" }, // Red [cite: 43]
  { bg: "#F5F5F5", text: "#1E1E1E" }, // White [cite: 42]
];

// Content tags
const TAGS = [
  "Developers", "Designers", "Creators", "Writers", "Storytellers",
  "CV Review", "Mock Interviews", "Portfolio", "Workshops", "Visibility", 
  "Techies", "Cloud", "AI/ML", "Web", "Mobile", "GDG-OC"
];

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!sceneRef.current || !canvasRef.current) return;

    const container = sceneRef.current;
    const canvas = canvasRef.current;
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create({ gravity: { y: 0.8 } });
    const world = engine.world;

    const width = container.clientWidth;
    const height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: width,
        height: height,
        background: "transparent",
        wireframes: false
      }
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const floor = Bodies.rectangle(width / 2, height + 30, width * 2, 60, { isStatic: true });
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 2, { isStatic: true });
    
    Composite.add(world, [floor, leftWall, rightWall]);

    const pillBodies = TAGS.map((text, idx) => {
      const colorScheme = GOOGLE_COLORS[idx % GOOGLE_COLORS.length];
      const x = Math.random() * (width - 200) + 100;
      const y = Math.random() * -400 - 50;

      const pillWidth = text.length * 9 + 35;
      const pillHeight = 40;
      const radius = pillHeight / 2;

      return Bodies.rectangle(x, y, pillWidth, pillHeight, {
        chamfer: { radius: radius },
        restitution: 0.5,
        friction: 0.1,
        render: {
          fillStyle: colorScheme.bg,
          strokeStyle: "#1E1E1E",
          lineWidth: 2,
          // @ts-ignore
          textConfig: { text: text, color: colorScheme.text }
        }
      });
    });

    Composite.add(world, pillBodies);

    Matter.Events.on(render, "afterRender", () => {
      const context = canvas.getContext("2d");
      if (!context) return;

      // Dynamically rendering canvas text using the layout's Outfit font style
      context.font = "600 14px var(--font-outfit), sans-serif";
      context.textAlign = "center";
      context.textBaseline = "middle";

      const bodies = Composite.allBodies(world);
      bodies.forEach((body) => {
        // @ts-ignore
        if (body.render && body.render.textConfig) {
          context.save();
          context.translate(body.position.x, body.position.y);
          context.rotate(body.angle);
          // @ts-ignore
          const config = body.render.textConfig;
          context.fillStyle = config.color;
          context.fillText(config.text, 0, 0);
          context.restore();
        }
      });
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <section 
      ref={sceneRef} 
      className="relative w-full h-[85vh] min-h-[550px] bg-[#F5F5F5] overflow-hidden flex flex-col items-center justify-center border-b-4 border-[#1E1E1E] px-4 select-none"
    >
      {/* Physics Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 pointer-events-auto" />

      {/* Hero Content Block */}
      <div className="relative z-0 text-center max-w-4xl flex flex-col items-center pointer-events-none px-4">
        
        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 py-1.5 rounded-full border-2 border-[#1E1E1E] bg-[#FAAB00] text-[#1E1E1E] font-medium text-xs md:text-sm uppercase tracking-wider mb-6 shadow-[3px_3px_0px_0px_#1E1E1E] font-[family-name:var(--font-outfit)]"
        >
          JUNE 15, 2026 • MAIN CAREERFEST DAY
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-normal text-[#1E1E1E] uppercase tracking-tight leading-none font-anton mb-6"
        >
          CAREER<span className="text-[#EA4336]">FEST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-xl text-[#1E1E1E]/80 max-w-2xl font-outfit font-light leading-relaxed px-2"
        >
          No more long talks. No more passive sessions. A practical student-focused experience designed to help you build skills, improve visibility, and become opportunity-ready. 
        </motion.p>
      </div>
    </section>
  );
}