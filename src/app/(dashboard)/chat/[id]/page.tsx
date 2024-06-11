import { Chat } from "@/app/(dashboard)/chat/_components/chat";
import { ModelConfigForm } from "@/app/(dashboard)/chat/_components/config/model-config-form";
import { redirect } from "next/navigation";
import { routes } from "@/app/_lib/routes";
import { auth } from "@clerk/nextjs/server";
import { getOpenAiApiKey } from "@/app/_lib/data/keys/get-open-ai";

export default async function ChatPage() {
  const { userId } = auth();

  const key = await getOpenAiApiKey(userId!);

  if (!key) redirect(routes.keys);

  return (
    <>
      <ModelConfigForm />
      <Chat />
    </>
  );
}
