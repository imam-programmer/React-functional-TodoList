import React from "react";

export default function TodoApp() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#bebeff] via-[#d6d4ff] to-[#f3e8ff] flex items-start justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-3 mb-7">
          <div className="bg-slate-900 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md shadow-slate-900/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 leading-tight">
              My Tasks
            </h1>
            <p className="text-xs text-slate-500">Stay on top of your day</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-900/10 border border-white/60 overflow-hidden">
          {/* Input row */}
          <div className="p-4 border-b border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a new task..."
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-shadow"
              />
              <button
                className="bg-slate-900 hover:bg-slate-800 active:scale-95 text-white rounded-xl px-4 py-2.5 flex items-center justify-center transition-all shadow-sm shadow-slate-900/20"
                aria-label="Add task"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter row */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 text-xs">
            <div className="flex gap-1 bg-slate-200 rounded-lg p-1">
              <button  className="px-3 py-1 rounded-md text-slate-500 cursor-pointer transition-all hover:text-slate-700 focus:bg-white">
                All
              </button>
              <button id="div" className="px-3 py-1 rounded-md text-slate-500 cursor-pointer transition-all focus:bg-white hover:text-slate-700">
                Active
              </button>
              <button className="px-3 py-1 rounded-md text-slate-500 cursor-pointer focus:bg-white transition-all hover:text-slate-700">
                Completed
              </button>
            </div>
            <span className="text-slate-400 font-medium">3 left</span>
          </div>

          {/* Decorative empty body */}
          <div className="px-4 py-10 flex flex-col items-center justify-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-slate-300"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M8 12h8M8 8h8M8 16h5" />
              </svg>
            </div>
            <p className="text-sm text-slate-400">Your tasks will appear here</p>
          </div>
        </div>


      </div>
    </div>
  );
}