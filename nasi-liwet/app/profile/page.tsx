import { connection } from "next/server";
import { Suspense } from "react";
import ProfilePageComponent from "./ProfilePageComponent";

async function ProfilePageContent() {
  await connection();
  return <ProfilePageComponent />;
}

function page() {
  return (
    <Suspense
      fallback={
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg md:text-xl'
          style={{
            display: "absolute",
            top: "50%",
            left: "50%",
            fontWeight: "bold",
            fontSize: "large",
            transform: "translate(-50%,-50%)",
          }}
        >
          Loading ...
        </div>
      }
    >
      <ProfilePageContent />
    </Suspense>
  );
}
export default page;
