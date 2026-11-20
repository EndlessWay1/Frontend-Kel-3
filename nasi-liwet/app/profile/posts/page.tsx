import { connection } from "next/server";
import { Suspense } from "react";
import Spiner from "../../componets/Spinner";
import PostPageComponent from "./PostPageComponent";

async function PostPageContent() {
  await connection();
  return <PostPageComponent />;
}

function page() {
  return (
    <Suspense fallback={<Spiner />}>
      <PostPageContent />
    </Suspense>
  );
}
export default page;
