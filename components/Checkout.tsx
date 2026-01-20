
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          쇼핑으로 돌아가기
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Form */}
          <div>
            <h1 className="text-4xl font-serif text-[#2C2A26] mb-4">결제하기</h1>
            <p className="text-sm text-[#5D5A53] mb-12">현재 시뮬레이션 모드입니다. 실제 결제는 이루어지지 않습니다.</p>

            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">연락처 및 배송</h2>
                <div className="space-y-4">
                  <input type="email" placeholder="이메일 주소" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">배송지 주소</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="성" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                    <input type="text" placeholder="이름" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                  </div>
                  <input type="text" placeholder="주소" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                  <input type="text" placeholder="상세주소 (선택사항)" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="도시" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                    <input type="text" placeholder="우편번호" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                  </div>
                </div>
              </div>

              {/* Section 3: Payment (Mock) */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">결제 수단</h2>
                <div className="p-6 border border-[#D6D1C7] bg-white/50 space-y-4">
                  <p className="text-sm text-[#5D5A53] mb-2">모든 트랜잭션은 안전하게 암호화됩니다.</p>
                  <input type="text" placeholder="카드 번호" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="유효기간 (MM/YY)" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                    <input type="text" placeholder="보안 코드" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                  </div>
                </div>
              </div>

              <div>
                <button
                  disabled
                  className="w-full py-5 bg-[#2C2A26]/80 text-[#F5F2EB] uppercase tracking-widest text-sm font-medium cursor-not-allowed"
                >
                  결제하기 — ₩{total.toLocaleString()}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#D6D1C7]">
            <h2 className="text-xl font-serif text-[#2C2A26] mb-8">주문 요약</h2>

            <div className="space-y-6 mb-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-16 h-16 bg-[#EBE7DE] relative">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2C2A26] text-white text-[10px] flex items-center justify-center rounded-full">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[#2C2A26] text-base">{item.name}</h3>
                    <p className="text-xs text-[#A8A29E]">{item.category}</p>
                  </div>
                  <span className="text-sm text-[#5D5A53]">₩{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#D6D1C7] pt-6 space-y-2">
              <div className="flex justify-between text-sm text-[#5D5A53]">
                <span>소계</span>
                <span>₩{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-[#5D5A53]">
                <span>배송비</span>
                <span>무료</span>
              </div>
            </div>

            <div className="border-t border-[#D6D1C7] mt-6 pt-6">
              <div className="flex justify-between items-center">
                <span className="font-serif text-xl text-[#2C2A26]">총 결제 금액</span>
                <div className="flex items-end gap-2">
                  <span className="text-xs text-[#A8A29E] mb-1">KRW</span>
                  <span className="font-serif text-2xl text-[#2C2A26]">₩{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;