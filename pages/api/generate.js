import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config({ path: __dirname + "/.env" });

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
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
  if (pet.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "반려동물을 입력해 주세요!",
      },
    });
    return;
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `suggest three pet ${language} names that will be our family for the follow ${pet}`,
      temperature: 0.8,
      max_tokens: 100,
    });

    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    const { status, data } = error.response;
    if (error.response) {
      console.error(status, data);
      res.stauts(status).json(data);
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
