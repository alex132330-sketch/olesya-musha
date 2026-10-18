"use server";

export async function submitContactForm(data: {
  name: string;
  phone: string;
  message: string;
}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram credentials not configured");
  }

  const text =
    `<b>📩 Новая заявка с сайта</b>\n\n` +
    `👤 <b>Имя:</b> ${data.name}\n` +
    `📞 <b>Телефон:</b> ${data.phone}\n` +
    `💬 <b>Сообщение:</b> ${data.message}`;

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.description ?? "Telegram API error");
  }
}
