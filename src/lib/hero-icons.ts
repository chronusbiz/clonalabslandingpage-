import {
  BookOpen,
  Briefcase,
  Building2,
  FolderKanban,
  HelpCircle,
  Landmark,
  Layers,
  MessageCircle,
  Rocket,
  Scale,
  Sparkles,
  Video,
  type LucideIcon,
} from "lucide-react";

export function getHeroIcon(label: string): LucideIcon {
  const key = label.toLowerCase().trim();

  if (key.includes("beyond") || key.includes("pilot")) return Sparkles;
  if (key.includes("about")) return Building2;
  if (key.includes("industr")) return Landmark;
  if (key.includes("service") || key.includes("capabilities")) return Layers;
  if (key.includes("hiring") || key.includes("career")) return Briefcase;
  if (key.includes("touch") || key.includes("contact")) return MessageCircle;
  if (key === "faq") return HelpCircle;
  if (key.includes("blog") || key.includes("field notes")) return BookOpen;
  if (key.includes("legal")) return Scale;
  if (key.includes("webinar")) return Video;
  if (key.includes("portfolio") || key.includes("work")) return FolderKanban;

  return Rocket;
}
