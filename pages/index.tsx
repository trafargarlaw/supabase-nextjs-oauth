import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";

const Home = () => {
  const supabaseClient = useSupabaseClient();

  async function signInWithGoogle() {
    await supabaseClient.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: "http://localhost:3000/success",
      },
    });
  }

  return (
    <div className="h-screen flex items-center">
      <div className="w-full flex justify-center">
        <button
          onClick={signInWithGoogle}
          className="bg-blue-800 flex items-center text-gray-50 py-2 px-4 rounded-full hover:bg-blue-600 mt-6"
        >
          <Image
            src="/discord.svg"
            alt="discord logo"
            width={30}
            height={30}
            className="rounded-md"
          />
          <span className="ml-4 ">Login witha discord</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log(" home page ");
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return {
      redirect: {
        destination: "/account",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
