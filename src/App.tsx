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
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      
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
