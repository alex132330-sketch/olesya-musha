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
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: formatMessage(data) }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Telegram API error ${response.status}: ${error}`);
  }
}
