import { getAllApiKeys } from "@/app/_lib/data/keys/get-all";
import { auth } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddApiKeyDialog } from "@/app/(dashboard)/keys/_components/add-api-key-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DeleteApiKeyDialog } from "@/app/(dashboard)/keys/_components/delete-api-key-dialog";
import { NoApiKeyEmptyState } from "@/app/(dashboard)/keys/_components/no-api-key-empty-state";

export default async function ApiKeysPage() {
  const { userId } = auth();

  const keys = await getAllApiKeys(userId!);

  return (
    <Card>
      <CardHeader className="border-b flex-row justify-between items-center">
        <div className="flex flex-col space-y-1.5 mr-1">
          <CardTitle>Your API keys</CardTitle>
          <CardDescription>
            Configure your API keys for different AI providers
          </CardDescription>
        </div>
        <AddApiKeyDialog disabled={keys.length > 0} />
      </CardHeader>
      <CardContent className="p-0">
        {keys.length === 0 && <NoApiKeyEmptyState />}
        {keys.map((key) => (
          <div key={key.id} className="px-6 py-3 flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="models/open_ai.png" alt="Open AI" />
              <AvatarFallback>OA</AvatarFallback>
            </Avatar>

            <p className="leading-7">Open AI</p>

            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {key.key.substring(0, 10) + "..."}
            </code>

            <div className="flex-1 text-right">
              <DeleteApiKeyDialog id={key.id} />
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t"></CardFooter>
    </Card>
  );
}
