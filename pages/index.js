import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pet: input }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.staus}`)
        );
      }
      setResult(data.result);
      setInput("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Name My Pet</title>
        <meta name="description" content="OpenAI + ChatGPT App" />
      </Head>
      <main>
        <img src="/favicon.ico" alt="favicon" />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="pet"
            value={input}
            onChange={handleInput}
            placeholder="반려동물을 입력"
          />
          <button type="submit">이름 만들기</button>
        </form>
        <div>{result}</div>
      </main>
    </div>
  );
}
