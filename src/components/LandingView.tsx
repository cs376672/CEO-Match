import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const LandingView: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="max-w-2xl w-full text-center animate-float">
      <div className="glass-card p-10 flex flex-col items-center">
        <div className="w-24 h-24 mb-6 rounded-full primary-gradient-bg flex items-center justify-center shadow-[0_0_30px_rgba(0,242,254,0.5)]">
          <Rocket className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          나의 숨겨진 <span className="primary-gradient-text">적성테스트</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 font-light">
          나만의 숨겨진 잠재력과 성향을 발견해보세요.<br className="hidden md:block" />
          다양한 테스트를 통해 가장 잘 맞는 길을 찾아드립니다!
        </p>

        <div className="bg-white/10 p-6 rounded-xl mb-10 text-left w-full max-w-md">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            진단 포인트 4가지
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex justify-between"><span>💰 자본 (Money)</span> <span>대자본 vs 소/무자본</span></li>
            <li className="flex justify-between"><span>🤝 소셜 (Social)</span> <span>대인/영업 vs 기술/콘텐츠</span></li>
            <li className="flex justify-between"><span>🎲 위험 (Risk)</span> <span>하이리스크 vs 안정/롱런</span></li>
            <li className="flex justify-between"><span>📈 트렌드 (Trend)</span> <span>트렌드 리딩 vs 전통 스테디</span></li>
          </ul>
        </div>

        <button 
          onClick={onStart}
          className="w-full max-w-xs py-4 rounded-full font-bold text-lg primary-gradient-bg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(79,172,254,0.4)]"
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
};

export default LandingView;
