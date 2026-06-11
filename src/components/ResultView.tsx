import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Share2, CheckCircle2, AlertTriangle, Lightbulb, Cat } from 'lucide-react';
import { ResultType, TestType } from '../types';
import { API_URL } from '../config';

interface Props {
  result: ResultType;
  testType: TestType;
  userId: string;
  onRestart: () => void;
}

const ResultView: React.FC<Props> = ({ result, testType, userId, onRestart }) => {
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#00F2FE', '#4FACFE', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#00F2FE', '#4FACFE', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // 결과 저장 (구글 시트)
    const saveResult = async () => {
      if (API_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") return;
      try {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ 
            action: 'save_result', 
            id: userId, 
            testType: testType, 
            resultValue: result.title || result.id 
          })
        });
      } catch (err) {
        console.error("결과 저장 중 오류 발생", err);
      }
    };

    saveResult();
  }, [result, testType, userId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('테스트 링크가 복사되었습니다! 친구들에게 공유해보세요.');
  };

  return (
    <div className="max-w-3xl w-full animate-float-delayed pb-10">
      <div className={`glass-card p-8 md:p-12 relative overflow-hidden border ${testType === 'BUSINESS' ? 'border-cyan-500/20' : 'border-purple-500/20'}`}>
        {/* Glow */}
        <div className={`absolute -top-40 -right-40 w-80 h-80 blur-3xl rounded-full opacity-20 pointer-events-none ${testType === 'BUSINESS' ? 'bg-cyan-500' : 'bg-purple-500'}`} />

        {/* Header Section */}
        <div className="text-center mb-10 border-b border-white/10 pb-8 relative z-10">
          <p className={`font-bold mb-2 tracking-widest ${testType === 'BUSINESS' ? 'text-cyan-400' : 'text-purple-400'}`}>
            {testType === 'BUSINESS' ? '당신의 비즈니스 핏은...' : '당신과 닮은 동물은...'}
          </p>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r ${testType === 'BUSINESS' ? 'from-cyan-400 to-blue-500' : 'from-purple-400 to-pink-500'}`}>
            {result.title}
          </h1>
          {result.subtitle && <p className="text-xl text-gray-300 font-medium">"{result.subtitle}"</p>}
          {result.animal && <p className="text-2xl text-white font-bold mt-2 flex items-center justify-center gap-2"><Cat className="w-6 h-6 text-purple-400"/> {result.animal}</p>}
        </div>

        {/* Description Section */}
        <div className="mb-10 text-lg text-gray-200 leading-relaxed text-center relative z-10">
          <p>{result.description}</p>
        </div>

        {/* Grid Stats for Business */}
        {testType === 'BUSINESS' && result.strengths && result.weaknesses && (
          <div className="grid md:grid-cols-2 gap-6 mb-10 relative z-10">
            <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-cyan-300">
                <CheckCircle2 className="w-5 h-5" />
                강점 (Strengths)
              </h3>
              <ul className="space-y-3">
                {result.strengths.map((s, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-300">
                    <span className="text-cyan-500">•</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-purple-400">
                <AlertTriangle className="w-5 h-5" />
                주의할 점 (Watch out)
              </h3>
              <ul className="space-y-3">
                {result.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-300">
                    <span className="text-purple-500">•</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Recommended Businesses for Business */}
        {testType === 'BUSINESS' && result.recommendedBusiness && (
          <div className="bg-white/5 rounded-2xl p-6 mb-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full"></div>
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2 relative z-10">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              추천 창업/부업 아이템
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {result.recommendedBusiness.map((biz, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-white/10 font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                  {biz}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Traits for Animal */}
        {testType === 'ANIMAL' && result.traits && (
          <div className="bg-white/5 rounded-2xl p-6 mb-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2 relative z-10 text-purple-300">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              나의 특징 요약
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {result.traits.map((trait, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200 font-medium border border-purple-500/30">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 relative z-10">
          <button 
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 py-4 px-8 rounded-full font-bold text-lg glass-button w-full sm:w-auto"
          >
            <Share2 className="w-5 h-5" />
            결과 공유하기
          </button>
          <button 
            onClick={onRestart}
            className={`flex items-center justify-center gap-2 py-4 px-8 rounded-full font-bold text-lg text-white hover:scale-105 transition-transform w-full sm:w-auto ${testType === 'BUSINESS' ? 'primary-gradient-bg shadow-[0_0_20px_rgba(79,172,254,0.3)]' : 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(192,132,252,0.3)]'}`}
          >
            <RotateCcw className="w-5 h-5" />
            테스트 다시하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
