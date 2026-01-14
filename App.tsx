
import React, { useState } from 'react';
import { View } from './types';
import { Home } from './components/Home';
import { Charlie } from './components/Charlie';
import { About } from './components/About';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return <Home />;
      case View.CHARLIE:
        return <Charlie />;
      case View.ABOUT:
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative bg-slate-950 text-slate-50 flex flex-col p-6 pb-24">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase">App Name</span>
          <h1 className="text-lg font-bold">Suzaina Shrestha</h1>
        </div>
        <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
          <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden">
        {renderContent()}
      </main>

      {/* Modern Bottom Navigation Bar (The 3 Buttons) */}
      <nav className="fixed bottom-6 left-6 right-6 max-w-md mx-auto glass p-3 rounded-3xl flex items-center justify-between shadow-2xl z-50">
        <button 
          onClick={() => setCurrentView(View.HOME)}
          className={`flex-1 flex flex-col items-center py-2 transition-all duration-300 rounded-2xl ${
            currentView === View.HOME ? 'bg-white/10 text-white' : 'text-slate-500'
          }`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </button>

        <button 
          onClick={() => setCurrentView(View.CHARLIE)}
          className={`flex-1 flex flex-col items-center py-2 transition-all duration-300 rounded-2xl ${
            currentView === View.CHARLIE ? 'bg-white/10 text-white' : 'text-slate-500'
          }`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest">Charlie</span>
        </button>

        <button 
          onClick={() => setCurrentView(View.ABOUT)}
          className={`flex-1 flex flex-col items-center py-2 transition-all duration-300 rounded-2xl ${
            currentView === View.ABOUT ? 'bg-white/10 text-white' : 'text-slate-500'
          }`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest">About</span>
        </button>
      </nav>

      {/* Mobile background glows for aesthetic */}
      <div className="fixed -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      <div className="fixed -bottom-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default App;
