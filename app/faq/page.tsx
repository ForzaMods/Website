import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://forzamods.dev'),
  title: "FAQ - Forza Mods - The Forza Modding Community",
  description: "Forza Mods is developing tools for Forza Horizon 4 and Forza Horizon 5 that are open source and free.",
  openGraph: {
    title: "Forza Mods - The Forza Modding Community",
    description:
      "Largest Forza Modding community in the world creating user-requested open source and free tools.",
  },
  twitter: {
    title: "Forza Mods - The Forza Modding Community",
    description:
      "Largest Forza Modding community in the world creating user-requested open source and free tools.",
    creator: "https://d4vss.net"
  },
};

const arr = [
  {
    topic: "General",
    questions: [
      {
        question: "Where can I get tools?",
        answer:
          "Most of the tools are hosted on our <a class='underline' target=_blank href='https://github.com/ForzaMods'>GitHub</a> or this website.",
      },
      {
        question: "How do I use the tools on console?",
        answer:
          "You don't. Get a pc or get someone with a pc to mod for you.",
      },
      {
        question: "Do these tools contain viruses?",
        answer:
          "No, they don't. You can view the source code of every tool on our <a class='underline' target=_blank href='https://github.com/ForzaMods'>GitHub</a>.",
      },
      {
        question: "Is anything paid?",
        answer: "No. We believe mods should be free.",
      },
      {
        question: "Can we add a feature?",
        answer:
          "If you wish to have a feature in some tool, you can submit your idea <a class='underline' href='/ideas'>here</a>.",
      },
    ],
  },
  {
    topic: "AIO tool",
    questions: [
      {
        question: "What games does the AIO tool support?",
        answer:
          "The tool supports the latest versions of FH4 and FH5. It works both with the MS (or Xbox App) and the Steam version.",
      },
      {
        question: "What dependencies do I need for the AIO?",
        answer:
          "You just need <a class='underline' target=_blank href='https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-7.0.14-windows-x64-installer'>Dot NET 7.0.14</a>.",
      },
      {
        question: 'I got a "Failed" notification. What should I do?',
        answer: "Restart the game and the AIO tool. This should fix it.",
      },
    ],
  },
  {
    topic: "Swapping",
    questions: [
      {
        question: "How do I modelswap?",
        answer:
          "You can find a modelswap guide on our <a class='underline' target=_blank href='https://discord.gg/forzamods'>Discord Server</a>. <span class='line-through'>You can find a modelswap guide <a class='underline' target=_blank href='/modelswap'>here</a>.</span>",
      },
      {
        question: "How do I saveswap?",
        answer:
          "You can find a saveswap guide for FH5 <a class='underline' target=_blank href='https://gist.github.com/szaaamerik/ec5a1aa522bed118b33bebbd5433d838'>here</a> and for FH4 you can use the AIO if you have the MS version or <a class='underline' target=_blank href='https://docs.google.com/document/d/1LdXcqBSg1suraLZeKn2tTNIMd1K3bjCIO69l-eYZgpQ/edit'>this guide</a>.",
      },
    ],
  },
  {
    topic: "Ban related",
    questions: [
      {
        question: "How can I avoid getting banned?",
        answer:
          "The simple answer is don't mod.<br><br>If you show your gamertag while you have a custom car you can get banned. If you try and bypass the anticheat you can get banned. If you add 999 quadrillion credits and wheelspins to your account you are almost certainly going to get banned.<br><br>Do things sensibly to reduce your chances but as long as you are modding the chance will never be zero.",
      },
      {
        question: "How do I know Im banned?",
        answer:
          "Use <a class='underline' target=_blank href='https://forza.net/myforza/banhistory/'>this website</a> to check your ban history and reason.",
      },
      {
        question: "I got permanently banned. What can I do?",
        answer:
          "Unfortunately your account is banned forever. You will need to create a new account and either use a HWID spoofer or reinstall windows to bypass any subsequent accounts getting automatically shadow banned.<br><br>To avoid flagging the new install DO NOT sign into any account that was on your previous install of windows. You can sign your retail account(account you use to purchase games) into the Microsoft store but DO NOT sign it into the xbox companion app.<br><br>These HWID restrictions do not apply to the Steam version so you can just make a new Xbox live account and log into the game to start playing again.",
      },
    ],
  },
];

export default function Faq() {
    return (
    <main className="p-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold my-10 capitalize">Frequently asked questions</h1>
        {arr.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold mb-8 mt-12 capitalize">{section.topic}</h2>
            <div className="join join-vertical max-w-4xl w-full text-left">
              {section.questions.map((q, i) => (
                <div key={i} className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-medium">
                  {q.question}
                </div>
                <div className="collapse-content">
                  <p dangerouslySetInnerHTML={{__html: q.answer}}></p>
                </div>
              </div>
            
              ))}
              </div>
          </div>
        ))}
      </div>
      <p className="text-center my-10">Still no answer? Ask in our <a className="hover:underline underline" href="https://discord.gg/forzamods" target="_blank">Discord Server</a>!</p>
    </main>
  );
}
