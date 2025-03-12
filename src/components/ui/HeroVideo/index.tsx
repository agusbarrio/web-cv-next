import PageType from "@/data/types/page";

export default function HeroVideo({
  page,
  className,
}: {
  page: PageType;
  className?: string;
}) {
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
          src={page.heroVideoMobile}
          media="(max-width: 768px)"
          type="video/mp4"
        />
        <source
          src={page.heroVideoDesktop}
          media="(min-width: 769px)"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
