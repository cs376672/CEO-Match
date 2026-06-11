import { ResultType, Scores } from '../types';

export const resultsData: Record<string, ResultType> = {
  // ++++ : 자본+ 대면+ 고위험+ 트렌드+
  INNOVATOR_UNICORN: {
    id: 'INNOVATOR_UNICORN',
    title: '글로벌 유니콘의 씨앗, 파괴적 혁신가',
    subtitle: '시장을 파괴하고 새로운 룰을 창조한다!',
    description: '막대한 자본과 강력한 네트워킹을 바탕으로 시장의 판도를 바꾸는 하이 리스크-하이 리턴형 창업가입니다. 트렌드 최전선에서 세상을 바꿀 아이템을 기획합니다.',
    recommendedBusiness: ['대형 플랫폼 창업', '트렌드 리딩 프랜차이즈 기획', '글로벌 IT 벤처'],
    strengths: ['폭발적인 스케일업 가능성', '투자 유치를 통한 자본력 확보', '업계의 판도를 바꿀 파급력'],
    weaknesses: ['매우 높은 실패 리스크', '막대한 초기 자본과 시간 소요'],
    matchCombination: [],
  },
  // +++- : 자본+ 대면+ 고위험+ 스테디-
  EMPIRE_BUILDER: {
    id: 'EMPIRE_BUILDER',
    title: '세력을 키우는 불도저, 제국 건설자',
    subtitle: '유행은 가도 내 왕국은 남는다!',
    description: '유행을 타지 않는 거대한 산업에서 막대한 자본과 영업력으로 승부를 보는 타입입니다. 리스크를 두려워하지 않고 과감하게 밀어붙이는 불도저 같은 추진력이 있습니다.',
    recommendedBusiness: ['대규모 부동산 개발', 'B2B 대형 유통망 구축', '제조업 창업'],
    strengths: ['오래 지속되는 견고한 비즈니스 모델', '강력한 추진력과 조직 장악력'],
    weaknesses: ['초기 투자 비용이 막대함', '보수적인 산업군 특성상 혁신이 어려울 수 있음'],
    matchCombination: [],
  },
  // ++-+ : 자본+ 대면+ 저위험- 트렌드+
  LOCAL_HOTPLACE: {
    id: 'LOCAL_HOTPLACE',
    title: '핫플 제조기, 골목상권 지배자',
    subtitle: '사람들이 줄 서는 공간의 마술사!',
    description: '트렌드를 읽는 감각과 사람을 끌어모으는 매력을 바탕으로, 검증된 모델에 힙한 감성을 한 스푼 더해 대박을 터뜨리는 타입입니다.',
    recommendedBusiness: ['대형 프리미엄 카페', '복합 문화 공간 대관업', '인기 프랜차이즈 메인 가맹점'],
    strengths: ['빠른 초기 고객 확보', '안정적인 오프라인 현금 흐름'],
    weaknesses: ['유행이 변하면 타격을 입을 수 있음', '상권과 입지에 크게 좌우됨'],
    matchCombination: [],
  },
  // ++-- : 자본+ 대면+ 저위험- 스테디-
  SYSTEM_FRANCHISE: {
    id: 'SYSTEM_FRANCHISE',
    title: '안정제일 자본가, 시스템 빌더',
    subtitle: '자본주의 시스템의 진정한 수혜자!',
    description: '리스크를 최소화하며, 돈이 돈을 벌어다 주는 검증된 시스템을 세팅하는 데 탁월합니다. 철저한 매뉴얼과 관리로 안정적인 수익을 창출합니다.',
    recommendedBusiness: ['검증된 대형 프랜차이즈 다점포 운영', '초대형 무인 매장 사업', '상가 임대업'],
    strengths: ['예측 가능한 안정적인 수익률', '시스템 안착 후 높은 시간적 자유'],
    weaknesses: ['막대한 초기 자본 필요', '브랜드 본사나 외부 환경에 의존적일 수 있음'],
    matchCombination: [],
  },
  // +-++ : 자본+ 비대면- 고위험+ 트렌드+
  TECH_DISRUPTOR: {
    id: 'TECH_DISRUPTOR',
    title: '트렌디한 긱(Geek), 기술 기반 파괴자',
    subtitle: '노트북 하나와 자본금으로 시장을 흔든다!',
    description: '대면 영업보다는 기술력과 자본, 그리고 압도적인 트렌드 감각으로 세상을 놀라게 하는 프로덕트를 만들어내는 타입입니다.',
    recommendedBusiness: ['최신 AI/IT 서비스 창업', '글로벌 D2C 브랜드', '트렌디한 모바일 앱/게임'],
    strengths: ['시공간 제약 없는 글로벌 확장성', '고수익 창출 가능성'],
    weaknesses: ['치열한 기술 경쟁', '빠른 트렌드 변화에 적응해야 함'],
    matchCombination: [],
  },
  // +-+- : 자본+ 비대면- 고위험+ 스테디-
  INFRA_INVESTOR: {
    id: 'INFRA_INVESTOR',
    title: '조용한 지배자, 인프라 투자자',
    subtitle: '모두가 금을 캘 때, 나는 곡괭이를 독점한다!',
    description: '드러나지 않는 곳에서 산업의 핵심 인프라나 B2B 솔루션을 장악하여 조용히 막대한 부를 쌓아 올리는 타입입니다.',
    recommendedBusiness: ['B2B 소프트웨어 솔루션(SaaS)', '클라우드/데이터센터 비즈니스', '산업용 장비 대여업'],
    strengths: ['B2B 특성상 한번 계약하면 장기 유지', '압도적인 전문성과 진입장벽'],
    weaknesses: ['초기 시장 진입과 신뢰 구축이 매우 어려움'],
    matchCombination: [],
  },
  // +--+ : 자본+ 비대면- 저위험- 트렌드+
  BRAND_ARTIST: {
    id: 'BRAND_ARTIST',
    title: '자본주의 예술가, 브랜딩 마스터',
    subtitle: '나만의 철학과 감성을 비싸게 팝니다.',
    description: '자본력을 바탕으로 트렌디하고 감각적인 브랜드를 만들어 냅니다. 오프라인 대면 영업보다 압도적인 퀄리티와 온라인 마케팅으로 승부합니다.',
    recommendedBusiness: ['고가 프리미엄 소비재 브랜드', '니치 향수/패션 브랜드', '고급 온라인 편집숍'],
    strengths: ['강력한 브랜드 충성도와 높은 마진율', '감성과 취향의 수익화'],
    weaknesses: ['브랜드 이미지가 훼손되면 큰 타격', '지속적인 크리에이티브 요구됨'],
    matchCombination: [],
  },
  // +--- : 자본+ 비대면- 저위험- 스테디-
  CASHFLOW_MASTER: {
    id: 'CASHFLOW_MASTER',
    title: '현금 흐름의 마술사, 자산 운영자',
    subtitle: '감정 소모 없이 통장 잔고를 불린다!',
    description: '사람을 상대하는 감정 노동 없이, 시스템과 자본의 논리만으로 흔들리지 않는 튼튼한 파이프라인을 구축하는 현실적인 자본가입니다.',
    recommendedBusiness: ['수익형 부동산 임대/투자', '배당주/펀드 전업 투자', '자동화 수익 웹사이트/어플 운영'],
    strengths: ['스트레스가 적고 매우 안정적임', '완벽한 경제적, 시간적 자유 가능'],
    weaknesses: ['자본금이 부족하면 시작하기 어려움', '드라마틱한 성장보다는 점진적 수익'],
    matchCombination: [],
  },
  // -+++ : 소자본- 대면+ 고위험+ 트렌드+
  MEGA_INFLUENCER: {
    id: 'MEGA_INFLUENCER',
    title: '무자본 트렌드 세터, 메가 인플루언서',
    subtitle: '나 자신이 곧 브랜드고 자본이다!',
    description: '초기 자본이 부족해도 본인의 끼와 매력, 네트워킹 능력을 무기 삼아 트렌드를 주도하며 폭발적인 인기를 현금화하는 타입입니다.',
    recommendedBusiness: ['SNS 공동구매/커머스', '유튜브/숏폼 크리에이터', '파티/이벤트 기획자'],
    strengths: ['자본 리스크가 사실상 제로에 가까움', '빠른 시간 안에 유명세와 수익 창출'],
    weaknesses: ['본인의 인기가 떨어지면 수익도 급감함', '사생활 노출 및 악플 스트레스'],
    matchCombination: [],
  },
  // -++- : 소자본- 대면+ 고위험+ 스테디-
  HUSTLER: {
    id: 'HUSTLER',
    title: '맨땅에 헤딩하는 영업왕, 허슬러',
    subtitle: '내 사전엔 불가능이란 없다, 발로 뛰어 돈을 번다!',
    description: '자본이나 화려한 아이템 없이도, 오직 끈기와 영업력만으로 고객을 설득해 기어코 계약을 따내고 성공을 일궈내는 야생의 승부사입니다.',
    recommendedBusiness: ['B2B 무자본 영업 대행', '보험/부동산 중개업', '스타트업 초기 코파운더(영업담당)'],
    strengths: ['어디서든 살아남는 강력한 생존력', '노력한 만큼 정직하게 돌아오는 보상'],
    weaknesses: ['초기 거절에 대한 멘탈 관리가 필수적임', '체력 소모가 큼'],
    matchCombination: [],
  },
  // -+-+ : 소자본- 대면+ 저위험- 트렌드+
  COMMUNITY_HOST: {
    id: 'COMMUNITY_HOST',
    title: '사람 냄새 나는 커뮤니티 호스트',
    subtitle: '비슷한 취향의 사람들을 모으는 구심점!',
    description: '적은 자본으로도 최신 트렌드와 관심사를 공유하는 모임을 만들고, 그 안에서 리더 역할을 하며 소소하지만 확실한 수익을 창출합니다.',
    recommendedBusiness: ['유료 독서/취향 모임 호스트', '원데이 클래스 강사', '작은 동네 감성 공방'],
    strengths: ['일과 취미가 결합된 높은 만족도', '단단한 팬층과 즐거운 인간관계'],
    weaknesses: ['수익 규모를 크게 키우기 어려움', '멤버 관리에 에너지가 많이 들어감'],
    matchCombination: [],
  },
  // -+-- : 소자본- 대면+ 저위험- 스테디-
  TRUSTED_ADVISOR: {
    id: 'TRUSTED_ADVISOR',
    title: '신뢰의 아이콘, 전문 어드바이저',
    subtitle: '당신의 고민을 들어주고 길을 찾아드립니다.',
    description: '안정적인 지식과 진정성 있는 태도로 사람들과 깊은 신뢰를 쌓고, 1:1로 문제를 해결해 주는 데 탁월한 능력을 발휘하는 타입입니다.',
    recommendedBusiness: ['라이프 코치 / 심리 상담', '소규모 전문 컨설팅', '맞춤형 과외/레슨'],
    strengths: ['초기 투자 비용 없음', '경험이 쌓일수록 가치가 높아짐'],
    weaknesses: ['시간과 노동력이 수익의 한계선이 됨', '초기 신뢰를 쌓기까지 시간이 걸림'],
    matchCombination: [],
  },
  // --++ : 소자본- 비대면- 고위험+ 트렌드+
  DIGITAL_NOMAD_INNOVATOR: {
    id: 'DIGITAL_NOMAD_INNOVATOR',
    title: '방구석 스티브 잡스, 아이디어 뱅크',
    subtitle: '내 방 노트북에서 세계를 바꿀 아이디어가 탄생한다!',
    description: '자본이나 조직 없이도 번뜩이는 아이디어와 기술력을 통해 트렌디한 디지털 프로덕트를 만들어내어 대박을 노리는 1인 혁신가입니다.',
    recommendedBusiness: ['앱 개발 1인 창업', '트렌디한 디지털 프로덕트 판매', '혁신적인 웹 서비스 기획'],
    strengths: ['무한한 확장성과 자유로운 라이프스타일', '비용 대비 엄청난 마진율'],
    weaknesses: ['자기 통제력과 고도의 집중력 요구됨', '실패 확률이 꽤 높음'],
    matchCombination: [],
  },
  // --+- : 소자본- 비대면- 고위험+ 스테디-
  DATA_ANALYST: {
    id: 'DATA_ANALYST',
    title: '날카로운 통찰력, 데이터 애널리스트',
    subtitle: '감정은 배제하고 오직 팩트와 숫자로만 승부한다.',
    description: '유행에 휩쓸리지 않고, 방대한 데이터를 조용히 분석하여 구조적인 틈새를 찾아내고 리스크를 무릅쓰며 배팅하는 전략가입니다.',
    recommendedBusiness: ['알고리즘 트레이딩 / 퀀트 투자', '데이터 기반 무역/구매 대행', 'SEO 전문 마케터'],
    strengths: ['정확하고 이성적인 의사결정', '환경 변화에 흔들리지 않는 뚝심'],
    weaknesses: ['대인 네트워킹과 영업의 한계', '초기 학습 비용과 시간이 매우 큼'],
    matchCombination: [],
  },
  // ---+ : 소자본- 비대면- 저위험- 트렌드+
  TREND_CURATOR: {
    id: 'TREND_CURATOR',
    title: '트렌드 서퍼, 지식 큐레이터',
    subtitle: '세상의 넘쳐나는 정보를 돈으로 바꾸는 연금술사!',
    description: '빠르게 변하는 트렌드를 캐치하여, 대중이 소화하기 쉽게 가공하고 온라인으로 전달함으로써 리스크 없이 안전한 수익을 얻는 타입입니다.',
    recommendedBusiness: ['트렌드 뉴스레터 발행', '틈새시장 블로그/유튜브 채널 운영', '해외 직구 큐레이션 쇼핑몰'],
    strengths: ['자본금 제로 수준으로 시작 가능', '트렌드를 즐기는 사람에게 최고의 직업'],
    weaknesses: ['수익 창출까지 지루한 인내심이 필요함', '콘텐츠를 매일 만들어야 하는 압박감'],
    matchCombination: [],
  },
  // ---- : 소자본- 비대면- 저위험- 스테디-
  CRAFTSMAN_CREATOR: {
    id: 'CRAFTSMAN_CREATOR',
    title: '흔들리지 않는 뚝심, 장인정신 크리에이터',
    subtitle: '나만의 깊이 있는 전문성이 곧 최고의 무기다.',
    description: '유행이나 화려한 마케팅 없이, 오로지 본인만의 깊이 있는 전문 지식이나 기술을 온라인으로 꾸준히 제공하며 안정적인 수익을 창출합니다.',
    recommendedBusiness: ['전자책(PDF) 출판', '온라인 전문 지식 VOD 강의', '번역/디자인 등 전문 프리랜서'],
    strengths: ['시간이 지날수록 넘볼 수 없는 진입장벽 형성', '매우 안정적이고 꾸준한 수요'],
    weaknesses: ['초기 스케일업이 느림', '본인의 실력이 모든 것을 결정함'],
    matchCombination: [],
  }
};

