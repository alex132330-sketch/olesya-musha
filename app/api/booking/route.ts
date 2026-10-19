import { NextRequest, NextResponse } from "next/server";
import { sendBookingToTelegram, TelegramBookingPayload } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  const data: TelegramBookingPayload = await req.json();

  await sendBookingToTelegram(data);
  return NextResponse.json({ ok: true });
}
