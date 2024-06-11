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

export default async function ApiKeysPage() {
  const { userId } = auth();

  const keys = await getAllApiKeys(userId!);

  return (
    <Card>
      <CardHeader className="border-b flex-row justify-between items-center">
        <div className="flex flex-col space-y-1.5">
          <CardTitle>Your API keys</CardTitle>
          <CardDescription>
            Configure your API keys for different AI providers
          </CardDescription>
        </div>
        <AddApiKeyDialog />
      </CardHeader>
      <CardContent className="p-0">
        {keys.map((key) => (
          <div key={key.id}>
            <div>Open AI</div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t"></CardFooter>
    </Card>
  );
}