export const calculateResult = (scores: Scores): ResultType => {
  // 5 questions per axis means the sum is odd, so > 0 is always positive, < 0 is always negative. No ties!
  const M = scores.M > 0 ? '+' : '-';
  const S = scores.S > 0 ? '+' : '-';
  const R = scores.R > 0 ? '+' : '-';
  const T = scores.T > 0 ? '+' : '-';
  
  const combo = `${M}${S}${R}${T}`;

  if (combo === '++++') return resultsData.INNOVATOR_UNICORN;
  if (combo === '+++-') return resultsData.EMPIRE_BUILDER;
  if (combo === '++-+') return resultsData.LOCAL_HOTPLACE;
  if (combo === '++--') return resultsData.SYSTEM_FRANCHISE;
  if (combo === '+-++') return resultsData.TECH_DISRUPTOR;
  if (combo === '+-+-') return resultsData.INFRA_INVESTOR;
  if (combo === '+--+') return resultsData.BRAND_ARTIST;
  if (combo === '+---') return resultsData.CASHFLOW_MASTER;
  if (combo === '-+++') return resultsData.MEGA_INFLUENCER;
  if (combo === '-++-') return resultsData.HUSTLER;
  if (combo === '-+-+') return resultsData.COMMUNITY_HOST;
  if (combo === '-+--') return resultsData.TRUSTED_ADVISOR;
  if (combo === '--++') return resultsData.DIGITAL_NOMAD_INNOVATOR;
  if (combo === '--+-') return resultsData.DATA_ANALYST;
  if (combo === '---+') return resultsData.TREND_CURATOR;
  if (combo === '----') return resultsData.CRAFTSMAN_CREATOR;

  // Fallback (should never be reached if logic is correct)
  return resultsData.CRAFTSMAN_CREATOR;
};
