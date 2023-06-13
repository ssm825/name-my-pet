import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div>
      <Head>
        <title>Name My Pet</title>
        <meta name="description" content="OpenAI + ChatGPT App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="nameinput"
            value={input}
            onChange={handleInput}
            placeholder="반려동물을 입력"
          />
          <button type="submit">이름 만들기</button>
        </form>
      </main>
    </div>
  );
}
