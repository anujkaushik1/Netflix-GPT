import OpenAI from "openai";

const API_KEY =
  "";

const client = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

export const chatCompletion = async (content) =>
  await client.chat.completions.create({
    messages: [{ role: "user", content: content }],
    model: "gpt-3.5-turbo",

  });
