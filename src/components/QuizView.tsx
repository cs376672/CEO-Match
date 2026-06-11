import React, { useState } from 'react';
import { questions as businessQuestions } from '../data/questions';
import { calculateResult as calculateBusinessResult } from '../data/results';
import { animalQuestions } from '../data/animalQuestions';
import { calculateAnimalResult } from '../data/animalResults';
import { Scores, ResultType, TestType } from '../types';

interface Props {
  testType: TestType;
  onComplete: (scores: Scores, result: ResultType) => void;
}

const QuizView: React.FC<Props> = ({ testType, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const questions = testType === 'BUSINESS' ? businessQuestions : animalQuestions;
  const question = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleAnswer = (axis: string, value: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    const newScores = {
      ...scores,
      [axis]: (scores[axis] || 0) + value
    };
    
    setScores(newScores);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setIsAnimating(false);
      } else {
        const result = testType === 'BUSINESS' 
          ? calculateBusinessResult(newScores) 
          : calculateAnimalResult(newScores);
        onComplete(newScores, result);
      }
    }, 400); // 400ms delay for smooth transition
  };

  return (
    <div className="max-w-2xl w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2 font-medium">
          <span>진행도</span>
          <span>{currentIndex + 1} / {questions.length}</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ease-out rounded-full ${testType === 'BUSINESS' ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-purple-400 to-pink-500'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="glass-card p-8 md:p-12 min-h-[400px] flex flex-col justify-center border border-white/10 relative overflow-hidden">
          {/* Subtle neon glow based on test type */}
          <div className={`absolute inset-0 opacity-10 pointer-events-none ${testType === 'BUSINESS' ? 'bg-cyan-500/20' : 'bg-purple-500/20'}`} />
          
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center leading-relaxed relative z-10">
            {question.text}
          </h2>

          <div className="space-y-4 relative z-10">
            <button
              onClick={() => handleAnswer(question.axis, question.choiceA.value)}
              className={`w-full text-left p-5 rounded-xl glass-button text-lg font-medium hover:text-white transition-colors border border-transparent ${testType === 'BUSINESS' ? 'hover:border-cyan-400/50 hover:bg-cyan-500/10' : 'hover:border-purple-400/50 hover:bg-purple-500/10'}`}
            >
              A. {question.choiceA.text}
            </button>
            <button
              onClick={() => handleAnswer(question.axis, question.choiceB.value)}
              className={`w-full text-left p-5 rounded-xl glass-button text-lg font-medium hover:text-white transition-colors border border-transparent ${testType === 'BUSINESS' ? 'hover:border-cyan-400/50 hover:bg-cyan-500/10' : 'hover:border-purple-400/50 hover:bg-purple-500/10'}`}
            >
              B. {question.choiceB.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
