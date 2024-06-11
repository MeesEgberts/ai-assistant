import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function KeysLayout({ children }: Props) {
  return <div className="w-full col-span-3">{children}</div>;
}
