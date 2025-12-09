export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Multiple = 'Multiple'
}

export enum Race {
  Asian = 'Asian',
  Japanese = 'Japanese',
  Chinese = 'Chinese',
  Caucasian = 'Caucasian',
  African = 'African',
  Latino = 'Latino'
}

export enum SkinTone {
  Fair = 'Fair',
  Natural = 'Natural',
  Tan = 'Tan',
  Dark = 'Dark'
}

export enum FacialFeature {
  NaturalMakeup = 'Natural makeup',
  RedLips = 'Red lips',
  Freckles = 'Freckles',
  HighCheekbones = 'High cheekbones',
  SoftFeatures = 'Soft features',
  SharpFeatures = 'Sharp features',
  Mole = 'Beauty mark',
  DewySkin = 'Dewy skin',
  MatteFinish = 'Matte finish',
  DefinedJawline = 'Defined jawline'
}

export enum FemaleTemperament {
  Sweet = 'Sweet',
  Capable = 'Capable',
  Elegant = 'Elegant',
  Relaxed = 'Relaxed'
}

export enum MaleTemperament {
  Sunny = 'Sunny',
  Business = 'Business',
  Trendy = 'Trendy',
  Refined = 'Refined'
}

export enum EyeDirection {
  Camera = 'Looking at camera',
  Side = 'Looking to side',
  OffCamera = 'Gazing off-camera',
  Closed = 'Eyes closed/Natural blink'
}

export enum LightingType {
  SoftShadowless = 'Soft shadowless light',
  CoolWhite = 'Cool white main light',
  WarmAux = 'Warm auxiliary light',
  SideBacklight = 'Side backlighting',
  CommercialFlat = 'Commercial flat light'
}

export interface PromptConfig {
  gender: Gender;
  race: Race;
  skinTone: SkinTone;
  facialFeatures: FacialFeature[];
  count: number;
  temperament: FemaleTemperament | MaleTemperament | string;
  eyeDirection: EyeDirection;
  pose: string;
  lightingType: LightingType;
  colorTemperature: number; // 3000 - 5500
  lightingIntensity: 'Soft' | 'Strong';
  lightingDirection: 'Front' | 'Side' | 'Backlight';
  backgroundColor: string; // Hex or Name
  customColor: string; // Hex or RGB string
  backgroundTexture: {
    blur: boolean;
    gradient: boolean;
    noShadows: boolean;
    softFocus: boolean;
  };
  productDescription: string;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}