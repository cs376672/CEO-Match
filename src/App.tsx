import { useState, useEffect } from 'react';
import LoginView from './components/LoginView';
import SignupView from './components/SignupView';
import FindPwView from './components/FindPwView';
import SelectionView from './components/SelectionView';
import QuizView from './components/QuizView';
import ResultView from './components/ResultView';
import { ResultType, Scores, TestType } from './types';

export type ViewState = 'LOGIN' | 'SIGNUP' | 'FIND_PW' | 'SELECTION' | 'QUIZ' | 'RESULT';

function App() {
  const [view, setView] = useState<ViewState>('LOGIN');
  const [, setScores] = useState<Scores>({});
  const [result, setResult] = useState<ResultType | null>(null);
  
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [testType, setTestType] = useState<TestType | null>(null);

  // 자동 로그인 확인
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(savedUser);
      setView('SELECTION');
    }
  }, []);

  const handleSelectTest = (type: TestType) => {
    setTestType(type);
    setScores({});
    setView('QUIZ');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setView('LOGIN');
  };

  const finishQuiz = (finalScores: Scores, finalResult: ResultType) => {
    setScores(finalScores);
    setResult(finalResult);
    setView('RESULT');
  };

  const handleRestart = () => {
    setView('SELECTION');
    setTestType(null);
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
        {view === 'LOGIN' && <LoginView onChangeView={setView} onLoginSuccess={setCurrentUser} />}
        {view === 'SIGNUP' && <SignupView onChangeView={setView} />}
        {view === 'FIND_PW' && <FindPwView onChangeView={setView} />}
        {view === 'SELECTION' && <SelectionView onSelect={handleSelectTest} onLogout={handleLogout} />}
        {view === 'QUIZ' && testType && <QuizView testType={testType} onComplete={finishQuiz} />}
        {view === 'RESULT' && result && testType && currentUser && (
          <ResultView result={result} testType={testType} userId={currentUser} onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
}

export default App;
