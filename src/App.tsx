import { useState } from 'react';
import LoginView from './components/LoginView';
import SignupView from './components/SignupView';
import FindPwView from './components/FindPwView';
import LandingView from './components/LandingView';
import QuizView from './components/QuizView';
import ResultView from './components/ResultView';
import { ResultType, Scores } from './types';

export type ViewState = 'LOGIN' | 'SIGNUP' | 'FIND_PW' | 'LANDING' | 'QUIZ' | 'RESULT';

function App() {
  const [view, setView] = useState<ViewState>('LOGIN');
  const [scores, setScores] = useState<Scores>({ M: 0, S: 0, R: 0, T: 0 });
  const [result, setResult] = useState<ResultType | null>(null);

  const startQuiz = () => {
    setScores({ M: 0, S: 0, R: 0, T: 0 });
    setView('QUIZ');
  };

  const finishQuiz = (finalScores: Scores, finalResult: ResultType) => {
    setScores(finalScores);
    setResult(finalResult);
    setView('RESULT');
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-[#0B0B1E] text-white">
      {/* 우주 느낌의 배경 (Space Background) */}
      <div className="fixed inset-0 z-0 bg-[#0B0B1E]">
        {/* 반짝이는 별들 (Stars) */}
        <div className="absolute inset-0 opacity-40 animate-pulse-glow" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute inset-0 opacity-30" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '90px 90px', backgroundPosition: '20px 20px' }}></div>
        <div className="absolute inset-0 opacity-20 animate-pulse-glow" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '150px 150px', backgroundPosition: '70px 70px' }}></div>
        
        {/* 성운 효과 (Nebulas) */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-700/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-cyan-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-[30%] left-[40%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      </div>
      
      <main className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        {view === 'LOGIN' && <LoginView onChangeView={setView} />}
        {view === 'SIGNUP' && <SignupView onChangeView={setView} />}
        {view === 'FIND_PW' && <FindPwView onChangeView={setView} />}
        {view === 'LANDING' && <LandingView onStart={startQuiz} />}
        {view === 'QUIZ' && <QuizView onComplete={finishQuiz} />}
        {view === 'RESULT' && result && (
          <ResultView result={result} scores={scores} onRestart={startQuiz} />
        )}
      </main>
    </div>
  );
}

export default App;
