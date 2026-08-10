export default function HomeSlider() {
  const images = [
    "/slider1.jpeg",
    "/slider2.jpeg",
    // "/slider3.jpeg",
    "/slider4.jpeg",
    // "/slider5.jpeg",
    "/slider6.png",
    "/slider7.png",
    "/slider8.png",
  ];

  return (
    <section className="bg-[#f6f1e8] py-20 md:py-28">
      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-7xl px-5 text-center md:mb-16">
        <span className="mb-4 inline-flex rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-black/55 backdrop-blur">
          Results That Drive Revenue
        </span>

        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl md:text-5xl">
          The systems behind predictable growth.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/50 sm:text-base">
          Systems built to turn better data, smarter workflows, and consistent
          execution into measurable revenue.
        </p>
      </div>

      {/* Slider */}
      <div className="slider-container">
        <div className="slider-track">
          {[...images, ...images].map((image, index) => (
            <div className="slider-card" key={`${image}-${index}`}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .slider-card {
          width: clamp(280px, 60vw, 700px);
          height: clamp(180px, 35vw, 400px);
          border-radius: 24px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          image-rendering: auto;
          backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-user-drag: none;
          user-select: none;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .slider-track {
            gap: 12px;
            animation-duration: 20s;
          }

          .slider-card {
            width: 85vw;
            height: 52vw;
            border-radius: 18px;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1024px) {
          .slider-card {
            width: 70vw;
            height: 42vw;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .slider-card {
            width: 800px;
            height: 450px;
          }
        }
      `}</style>
    </section>
  );
}
