import { useEffect, useRef } from "react";

export default function useAnimateOnScroll(options = {}) {
  const {
    threshold = 0.3,
    once = true,
    root = null,
    rootMargin = "0px",
  } = options;

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove("show");
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, once, root, rootMargin]);

  return ref;
}
