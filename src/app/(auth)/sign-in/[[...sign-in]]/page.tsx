import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <SignIn />
    </div>
  );
}
