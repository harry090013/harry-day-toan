'use client';

import React from 'react';
import Link from 'next/link';
import { Home, BookOpen, Compass, ChevronRight, GraduationCap } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Trang chủ', href: '/', icon: Home },
    { name: 'Sổ tay công thức', href: '/so-tay', icon: BookOpen },
    { name: 'Toán lớp 6', href: '/lop/6', icon: GraduationCap },
    { name: 'Toán lớp 7', href: '/lop/7', icon: GraduationCap },
    { name: 'Toán lớp 8', href: '/lop/8', icon: GraduationCap },
    { name: 'Toán lớp 9', href: '/lop/9', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white print:bg-white print:text-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 print:hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-slate-800/80 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
                <Compass className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Toán Hình Web
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                V1.0
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 shadow-inner'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8 z-10 relative print:p-0 print:py-0 print:m-0 print:max-w-full">
        {/* Sidebar for navigation */}
        <aside className="md:w-64 shrink-0 flex flex-col gap-6 print:hidden">
          <div className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm shadow-xl flex flex-col gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">
              Danh mục chính
            </h2>
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </div>
                    {isActive && <ChevronRight className="w-4 h-4 text-indigo-400" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-sm text-xs text-slate-500 leading-relaxed flex flex-col gap-2">
            <div className="font-semibold text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Thông tin lộ trình
            </div>
            Bám sát sách giáo khoa bộ Kết nối tri thức lớp 6–9. Phục vụ đắc lực việc giảng dạy của giáo viên và luyện tập của học sinh.
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0 flex flex-col">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 mt-auto text-center text-xs text-slate-600 print:hidden">
        <div className="max-w-7xl mx-auto px-4">
          Toán Hình Web V1 — Hệ thống học và sinh đề trắc nghiệm tự động bám sát SGK Kết nối tri thức.
        </div>
      </footer>
    </div>
  );
}
