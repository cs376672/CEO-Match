import React, { useState } from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { ViewState } from '../App';
import { API_URL } from '../config';

interface Props {
  onChangeView: (view: ViewState) => void;
}

const SignupView: React.FC<Props> = ({ onChangeView }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    id: '',
    password: '',
    consent: false
  });
  const [idCheckStatus, setIdCheckStatus] = useState<'NONE'|'CHECKING'|'AVAILABLE'|'UNAVAILABLE'>('NONE');
  const [loading, setLoading] = useState(false);

  const isFormValid = formData.name && formData.gender && formData.id && formData.password && formData.consent && idCheckStatus === 'AVAILABLE';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // 아이디가 변경되면 중복확인 상태 초기화
    if (name === 'id') {
      setIdCheckStatus('NONE');
    }
  };

  const handleIdCheck = async () => {
    if (!formData.id) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (API_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
      alert("개발 모드: 임시로 사용 가능 처리됩니다.");
      setIdCheckStatus('AVAILABLE');
      return;
    }

    setIdCheckStatus('CHECKING');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'check_id', id: formData.id })
      });
      const data = await response.json();
      
      if (data.success) {
        setIdCheckStatus('AVAILABLE');
      } else {
        setIdCheckStatus('UNAVAILABLE');
        alert(data.message);
      }
    } catch (err) {
      alert('서버 통신 오류');
      setIdCheckStatus('NONE');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    if (API_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
      alert("개발 모드: 회원가입이 성공한 것으로 간주합니다.");
      onChangeView('LOGIN');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'signup', ...formData })
      });
      const data = await response.json();
      
      if (data.success) {
        alert(data.message);
        onChangeView('LOGIN');
      } else {
        alert(data.message || '회원가입에 실패했습니다.');
      }
    } catch (err) {
      alert('서버와 통신하는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full">
      <div className="glass-card p-8">
        <button onClick={() => onChangeView('LOGIN')} className="mb-6 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-5 h-5" /> 돌아가기
        </button>

        <h2 className="text-2xl font-extrabold mb-8 primary-gradient-text">회원가입</h2>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">이름</label>
            <input 
              type="text" name="name" value={formData.name} onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">성별</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-gray-300">
                <input type="radio" name="gender" value="male" onChange={handleChange} className="accent-cyan-400" /> 남성
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-gray-300">
                <input type="radio" name="gender" value="female" onChange={handleChange} className="accent-cyan-400" /> 여성
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">아이디</label>
            <div className="flex gap-2">
              <input 
                type="text" name="id" value={formData.id} onChange={handleChange}
                className="flex-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
              />
              <button 
                type="button" onClick={handleIdCheck}
                className="px-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-medium transition-colors"
              >
                중복확인
              </button>
            </div>
            {idCheckStatus === 'AVAILABLE' && <p className="text-cyan-400 text-xs mt-2 flex items-center gap-1"><CheckCircle className="w-3 h-3"/> 사용 가능한 아이디입니다.</p>}
            {idCheckStatus === 'UNAVAILABLE' && <p className="text-red-400 text-xs mt-2">이미 사용 중인 아이디입니다.</p>}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">비밀번호</label>
            <input 
              type="password" name="password" value={formData.password} onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-300">
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="w-4 h-4 accent-cyan-400" />
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>

          <button 
            type="submit" 
            disabled={!isFormValid || loading}
            className="w-full py-4 mt-6 rounded-full font-bold text-lg primary-gradient-bg disabled:opacity-40 transition-all shadow-[0_0_15px_rgba(79,172,254,0.3)] disabled:shadow-none"
          >
            {loading ? '가입 중...' : '회원가입 완료'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupView;
