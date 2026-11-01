import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import CreateRecipeForm from "./CreateRecipeForm";
import { Suspense } from "react";
import Spiner from "../componets/Spinner";
import { connection } from "next/server";

async function CreateRecipeContent() {
  await connection();
  const session = await getSession();
  if (!session) redirect("/login");
  return <CreateRecipeForm userName={session.user.name} />;
}

// Hanya user yang login yang bisa mengakses form ini
export default async function CreateRecipePage() {
  return (
    <Suspense fallback={<Spiner />}>
      <CreateRecipeContent />
    </Suspense>
  );
}
