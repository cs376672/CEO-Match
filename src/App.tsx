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
      {/* 리얼한 우주 배경 (Real Space Background) */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2048&auto=format&fit=crop')" }}
        ></div>
        {/* 콘텐츠 가독성을 위한 고급스러운 다크/블러 오버레이 */}
        <div className="absolute inset-0 bg-[#0B0B1E]/75 backdrop-blur-[1px]"></div>
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
