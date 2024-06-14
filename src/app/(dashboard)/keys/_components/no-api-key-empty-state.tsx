import { Key } from "lucide-react";

export function NoApiKeyEmptyState() {
  return (
    <div className="bg-muted/40 border rounded m-8 py-12 space-y-2 text-center">
      <Key className="w-12 h-12 mx-auto mb-8" />
      <div className="text-lg font-semibold">No API Key Found</div>
      <p className="text-sm text-muted-foreground">
        You haven&apos;t added any API keys yet. Click the button above to get
        started.
      </p>
    </div>
  );
}
