import { Question } from '../types';

export const questions: Question[] = [
  // M Axis: Money (Large Capital vs Small Capital)
  {
    id: 1,
    axis: 'M',
    text: '당신이 생각하는 이상적인 첫 사업 자본금은?',
    choiceA: { text: '대출을 받아서라도 초기 세팅을 완벽하게!', value: 1 },
    choiceB: { text: '리스크 최소화! 무자본이나 소자본으로 작게 시작', value: -1 }
  },
  {
    id: 2,
    axis: 'M',
    text: '비즈니스 모델을 선택할 때 더 끌리는 쪽은?',
    choiceA: { text: '규모의 경제를 위한 인프라 구축과 투자', value: 1 },
    choiceB: { text: '내 지식과 아이디어만으로 창출하는 가치', value: -1 }
  },
  {
    id: 3,
    axis: 'M',
    text: '가게를 차린다면 어떤 형태가 좋을까?',
    choiceA: { text: '목 좋은 상권에 번듯한 오프라인 매장', value: 1 },
    choiceB: { text: '집에서 노트북 하나로 운영하는 온라인 비즈니스', value: -1 }
  },
  
  // S Axis: Social (Interpersonal vs Tech/Content)
  {
    id: 4,
    axis: 'S',
    text: '일할 때 가장 에너지를 얻는 순간은 언제인가요?',
    choiceA: { text: '새로운 사람을 만나고 설득해서 계약을 따낼 때', value: 1 },
    choiceB: { text: '나만의 공간에서 콘텐츠를 기획하거나 문제를 해결할 때', value: -1 }
  },
  {
    id: 5,
    axis: 'S',
    text: '나의 가장 강력한 무기는?',
    choiceA: { text: '뛰어난 화술과 사람의 마음을 얻는 네트워킹', value: 1 },
    choiceB: { text: '깊이 있는 전문 지식과 꼼꼼한 분석력', value: -1 }
  },
  {
    id: 6,
    axis: 'S',
    text: '고객 응대 상황에서 나는?',
    choiceA: { text: '직접 대면하여 친근하게 응대하는 것이 자신 있다', value: 1 },
    choiceB: { text: '시스템이나 매뉴얼로 비대면 처리하는 것이 편하다', value: -1 }
  },

  // R Axis: Risk (High Risk/Startup vs Low Risk/Stable)
  {
    id: 7,
    axis: 'R',
    text: '사업의 목표 수익률에 대한 당신의 생각은?',
    choiceA: { text: '실패 확률이 높아도 100배 이상의 초대박 성공!', value: 1 },
    choiceB: { text: '폭발적이지 않아도 매달 꾸준히 들어오는 안정적 수익!', value: -1 }
  },
  {
    id: 8,
    axis: 'R',
    text: '새로운 아이디어가 떠올랐을 때 나는?',
    choiceA: { text: '완벽하지 않아도 일단 부딪혀보고 수정한다', value: 1 },
    choiceB: { text: '철저하게 시장을 분석하고 검증된 후에 시작한다', value: -1 }
  },
  {
    id: 9,
    axis: 'R',
    text: '어떤 방식의 성장을 선호하나요?',
    choiceA: { text: '시장을 혁신하여 새로운 룰을 만드는 파괴적 성장', value: 1 },
    choiceB: { text: '기존에 검증된 모델을 차용하여 리스크를 줄인 성장', value: -1 }
  },

  // T Axis: Trend (Trend Leading vs Traditional/Long-run)
  {
    id: 10,
    axis: 'T',
    text: '아이템을 고를 때 당신의 기준은?',
    choiceA: { text: '요즘 힙하고 SNS에서 난리 난 트렌디한 아이템', value: 1 },
    choiceB: { text: '유행 타지 않고 10년 뒤에도 수요가 있을 스테디 아이템', value: -1 }
  },
  {
    id: 11,
    axis: 'T',
    text: '소셜 미디어(SNS)를 대하는 나의 태도는?',
    choiceA: { text: '매일 새로운 밈과 릴스를 챙겨보는 트렌드 세터', value: 1 },
    choiceB: { text: 'SNS보다는 책이나 뉴스, 전문 커뮤니티가 편하다', value: -1 }
  },
  {
    id: 12,
    axis: 'T',
    text: '디자인과 기능 중 더 중요한 것은?',
    choiceA: { text: '사람들의 시선을 확 사로잡는 매력적인 디자인과 감성', value: 1 },
    choiceB: { text: '기본에 충실하고 변함없는 실용성과 기능', value: -1 }
  }
];
