import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <SignUp />
    </div>
  );
}
