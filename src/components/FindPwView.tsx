import React, { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { ViewState } from '../App';
import { API_URL } from '../config';

interface Props {
  onChangeView: (view: ViewState) => void;
}

const FindPwView: React.FC<Props> = ({ onChangeView }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFindPw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !id) {
      alert('이름과 아이디를 모두 입력해주세요.');
      return;
    }

    if (API_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
      alert("개발 모드: 임시 비밀번호는 '1234' 입니다.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'find_pw', name, id })
      });
      const data = await response.json();
      
      if (data.success) {
        alert(`조회 성공! 비밀번호는 [ ${data.password} ] 입니다.`);
        onChangeView('LOGIN');
      } else {
        alert(data.message || '정보를 찾을 수 없습니다.');
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

        <div className="flex items-center gap-3 mb-8">
          <Search className="w-8 h-8 text-cyan-400" />
          <h2 className="text-2xl font-extrabold primary-gradient-text">비밀번호 찾기</h2>
        </div>

        <form onSubmit={handleFindPw} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">가입한 이름</label>
            <input 
              type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">가입한 아이디</label>
            <input 
              type="text" value={id} onChange={(e) => setId(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 mt-6 rounded-full font-bold text-lg primary-gradient-bg hover:scale-105 disabled:opacity-40 transition-all shadow-[0_0_15px_rgba(79,172,254,0.3)] disabled:shadow-none disabled:hover:scale-100"
          >
            {loading ? '조회 중...' : '비밀번호 조회'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindPwView;
