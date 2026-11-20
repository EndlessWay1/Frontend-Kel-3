import { connection } from "next/server";
import { Suspense } from "react";
import Spiner from "../../componets/Spinner";
import FavoritePageComponent from "./FavoritePageComponent";

async function FavoritePageContent() {
  await connection();
  return <FavoritePageComponent />;
}

function page() {
  return (
    <Suspense fallback={<Spiner />}>
      <FavoritePageContent />
    </Suspense>
  );
}
export default page;
