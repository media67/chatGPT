import openai from "./chatgpt";
const query = async (prompt: string, chatId: string, model: string) => {
    /* chatId is not being used, but it could be used to make a call to all previous messages of your chat and build 
    your prompt up on that, so that you have contextual chat. */
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );
  return res;
};

export default query
