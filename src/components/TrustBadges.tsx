import { CheckCircle2 } from "lucide-react";
import { trustBadges } from "@/config/site";

export function TrustBadges() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2" aria-label="Punti di fiducia">
      {trustBadges.map((badge) => (
        <li
          key={badge}
          className="flex items-center gap-3 rounded-full border border-espresso/10 bg-white/70 px-4 py-3 text-sm font-bold text-espresso"
        >
          <CheckCircle2 aria-hidden size={18} className="text-rose" />
          {badge}
        </li>
      ))}
    </ul>
  );
}
