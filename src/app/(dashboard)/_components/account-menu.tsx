"use client";

import { Button } from "@/components/ui/button";
import { Loader, SquareUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function DashboardNavAccountMenu() {
  const router = useRouter();

  const [isNavigating, startNavigation] = useTransition();

  const { signOut, buildUserProfileUrl } = useClerk();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mt-auto rounded-lg"
          aria-label="Account"
        >
          <SquareUser className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem
          disabled={isNavigating}
          onClick={(e) => {
            e.preventDefault();

            startNavigation(() => {
              const url = buildUserProfileUrl();
              router.push(url);
            });
          }}
        >
          {isNavigating && <Loader className="w-4 h-4 animate-spin mr-2" />}
          Security
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
