import Counter from "@/components/counter";
import { Button, Heading, Section, Text } from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const MDD = {
  title: "Forza Mods - The Forza Modding Community",
  description: "Forza Mods is developing tools for Forza Horizon 4 and Forza Horizon 5 that are open source and free.",
  openGraphDescription: "Largest Forza Modding community in the world creating user-requested open source and free tools.",
  base: "https://forzamods.dev",
  image: "/twitter-card.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(MDD.base || 'https://d4vss.net'),
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

export default function Home() {
  return (
    <main>
      <Section className="flex flex-col justify-center items-center gap-10 md:gap-48 min-h-[calc(100vh-25rem)]">
        <div className="flex flex-col justify-center items-center gap-10">
          <Image quality={45} priority className="flex-shrink-0" src="/forzamods-rect.webp" alt="Forza Mods Logo White Rectangle" draggable="false" width={350} height={0} />
          <Text className="mx-auto px-8 max-w-xl text-center">
            Forza Mods is developing tools for Forza Horizon 4 and Forza Horizon 5. Explore a new dimension of customization and exhilarating gameplay with us.
          </Text>
          <Button variant="soft" radius="small" size="2" asChild>
            <Link href="/tools/aio">Start modding</Link>
          </Button>
        </div>
        <div className="flex max-md:flex-col gap-x-16 gap-y-10">
          <div className="text-center">
            <Text size="2" color="gray">AIO Downloads</Text>
            <Heading size="8" as="h3" weight="bold"><Counter from={0} to={1} />M+</Heading>
            <Text size="2" color="gray">A trusted source by many</Text>
          </div>
          <div className="text-center">
            <Text size="2" color="gray">GitHub Stars</Text>
            <Heading size="8" as="h3" weight="bold"><Counter from={0} to={900} />+</Heading>
            <Text size="2" color="gray">That is many stars</Text>
          </div>
          <div className="text-center">
            <Text size="2" color="gray">Discord Members</Text>
            <Heading size="8" as="h3" weight="bold"><Counter from={0} to={80} />K+</Heading>
            <Text size="2" color="gray">A growing community</Text>
          </div>
        </div>
      </Section>
    </main>
  );
}
