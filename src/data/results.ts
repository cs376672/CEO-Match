import { ResultType, Scores } from '../types';

export const resultsData: Record<string, ResultType> = {
  IDEA_BANK: {
    id: 'IDEA_BANK',
    title: '방구석 아이디어 뱅크',
    subtitle: '노트북 하나면 우주도 정복 가능!',
    description: '혼자만의 공간에서 엄청난 가치를 창출하는 타입입니다. 초기 자본 없이도 무궁무진한 아이디어와 기획력으로 승부할 수 있습니다.',
    recommendedBusiness: ['지식창업', '전자책 출판', '콘텐츠 크리에이터', 'SaaS 개발'],
    strengths: ['초기 리스크가 거의 없음', '시공간의 제약이 없음', '높은 마진율'],
    weaknesses: ['초기 수익 창출까지 시간이 걸림', '자기 통제력이 매우 중요함'],
    matchCombination: [],
  },
  INFLUENCER: {
    id: 'INFLUENCER',
    title: '트렌드 세터 인플루언서',
    subtitle: '내가 곧 브랜드이자 마케팅!',
    description: '사람들의 시선을 끌고 트렌드를 선도하는 능력이 탁월합니다. 본인의 감각을 믿고 소셜 미디어를 활용해 빠르게 시장을 장악해 보세요.',
    recommendedBusiness: ['SNS 마켓', '편집숍 운영', '미디어 커머스', '퍼스널 브랜딩'],
    strengths: ['강력한 팬덤 구축 가능', '유행에 빠르게 탑승하여 단기 수익 창출', '뛰어난 네트워킹'],
    weaknesses: ['트렌드 변화에 민감함', '지속적인 이미지 관리가 필요함'],
    matchCombination: [],
  },
  ANALYST: {
    id: 'ANALYST',
    title: '치밀한 분석가형 CEO',
    subtitle: '데이터는 거짓말을 하지 않는다!',
    description: '감보다는 정확한 수치와 팩트를 기반으로 움직이는 타입입니다. 위험을 최소화하고 안정적이면서도 전문성을 요구하는 사업에 적합합니다.',
    recommendedBusiness: ['전문 컨설팅', '무역 대행', '데이터 분석 서비스', '프리랜서(번역/개발)'],
    strengths: ['리스크 관리에 탁월함', '신뢰도 높은 서비스 제공', '지속 가능한 롱런 비즈니스'],
    weaknesses: ['영업과 마케팅에서 한계를 느낄 수 있음', '과도한 완벽주의로 실행이 늦어질 수 있음'],
    matchCombination: [],
  },
  INNOVATOR: {
    id: 'INNOVATOR',
    title: '대박 아니면 쪽박! 혁신가',
    subtitle: '세상을 바꿀 유니콘은 바로 나!',
    description: '안전한 길보다는 하이리스크 하이리턴을 즐기는 승부사입니다. 뚜렷한 비전과 강력한 실행력으로 거대한 투자를 유치하고 플랫폼을 구축할 수 있습니다.',
    recommendedBusiness: ['IT 플랫폼 스타트업', '기술 벤처 창업', '혁신 제조/유통'],
    strengths: ['폭발적인 스케일업 가능성', '투자 유치를 통한 자본력 확보', '업계의 판도를 바꿀 파급력'],
    weaknesses: ['매우 높은 실패 리스크', '막대한 초기 자본과 시간 소요'],
    matchCombination: [],
  },
  SALON_HOST: {
    id: 'SALON_HOST',
    title: '골목대장 사랑방 주인',
    subtitle: '사람 냄새 나는 따뜻한 공간의 지배자!',
    description: '오프라인 공간에서 사람들과 교류하며 가치를 만드는 것을 좋아합니다. 자신만의 취향과 감성이 담긴 힙한 공간을 운영하는 데 재능이 있습니다.',
    recommendedBusiness: ['독립서점', '감성 카페', '공유 공간(스튜디오/오피스) 운영'],
    strengths: ['단골 고객층 확보 용이', '명확한 컨셉으로 지역 핫플 등극', '높은 직업 만족도'],
    weaknesses: ['입지 조건에 크게 좌우됨', '오프라인 매장 관리의 피로도'],
    matchCombination: [],
  },
  SYSTEM_BUILDER: {
    id: 'SYSTEM_BUILDER',
    title: '안정제일 시스템 빌더',
    subtitle: '자본주의 시스템의 수혜자!',
    description: '본인이 직접 뛰기보다는 돈과 시스템이 일하게 만드는 것을 선호합니다. 검증된 모델을 도입하여 안정적인 현금 흐름을 창출하는 데 탁월합니다.',
    recommendedBusiness: ['무인 점포', '검증된 프랜차이즈 운영', '부동산 임대업'],
    strengths: ['검증된 모델로 리스크 최소화', '초기 세팅 후 시간적 자유 확보', '예측 가능한 수익'],
    weaknesses: ['비교적 높은 초기 자본 필요', '브랜드 본사의 방침에 의존적일 수 있음'],
    matchCombination: [],
  }
};

export const calculateResult = (scores: Scores): ResultType => {
  const M = scores.M > 0 ? '+' : '-';
  const S = scores.S > 0 ? '+' : '-';
  const R = scores.R > 0 ? '+' : '-';
  const T = scores.T > 0 ? '+' : '-';
  
  const combo = `${M}${S}${R}${T}`;

  // Mapping logic based on implementation plan
  if (combo === '++++' || combo === '+++-' || combo === '+-++' || combo === '+-+-') return resultsData.INNOVATOR;
  if (combo === '++-+' || combo === '-+-+') return resultsData.SALON_HOST;
  if (combo === '++--' || combo === '+--+' || combo === '+---') return resultsData.SYSTEM_BUILDER;
  if (combo === '-+++' || combo === '-++-') return resultsData.INFLUENCER;
  if (combo === '--++' || combo === '--+-' || combo === '---+') return resultsData.IDEA_BANK;
  if (combo === '-+--' || combo === '----') return resultsData.ANALYST;

  // Fallback
  return resultsData.IDEA_BANK;
};
