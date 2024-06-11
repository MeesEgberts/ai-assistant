"use client";

import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav-items";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function DashboardSidebarNav() {
  const path = usePathname();

  return navItems.map((item) => (
    <Tooltip key={item.href}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("rounded-lg", path.includes(item.href) && "bg-muted")}
          aria-label={item.label}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="size-5" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {item.label}
      </TooltipContent>
    </Tooltip>
  ));
}
