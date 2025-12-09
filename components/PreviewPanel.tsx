import React, { useState } from 'react';
import { PromptConfig, Gender, FemaleTemperament, MaleTemperament } from '../types';
import { 
    FEMALE_TEMPERAMENT_DETAILS, 
    MALE_TEMPERAMENT_DETAILS, 
    POSE_OPTIONS, 
    LIGHTING_LABELS,
    EYE_DIRECTION_LABELS,
    RACE_LABELS,
    SKIN_TONE_LABELS,
    FACIAL_FEATURE_LABELS,
    GENDER_LABELS,
    INTENSITY_LABELS,
    DIRECTION_LABELS,
    TEXTURE_LABELS,
    SOLID_BACKGROUNDS
} from '../constants';

interface PreviewPanelProps {
  config: PromptConfig;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ config }) => {
  const [copied, setCopied] = useState(false);

  // Construct the prompt string in Chinese
  const constructPrompt = () => {
    const parts = [];

    // Base Subject with Race and Gender
    const raceLabel = RACE_LABELS[config.race].split(' (')[0]; // Extract Chinese part
    const genderLabel = GENDER_LABELS[config.gender].split(' (')[0];
    const countStr = config.count > 1 ? `${config.count}位` : '一位';
    
    parts.push(`一张${countStr}${raceLabel}${genderLabel}的高分辨率专业电商摄影照片`);

    // Appearance Details
    const skinTone = SKIN_TONE_LABELS[config.skinTone];
    parts.push(`肤色：${skinTone}`);

    if (config.facialFeatures.length > 0) {
        const features = config.facialFeatures.map(f => FACIAL_FEATURE_LABELS[f]).join('，');
        parts.push(`面部特征：${features}`);
    }

    // Product (Crucial)
    if (config.productDescription) {
        parts.push(`穿着：${config.productDescription}`);
    } else {
        parts.push(`穿着：时尚潮流服饰`);
    }

    // Pose
    const poseObj = POSE_OPTIONS.find(p => p.value === config.pose);
    const poseLabel = poseObj ? poseObj.label : config.pose;
    parts.push(`姿势：${poseLabel}`);
    
    // Temperament details
    let tempDetail = "";
    if (config.gender === Gender.Female) {
        tempDetail = FEMALE_TEMPERAMENT_DETAILS[config.temperament as FemaleTemperament];
    } else if (config.gender === Gender.Male) {
        tempDetail = MALE_TEMPERAMENT_DETAILS[config.temperament as MaleTemperament];
    }
    if (tempDetail) parts.push(`气质表现：${tempDetail}`);

    // Eye Direction
    parts.push(`眼神：${EYE_DIRECTION_LABELS[config.eyeDirection]}`);

    // Lighting
    const lightType = LIGHTING_LABELS[config.lightingType].split(' (')[0]; // Simplify
    const lightInt = INTENSITY_LABELS[config.lightingIntensity];
    const lightDir = DIRECTION_LABELS[config.lightingDirection];
    parts.push(`布光：${lightType}，${lightInt}强度，${lightDir}`);
    parts.push(`色温：${config.colorTemperature}K`);

    // Background
    let bgLabel = '';
    if (config.customColor) {
        bgLabel = `纯色背景 (${config.customColor})`;
    } else {
        const bgObj = SOLID_BACKGROUNDS.find(b => b.name === config.backgroundColor);
        bgLabel = bgObj ? `纯色背景 (${bgObj.label})` : '纯色背景';
    }
    parts.push(`背景：${bgLabel}`);

    // Texture
    const textures = [];
    if (config.backgroundTexture.blur) textures.push(TEXTURE_LABELS['blur']);
    if (config.backgroundTexture.gradient) textures.push(TEXTURE_LABELS['gradient']);
    if (config.backgroundTexture.noShadows) textures.push(TEXTURE_LABELS['noShadows']);
    if (config.backgroundTexture.softFocus) textures.push(TEXTURE_LABELS['softFocus']);
    
    if (textures.length > 0) {
        parts.push(`画面质感：${textures.join('，')}`);
    }

    // Quality keywords
    parts.push("画质要求：8k超高清，极致细节，真实皮肤质感，商业摄影美学，大师级作品");

    return parts.join('，');
  };

  const prompt = constructPrompt();

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden sticky top-8">
      <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <h2 className="font-semibold text-gray-800">提示词预览 (Prompt)</h2>
        <button 
            onClick={handleCopy}
            className={`text-sm font-medium transition-colors flex items-center ${copied ? 'text-green-600' : 'text-indigo-600 hover:text-indigo-800'}`}
        >
            {copied ? (
                <>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    已复制
                </>
            ) : (
                '复制文本'
            )}
        </button>
      </div>
      
      <div className="p-4">
        <div className="bg-gray-100 p-3 rounded-md text-sm text-gray-700 font-mono leading-relaxed break-words min-h-[150px]">
            {prompt}
        </div>
        <p className="mt-3 text-xs text-gray-500 text-center">
            您可以将此提示词复制到 Midjourney、Stable Diffusion 或其他 AI 绘图工具中使用。
        </p>
      </div>
    </div>
  );
};

export default PreviewPanel;