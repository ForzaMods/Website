import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://forzamods.dev"),
  title: "Troubleshooting | Forza Mods - The Forza Modding Community",
  description:
    "Having issues with one of our tools? You might resolve your issue here.",
  openGraph: {
    title:
      "Troubleshooting | Forza Mods - The Forza Modding Community",
    description:
      "Having issues with one of our tools? You might resolve your issue here.",
  },
  twitter: {
    title:
      "Troubleshooting | Forza Mods - The Forza Modding Community",
    description:
      "Having issues with one of our tools? You might resolve your issue here.",
    creator: "https://d4vss.net",
  },
};

interface TextIssueProps {
  title: string;
  answer: string;
}

const Issue: React.FC<TextIssueProps> = ({ title, answer }) => {
  return (
    <>
      <h2
        className="text-2xl font-bold mb-2 mt-7"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p dangerouslySetInnerHTML={{ __html: answer }}></p>
    </>
  );
};

export default function Troubleshoot() {
  return (
    <main className="p-10">
      <div className="my-10 text-center flex flex-col items-center min-h-[calc(100vh-24rem)]">
        <h1 className="text-3xl font-bold capitalize mb-2">
          Troubleshooting
        </h1>
        <p className="max-w-lg">
          Having issues with one of our tools? You might resolve your issue here. This documentation was written by <Link href="https://github.com/Veki28" target="_blank" className="link underline">GeneralVeki</Link>.
        </p>

        <div className="mt-10 text-left">
          <Issue
            title={"1. Game crashes upon opening the AIO"}
            answer={
              "If your game crashes upon opening the AIO, update the AIO to the latest version. It will always be <Link href='/tools/aio'>here</Link>."
            }
          />

          <Issue
            title={"2. The AIO says &quot;Launch FH4 or FH5&quot;"}
            answer={
              "Try starting it with Administrator permissions. <Image quality={10} className='mt-2' src='/execute-as-admin.png' alt='Executing the AIO with Administrator permissions' width={400} height={0} />"
            }
          />
        </div>
      </div>
    </main>
  );
}
