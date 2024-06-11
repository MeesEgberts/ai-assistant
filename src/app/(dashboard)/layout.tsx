import { ReactNode } from "react";
import { DashboardSidebar } from "@/app/(dashboard)/_components/sidebar";
import { ModelConfigDrawer } from "@/app/(dashboard)/chat/_components/config/model-config-drawer";

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  return (
    <div className="grid h-screen w-full pl-[53px]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Smart assistant</h1>
          <ModelConfigDrawer />
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </main>
      </div>
    </div>
  );
}
