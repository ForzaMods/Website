import { NextRequest, NextResponse } from "next/server";

interface FormData {
  [key: string]: string | File;
}

export async function POST(request: NextRequest) {
  var data: FormData = {};

  await request.formData().then((response) => {
    response.forEach(function (value, key) {
      // @ts-ignore
      data[key] = value;
    });
  });

  const turnstileForm = new URLSearchParams([
    ["secret", process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY as string],
    ["response", data["cf-turnstile-response"] as string],
    ["remoteip", request.headers.get("x-forwarded-for") as string],
  ]);

  const turnstileResult = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: turnstileForm,
    }
  );

  const turnstileJson = await turnstileResult.json();

  if (!turnstileJson.success) {
    return NextResponse.json({
      success: false,
      message: "Invalid turnstile token.",
    });
  }

  const embed = {
    title: "New Idea",
    color: 16711680,
    fields: [
      {
        name: "Title",
        value: data["title"].slice(0, 200),
        inline: false,
      },
      {
        name: "Description",
        value: data["description"].slice(0, 2000),
        inline: false,
      },
      {
        name: "Game",
        value: data["game"].slice(0, 100),
        inline: false,
      },
      {
        name: "Type",
        value: data["ideatype"].slice(0, 50),
        inline: false,
      },
    ],
  };

  fetch(process.env.IDEAS_DISCORD_WEBHOOK_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [embed],
    }),
  })

  return NextResponse.json({
    success: true,
    message: "Your idea was successfully sent.",
  });
}
