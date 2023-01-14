import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Loading from "../../components/Loading";

const Success = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!router.asPath.split("#")[1]) {
      router.push("/");
    }
    if (session) {
      router.push("/account");
    }
  }, [session, router]);

  return (
    <div className="h-screen flex justify-center items-center gap-2">
      <Loading />
    </div>
  );
};

export default Success;
