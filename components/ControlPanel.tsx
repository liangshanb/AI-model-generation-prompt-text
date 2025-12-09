import React from 'react';
import { 
  PromptConfig, 
  Gender, 
  Race,
  SkinTone, 
  FacialFeature,
  FemaleTemperament, 
  MaleTemperament, 
  EyeDirection, 
  LightingType 
} from '../types';
import { 
  POSE_OPTIONS, 
  SOLID_BACKGROUNDS, 
  LIGHTING_DESCRIPTIONS,
  FEMALE_TEMPERAMENT_DETAILS,
  MALE_TEMPERAMENT_DETAILS,
  GENDER_LABELS,
  RACE_LABELS,
  SKIN_TONE_LABELS,
  FACIAL_FEATURE_LABELS,
  FEMALE_TEMPERAMENT_LABELS,
  MALE_TEMPERAMENT_LABELS,
  EYE_DIRECTION_LABELS,
  LIGHTING_LABELS,
  INTENSITY_LABELS,
  DIRECTION_LABELS,
  TEXTURE_LABELS
} from '../constants';

interface ControlPanelProps {
  config: PromptConfig;
  setConfig: React.Dispatch<React.SetStateAction<PromptConfig>>;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ config, setConfig }) => {
  
  const handleChange = <K extends keyof PromptConfig>(key: K, value: PromptConfig[K]) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleTextureChange = (key: keyof PromptConfig['backgroundTexture']) => {
    setConfig(prev => ({
      ...prev,
      backgroundTexture: {
        ...prev.backgroundTexture,
        [key]: !prev.backgroundTexture[key]
      }
    }));
  };

  const handleFeatureToggle = (feature: FacialFeature) => {
    setConfig(prev => {
      const exists = prev.facialFeatures.includes(feature);
      return {
        ...prev,
        facialFeatures: exists 
          ? prev.facialFeatures.filter(f => f !== feature)
          : [...prev.facialFeatures, feature]
      };
    });
  };

  const currentTemperamentLabels = config.gender === Gender.Female 
    ? FEMALE_TEMPERAMENT_LABELS 
    : config.gender === Gender.Male 
      ? MALE_TEMPERAMENT_LABELS 
      : { ...FEMALE_TEMPERAMENT_LABELS, ...MALE_TEMPERAMENT_LABELS };

  return (
    <div className="space-y-8 pb-10">
      
      {/* Header */}
      <div className="mb-6 pb-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">摄影棚配置</h2>
        <p className="text-gray-500 mt-1">全方位定制您的模特、光影与拍摄风格。</p>
      </div>

      {/* Product Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
          模特与商品 (Subject & Product)
        </h3>
        <div className="grid grid-cols-1 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">商品描述</label>
            <input 
                type="text" 
                value={config.productDescription}
                onChange={(e) => handleChange('productDescription', e.target.value)}
                placeholder="例如：米色羊绒大衣，过膝款，高级质感"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">性别</label>
                    <select 
                    value={config.gender} 
                    onChange={(e) => {
                        const newGender = e.target.value as Gender;
                        handleChange('gender', newGender);
                        if (newGender === Gender.Female) handleChange('temperament', FemaleTemperament.Sweet);
                        if (newGender === Gender.Male) handleChange('temperament', MaleTemperament.Sunny);
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    >
                    {Object.values(Gender).map(g => (
                        <option key={g} value={g}>{GENDER_LABELS[g]}</option>
                    ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">模特数量</label>
                    <input 
                    type="number" 
                    min={1} 
                    max={5}
                    value={config.count} 
                    onChange={(e) => handleChange('count', parseInt(e.target.value))}
                    className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Model Appearance (New Section) */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
          外貌特征 (Appearance)
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">种族/地区</label>
                <select 
                    value={config.race} 
                    onChange={(e) => handleChange('race', e.target.value as Race)}
                    className="w-full border border-gray-300 rounded-md p-2"
                >
                    {Object.values(Race).map(r => (
                        <option key={r} value={r}>{RACE_LABELS[r]}</option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">肤色</label>
                <select 
                    value={config.skinTone} 
                    onChange={(e) => handleChange('skinTone', e.target.value as SkinTone)}
                    className="w-full border border-gray-300 rounded-md p-2"
                >
                    {Object.values(SkinTone).map(s => (
                        <option key={s} value={s}>{SKIN_TONE_LABELS[s]}</option>
                    ))}
                </select>
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">面部细节</label>
            <div className="flex flex-wrap gap-2">
                {Object.values(FacialFeature).map(feature => (
                    <button
                        type="button"
                        key={feature}
                        onClick={() => handleFeatureToggle(feature)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors
                            ${config.facialFeatures.includes(feature)
                                ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        {FACIAL_FEATURE_LABELS[feature]}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Style & Pose */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
          气质与姿势 (Style & Pose)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">气质风格</label>
                <select 
                value={config.temperament} 
                onChange={(e) => handleChange('temperament', e.target.value as any)}
                className="w-full border border-gray-300 rounded-md p-2"
                >
                {Object.keys(currentTemperamentLabels).map(key => (
                    <option key={key} value={key}>
                        {currentTemperamentLabels[key as keyof typeof currentTemperamentLabels]}
                    </option>
                ))}
                </select>
                <p className="text-xs text-gray-500 mt-1 italic">
                    {config.gender === Gender.Female 
                        ? FEMALE_TEMPERAMENT_DETAILS[config.temperament as FemaleTemperament] 
                        : config.gender === Gender.Male 
                            ? MALE_TEMPERAMENT_DETAILS[config.temperament as MaleTemperament]
                            : ''
                    }
                </p>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">姿势</label>
                <select 
                value={config.pose} 
                onChange={(e) => handleChange('pose', e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                >
                {POSE_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">眼神接触</label>
                <select 
                value={config.eyeDirection} 
                onChange={(e) => handleChange('eyeDirection', e.target.value as EyeDirection)}
                className="w-full border border-gray-300 rounded-md p-2"
                >
                {Object.values(EyeDirection).map(e => (
                    <option key={e} value={e}>{EYE_DIRECTION_LABELS[e]}</option>
                ))}
                </select>
            </div>
        </div>
      </section>

      {/* Lighting Configuration */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">4</span>
          专业布光 (Lighting)
        </h3>
        
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">布光方案</label>
            <select 
            value={config.lightingType} 
            onChange={(e) => handleChange('lightingType', e.target.value as LightingType)}
            className="w-full border border-gray-300 rounded-md p-2"
            >
            {Object.values(LightingType).map(l => (
                <option key={l} value={l}>{LIGHTING_LABELS[l]}</option>
            ))}
            </select>
            <p className="text-xs text-gray-500 mt-1 italic">{LIGHTING_DESCRIPTIONS[config.lightingType]}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">光照强度</label>
                <div className="flex bg-gray-100 rounded p-1">
                    {['Soft', 'Strong'].map((int) => (
                        <button
                            type="button"
                            key={int}
                            onClick={() => handleChange('lightingIntensity', int as any)}
                            className={`flex-1 py-1 text-sm rounded ${config.lightingIntensity === int ? 'bg-white shadow text-indigo-600 font-medium' : 'text-gray-500'}`}
                        >
                            {INTENSITY_LABELS[int]}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">光源方向</label>
                <select 
                    value={config.lightingDirection}
                    onChange={(e) => handleChange('lightingDirection', e.target.value as any)}
                    className="w-full border border-gray-300 rounded-md p-2"
                >
                    {['Front', 'Side', 'Backlight'].map(d => (
                        <option key={d} value={d}>{DIRECTION_LABELS[d]}</option>
                    ))}
                </select>
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                色温 (Color Temp): {config.colorTemperature}K
            </label>
            <input 
                type="range" 
                min="3000" 
                max="5500" 
                step="100"
                value={config.colorTemperature}
                onChange={(e) => handleChange('colorTemperature', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>暖光 (3000K)</span>
                <span>中性</span>
                <span>冷光 (5500K)</span>
            </div>
        </div>
      </section>

      {/* Background & Texture */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">5</span>
          背景与质感 (Background)
        </h3>
        
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">背景颜色</label>
            <div className="flex flex-wrap gap-3">
                {SOLID_BACKGROUNDS.map((bg) => (
                    <button
                        type="button"
                        key={bg.name}
                        onClick={() => handleChange('backgroundColor', bg.name)}
                        className={`w-10 h-10 rounded-full border-2 ${config.backgroundColor === bg.name ? 'border-indigo-600 ring-2 ring-indigo-200' : 'border-gray-200'}`}
                        style={{ backgroundColor: bg.value }}
                        title={bg.label}
                    />
                ))}
            </div>
            <div className="mt-3">
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-24">自定义颜色:</span>
                    <input 
                        type="text" 
                        placeholder="#FFFFFF or RGB"
                        value={config.customColor}
                        onChange={(e) => handleChange('customColor', e.target.value)}
                        className="flex-1 border border-gray-300 rounded-md p-1.5 text-sm font-mono"
                    />
                    {config.customColor && (
                        <div 
                            className="w-8 h-8 rounded border border-gray-200" 
                            style={{ backgroundColor: config.customColor.startsWith('#') || config.customColor.startsWith('rgb') ? config.customColor : '#fff' }} 
                        />
                    )}
                </label>
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">质感增强</label>
            <div className="grid grid-cols-2 gap-2">
                {Object.entries(config.backgroundTexture).map(([key, value]) => (
                     <label key={key} className="flex items-center space-x-2 cursor-pointer p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                        <input 
                            type="checkbox"
                            checked={value}
                            onChange={() => handleTextureChange(key as any)}
                            className="text-indigo-600 focus:ring-indigo-500 rounded"
                        />
                        <span className="text-sm text-gray-700 capitalize">
                            {TEXTURE_LABELS[key] || key}
                        </span>
                     </label>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default ControlPanel;