import { connection } from "next/server";
import { Suspense } from "react";
import ProfilePageComponent from "./ProfilePageComponent";
import Spiner from "../componets/Spinner";

async function ProfilePageContent() {
  await connection();
  return <ProfilePageComponent />;
}

function page() {
  return (
    <Suspense fallback={<Spiner />}>
      <ProfilePageContent />
    </Suspense>
  );
}
export default page;
