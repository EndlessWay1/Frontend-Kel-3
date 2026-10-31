import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import CreateRecipeForm from "./CreateRecipeForm";

// Hanya user yang login yang bisa mengakses form ini
export default async function CreateRecipePage() {
  const session = await getSession();
  if (!session) redirect("/login");
  return <CreateRecipeForm userName={session.user.name} />;
}
