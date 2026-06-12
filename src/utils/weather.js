import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
} from "lucide-react";

export function getWeatherIcon(code) {
  if (code === 0) return Sun;

  if ([1, 2].includes(code)) return CloudSun;

  if (code === 3) return Cloud;

  if ([45, 48].includes(code)) return CloudFog;

  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return CloudRain;

  if ([71, 73, 75, 77].includes(code)) return CloudSnow;

  if ([95, 96, 99].includes(code)) return CloudLightning;

  return Cloud;
}
