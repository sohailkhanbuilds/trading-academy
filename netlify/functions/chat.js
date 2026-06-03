exports.handler = async (event) => {
  // Only POST allowed
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { question, lessonTitle } = JSON.parse(event.body);

    if (!question) {
      return { statusCode: 400, body: JSON.stringify({ error: "Question missing" }) };
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: `Tu ek trading tutor hai. User abhi "${lessonTitle}" lesson padh raha hai.
Hinglish mein jawab de (Hindi + English mix, jaise Indians bolte hain).
Concise rakho — 3-5 sentences max. Examples se samjhao.
Trading concepts simply explain karo jaise kisi beginner ko bata rahe ho.
Prop firm aur FTMO context mein relevant rakho.`,
        messages: [{ role: "user", content: question }]
      })
    });

    if (!response.ok) {
      const err = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: err.error?.message || "API Error" })
      };
    }

    const data = await response.json();
    const answer = data.content?.[0]?.text || "Jawab nahi mila, dobara try karo.";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer })
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error: " + err.message })
    };
  }
};
