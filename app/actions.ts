"use server";

import { auth } from "@/auth";

type IdeaType = "new" | "change" | "remove";

const types: Record<IdeaType, string> = {
  new: "Suggestion to add something new",
  change: "Suggestion to change something",
  remove: "Suggestion to remove something",
};

export async function submitIdea(prevState: number | undefined, formData: FormData) {
  const session = await auth();
  const user = session?.user;
  const ideaType = formData.get("ideatype") as IdeaType | null;
  if (!ideaType) {
    return 400;
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const game = formData.get("game") as string;

  const embed = {
    color: 0xb4c8e6,
    description: `
      ## New request by ${user?.name}
      ### Title
      \`\`\`${title.slice(0, 100)}\`\`\`
      ### Description\n
      \`\`\`${description.slice(0, 2000)}\`\`\`
      ### Game \n
      \`\`\`${game.slice(0, 50)}\`\`\`
      ### Request type \n
      \`\`\`${types[ideaType]}\`\`\`
      ### Author information
      \`\`\`Email address: ${user?.email} - ${user?.id}\`\`\`
    `,
  };

  fetch(process.env.CUSTOM_DISCORD_WEBHOOK_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [embed],
    }),
  });

  return 200;
}