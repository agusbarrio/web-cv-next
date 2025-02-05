"use client";
import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        videoElement.currentTime = 0;
        videoElement.play().catch(console.error);
      }
    };

    // Reproducir inicialmente
    videoElement.currentTime = 0;
    videoElement.play().catch(console.error);

    // Escuchar cuando el usuario vuelve a la página
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="scroll-m-10 w-full h-screen">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      >
        <source
          src="/movil-video.mp4"
          media="(max-width: 768px)"
          type="video/mp4"
        />
        <source src="/video.mp4" media="(min-width: 769px)" type="video/mp4" />
      </video>
    </section>
  );
}
