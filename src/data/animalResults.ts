import { ResultType } from '../types';

export const animalResults: Record<string, ResultType> = {
  // E+ J+ T+ (외향, 계획, 이성) -> 호랑이
  TIGER: {
    id: 'TIGER',
    title: '목표를 향해 돌진하는',
    animal: '호랑이',
    description: '목표가 정해지면 뒤도 돌아보지 않고 직진하는 열정적인 성향입니다. 리더십이 뛰어나고 사람들을 이끄는 데 능숙하지만, 가끔은 너무 이성적이고 계획적이라 주변 사람들이 조금 버거워할 수도 있습니다.',
    traits: ['강력한 리더십', '철저한 계획성', '팩트 폭격기', '목표 지향적'],
    matchCombination: ['E+', 'J+', 'T+'] // S/N 무관
  },
  // E+ J+ T- (외향, 계획, 감성) -> 골든 리트리버
  RETRIEVER: {
    id: 'RETRIEVER',
    title: '모두의 친절한 인싸',
    animal: '골든 리트리버',
    description: '언제나 꼬리를 흔들며 사람들을 반기는 긍정 에너지의 소유자입니다! 주변 사람들을 잘 챙기고 꼼꼼하게 약속도 잘 잡지만, 남의 눈치를 보느라 거절을 잘 못하는게 단점입니다.',
    traits: ['인싸 중의 인싸', '공감 능력 만렙', '오지라퍼', '분위기 메이커'],
    matchCombination: ['E+', 'J+', 'T-']
  },
  // E+ J- T+ (외향, 즉흥, 이성) -> 여우
  FOX: {
    id: 'FOX',
    title: '눈치백단 임기응변의 달인',
    animal: '여우',
    description: '상황 판단이 빠르고 어떤 위기가 닥쳐도 요리조리 잘 빠져나가는 두뇌 회전의 달인입니다. 호기심이 많아 새로운 걸 좋아하지만, 금방 질려서 끝까지 마무리하는 걸 힘들어합니다.',
    traits: ['임기응변 달인', '눈치 100단', '프로젝트 벌리기 선수', '자유로운 영혼'],
    matchCombination: ['E+', 'J-', 'T+']
  },
  // E+ J- T- (외향, 즉흥, 감성) -> 돌고래
  DOLPHIN: {
    id: 'DOLPHIN',
    title: '호기심 가득한 자유 영혼',
    animal: '돌고래',
    description: '새로운 사람을 만나고 노는 것을 가장 좋아하는 호기심 천국입니다. 감수성이 풍부하고 리액션이 좋아 어딜 가든 환영받지만, 얽매이는 걸 싫어해서 계획을 지키는 데는 약합니다.',
    traits: ['에너지 뿜뿜', '리액션 혜자', '즉흥적 매력', '감정 기복'],
    matchCombination: ['E+', 'J-', 'T-']
  },
  // E- J+ T+ (내향, 계획, 이성) -> 부엉이
  OWL: {
    id: 'OWL',
    title: '조용하지만 완벽주의',
    animal: '부엉이',
    description: '조용히 상황을 관찰하고 철저하게 분석한 뒤에만 움직이는 신중한 성향입니다. 한 번 맡은 일은 끝까지 완벽하게 해내지만, 사람들과 왁자지껄 어울리는 건 기가 빨려 합니다.',
    traits: ['완벽주의자', '관찰력 뛰어남', '혼자만의 시간 필수', '팩트 중시'],
    matchCombination: ['E-', 'J+', 'T+']
  },
  // E- J+ T- (내향, 계획, 감성) -> 사슴
  DEER: {
    id: 'DEER',
    title: '세심하고 다정한 배려왕',
    animal: '사슴',
    description: '조심성이 많고 섬세하며 타인의 감정에 깊이 공감해 주는 따뜻한 마음씨를 가졌습니다. 나만의 룰과 루틴이 중요하며, 갑작스러운 변화나 시끄러운 상황을 스트레스 받아 합니다.',
    traits: ['배려심 깊음', '상처 잘 받음', '루틴의 노예', '조용한 다정함'],
    matchCombination: ['E-', 'J+', 'T-']
  },
  // E- J- T+ (내향, 즉흥, 이성) -> 고양이
  CAT: {
    id: 'CAT',
    title: '마이웨이 방구석 철학자',
    animal: '고양이',
    description: '남의 간섭을 극도로 싫어하고 나만의 시간을 가장 중요하게 생각합니다. 무심해 보이지만 사실 관심 있는 분야에서는 엄청난 지식과 논리를 자랑하는 츤데레입니다.',
    traits: ['마이웨이', '귀차니즘', '츤데레', '논리적 반박의 달인'],
    matchCombination: ['E-', 'J-', 'T+']
  },
  // E- J- T- (내향, 즉흥, 감성) -> 나무늘보
  SLOTH: {
    id: 'SLOTH',
    title: '평화를 사랑하는 느긋함',
    animal: '나무늘보',
    description: '갈등을 싫어하고 물 흐르듯 평화롭게 살고 싶어 하는 느긋한 성향입니다. 경쟁하거나 서두르는 것을 싫어하며, 소수의 사람들과 깊은 관계를 맺는 것을 좋아합니다.',
    traits: ['평화주의자', '집돌이/집순이', '갈등 회피', '이불 밖은 위험해'],
    matchCombination: ['E-', 'J-', 'T-']
  }
};

export const calculateAnimalResult = (scores: Record<string, number>): ResultType => {
  const E = (scores['E'] || 0) > 0 ? 'E+' : 'E-';
  const J = (scores['J'] || 0) > 0 ? 'J+' : 'J-';
  const T = (scores['T'] || 0) > 0 ? 'T+' : 'T-';

  const resultsList = Object.values(animalResults);
  const matched = resultsList.find(res => {
    return res.matchCombination.includes(E) && 
           res.matchCombination.includes(J) && 
           res.matchCombination.includes(T);
  });

  return matched || animalResults.RETRIEVER;
};
