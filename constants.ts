import { FemaleTemperament, MaleTemperament, LightingType, Gender, EyeDirection, Race, SkinTone, FacialFeature } from './types';

export const GENDER_LABELS: Record<Gender, string> = {
  [Gender.Female]: "女性 (Female)",
  [Gender.Male]: "男性 (Male)",
  [Gender.Multiple]: "多人 (Multiple)"
};

export const RACE_LABELS: Record<Race, string> = {
  [Race.Asian]: "亚洲 (Asian)",
  [Race.Japanese]: "日本 (Japanese)",
  [Race.Chinese]: "中国 (Chinese)",
  [Race.Caucasian]: "白人 (Caucasian)",
  [Race.African]: "黑人 (African)",
  [Race.Latino]: "拉丁裔 (Latino)"
};

export const SKIN_TONE_LABELS: Record<SkinTone, string> = {
  [SkinTone.Fair]: "白皙肤色",
  [SkinTone.Natural]: "自然肤色",
  [SkinTone.Tan]: "小麦肤色",
  [SkinTone.Dark]: "深色肤色"
};

export const FACIAL_FEATURE_LABELS: Record<FacialFeature, string> = {
  [FacialFeature.NaturalMakeup]: "自然裸妆",
  [FacialFeature.RedLips]: "复古红唇",
  [FacialFeature.Freckles]: "俏皮雀斑",
  [FacialFeature.HighCheekbones]: "高级颧骨",
  [FacialFeature.SoftFeatures]: "柔和五官",
  [FacialFeature.SharpFeatures]: "立体五官",
  [FacialFeature.Mole]: "美人痣",
  [FacialFeature.DewySkin]: "水光肌",
  [FacialFeature.MatteFinish]: "高级哑光",
  [FacialFeature.DefinedJawline]: "清晰下颌"
};

export const FEMALE_TEMPERAMENT_LABELS: Record<FemaleTemperament, string> = {
  [FemaleTemperament.Sweet]: "甜美亲切",
  [FemaleTemperament.Capable]: "干练职场",
  [FemaleTemperament.Elegant]: "优雅知性",
  [FemaleTemperament.Relaxed]: "松弛自然"
};

export const MALE_TEMPERAMENT_LABELS: Record<MaleTemperament, string> = {
  [MaleTemperament.Sunny]: "阳光活力",
  [MaleTemperament.Business]: "商务精英",
  [MaleTemperament.Trendy]: "潮流时尚",
  [MaleTemperament.Refined]: "儒雅内敛"
};

export const EYE_DIRECTION_LABELS: Record<EyeDirection, string> = {
  [EyeDirection.Camera]: "直视镜头",
  [EyeDirection.Side]: "看向侧面",
  [EyeDirection.OffCamera]: "凝视画外",
  [EyeDirection.Closed]: "闭眼/微闭"
};

export const FEMALE_TEMPERAMENT_DETAILS: Record<FemaleTemperament, string> = {
  [FemaleTemperament.Sweet]: "甜美气质，露出6-8颗牙齿的微笑，温暖平易近人",
  [FemaleTemperament.Capable]: "干练气质，自信的微笑，职业领袖气场",
  [FemaleTemperament.Elegant]: "优雅气质，从容镇定的表情，优美的体态",
  [FemaleTemperament.Relaxed]: "松弛感，自然温柔的表情，随性真实的氛围"
};

export const MALE_TEMPERAMENT_DETAILS: Record<MaleTemperament, string> = {
  [MaleTemperament.Sunny]: "阳光气质，自然开朗的笑容，充满活力和友善",
  [MaleTemperament.Business]: "商务气质，严肃专注的表情，目光锐利，下颌线果断",
  [MaleTemperament.Trendy]: "潮流气质，酷感自信，时尚氛围，放松的眉宇",
  [MaleTemperament.Refined]: "儒雅气质，温和的表情，知性氛围，五官柔和"
};

export const POSE_OPTIONS = [
  { value: "Full body standing, straight posture", label: "全身站立，姿势挺拔" },
  { value: "Standing, one leg slightly forward", label: "站立，单腿微前倾" },
  { value: "Standing, leaning against invisible wall", label: "站立，身体微倚靠" },
  { value: "Walking towards camera, dynamic motion", label: "向镜头走来，动态感" },
  { value: "Standing, arms crossed confidently", label: "自信抱臂站立" },
  { value: "Standing, hands in pockets", label: "双手插兜站立" },
  { value: "Side profile standing", label: "侧身站立展示" },
  { value: "Three-quarter turn standing", label: "四分之三侧身" },
  { value: "Sitting on a high stool, elegant", label: "高脚凳坐姿，优雅时尚" },
  { value: "Sitting on floor, casual legs crossed", label: "地面坐姿，盘腿休闲" },
  { value: "Sitting on chair, leaning forward", label: "椅子坐姿，身体前倾互动" },
  { value: "Crouching low, cool streetwear vibe", label: "下蹲姿势，酷感街头风" },
  { value: "Jumping mid-air, dynamic energy", label: "跳跃抓拍，活力腾空" },
  { value: "Running action, athletic style", label: "奔跑动作，运动风格" },
  { value: "Leaning forward towards camera, engaging", label: "凑近镜头，强互动感" },
  { value: "Hands on hips, power pose", label: "双手叉腰，气场全开" },
  { value: "Walking away, looking back over shoulder", label: "转身离去，回头一瞥" },
  { value: "Close-up portrait, focus on face", label: "面部特写，聚焦五官" },
  { value: "Upper body, one hand touching face", label: "半身特写，单手抚脸" },
  { value: "Back view, artistic silhouette", label: "背影展示，艺术轮廓" }
];

export const LIGHTING_LABELS: Record<LightingType, string> = {
  [LightingType.SoftShadowless]: "柔和无影光",
  [LightingType.CoolWhite]: "冷白主光",
  [LightingType.WarmAux]: "暖色氛围光",
  [LightingType.SideBacklight]: "侧逆光",
  [LightingType.CommercialFlat]: "商业平光"
};

export const LIGHTING_DESCRIPTIONS: Record<LightingType, string> = {
  [LightingType.SoftShadowless]: "适合展现服装细节，光线均匀，无强烈阴影",
  [LightingType.CoolWhite]: "清爽现代感，还原真实色彩",
  [LightingType.WarmAux]: "增加温馨的生活化氛围",
  [LightingType.SideBacklight]: "增强轮廓感和立体感，将主体与背景分离",
  [LightingType.CommercialFlat]: "高清晰度，标准目录风格，明亮通透"
};

export const SOLID_BACKGROUNDS = [
  { name: 'Pure White', label: '纯白', value: '#FFFFFF' },
  { name: 'Light Gray', label: '浅灰', value: '#F3F4F6' },
  { name: 'Off White', label: '米白', value: '#FAF9F6' },
  { name: 'Light Blue', label: '淡蓝', value: '#E0F2FE' },
  { name: 'Light Camel', label: '驼色', value: '#F5E6D3' },
  { name: 'Charcoal', label: '深灰', value: '#374151' },
];

export const INTENSITY_LABELS: Record<string, string> = {
  'Soft': '柔和',
  'Strong': '强烈'
};

export const DIRECTION_LABELS: Record<string, string> = {
  'Front': '正面光',
  'Side': '侧光',
  'Backlight': '逆光'
};

export const TEXTURE_LABELS: Record<string, string> = {
  'blur': '背景虚化',
  'gradient': '柔和渐变',
  'noShadows': '去阴影',
  'softFocus': '柔焦效果'
};