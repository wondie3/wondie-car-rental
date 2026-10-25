
"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

type CarVisualProps = {
  wheelRotation?: MotionValue<number>;
  className?: string;
};

function Wheel({
  cx,
  cy,
  rotate,
}: {
  cx: number;
  cy: number;
  rotate: MotionValue<number>;
}) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <circle r="47" fill="#070707" stroke="#2a2a2a" strokeWidth="2" />
      <motion.g style={{ rotate }}>
        <circle r="31" fill="url(#rimGold)" />
        {[0, 72, 144, 216, 288].map((a) => (
          <rect
            key={a}
            x="-3.5"
            y="-29"
            width="7"
            height="22"
            rx="3"
            fill="#0a0a0a"
            transform={`rotate(${a})`}
          />
        ))}
        <circle
          r="8"
          fill="#0a0a0a"
          stroke="#f5b700"
          strokeWidth="1.5"
        />
      </motion.g>
    </g>
  );
}

export default function CarVisual({
  wheelRotation,
  className = "",
}: CarVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const idleSpin = useMotionValue(0);
  const spin = wheelRotation ?? idleSpin;

  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-14, 14]),
    { stiffness: 110, damping: 18 }
  );

  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [8, -8]),
    { stiffness: 110, damping: 18 }
  );

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative ${className}`}
      style={{ perspective: 1200 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, x: 80, scale: 0.92 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        <svg
          viewBox="0 0 800 330"
          role="img"
          aria-label="Stylized luxury coupe in black and gold"
          className="relative w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)]"
        >
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3a3a3a" />
              <stop offset="0.45" stopColor="#161616" />
              <stop offset="1" stopColor="#060606" />
            </linearGradient>

            <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#4a4a4a" />
              <stop offset="0.6" stopColor="#0d0d0d" />
              <stop offset="1" stopColor="#2a2210" />
            </linearGradient>

            <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#b98600" stopOpacity="0" />
              <stop offset="0.3" stopColor="#f5b700" />
              <stop offset="0.8" stopColor="#ffd54a" />
              <stop offset="1" stopColor="#f5b700" stopOpacity="0.2" />
            </linearGradient>

            <radialGradient id="rimGold" cx="0.35" cy="0.3" r="0.9">
              <stop offset="0" stopColor="#ffe08a" />
              <stop offset="0.6" stopColor="#f5b700" />
              <stop offset="1" stopColor="#8a6200" />
            </radialGradient>

            <radialGradient id="groundShadow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#000" stopOpacity="0.75" />
              <stop offset="1" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse
            cx="400"
            cy="288"
            rx="360"
            ry="22"
            fill="url(#groundShadow)"
          />

          <path
            d="M40 236 L40 216 C40 200 62 192 110 186 L222 162 C262 120 318 98 396 96 C470 94 530 108 572 140 L650 160 C720 172 764 192 768 216 L768 236 Z"
            fill="url(#bodyGrad)"
            stroke="#2f2f2f"
            strokeWidth="1.5"
          />

          <path
            d="M262 162 C292 130 338 114 396 113 C450 112 494 122 528 146 L538 162 Z"
            fill="url(#glassGrad)"
            stroke="#333"
            strokeWidth="1"
          />

          <path
            d="M398 113 L394 200"
            stroke="#ffffff"
            strokeOpacity="0.12"
          />

          <path
            d="M262 162 L538 162 L560 200"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.08"
          />

          <path
            d="M296 128 C330 108 380 100 430 102"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.28"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M58 204 C200 196 560 194 756 212"
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path d="M704 192 L758 204 L752 211 L698 201 Z" fill="#ffd54a" />
          <path
            d="M704 192 L758 204 L752 211 L698 201 Z"
            fill="#fff"
            opacity="0.35"
          />

          <rect x="40" y="206" width="16" height="7" rx="3" fill="#e5392b" />

          <path
            d="M120 232 L690 232"
            stroke="#f5b700"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />

          <circle cx="200" cy="236" r="58" fill="#050505" />
          <circle cx="600" cy="236" r="58" fill="#050505" />

          <Wheel cx={200} cy={236} rotate={spin} />
          <Wheel cx={600} cy={236} rotate={spin} />
        </svg>
      </motion.div>
    </div>
  );
}
