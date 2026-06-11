import React from 'react';
import { Briefcase, Cat } from 'lucide-react';
import { TestType } from '../types';

interface Props {
  onSelect: (testType: TestType) => void;
}

const SelectionView: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-4xl px-4 animate-fade-in flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          테스트 선택
        </h1>
        <p className="text-gray-300 text-lg">
          당신이 알아보고 싶은 모습을 선택해주세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Card A: Business Fit */}
        <div 
          onClick={() => onSelect('BUSINESS')}
          className="group cursor-pointer glass-card relative overflow-hidden rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:-translate-y-2 flex flex-col items-center text-center"
        >
          {/* Neon Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="w-24 h-24 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <Briefcase className="w-12 h-12 text-cyan-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
            Gravity-Free CEO
          </h2>
          <p className="text-gray-400">
            당신의 비즈니스 핏은 어떤 스타일일까요?<br/>
            리더십과 업무 성향을 알아보세요.
          </p>
        </div>

        {/* Card B: Animal Test */}
        <div 
          onClick={() => onSelect('ANIMAL')}
          className="group cursor-pointer glass-card relative overflow-hidden rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,132,252,0.2)] hover:-translate-y-2 flex flex-col items-center text-center"
        >
          {/* Neon Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(192,132,252,0.3)]">
            <Cat className="w-12 h-12 text-purple-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
            나와 닮은 동물 찾기
          </h2>
          <p className="text-gray-400">
            숨겨진 나의 진짜 성향은?<br/>
            나와 찰떡인 귀여운 동물을 찾아보세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectionView;
