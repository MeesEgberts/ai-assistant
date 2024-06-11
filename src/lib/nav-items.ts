import {
  KeyRound,
  KeyRoundIcon,
  LucideIcon,
  MessageSquare,
} from "lucide-react";
import { routes } from "@/app/_lib/routes";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: "Chats",
    icon: MessageSquare,
    href: routes.chats,
  },
  {
    label: "API keys",
    icon: KeyRound,
    href: routes.keys,
  },
];
