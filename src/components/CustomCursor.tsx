import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.08;
      followerY += (mouseY - followerY) * 0.08;
      follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      follower.style.width = "60px";
      follower.style.height = "60px";
      follower.style.borderColor = "hsl(0 0% 92% / 0.4)";
    };

    const onMouseLeaveInteractive = () => {
      follower.style.width = "40px";
      follower.style.height = "40px";
      follower.style.borderColor = "hsl(0 0% 92% / 0.15)";
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    const interactives = document.querySelectorAll("a, button, [data-magnetic]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-glow rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{ transition: "width 0.2s, height 0.2s" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-glow/15 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{ transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease" }}
      />
    </>
  );
};

export default CustomCursor;
