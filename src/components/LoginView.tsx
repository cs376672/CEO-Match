import React, { useState } from 'react';
import { Rocket, UserPlus, Key } from 'lucide-react';
import { ViewState } from '../App';
import { API_URL } from '../config';

interface Props {
  onChangeView: (view: ViewState) => void;
  onLoginSuccess?: (userId: string) => void;
}

const LoginView: React.FC<Props> = ({ onChangeView, onLoginSuccess }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    
    if (API_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
       alert("개발 모드: 구글 시트 연동 전이므로 바로 메인 화면으로 진입합니다.");
       const guestId = id || 'guest';
       if (autoLogin) {
         localStorage.setItem('currentUser', guestId);
       } else {
         localStorage.removeItem('currentUser');
       }
       if (onLoginSuccess) onLoginSuccess(guestId);
       onChangeView('SELECTION');
       return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'login', id, password })
      });
      const data = await response.json();
      
      if (data.success) {
        alert(`${data.userName}님, 환영합니다!`);
        if (autoLogin) {
          localStorage.setItem('currentUser', id);
        } else {
          localStorage.removeItem('currentUser');
        }
        if (onLoginSuccess) onLoginSuccess(id);
        onChangeView('SELECTION');
      } else {
        alert(data.message || '로그인에 실패했습니다.');
      }
    } catch (err) {
      alert('서버와 통신하는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full animate-float">
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full primary-gradient-bg flex items-center justify-center shadow-[0_0_30px_rgba(0,242,254,0.5)]">
          <Rocket className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight tracking-tight break-keep text-center w-full">
          나의 숨겨진 <span className="primary-gradient-text">적성테스트</span>
        </h1>
        <p className="text-gray-300 font-light break-keep text-center w-full">
          나만의 숨겨진 잠재력과 성향을 발견해보세요
        </p>
      </div>

      <div className="glass-card p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-white w-full text-left">
          로그인
        </h2>
        
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="아이디" 
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="비밀번호" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-2 px-1">
            <input 
              type="checkbox" 
              id="autoLogin"
              checked={autoLogin}
              onChange={(e) => setAutoLogin(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 bg-white/5"
            />
            <label htmlFor="autoLogin" className="text-sm text-gray-300 cursor-pointer select-none">
              자동 로그인
            </label>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 mt-4 rounded-full font-bold text-lg primary-gradient-bg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(79,172,254,0.4)] disabled:opacity-50 disabled:hover:scale-100"
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <div className="mt-8 flex gap-4 text-sm text-gray-400">
          <button type="button" onClick={() => onChangeView('SIGNUP')} className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
            <UserPlus className="w-4 h-4" /> 회원가입
          </button>
          <span>|</span>
          <button type="button" onClick={() => onChangeView('FIND_PW')} className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
            <Key className="w-4 h-4" /> 비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
