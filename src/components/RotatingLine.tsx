import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface Props {
  phrases: string[];
  /** Milliseconds each phrase stays on screen. */
  interval?: number;
}

/**
 * Cycles through short phrases with a fade. Under reduced motion it renders
 * all phrases as a static list so nothing is lost.
 */
export function RotatingLine({ phrases, interval = 2800 }: Props) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced || phrases.length < 2) return;
    const timer = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 320);
    }, interval);
    return () => window.clearInterval(timer);
  }, [reduced, phrases.length, interval]);

  if (reduced) {
    return (
      <ul className="roles roles--static">
        {phrases.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="roles" aria-live="polite">
      <span className={`roles__phrase${visible ? " is-visible" : ""}`}>{phrases[index]}</span>
    </p>
  );
}
