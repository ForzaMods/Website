import type { Metadata } from "next";
import IdeaForm from "@/components/idea-form";
import { auth } from "@/auth";
import { Heading, Text } from "@radix-ui/themes";

const MDD = {
  title: "Ideas | Forza Mods - The Forza Modding Community",
  description:
    "Do you have any ideas to improve our features or suggest new ones? We'd love to hear your thoughts! Let's work together to make our projects even better.",
  openGraphDescription: null,
  base: "https://forzamods.dev",
  image: null || "",
};

export const metadata: Metadata = {
  metadataBase: new URL(MDD.base || "https://d4vss.net"),
  title: MDD.title,
  description: MDD.description,
  openGraph: {
    title: MDD.title,
    description: MDD.openGraphDescription || MDD.description,
    images: [MDD.image],
  },
  twitter: {
    title: MDD.title,
    description: MDD.openGraphDescription || MDD.description,
    images: [MDD.image],
    creator: "https://d4vss.net",
  },
};

export default async function Ideas() {
  const session = await auth();
  if (!session || !session.user) return null;

  return (
    <main className="p-5 md:p-10">
      <div className="flex flex-col items-center">
        <div className="my-10 text-center">
          <Heading as="h1" size="5" className="text-3xl font-bold capitalize mb-2">
            Submit your ideas
          </Heading>
          <Text size="2" className="max-w-md">
            Any suggestions on making things better? Tell us!
          </Text>
        </div>
        <IdeaForm user={session.user} />
      </div>
    </main>
  );
}