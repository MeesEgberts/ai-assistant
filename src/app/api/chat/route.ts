import { convertToCoreMessages, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { auth } from "@clerk/nextjs/server";
import { getOpenAiApiKey } from "@/app/_lib/data/keys/get-open-ai";

// Allow streaming responses up to 60 seconds
export const maxDuration = 60;

export async function POST(request: Request) {
  const { messages } = await request.json();

  const { userId } = auth();

  if (!userId) throw new Error("Unauthorized");

  /*const apiKey = await getOpenAiApiKey(userId);

  if (!apiKey) throw new Error("No OpenAI API key found");

  const openai = createOpenAI({
    apiKey: apiKey.key,
  });

   */

  const result = await streamText({
    model: openai("gpt-4o"),
    messages: convertToCoreMessages(messages),
  });

  return result.toAIStreamResponse();
}
