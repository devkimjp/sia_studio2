/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Text Content */}
          <div className="space-y-12 animate-fade-in-up">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8A29E] font-medium">The Story</span>
              <h2 className="text-5xl md:text-7xl font-serif text-[#2C2A26] leading-tight">
                Crafted by Hand, <br />
                <span className="italic">Perfected by Time.</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg text-[#5D5A53] font-light leading-relaxed">
              <p>
                시아 스튜디오는 느림의 미학을 믿습니다. 빠르게 변하는 세상 속에서도 변치 않는 가치를 지닌 물건을 만듭니다. 우리는 가죽이라는 유기적인 소재가 가진 무한한 가능성을 탐구하며, 시간이 흐를수록 사용자의 삶이 묻어나는 오브제를 제안합니다.
              </p>
              <p>
                모든 제품은 엄선된 최고급 가죽만을 사용하여 숙련된 장인의 손끝에서 탄생합니다. 기계적인 완벽함보다는 정성이 담긴 불완전함 속의 아름다움을 추구하며, 한 땀 한 땀의 바느질에는 제품을 마주할 당신에 대한 존중이 담겨 있습니다.
              </p>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-12">
                <div>
                  <p className="text-3xl font-serif text-[#2C2A26]">100%</p>
                  <p className="text-xs uppercase tracking-widest text-[#A8A29E] mt-1">Handmade</p>
                </div>
                <div className="w-px h-12 bg-[#D6D1C7]"></div>
                <div>
                  <p className="text-3xl font-serif text-[#2C2A26]">Premium</p>
                  <p className="text-xs uppercase tracking-widest text-[#A8A29E] mt-1">Leather</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Space */}
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden bg-[#F5F2EB]">
              <img
                src="/products/about_craft_model_v2_ko_1768816593989.png"
                alt="Craftsmanship"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
            {/* Absolute Decorative Element */}
            <div className="absolute -bottom-12 -left-12 w-48 h-64 bg-[#EBE7DE] -z-10 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;