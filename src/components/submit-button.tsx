"use client";

import { useFormStatus } from "react-dom";
import { Loader, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  label: string;
  icon?: LucideIcon;
}

export function SubmitButton(props: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {props.label}

      {props.icon && !pending && <props.icon className="ml-2 h-4 w-4" />}
      {pending && <Loader className="ml-2 h-4 w-4 animate-spin" />}
    </Button>
  );
}
