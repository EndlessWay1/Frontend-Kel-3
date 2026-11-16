import { connection } from "next/server";
import Login from "./Login";
import { Suspense } from "react";
import Spiner from "../componets/Spinner";
// import LoginSignUpCotent from "./LoginSignUpCotent";

async function LoginSignUpContent() {
  await connection();

  return <Login />;
}

function LoginSignUpPage() {
  return (
    <Suspense fallback={<Spiner />}>
      <LoginSignUpContent />;
    </Suspense>
  );
}
export default LoginSignUpPage;
