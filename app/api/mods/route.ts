import { NextRequest, NextResponse } from "next/server";

const mod = {
  id: 2,
  title: "2008 BMW M3 E92 DOUBLE TURBO",
  shortDescription: "Features: Formula Drift M2 Engine and Engine Bay Twin Turbos Carbon front grille Removed ...",
  tags: ["Car Mod", "Sound Mod", "Wheel/Tire Mod", "ss"],
  imageUrl: "https://cdn.forzamods.dev/images/335886-2.webp"
}

export async function GET(request: NextRequest) {
  const arrayOf24 = Array(24).fill(mod);
  return NextResponse.json({
    success: true,
    message: "Authorized. Sent 1 page with 24 mods.",
    data: arrayOf24,
  });
}