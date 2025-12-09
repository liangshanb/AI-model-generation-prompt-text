import React, { useState } from 'react';
import { PromptConfig, Gender, Race, SkinTone, FemaleTemperament, EyeDirection, LightingType } from './types';
import ControlPanel from './components/ControlPanel';
import PreviewPanel from './components/PreviewPanel';

const DEFAULT_CONFIG: PromptConfig = {
  gender: Gender.Female,
  race: Race.Asian,
  skinTone: SkinTone.Fair,
  facialFeatures: [],
  count: 1,
  temperament: FemaleTemperament.Sweet,
  eyeDirection: EyeDirection.Camera,
  pose: 'Full body standing, straight posture',
  lightingType: LightingType.SoftShadowless,
  colorTemperature: 4500,
  lightingIntensity: 'Soft',
  lightingDirection: 'Front',
  backgroundColor: 'Pure White',
  customColor: '',
  backgroundTexture: {
    blur: false,
    gradient: false,
    noShadows: false,
    softFocus: false,
  },
  productDescription: ''
};

const App: React.FC = () => {
  // Initial State Definition
  const [config, setConfig] = useState<PromptConfig>(DEFAULT_CONFIG);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                AI
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              电商 AI <span className="text-indigo-600">提示词工作室</span>
            </h1>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            专业级电商模特提示词生成器
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Controls */}
            <div className="w-full lg:w-7/12 xl:w-2/3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <ControlPanel 
                      config={config} 
                      setConfig={setConfig} 
                    />
                </div>
            </div>

            {/* Right Column: Preview & Output */}
            <div className="w-full lg:w-5/12 xl:w-1/3">
               <PreviewPanel config={config} />
            </div>

        </div>
      </main>
    </div>
  );
};

export default App;