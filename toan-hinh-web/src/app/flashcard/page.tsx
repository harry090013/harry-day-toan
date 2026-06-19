'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import MathText from '@/components/math/MathText';
import { 
  TOPICS, 
  CARDS, 
  Topic, 
  Flashcard 
} from '@/data/flashcard/flashcards';
import { 
  Layers, 
  ArrowLeft, 
  RotateCcw, 
  Check, 
  X, 
  Home, 
  BookOpen, 
  ChevronRight, 
  Sparkles,
  Trophy,
  Brain,
  Filter,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export default function FlashcardPage() {
  const [screen, setScreen] = useState<'home' | 'study' | 'summary'>('home');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [flipped, setFlipped] = useState<boolean>(false);
  const [known, setKnown] = useState<Record<number, boolean>>({});
  const [filter, setFilter] = useState<'all' | 'unknown' | 'known'>('all');

  // Load known cards from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('geometry_flashcards_known');
      if (saved) {
        try {
          setKnown(JSON.parse(saved));
        } catch (e) {
          console.error('Error loading saved flashcard progress:', e);
        }
      }
    }
  }, []);

  // Helper to update and save known state
  const saveKnown = (cardId: number, isKnown: boolean) => {
    const updated = { ...known, [cardId]: isKnown };
    setKnown(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('geometry_flashcards_known', JSON.stringify(updated));
    }
  };

  const toggleTopic = (id: string) => {
    setSelectedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const selectAllTopics = () => {
    if (selectedTopics.length === TOPICS.length) {
      setSelectedTopics([]);
    } else {
      setSelectedTopics(TOPICS.map(t => t.id));
    }
  };

  const resetAllProgress = () => {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ tiến độ đã ghi nhớ?')) {
      setKnown({});
      if (typeof window !== 'undefined') {
        localStorage.removeItem('geometry_flashcards_known');
      }
    }
  };

  // Filter and prepare deck
  const startStudy = () => {
    const topics = selectedTopics.length === 0
      ? TOPICS.map(t => t.id)
      : selectedTopics;

    let filteredCards = CARDS.filter(c => topics.includes(c.topic));

    if (filter === 'unknown') {
      filteredCards = filteredCards.filter(c => !known[c.id]);
    } else if (filter === 'known') {
      filteredCards = filteredCards.filter(c => known[c.id]);
    }

    if (filteredCards.length === 0) {
      alert('Không tìm thấy thẻ nào phù hợp với bộ lọc đã chọn!');
      return;
    }

    // Shuffle deck
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIdx(0);
    setFlipped(false);
    setScreen('study');
  };

  const markCard = (isKnown: boolean) => {
    const currentCard = deck[currentIdx];
    saveKnown(currentCard.id, isKnown);

    if (currentIdx < deck.length - 1) {
      setCurrentIdx(i => i + 1);
      setFlipped(false);
    } else {
      setScreen('summary');
    }
  };

  const card = deck[currentIdx];
  const knownCount = useMemo(() => Object.values(known).filter(Boolean).length, [known]);
  const unknownCount = useMemo(() => CARDS.length - knownCount, [knownCount]);
  
  // Progress calculations
  const totalPercent = useMemo(() => {
    if (CARDS.length === 0) return 0;
    return Math.round((knownCount / CARDS.length) * 100);
  }, [knownCount]);

  const currentTopic = useMemo(() => {
    if (!card) return null;
    return TOPICS.find(t => t.id === card.topic) || null;
  }, [card]);

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
            <Layers className="w-8 h-8 text-indigo-400" />
            Thẻ Ghi Nhớ (Flashcard)
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Ôn lý thuyết hình học THCS nhanh bằng phương pháp lặp lại ngắt quãng (Spaced Repetition).
          </p>
        </div>

        {screen === 'home' && knownCount > 0 && (
          <button 
            onClick={resetAllProgress}
            className="px-3.5 py-1.5 rounded-lg border border-red-500/25 bg-red-500/5 hover:bg-red-500/15 text-red-400 text-xs font-semibold transition-all duration-200"
          >
            Xóa tiến độ cũ
          </button>
        )}
      </div>

      {/* HOME SCREEN */}
      {screen === 'home' && (
        <div className="flex flex-col gap-6">
          {/* OVERALL PROGRESS */}
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Tiến độ ghi nhớ toàn bộ hệ thống
              </span>
              <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                {knownCount} / {CARDS.length} thẻ ({totalPercent}%)
              </span>
            </div>
            <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/50">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${totalPercent}%` }}
              />
            </div>
          </div>

          {/* TOPIC SELECTION */}
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <BookOpen className="w-4.5 h-4.5 text-indigo-400" />
                Bước 1: Chọn chủ đề ôn tập
              </h2>
              <button 
                onClick={selectAllTopics}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {selectedTopics.length === TOPICS.length ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TOPICS.map(t => {
                const isSelected = selectedTopics.includes(t.id);
                const topicCards = CARDS.filter(c => c.topic === t.id);
                const topicKnown = topicCards.filter(c => known[c.id]).length;
                const percent = topicCards.length > 0 ? Math.round((topicKnown / topicCards.length) * 100) : 0;
                
                return (
                  <button
                    key={t.id}
                    onClick={() => toggleTopic(t.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 group ${
                      isSelected 
                        ? 'bg-slate-900/80 border-slate-600 shadow-md shadow-indigo-500/5' 
                        : 'bg-slate-900/20 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-inner"
                        style={{ backgroundColor: isSelected ? `${t.color}20` : '#1e293b' }}
                      >
                        {t.emoji}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-200 group-hover:text-slate-100 transition-colors">
                          {t.label}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          Đã học: {topicKnown}/{topicCards.length} thẻ ({percent}%)
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {percent === 100 && (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      )}
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-indigo-500 border-indigo-400 text-white' 
                          : 'border-slate-700 bg-slate-950'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CARD FILTERS */}
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm shadow-xl">
            <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-4">
              <Filter className="w-4.5 h-4.5 text-indigo-400" />
              Bước 2: Bộ lọc thẻ
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { id: 'all', label: 'Tất cả thẻ', desc: `${CARDS.length} thẻ`, color: 'indigo' },
                  { id: 'unknown', label: 'Chưa nhớ', desc: `${unknownCount} thẻ`, color: 'red' },
                  { id: 'known', label: 'Đã nhớ', desc: `${knownCount} thẻ`, color: 'emerald' },
                ] as const
              ).map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col justify-center items-center gap-1 ${
                    filter === f.id
                      ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/5'
                      : 'bg-slate-900/10 border-slate-800 hover:bg-slate-900/30'
                  }`}
                >
                  <span className={`text-xs font-bold ${
                    filter === f.id 
                      ? 'text-indigo-400' 
                      : 'text-slate-400'
                  }`}>{f.label}</span>
                  <span className="text-[10px] text-slate-500">{f.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* STUDY CTA */}
          <button
            onClick={startStudy}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-extrabold text-base shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Brain className="w-5 h-5 animate-pulse" />
            Bắt đầu học thẻ ngay
          </button>
        </div>
      )}

      {/* STUDY SCREEN */}
      {screen === 'study' && card && (
        <div className="flex flex-col gap-6">
          {/* TOP NAV BAR */}
          <div className="flex justify-between items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
            <button
              onClick={() => setScreen('home')}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Thoát ra ngoài
            </button>
            <span className="text-xs font-bold text-slate-400">
              Thẻ {currentIdx + 1} / {deck.length}
            </span>
            <div 
              className="px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5"
              style={{ 
                backgroundColor: `${currentTopic?.color || '#3B82F6'}15`, 
                borderColor: `${currentTopic?.color || '#3B82F6'}40`,
                color: currentTopic?.color || '#3B82F6'
              }}
            >
              <span>{currentTopic?.emoji}</span>
              <span>{currentTopic?.label.split('—')[1]?.trim() || ''}</span>
            </div>
          </div>

          {/* DECK PROGRESS BAR */}
          <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/50">
            <div 
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${((currentIdx + 1) / deck.length) * 100}%`,
                backgroundColor: currentTopic?.color || '#6366F1'
              }}
            />
          </div>

          {/* 3D FLIP CARD CONTAINER */}
          <div 
            className="w-full cursor-pointer select-none"
            style={{ perspective: '1200px' }}
            onClick={() => setFlipped(f => !f)}
          >
            <div 
              className="relative w-full transition-transform duration-500 ease-in-out"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                minHeight: '420px'
              }}
            >
              {/* CARD FRONT (QUESTION) */}
              <div 
                className="absolute inset-0 w-full h-full p-6 md:p-8 rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-900/40 backdrop-blur-md shadow-2xl flex flex-col justify-between"
                style={{ 
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase bg-slate-800 text-slate-400 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                    Câu hỏi ôn tập
                  </span>
                  <span className="text-slate-500 text-xs font-semibold">Bấm để lật thẻ 👆</span>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
                  <div className="text-xl md:text-2xl font-bold leading-relaxed text-slate-100 select-all">
                    <MathText text={card.q} />
                  </div>
                </div>

                <div className="text-center text-xs text-slate-500 mt-6 pt-4 border-t border-slate-800/50">
                  Hãy suy nghĩ câu trả lời trước khi lật thẻ kiểm tra.
                </div>
              </div>

              {/* CARD BACK (ANSWER) */}
              <div 
                className="absolute inset-0 w-full h-full p-6 md:p-8 rounded-3xl border shadow-2xl flex flex-col justify-between overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundColor: '#0a0f1d',
                  borderColor: currentTopic?.color || '#3B82F6'
                }}
              >
                {/* Background glow effect based on topic color */}
                <div 
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-20"
                  style={{ backgroundColor: currentTopic?.color || '#3B82F6' }}
                />

                <div className="flex justify-between items-center mb-4 z-10">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase bg-slate-900 text-indigo-300 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    Đáp án chi tiết
                  </span>
                  <span className="text-slate-500 text-xs font-semibold">Bấm để xem lại câu hỏi 👆</span>
                </div>

                <div className="flex-1 overflow-y-auto pr-1 z-10 flex flex-col justify-center">
                  <div className="text-sm md:text-base leading-relaxed text-slate-200 select-all mb-4">
                    <MathText text={card.a} />
                  </div>

                  {card.fig && (
                    <div className="mt-2 bg-slate-950/80 border border-slate-850 p-4 rounded-xl shadow-inner relative overflow-hidden">
                      <div className="absolute top-1 right-2 text-[9px] font-black text-slate-600 tracking-wider">DIAGRAM</div>
                      <pre className="font-mono text-xs text-indigo-300 leading-relaxed overflow-x-auto whitespace-pre">
                        {card.fig}
                      </pre>
                    </div>
                  )}
                </div>

                <div className="text-center text-[10px] text-slate-500 mt-4 pt-3 border-t border-slate-800/40 z-10">
                  Nhấp chọn &quot;Đã nhớ&quot; hoặc &quot;Chưa nhớ&quot; phía dưới để cập nhật tiến độ.
                </div>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS (AFTER FLIPPED OR ALWAYS ACCESSIBLE) */}
          <div className="flex flex-col gap-3">
            {flipped ? (
              <div className="flex gap-4 animate-fadeIn">
                <button
                  onClick={() => markCard(false)}
                  className="flex-1 py-3.5 rounded-2xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-lg shadow-red-500/5"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                  😅 Chưa nhớ
                </button>
                <button
                  onClick={() => markCard(true)}
                  className="flex-1 py-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-lg shadow-emerald-500/5"
                >
                  <Check className="w-5 h-5 stroke-[2.5]" />
                  🎉 Đã nhớ!
                </button>
              </div>
            ) : (
              <p className="text-center text-xs text-slate-400 animate-bounce py-2">
                Hãy nhấn vào thẻ để lật kiểm tra đáp án 👆
              </p>
            )}
          </div>
        </div>
      )}

      {/* SUMMARY SCREEN */}
      {screen === 'summary' && (
        <div className="p-6 md:p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-2xl flex flex-col items-center text-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-3xl border border-indigo-500/30 animate-bounce">
            🏆
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-100">
              Hoàn thành vòng ôn tập!
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-md mx-auto">
              Chúc mừng bạn đã hoàn thành ôn tập toàn bộ thẻ ghi nhớ trong vòng này. Sau đây là kết quả chi tiết:
            </p>
          </div>

          {/* STATS MATRIX */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md my-2">
            <div className="bg-slate-950/60 border border-slate-850 p-4 rounded-2xl text-center flex flex-col justify-center">
              <div className="text-xl md:text-2xl font-black text-emerald-400">
                {deck.filter(c => known[c.id]).length}
              </div>
              <div className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider">Đã nhớ</div>
            </div>
            <div className="bg-slate-950/60 border border-slate-850 p-4 rounded-2xl text-center flex flex-col justify-center">
              <div className="text-xl md:text-2xl font-black text-red-400">
                {deck.filter(c => !known[c.id]).length}
              </div>
              <div className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider">Chưa nhớ</div>
            </div>
            <div className="bg-slate-950/60 border border-indigo-500/15 p-4 rounded-2xl text-center flex flex-col justify-center bg-indigo-500/5">
              <div className="text-xl md:text-2xl font-black text-indigo-300">
                {totalPercent}%
              </div>
              <div className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider">Ghi nhớ tổng</div>
            </div>
          </div>

          {/* TOPIC WISE BARS */}
          <div className="w-full max-w-md text-left flex flex-col gap-3 border-t border-slate-800/80 pt-6 my-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Chi tiết theo chủ đề:</h3>
            {TOPICS.map(t => {
              const tCards = CARDS.filter(c => c.topic === t.id);
              const tKnown = tCards.filter(c => known[c.id]).length;
              const pct = tCards.length > 0 ? Math.round((tKnown / tCards.length) * 100) : 0;
              return (
                <div key={t.id} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <span>{t.emoji}</span>
                      <span>{t.label.split('—')[1]?.trim()}</span>
                    </span>
                    <span className="text-slate-500 font-bold">{tKnown}/{tCards.length} ({pct}%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                    <div 
                      className="h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${pct}%`, backgroundColor: t.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* FINAL ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md border-t border-slate-800/80 pt-6">
            <button
              onClick={() => { setFilter('unknown'); setSelectedTopics([]); setScreen('home'); }}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-98"
            >
              <RotateCcw className="w-4 h-4" />
              Ôn lại thẻ chưa nhớ
            </button>
            <button
              onClick={() => { setFilter('all'); setSelectedTopics([]); setScreen('home'); }}
              className="flex-1 py-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-slate-100 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
            >
              <Home className="w-4 h-4" />
              Về trang chủ học thẻ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
