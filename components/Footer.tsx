/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BRAND_NAME, COMPANY_INFO } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2A26] text-[#D6D1C7] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <a
              href="#"
              onClick={(e) => onLinkClick(e, '')}
              className="text-3xl font-serif text-[#F5F2EB] block mb-6"
            >
              {BRAND_NAME}
            </a>
            <p className="text-sm text-[#A8A29E] leading-relaxed max-w-sm mb-6">
              손끝에서 탄생하는 시간의 예술.<br />
              이탈리안 베지터블 태닝 가죽으로 빚어낸
              세상에 단 하나뿐인 당신의 오브제.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.sns.instagram} target="_blank" rel="noopener noreferrer" className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href={COMPANY_INFO.sns.youtube} target="_blank" rel="noopener noreferrer" className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href={COMPANY_INFO.sns.blog} target="_blank" rel="noopener noreferrer" className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors" aria-label="Naver Blog">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" /></svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#F5F2EB] mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="text-sm text-[#A8A29E] hover:text-[#F5F2EB] transition-colors">전체 제품</a></li>
              <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="text-sm text-[#A8A29E] hover:text-[#F5F2EB] transition-colors">크로스백</a></li>
              <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="text-sm text-[#A8A29E] hover:text-[#F5F2EB] transition-colors">토트백</a></li>
              <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="text-sm text-[#A8A29E] hover:text-[#F5F2EB] transition-colors">맞춤 제작</a></li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#F5F2EB] mb-6">Info</h3>
            <ul className="space-y-3">
              <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="text-sm text-[#A8A29E] hover:text-[#F5F2EB] transition-colors">공방 소개</a></li>
              <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="text-sm text-[#A8A29E] hover:text-[#F5F2EB] transition-colors">저널</a></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#F5F2EB] transition-colors">배송 안내</a></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#F5F2EB] transition-colors">교환 · 반품</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-[#3D3A36] pt-8 mb-8">
          <div className="text-sm text-[#A8A29E] space-y-2 font-light">
            <div className="flex flex-wrap gap-x-6">
              <span>상호 : {COMPANY_INFO.name}</span>
              <span>대표 : {COMPANY_INFO.owner}</span>
            </div>
            <div>주소 : {COMPANY_INFO.address}</div>
            <div className="flex flex-wrap gap-x-6">
              <span>전화 : {COMPANY_INFO.phone}</span>
              <span>메일 : {COMPANY_INFO.email}</span>
              <span>카카오톡 : {COMPANY_INFO.kakao}</span>
            </div>
            <div className="flex flex-wrap gap-x-6">
              <span>사업자번호 : {COMPANY_INFO.businessLicense}</span>
              <span>통신판매번호 : {COMPANY_INFO.onlineLicense}</span>
            </div>
            <div className="pt-2">
              <a href="#" className="hover:text-[#F5F2EB] transition-colors">이용약관 : 이용약관 보기▶</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3D3A36] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#78716c]">
          <p>© {currentYear} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#A8A29E] transition-colors">이용약관</a>
            <a href="#" className="hover:text-[#A8A29E] transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-[#A8A29E] transition-colors">사업자정보</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
