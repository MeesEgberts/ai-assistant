import { ModelConfigForm } from "@/app/(dashboard)/chat/_components/config/model-config-form";
import { Chat } from "@/app/(dashboard)/chat/_components/chat";
import { auth } from "@clerk/nextjs/server";
import { getOpenAiApiKey } from "@/app/_lib/data/keys/get-open-ai";
import { redirect } from "next/navigation";
import { routes } from "@/app/_lib/routes";

export default async function Page() {
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
