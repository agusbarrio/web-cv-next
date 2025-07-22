import { NextRequest, NextResponse } from "next/server";

// ⚠️ Reemplazá por tus datos reales
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, phone, companyName } = await request.json();

    // Mensaje a enviar por Telegram
    const text = `
📬 *Nuevo mensaje del formulario de contacto*
👤 *Nombre:* ${name}
📧 *Email:* ${email}
📱 *Teléfono:* ${phone || "-"}
🏢 *Empresa:* ${companyName || "-"}
💬 *Mensaje:* ${message}
`.trim();

    // Enviar mensaje por Telegram
    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    return NextResponse.json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error en contacto:", error);
    return NextResponse.json(
      { message: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
