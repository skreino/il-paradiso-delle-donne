import { MapPin, Phone, Send } from "lucide-react";
import { contactActions } from "@/config/site";

const actions = [
  { label: "WhatsApp", href: contactActions.whatsapp, icon: Send },
  { label: "Chiama", href: contactActions.phone, icon: Phone },
  { label: "Mappa", href: contactActions.directions, icon: MapPin }
];

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-espresso/10 bg-porcelain/95 px-3 py-2 shadow-soft backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.label}
              href={action.href}
              target={action.label === "Chiama" ? undefined : "_blank"}
              rel={action.label === "Chiama" ? undefined : "noreferrer"}
              className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-full bg-espresso text-[0.68rem] font-extrabold text-ivory"
            >
              <Icon aria-hidden size={17} />
              {action.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
