import { redirect } from "next/navigation";
import { createBetterAuthServerClient } from "@/lib/better-auth/server-client";
import CreateRecipeForm from "./CreateRecipeForm";

// Only logged-in users get the form; everyone else is sent to /login.
export default async function CreateRecipePage() {
  const session = await createBetterAuthServerClient();
  if (!session) redirect("/login");
  return <CreateRecipeForm userName={session.user.name} />;
}
