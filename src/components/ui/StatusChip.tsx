import { Circle } from "lucide-react";

export default function StatusChip({ status }: { status: "Live" | "Beta" | "Planned" }) {
  const cls =
    status === "Live" ? "chip chip-live" : status === "Beta" ? "chip chip-beta" : "chip";
  return (
    <span className={cls}>
      <Circle size={8} fill="currentColor" strokeWidth={0} aria-hidden />
      {status}
    </span>
  );
}
