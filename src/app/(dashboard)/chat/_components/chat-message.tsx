import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

interface Props {
  message: string;
  isUser?: boolean;
}

export function ChatMessage({ message, isUser }: Props) {
  return (
    <div
      className={cn(
        "flex max-w-[85%] overflow-auto flex-col gap-2 rounded-lg px-3 py-2 text-sm",
        isUser ? "ml-auto bg-primary text-primary-foreground" : "bg-gray-200",
      )}
    >
      {isUser ? (
        message
      ) : (
        <span className="prose">
          <Markdown>{message}</Markdown>
        </span>
      )}
    </div>
  );
}
