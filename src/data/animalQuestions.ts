import { Question } from '../types';

export const animalQuestions: Question[] = [
  {
    id: 1,
    text: "주말에 갑자기 약속이 취소되었다. 나의 반응은?",
    axis: "E",
    choiceA: { text: "아싸! 집에서 뒹굴거려야지 (휴식)", value: -1 },
    choiceB: { text: "아쉽다... 다른 친구 누구 없나? (연락)", value: 1 }
  },
  {
    id: 2,
    text: "새로운 맛집을 고를 때 나는?",
    axis: "S",
    choiceA: { text: "별점, 리뷰, 위치까지 꼼꼼하게 비교한다", value: 1 },
    choiceB: { text: "그냥 끌리는 곳이나 직감이 오는 곳으로 간다", value: -1 }
  },
  {
    id: 3,
    text: "친구가 '나 우울해서 화분 샀어'라고 한다면?",
    axis: "T",
    choiceA: { text: "무슨 화분 샀어? 물은 얼마나 자주 줘야 돼?", value: 1 },
    choiceB: { text: "무슨 일 있어? 왜 우울해 ㅠㅠ", value: -1 }
  },
  {
    id: 4,
    text: "여행 가기 전날 나의 모습은?",
    axis: "J",
    choiceA: { text: "시간별 일정을 엑셀로 정리하고 짐을 다 챙겨뒀다", value: 1 },
    choiceB: { text: "대충 필요한 것만 쑤셔넣고, 내일 일은 내일 생각한다", value: -1 }
  },
  {
    id: 5,
    text: "모임에서 처음 보는 사람이 많을 때 나는?",
    axis: "E",
    choiceA: { text: "먼저 다가가서 말을 걸고 분위기를 주도한다", value: 1 },
    choiceB: { text: "누가 나에게 말 걸어줄 때까지 조용히 미소만 짓는다", value: -1 }
  },
  {
    id: 6,
    text: "일을 할 때 나는 어떤 방식이 더 편한가?",
    axis: "S",
    choiceA: { text: "정해진 매뉴얼과 확실한 가이드라인이 있는 것", value: 1 },
    choiceB: { text: "나만의 창의적인 아이디어를 맘껏 시도해볼 수 있는 것", value: -1 }
  },
  {
    id: 7,
    text: "고민 상담을 해줄 때 나의 포지션은?",
    axis: "T",
    choiceA: { text: "문제의 원인을 분석하고 현실적인 해결책을 제시한다", value: 1 },
    choiceB: { text: "일단 끝까지 들어주고 진심으로 공감해준다", value: -1 }
  },
  {
    id: 8,
    text: "마트에 장을 보러 갔을 때 나는?",
    axis: "J",
    choiceA: { text: "미리 적어둔 쇼핑 리스트대로만 딱 사고 나온다", value: 1 },
    choiceB: { text: "돌아다니다가 맛있어 보이거나 세일하는 걸 집어넣는다", value: -1 }
  },
  {
    id: 9,
    text: "스트레스를 푸는 나만의 방법은?",
    axis: "E",
    choiceA: { text: "사람들을 만나 수다를 떨거나 밖에서 활동한다", value: 1 },
    choiceB: { text: "조용히 혼자 음악을 듣거나 영화를 보며 쉰다", value: -1 }
  },
  {
    id: 10,
    text: "상상력을 자극하는 영화(SF, 판타지)를 보고 나면?",
    axis: "S",
    choiceA: { text: "CG 잘 만들었네, 근데 저게 말이 되나? 현실성을 따진다", value: 1 },
    choiceB: { text: "나도 저 세계에 가면 어떨까? 하루 종일 상상에 빠진다", value: -1 }
  },
  {
    id: 11,
    text: "회의 중에 누군가 내 의견에 반대한다면?",
    axis: "T",
    choiceA: { text: "왜 반대하는지 논리적인 이유를 묻고 토론한다", value: 1 },
    choiceB: { text: "내 기분이 상했는지, 혹은 분위기가 싸해질까 봐 걱정한다", value: -1 }
  },
  {
    id: 12,
    text: "핸드폰 앱에 알림(빨간 숫자)이 떠 있다면?",
    axis: "J",
    choiceA: { text: "거슬려서 무조건 다 확인하고 없애버린다", value: 1 },
    choiceB: { text: "별로 신경 안 쓴다. 나중에 몰아서 보거나 방치한다", value: -1 }
  },
  {
    id: 13,
    text: "엘리베이터 문이 닫히려고 할 때 뛰어가서 탈까?",
    axis: "E",
    choiceA: { text: "기다려 달라고 소리치고 얼른 뛰어 들어간다", value: 1 },
    choiceB: { text: "다음 거 타지 뭐... 하고 여유롭게 포기한다", value: -1 }
  },
  {
    id: 14,
    text: "요리를 할 때 나의 스타일은?",
    axis: "S",
    choiceA: { text: "레시피에 적힌 계량(큰술, 작은술)을 정확하게 지킨다", value: 1 },
    choiceB: { text: "대충 눈대중으로 넣고 중간중간 간을 보며 맞춘다", value: -1 }
  },
  {
    id: 15,
    text: "내가 생각하는 성공적인 하루는?",
    axis: "J",
    choiceA: { text: "오늘 세운 계획을 하나도 빠짐없이 모두 완료했을 때", value: 1 },
    choiceB: { text: "계획대로 안 됐어도 뭔가 재밌고 의미 있는 일이 있었을 때", value: -1 }
  }
];
