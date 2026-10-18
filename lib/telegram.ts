export interface TelegramBookingPayload {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  comment?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  consultation: "Консультация нутрициолога",
  "nutrition-plan": "Программа питания",
  subscription: "Подписка на практики",
};

function formatMessage(data: TelegramBookingPayload): string {
  return [
    "📋 Новая заявка с сайта!",
    `👤 Имя: ${data.name}`,
    `📞 Телефон: ${data.phone}`,
    `📧 Email: ${data.email}`,
    `💼 Услуга: ${SERVICE_LABELS[data.serviceType] ?? data.serviceType}`,
    data.comment ? `💬 Комментарий: ${data.comment}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendBookingToTelegram(
  data: TelegramBookingPayload
): Promise<void> {
  // TODO: замените на реальный вызов Telegram Bot API
  //
  // const botToken = process.env.TELEGRAM_BOT_TOKEN;
  // const chatId  = process.env.TELEGRAM_CHAT_ID;
  //
  // await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ chat_id: chatId, text: formatMessage(data) }),
  // });

  console.log("[Telegram] Sending booking:", formatMessage(data));
  await new Promise((r) => setTimeout(r, 700)); // имитация сетевого запроса
}
