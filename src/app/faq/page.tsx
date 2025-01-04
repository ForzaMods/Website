import { CornerDownRight, HelpCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

import { Accordion } from "~/components/ui/accordion";
import { Alert } from "~/components/ui/alert";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Do you have any questions or issues about everything related to Forza Mods? You might find your answer here.",
  keywords: ["Forza Mods", "Forza Horizon 4 Mods", "Forza Horizon 5 Mods", "Forza Horizon Mods Download", "Forza Horizon 5 Custom Liveries", "Forza Horizon 4 Graphics Mods", "Forza Tuning Setups", "Forza Modding Tools", "Forza AIO Tool", "All in One Forza Mods AIO", "Forza Performance Enhancements", "Forza Car Mods", "Forza Horizon Texture Mods", "Forza Custom Cars", "Forza Modding Guide", "Forza Horizon Gameplay Mods", "Forza Modding Community", "Forza Visual Mods", "Forza Online Mods", "Free Forza Mods", "Forza Horizon Sound Mods", "Forza Community Mods", "Forza Horizon Open Source Tools", "Forza Horizon PC Mods", "Forza Graphics Enhancements"],
  twitter: {
    title: "Frequently Asked Questions",
    description: "Do you have any questions or issues about everything related to Forza Mods? You might find your answer here.",
    images: []
  },
  openGraph: {
    title: "Frequently Asked Questions",
    description: "Do you have any questions or issues about everything related to Forza Mods? You might find your answer here.",
    images: []
  },
}

