export default function HeroVideo({ className }: { className?: string }) {
  return (
    <section className={`scroll-m-10 w-full h-screen ${className}`}>
      <video
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
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
