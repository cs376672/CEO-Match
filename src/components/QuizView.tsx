import React, { useState } from 'react';
import { questions } from '../data/questions';
import { calculateResult } from '../data/results';
import { Scores, ResultType } from '../types';

interface Props {
  onComplete: (scores: Scores, result: ResultType) => void;
}

const QuizView: React.FC<Props> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({ M: 0, S: 0, R: 0, T: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const question = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleAnswer = (axis: keyof Scores, value: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    const newScores = {
      ...scores,
      [axis]: scores[axis] + value
    };
    
    setScores(newScores);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setIsAnimating(false);
      } else {
        const result = calculateResult(newScores);
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
            className="h-full primary-gradient-bg transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="glass-card p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-4">
            <button
              onClick={() => handleAnswer(question.axis, question.choiceA.value)}
              className="w-full text-left p-5 rounded-xl glass-button text-lg font-medium hover:text-cyan-300 hover:border-cyan-400/50"
            >
              A. {question.choiceA.text}
            </button>
            <button
              onClick={() => handleAnswer(question.axis, question.choiceB.value)}
              className="w-full text-left p-5 rounded-xl glass-button text-lg font-medium hover:text-cyan-300 hover:border-cyan-400/50"
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
