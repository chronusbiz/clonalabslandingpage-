import {
  Bot,
  Code2,
  Smartphone,
  FlaskConical,
  Rocket,
  Megaphone,
  Box,
  type LucideIcon,
} from "lucide-react";

/** Maps `servicePillars[].icon` strings to lucide icons. */
export const pillarIcons: Record<string, LucideIcon> = {
  Bot,
  Code2,
  Smartphone,
  FlaskConical,
  Rocket,
  Megaphone,
};

export function getPillarIcon(name: string): LucideIcon {
  return pillarIcons[name] ?? Box;
}
