exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

  try {
    const { question, lessonTitle } = JSON.parse(event.body);
    if (!question) return { statusCode: 400, body: JSON.stringify({ error: "Question missing" }) };

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 600,
        messages: [
          {
            role: "system",
            content: `Tu ek expert trading tutor hai. User abhi "${lessonTitle}" lesson padh raha hai.
Hinglish mein jawab de (Hindi + English mix, natural Indian style).
4-6 sentences mein clearly explain karo. Real life examples use karo jaise samoosa, dukan, etc.
Prop firm aur FTMO context relevant rakho. Koi code symbols mat use karo (jaise >, <, ==).
Simple aur friendly tone rakho.`
          },
          { role: "user", content: question }
        ]
      })
    });

    if (!response.ok) {
      const err = await response.json();
      return { statusCode: response.status, body: JSON.stringify({ error: err.error?.message || "Groq API Error" }) };
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || "Jawab nahi mila, dobara try karo.";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server error: " + err.message }) };
  }
};