export default function FrequentlyAskedQuestions() {
  const questions: {
    [category: string]: { question: string; answer: string }[];
  } = {
    General: [
      {
        question: "Where can I get tools?",
        answer:
          "Most of the tools are hosted on our <a class='underline' target=_blank href='https://github.com/ForzaMods'>GitHub</a> or this website.",
      },
      {
        question: "How do I use the tools on console?",
        answer: "You don't. Get a pc or get someone with a pc to mod for you.",
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
    ],
    AIO: [
      {
        question: "Game crashes upon opening the AIO",
        answer:
          "If your game crashes upon opening the AIO, update the AIO to the latest version. It will always be <a style='text-decoration: underline' href='/mods-and-tools'>here</a>.",
      },
      {
        question:
          "The AIO says 'Launch FH4 or FH5' or Windows can't access the path...",
        answer: "Try starting it with Administrator permissions.",
      },
      {
        question: "Address wasn't found for this feature",
        answer:
          "Choose the appropriate versions for the game/AIO: Currently for FH4, use the older version <a style='text-decoration: underline' href='https://github.com/ForzaMods/AIO/releases/tag/0.0.0.52'>here</a> (for best compatibility ~ AIO is being worked on so you don't have to use such an old version, but that's coming soon). For FH5, use the latest version available unless you're playing singleplayer, for that, you need to match the AIO release date with the game's update date (usually shortly after the game has been updated, that's the AIO version you should go for).",
      },
      {
        question: "What dependencies do I need for the AIO?",
        answer:
          "You just need <a style='text-decoration: underline' target=_blank href='https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.4-windows-x64-installer'>Dot NET 8.0.4</a>.",
      },
      {
        question:
          "The AIO got deleted/detected by my Anti Virus/Windows Defender.",
        answer:
          "There's a possibility that when downloading the AIO, your antivirus or Windows Defender might flag it as a virus and automatically delete it. In such cases, you may need to disable the antivirus temporarily or add the AIO to the exclusion list to prevent it from being deleted.",
      },
      {
        question:
          "Game doesn't launch without AIO even though I used it before",
        answer:
          "This has nothing to do with AIO anymore. Reboot the PC, verify files for the game, update drivers, check your antivirus, and as a last resort, reinstall the game.",
      },
      {
        question: "I opened AIO, but I can't access anything",
        answer:
          "Make sure your game is running (as it says in the top left of AIO). Your options will be unlocked once AIO detects the game.",
      },
      {
        question:
          "I messed with AIO the last time I was in the game and I accidentally messed a few things up, will it be saved?",
        answer:
          "Depends on what you did. If you messed with cars (suspension, gearing, etc.), it won't be saved, but things like XP, money, and added cars to the garage will be.",
      },
      {
        question: "What about FM/FM8?",
        answer:
          "The support for FM was short-lived. If you wish to use it, use one of the older releases. Note: FM support is bare minimum, meaning only slight car adjustments are available, no money/xp mods. Also, if FM upgrades its Anticheat in the future (which may or may not happen seeing the game's current state), this will become obsolete as the game is always.",
      },
      {
        question: "How do I know I can trust AIO?",
        answer:
          "AIO is open source and on GitHub with all of its files available for everyone to see and to make their versions of it. Please ignore all the sites that scan it and return it as viruses; those are false positives. And if the code were actually harmful, it would have been taken down by GitHub long ago!",
      },
      {
        question: "Will there be FH3 support in the future?",
        answer:
          "No, the game is at the end of its life and there's not much interest around it (it's also not worth doing it) plus you have dev build to play around with. (if you don't know what it is google it)",
      },
      {
        question: "Will AIO return to FM in the future?",
        answer:
          "There are no plans to support Motorsport series going forward, only Horizon will be supported.",
      },
    ],
    Other: [
      {
        question: "What could I get banned for?",
        answer:
          "If you have decided to use this tool and are worried about a ban, you should stop right away. There aren't things that could get you a lower chance of getting banned; it's 50/50. If you don't want a ban, don't use it. If you want to risk it, continue at your own risk. This tool has a high chance of getting you banned if you do things such as accessing currently locked cars and racing with them online or if you get 1B credits in less than 24h. Currently, Anticheat isn't bypassed; hence, be extra cautious. You can check <a style='text-decoration: underline' href='https://forza.net/myforza/banhistory'>here</a> to see all the bans associated with the Xbox account you log in with. Please note that the bans are issued once you enter the game rather than right after being caught; if you never log into that account, the ban will never appear.",
      },
      {
        question: "I have gotten a ban, what now?",
        answer:
          "Firstly, look at the previous point to check what kind of ban you got. If it's a warning/few days ban, just let it expire. If it's until the year 2050 or 9999, you realistically have two options out there: One would be to use a high-quality spoofer (spoofs your hardware and tricks Forza that you have a different PC than you do bypassing the ban). A much better solution is to just reinstall Windows (no system restore point, just a clean reinstall required). NOTE: DO NOT LOG INTO THE SAME XBOX ACCOUNT FROM THE FRESHLY REINSTALLED WINDOWS, IT WILL GET FLAGGED IMMEDIATELY AND YOU'LL HAVE TO REINSTALL AGAIN. Simply create a new Xbox account (it's okay if you own it on Steam/MS Store, you don't need to change those accounts).",
      },
      {
        question:
          "I had installed a few mods previously and now the game isn't starting anymore",
        answer:
          "If those mods used to mess with tidetables.zip (allowing you to get seasonal playlists completed instantly) or those mods mess with car bodywork (such as custom bodykits of: twin turbo :insert car here: most likely Huracan/R8), some of those mods still work but they require multiple other mods to make them work correctly (such as UCWP or AIO) and require an older build of the game (meaning no online play). If you wish to continue to use those, please downgrade to Series 30, aka versions 3.634.818.0 for MS Store and 1.634.818.0 for Steam (we are currently at s32). To solve the game not launching, please verify files, and if that doesn't fix it, try: game reinstall, driver updates.",
      },
      {
        question:
          "I have bought a modded account, and I got banned, can you help?",
        answer:
          "You should have never bought it in the first place (you got scammed). We don't sell anything. If you wish to support us, you can donate on the following links: <for davs> add here link to donos </for davs> or you can access them via AIO on the top right side. And no, we can't help you with that.",
      },
      {
        question: "Is there a guide/tool on how to saveswap?",
        answer:
          "Yes, there is. You can find a saveswap tool on the <a style='text-decoration: underline' href='/mods-and-tools'>mods and tools</a> page. For FH4 you can use the AIO if you have the MS version or <a style='text-decoration: underline' target=_blank href='https://docs.google.com/document/d/1LdXcqBSg1suraLZeKn2tTNIMd1K3bjCIO69l-eYZgpQ/edit'>this guide</a>.",
      },
    ],
  };

  return (
    <div
      className={css({
        maxWidth: "768px",
        marginX: "auto",
      })}
    >
      <Heading
        size="2xl"
        className={css({
          marginBottom: 2,
          textDecoration: "underline",
          textDecorationColor: "accent.emphasized",
          textDecorationThickness: 2,
        })}
      >
        Frequently Asked Questions
      </Heading>
      <Text>
        Do you have any questions or issues about everything related to Forza
        Mods? You might find your answer here.
      </Text>

      {Object.keys(questions).map((category) => (
        <div
          key={category}
          className={css({
            maxWidth: "768px",
            marginX: "auto",
          })}
        >
          <Heading
            className={css({
              marginTop: 4,
              marginBottom: 2,
              textDecoration: "underline",
              textDecorationColor: "accent.emphasized",
              textDecorationThickness: 2,
            })}
            size="xl"
          >
            {category}
          </Heading>
          <Accordion.Root collapsible multiple unmountOnExit>
            {questions[category].map((entry, index) => (
              <Accordion.Item key={index} value={category + index}>
                <Accordion.ItemTrigger fontSize={15} className={css({ textDecoration: "underline", textDecorationThickness: 0.2 })}>
                  {entry.question}
                </Accordion.ItemTrigger>
                <Accordion.ItemContent
                  className={flex({
                    gap: 2,
                  })}
                >
                  <CornerDownRight
                    size={20}
                    className={css({
                      flexShrink: 0,
                    })}
                    strokeWidth={1.5}
                  />
                  <span
                    dangerouslySetInnerHTML={{ __html: entry.answer }}
                  ></span>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      ))}
      <Alert.Root className={css({ marginTop: 6 })}>
        <Alert.Icon asChild>
          <HelpCircle />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Still no answer?</Alert.Title>
          <Alert.Description>
            Ask on our <Link className={css({
              textDecoration: "underline"
            })} target="_blank" href="https://discord.com/invite/forzamods">Discord Server</Link>!
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </div>
  );
}
