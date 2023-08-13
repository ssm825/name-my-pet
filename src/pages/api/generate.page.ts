import type { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config({ path: __dirname + "/.env" });

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const language = req.body.language || "";
  const pet = req.body.pet || "";

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `suggest three pet ${language} names that will be our family for the follow ${pet}`,
      temperature: 0.8,
      max_tokens: 100,
    });

    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    if (error instanceof Error) {
      const response = error as any; // Error 타입의 개체를 any로 형변환.
      const { status, data } = response?.response || {}; // response 객체에서 status와 data를 가져옵니다.

      if (response.response) {
        console.error(status, data);
        res.status(status).json(data);
      } else {
        console.error(`OpenAI API 요청 오류 발생 : ${error.message}`);
        res.status(500).json({
          error: {
            message: "요청 중 오류 발생",
          },
        });
      }
    }
  }
}
