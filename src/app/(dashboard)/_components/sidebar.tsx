import { Button } from "@/components/ui/button";
import {
  Book,
  Bot,
  BotMessageSquare,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DashboardNavAccountMenu } from "@/app/(dashboard)/_components/account-menu";
import { DashboardSidebarNav } from "@/app/(dashboard)/_components/nav";
import { routes } from "@/app/_lib/routes";
import Link from "next/link";

export function DashboardSidebar() {
  return (
    <TooltipProvider delayDuration={0}>
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home" asChild>
            <Link href={routes.dashboard}>
              <BotMessageSquare className="size-5" />
            </Link>
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <DashboardSidebarNav />
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Help"
              >
                <LifeBuoy className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Help
            </TooltipContent>
          </Tooltip>

          <DashboardNavAccountMenu />
        </nav>
      </aside>
    </TooltipProvider>
  );
}
