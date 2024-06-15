"use client";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { CornerDownLeft, Loader, Mic, Paperclip } from "lucide-react";
import { useChat } from "ai/react";
import { ElementRef, useRef } from "react";
import { ChatMessage } from "@/app/(dashboard)/chat/_components/chat-message";

export function Chat() {
  const ref = useRef<ElementRef<"form">>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <Badge variant="outline" className="absolute bg-background right-3 top-3">
        Output
      </Badge>
      <div className="flex-1 pb-2 pt-8 pr-2 space-y-3">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.content}
            isUser={message.role === "user"}
          />
        ))}
      </div>
      <form
        ref={ref}
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          value={input}
          id="message"
          placeholder="Type your message here..."
          onChange={handleInputChange}
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Attach File</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Use Microphone</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button
            disabled={isLoading}
            type="submit"
            size="sm"
            className="ml-auto gap-1.5 transition ease-in-out"
          >
            {isLoading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Send Message
                <CornerDownLeft className="size-3.5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
