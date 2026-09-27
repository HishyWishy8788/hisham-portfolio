import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { site } from "../content/site";
import { RotatingLine } from "./RotatingLine";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Name-first hero. The pointer parallax only runs on devices with a fine
 * pointer and when the user has not asked for reduced motion. It writes two
 * CSS variables on the section; the CSS decides what moves and by how much.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { email, linkedin } = site.links;
  const [first, second] = site.nameLines;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
        frame = 0;
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <section className="hero" ref={ref} aria-labelledby="hero-name">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow" />
        <span className="hero__dot hero__dot--1" />
        <span className="hero__dot hero__dot--2" />
        <span className="hero__dot hero__dot--3" />
      </div>

      <div className="wrap hero__inner">
        <div className="hero__text">
          <p className="eyebrow mono hero__eyebrow">{site.eyebrow}</p>
          <h1 className="hero__name" id="hero-name">
            <span className="hero__name-line">{first}</span>
            <em className="hero__name-line">{second}</em>
          </h1>
          <RotatingLine phrases={site.roles} />
          <p className="hero__tagline">{site.tagline}</p>
          <div className="hero__actions">
            <Link to="/#work" className="button button--primary">
              View work
            </Link>
            <Link to="/#contact" className="button">
              Contact
            </Link>
            {email && (
              <a href={`mailto:${email}`} className="hero__minor mono">
                Email
              </a>
            )}
            {linkedin && (
              <a href={linkedin} rel="me noopener" className="hero__minor mono">
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="hero__portrait" aria-hidden={site.portrait.src ? undefined : true}>
          <div className="orbit orbit--outer" />
          <div className="orbit orbit--inner">
            <span className="orbit__satellite" />
          </div>
          <div className="portrait-frame">
            {site.portrait.src ? (
              <img
                src={site.portrait.src}
                alt={site.portrait.alt}
                width={420}
                height={420}
                loading="eager"
                decoding="async"
              />
            ) : (
              <div className="portrait-placeholder">
                <span className="portrait-placeholder__initials">
                  {first[0]}
                  {second[0]}
                </span>
                <span className="mono">Portrait goes here</span>
              </div>
            )}
          </div>
          {site.orbitTags.map((tag, i) => (
            <span className={`orbit-tag orbit-tag--${i + 1} mono`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
