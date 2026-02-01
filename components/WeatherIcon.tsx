import { Sun, CloudRain, Cloud, CloudLightning } from 'lucide-react';
import { InnerClimate } from '@/types';

export default function WeatherIcon({ climate, className = "w-5 h-5" }: { climate?: string, className?: string }) {
  if (!climate) return null;

  // Normalize string to handle potentially different API return values (key vs value)
  const lowerClimate = climate.toLowerCase();

  if (lowerClimate.includes('sol')) {
    return <Sun className={`text-amber-500 ${className}`} />;
  }
  if (lowerClimate.includes('chuva')) {
    return <CloudRain className={`text-blue-400 ${className}`} />;
  }
  if (lowerClimate.includes('nublado')) {
    return <Cloud className={`text-gray-400 ${className}`} />;
  }
  if (lowerClimate.includes('tempestade')) {
    return <CloudLightning className={`text-purple-600 ${className}`} />;
  }

  return <Sun className={`text-gray-400 ${className}`} />;
}