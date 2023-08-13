import Head from "next/head";
import ResponsiveContainer from "../component/ResponsiveContainer/ResponsiveContainer";
import Main from "./Main/Main.page";

export default function Home() {
  return (
    <ResponsiveContainer>
      <Head>
        <title>Name My Pet</title>
        <meta name="description" content="OpenAI + ChatGPT App" />
      </Head>
      <Main />
    </ResponsiveContainer>
  );
}
