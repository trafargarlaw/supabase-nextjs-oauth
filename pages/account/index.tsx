import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
  useSession,
  useSupabaseClient,
  useUser,
  Session,
} from "@supabase/auth-helpers-react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";

interface AccountProps {
  session: Session;
}

const Account: React.FC<AccountProps> = ({ session }) => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  async function handleLogout() {
    await supabaseClient.auth.signOut();
  }
  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT") {
      router.push("/");
    }
  });
  return (
    <div className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100 flex">
      <span className="flex w-full items-center justify-between">
        <span className="flex min-w-0 items-center justify-between space-x-3">
          <img
            className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            src={session.user.user_metadata.avatar_url}
            alt=""
          />
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="truncate text-sm font-medium text-gray-900">
              {session.user.user_metadata.user_name}
            </span>
            <span className="truncate text-sm text-gray-500">
              {session.user.user_metadata.name}
            </span>
          </span>
        </span>
      </span>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log("account pagee");
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
