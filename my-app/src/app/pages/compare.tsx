import React, { useState } from 'react';
        import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Compare() {
    return (
        
        export default function DSPInterface() {
          const [currentQuestion, setCurrentQuestion] = useState(0);
          const [caretakerSearch, setCaretakerSearch] = useState('');
          const [observerSearch, setObserverSearch] = useState('');
        
          const categories = [
            { id: 1, label: 'BELONGING' },
            { id: 2, label: 'LIFE LONG LEARNING' },
            { id: 3, label: 'HEALTHY LIVING' }
          ];
        
          const choices = ['CHOICE', 'CHOICE', 'CHOICE', 'CHOICE', 'CHOICE'];
        
          const questions = [
            'Question written out',
            'Another question here',
            'Third question example'
          ];
        
          const handlePrevious = () => {
            setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : questions.length - 1));
          };
        
          const handleNext = () => {
            setCurrentQuestion((prev) => (prev < questions.length - 1 ? prev + 1 : 0));
          };
        
          return (
            <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-600 p-8">
              <div className="max-w-7xl mx-auto flex gap-6">
                {/* Section 8 - Left Sidebar */}
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-1 mb-4 inline-block">
                    <h2 className="text-lg font-semibold px-3 py-1">Section 8</h2>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6 space-y-6">
                    {/* Choices Box */}
                    <div className="bg-teal-900 rounded-lg p-6 border-4 border-black">
                      <div className="space-y-3">
                        {choices.map((choice, index) => (
                          <div
                            key={index}
                            className="bg-white rounded px-4 py-2 text-sm font-medium text-gray-800"
                          >
                            {choice}
                          </div>
                        ))}
                      </div>
                    </div>
        
                    {/* Category Buttons */}
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className="w-full bg-teal-900 text-white rounded-lg py-4 px-6 text-lg font-semibold hover:bg-teal-800 transition-colors"
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
        
                {/* Section 7 - Main Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-1 mb-4 inline-block">
                    <h2 className="text-lg font-semibold px-3 py-1">Section 7</h2>
                  </div>
        
                  <div className="bg-white rounded-lg p-8">
                    {/* Caretaker Search Bar */}
                    <div className="mb-8">
                      <input
                        type="text"
                        placeholder="Search Bar (for dsp caretaker)"
                        value={caretakerSearch}
                        onChange={(e) => setCaretakerSearch(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-rose-400 placeholder-rose-400 focus:outline-none focus:border-rose-400"
                      />
                    </div>
        
                    {/* Question Display with Navigation */}
                    <div className="flex items-center justify-center gap-8 mb-8">
                      <button
                        onClick={handlePrevious}
                        className="text-rose-400 hover:text-rose-500 transition-colors"
                      >
                        <ChevronLeft size={60} fill="currentColor" />
                      </button>
        
                      <div className="text-center">
                        <div className="text-5xl font-bold text-teal-900 mb-2">CHOICE</div>
                        <div className="text-xl text-gray-600">"{questions[currentQuestion]}"</div>
                      </div>
        
                      <button
                        onClick={handleNext}
                        className="text-rose-400 hover:text-rose-500 transition-colors"
                      >
                        <ChevronRight size={60} fill="currentColor" />
                      </button>
                    </div>
        
                    {/* Observer Search Bar */}
                    <div className="mb-8">
                      <input
                        type="text"
                        placeholder="Search Bar (for dsp observer)"
                        value={observerSearch}
                        onChange={(e) => setObserverSearch(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-rose-400 placeholder-rose-400 focus:outline-none focus:border-rose-400"
                      />
                    </div>
        
                    {/* DSP Panels */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="bg-teal-900 rounded-lg p-8 min-h-[300px]">
                        <h3 className="text-white text-2xl font-semibold text-center">
                          DSP CARETAKER
                        </h3>
                      </div>
        
                      <div className="bg-teal-900 rounded-lg p-8 min-h-[300px]">
                        <h3 className="text-white text-2xl font-semibold text-center">
                          OBSERVER
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }

    
    );
  }