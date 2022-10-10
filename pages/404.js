import React from "react";
import { useRouter } from "Next/router";
import Link from "next/link";

const ErrorPage = () => {
  const router = useRouter();
  //   const handleinput = () => {
  //     router.push("/blog");
  //   };
  return (
    <div>
      <h2>This is a 404 Error Page</h2>
      <Link href="/">
        <a>Go to HomePage</a>
      </Link>
    </div>
  );
};

export default ErrorPage;
