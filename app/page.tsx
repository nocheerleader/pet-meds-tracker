import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Pet Health Tracker</h1>
      {userId ? (
        <div className="space-y-4 text-center">
          <p>Welcome back!</p>
          <Link 
            href="/dashboard" 
            className="text-blue-500 hover:text-blue-600"
          >
            Go to Dashboard
          </Link>
        </div>
      ) : (
        <div className="space-y-4 text-center">
          <p>Please sign in to continue</p>
          <Link 
            href="/sign-in" 
            className="text-blue-500 hover:text-blue-600"
          >
            Sign In
          </Link>
        </div>
      )}
    </main>
  );
}