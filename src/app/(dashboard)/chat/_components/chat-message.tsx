import { cn } from "@/lib/utils";

interface Props {
  message: string;
  isUser?: boolean;
}

export function ChatMessage({ message, isUser }: Props) {
  return (
    <div
      className={cn(
        "flex w-max max-w-[85%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
        isUser ? "ml-auto bg-gray-200" : "bg-primary text-primary-foreground",
      )}
    >
      {message}
    </div>
  );
}
