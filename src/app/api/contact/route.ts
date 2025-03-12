// /api/contact

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/mongo/clientPromise";
import { ContactModel } from "@/mongo/schemas";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { name, email, message, phone, companyName } = await request.json();

    await ContactModel.create({
      name,
      email,
      message,
      phone,
      companyName,
    });

    return NextResponse.json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error guardando contacto:", error);
    return NextResponse.json(
      { message: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
