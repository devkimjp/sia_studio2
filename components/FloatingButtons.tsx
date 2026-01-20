import React from 'react';
import { COMPANY_INFO } from '../constants';

const FloatingButtons: React.FC = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            {/* Naver Reservation */}
            <a
                href="https://booking.naver.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-[#03C75A] shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
                aria-label="네이버 예약하기"
            >
                <span className="absolute right-full mr-3 bg-white text-[#2C2A26] text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    네이버 예약
                </span>
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
            </a>

            {/* Kakao Contact */}
            <a
                href={`https://pf.kakao.com/${COMPANY_INFO.kakao}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-[#FEE500] shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
                aria-label="카카오톡 상담하기"
            >
                <span className="absolute right-full mr-3 bg-white text-[#2C2A26] text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    카카오톡 상담
                </span>
                <svg className="w-7 h-7 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.122.49.178.483.376.351.155-.103 2.466-1.675 3.464-2.353.541.08 1.1.123 1.67.123 4.97 0 9-3.185 9-7.115S16.97 3 12 3z" />
                </svg>
            </a>
        </div>
    );
};

export default FloatingButtons;
