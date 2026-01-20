/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '시그니처 토트백',
    tagline: '시간이 흐를수록 깊어지는 가치.',
    description: '최고급 베지터블 가죽으로 제작된 시그니처 토트백입니다. 수작업 스티치가 돋보이는 미니멀한 디자인입니다.',
    longDescription: '시아 스튜디오의 철학이 가장 잘 담긴 제품입니다. 이탈리아산 최고급 베지터블 가죽을 사용하여 제작되었으며, 모든 공정은 한 사람의 장인에 의해 수작업으로 이루어집니다. 사용할수록 사용자의 습관에 따라 에이징되며, 오직 당신만의 색깔로 변해가는 과정을 경험해보세요.',
    price: 385000,
    category: 'Bags',
    imageUrl: '/products/signature_tote_model_v2_ko_1768816345208.png',
    gallery: [
      '/products/signature_tote_model_v2_ko_1768816345208.png'
    ],
    features: ['100% 핸드메이드', '이탈리아 베지터블 가죽', '황동 하드웨어']
  },
  {
    id: 'p2',
    name: '클래식 미니 파우치',
    tagline: '단순함 속에 담긴 완벽함.',
    description: '간결한 라인과 부드러운 촉감이 특징인 미니 파우치입니다. 일상의 소지품을 우아하게 보관하세요.',
    longDescription: '불필요한 장식을 배제하고 가죽 본연의 아름다움에 집중했습니다. 한 손에 쏙 들어오는 크기로, 립스틱이나 에어팟 등 작은 소지품들을 수납하기에 적합합니다. 내구성이 뛰어난 프렌치 카프스킨을 사용하여 오랫동안 형태를 유지합니다.',
    price: 125000,
    category: 'Small Goods',
    imageUrl: '/products/mini_pouch_model_v2_ko_1768816369379.png',
    gallery: [
      '/products/mini_pouch_model_v2_ko_1768816369379.png'
    ],
    features: ['프렌치 카프스킨', 'YKK 엑셀라 지퍼', '린넨 스티치']
  },
  {
    id: 'p3',
    name: '아티잔 카드 월렛',
    tagline: '손끝에서 느껴지는 정성.',
    description: '전통적인 손바느질 기법인 새들 스티치로 제작된 카드 지갑입니다. 견고함과 아름다움을 동시에 갖추었습니다.',
    longDescription: '새들 스티치(Saddle Stitch)는 기계로는 흉내 낼 수 없는 견고함을 제공합니다. 실 하나가 끊어져도 풀리지 않는 이 기법은 평생을 함께할 수 있는 제품을 만듭니다. 4개의 카드 슬롯과 중앙의 지폐 수납함으로 구성되어 실용적입니다.',
    price: 89000,
    category: 'Wallets',
    imageUrl: '/products/card_wallet_model_v2_ko_1768816396333.png',
    gallery: [
      '/products/card_wallet_model_v2_ko_1768816396333.png'
    ],
    features: ['무첨가 베지터블 가죽', '핸드 새들 스티치', '엣지 코트 마감']
  },
  {
    id: 'p4',
    name: '데일리 숄더백',
    tagline: '매일의 일상을 특별하게.',
    description: '넉넉한 수납공간과 편안한 착용감을 선사하는 숄더백입니다. 자연스러운 실루엣이 매력적입니다.',
    longDescription: '부드러운 슈렁큰 가죽을 사용하여 자연스럽게 처지는 실루엣이 멋스러운 제품입니다. 어깨에 닿는 스트랩의 너비를 조절하여 장시간 착용해도 피로감이 적습니다. 내벽에는 지퍼 포켓이 있어 중요한 소지품을 안전하게 보관할 수 있습니다.',
    price: 450000,
    category: 'Bags',
    imageUrl: '/products/shoulder_bag_model_v2_ko_1768816423628.png',
    gallery: [
      '/products/shoulder_bag_model_v2_ko_1768816423628.png'
    ],
    features: ['고급 슈렁큰 가죽', '길이 조절 스트랩', '스웨이드 안감']
  },
  {
    id: 'p5',
    name: '오브제 다이어리 커버',
    tagline: '기록하는 즐거움.',
    description: '소중한 기록을 감싸주는 우아한 가죽 커버입니다. 당신의 시간이 기록될수록 가죽도 함께 성숙해집니다.',
    longDescription: 'A5 사이즈의 노트를 수납할 수 있는 가죽 커버입니다. 펜 홀더와 명함 슬롯이 포함되어 있어 비즈니스 미팅이나 개인적인 기록 시 유용합니다. 가죽 표면의 자연스러운 주름과 상처는 살아있는 유기체였을 때의 흔적으로, 각 제품마다 고유한 패턴을 가집니다.',
    price: 158000,
    category: 'Office',
    imageUrl: '/products/diary_cover_model_v2_ko_1768816450614.png',
    gallery: [
      '/products/diary_cover_model_v2_ko_1768816450614.png'
    ],
    features: ['헤리티지 레더', '펜 홀더 포함', '이니셜 각인 가능']
  },
  {
    id: 'p6',
    name: '미니멀 클러치',
    tagline: '절제된 세련미.',
    description: '이브닝 룩이나 가벼운 외출 시 포인트가 되는 클러치입니다. 깔끔한 마감이 돋보입니다.',
    longDescription: '가죽 한 장을 접어 만든 듯한 구조적인 디자인의 클러치입니다. 자석 잠금 방식을 채택하여 외관이 매우 깔끔하며, 내부에는 카드 슬롯 2개가 배치되어 있습니다. 부드러운 나파 가죽의 촉감이 손에 닿을 때마다 기분 좋은 경험을 선사합니다.',
    price: 195000,
    category: 'Bags',
    imageUrl: '/products/clutch_model_v2_ko_1768816475981.png',
    gallery: [
      '/products/clutch_model_v2_ko_1768816475981.png'
    ],
    features: ['이탈리안 나파 가죽', '마그네틱 클로저', '슬림 디자인']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: "가죽, 시간의 기록",
    date: "2025년 4월 12일",
    excerpt: "우리가 천연 가죽의 '에이징'을 사랑하는 이유에 대하여.",
    image: "/model_photos/modes (2).png",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
        "가죽은 살아있는 소재입니다. 공장에서 찍어내는 인조 소재와 달리, 천연 가죽은 주변의 온도, 습도, 그리고 사용자의 손길을 기억합니다. 세월이 흐를수록 색이 짙어지고 광택이 살아나는 '에이징' 과정은 가죽 제품을 사용하는 가장 큰 즐거움 중 하나입니다."
      ),
      React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
        "시아 스튜디오는 이 '변화'의 가치를 믿습니다. 처음의 빳빳함이 부드러움으로 변하고, 밝았던 베이지가 깊은 브라운으로 변해가는 과정은 제품이 단순한 물건을 넘어 사용자의 삶의 일부가 되어가는 과정입니다."
      ),
      React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
        "\"오래될수록 아름다워지는 것, 그것이 진정한 럭셔리입니다.\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "우리는 느리지만 정직한 공정을 선택합니다. 한 땀 한 땀 정성을 들인 바느질과 수십 번의 엣지 코트 작업은 시간의 흐름 속에서도 제품의 견고함을 지켜줄 것입니다."
      )
    )
  },
  {
    id: 2,
    title: "새들 스티치의 미학",
    date: "2025년 3월 28일",
    excerpt: "장인의 손끝에서 탄생하는 가장 견고한 바느질 이야기.",
    image: "/model_photos/modes (3).png",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "새들 스티치는 원래 말을 탈 때 사용하는 안장을 만들던 기법입니다. 두 개의 바늘을 교차시켜 하나의 구멍을 통과시키는 이 방식은 기계 바느질과는 비교할 수 없는 내구성을 자랑합니다."
      ),
      React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
        "\"기계는 일정한 속도를 내지만, 사람의 손은 가죽의 두께와 결에 따라 힘을 조절합니다.\" 장인은 말합니다. 이 미세한 조절이 제품의 실루엣을 결정하고 오래도록 변치 않는 형태를 만듭니다."
      ),
      React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
        React.createElement("p", null, "서두르지 않는 손길"),
        React.createElement("p", null, "가죽을 관통하는 실의 궤적"),
        React.createElement("p", null, "그렇게 완성되는"),
        React.createElement("p", null, "하나뿐인 작품.")
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "시아 스튜디오의 모든 주요 연결 부위는 이 전통적인 새들 스티치로 완성됩니다. 우리는 속도보다 깊이를 선택합니다."
      )
    )
  },
  {
    id: 3,
    title: "아틀리에의 봄",
    date: "2025년 3월 15일",
    excerpt: "새로운 계절, 아침 햇살이 가득한 시아 스튜디오의 풍경.",
    image: "/model_photos/modes (4).png",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "봄의 아침 햇살은 가죽의 질감을 가장 솔직하게 드러냅니다. 창가로 들어오는 부드러운 빛 아래에서 새로운 샘플 작업이 한창입니다. 이번 시즌 우리는 햇살을 머금은 듯한 따뜻한 베이지와 부드러운 크림 톤에 집중하고 있습니다."
      ),
      React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
        "워크숍 곳곳에 놓인 도자기 오브제들과 말린 꽃들이 영감을 더해줍니다. 자연에서 온 소재들은 서로 닮아있어 조화로움을 이룹니다."
      ),
      React.createElement("div", { className: "my-12 p-8 bg-[#2C2A26] text-[#F5F2EB] font-serif italic text-center" },
        React.createElement("p", null, "따뜻한 기운이 내려앉은 가죽"),
        React.createElement("p", null, "차분한 공기"),
        React.createElement("p", null, "다시 시작되는 창작의 시간.")
      )
    )
  }
];

export const BRAND_NAME = 'Sia Studio';
export const PRIMARY_COLOR = 'stone-900';
export const ACCENT_COLOR = 'stone-500';

export const COMPANY_INFO = {
  name: '시아가죽공방',
  owner: '성혜현',
  address: '연제구 월드컵대로188번길 10, 2층 (거제지하철역 2번출구)',
  phone: '010-9363-8990',
  email: 'kchbh@naver.com',
  kakao: 'siastudio',
  businessLicense: '515-35-90175',
  onlineLicense: '신고면제',
  sns: {
    instagram: 'https://www.instagram.com/sia_leather_studio',
    youtube: 'https://www.youtube.com',
    blog: 'https://blog.naver.com/kchbh'
  }
};