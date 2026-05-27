export default function HeroVideoSection() {
  return (
    <section className="relative bg-[#F6F1E8] py-6 md:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {/* Video Container */}
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[40px] border border-gray-200 bg-black">
          
          {/* Video */}
          <video
            className="w-full h-auto"
            src="src\assets\video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

        
        </div>
      </div>

      <style jsx>{`
        video {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 1920 / 1440;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          video {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}