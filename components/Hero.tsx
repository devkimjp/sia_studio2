/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#F5F2EB]">
      {/* Background Image - Local Hero Model */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/model_photos/modes (1).png"
          alt="Sia Studio Leather Collection"
          className="w-full h-full object-cover grayscale-[0.2] brightness-[0.95] animate-fade-in"
        />
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2A26]/40 via-transparent to-transparent md:bg-gradient-to-b md:from-transparent md:to-[#2C2A26]/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-24">
        <div className="animate-fade-in-up max-w-2xl">
          <span className="block text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-white/90 mb-6 px-1">
            Handmade Leather Goods
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white tracking-tight mb-8 leading-[0.9]">
            Quiet <span className="italic block md:inline">Luxury.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-12 max-w-md">
            수작업의 정성과 시간이 만들어낸 깊은 가치.<br />
            시아 스튜디오는 당신의 일상에 스며드는 <br />
            아름다운 가죽 오브제를 제안합니다.
          </p>

          <a
            href="#products"
            onClick={(e) => handleNavClick(e, 'products')}
            className="btn-premium inline-block"
          >
            Collection 보기
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
