import type { Metadata } from "next";

const MDD = {
  title: "Troubleshooting | Forza Mods - The Forza Modding Community",
  description:
    "Having issues with one of our tools? You might resolve your issue here.",
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

const issues: { title: string; answer: string }[] = [
  {
    title: "1. Game crashes upon opening the AIO",
    answer: `
      <p>If your game crashes upon opening the AIO, update the AIO to the latest version. It will always be <a style="text-decoration: underline" href="/tools/aio">here</a>.</p>
    `,
  },
  {
    title:
      '2. The AIO says "Launch FH4 or FH5" or Windows can\'t access the path...',
    answer: `
      <p>Try starting it with Administrator permissions.</p>
    `,
  },
  {
    title: "3. Address wasn't found for this feature",
    answer: `
      <p>Choose the appropriate versions for the game/AIO:</p>
      <p>Currently for FH4, use the older version <a style="text-decoration: underline" href="https://github.com/ForzaMods/AIO/releases/tag/0.0.0.52">here</a> (for best compatibility ~ AIO is being worked on so you don't have to use such an old version, but that's coming soon).</p>
      <p>For FH5, use the latest version available unless you're playing singleplayer, for that, you need to match the AIO release date with the game's update date (usually shortly after the game has been updated, that's the AIO version you should go for).</p>
    `,
  },
  {
    title: "4. Game doesn't launch without AIO even though I used it before",
    answer: `
      <p>This has nothing to do with AIO anymore. Reboot the PC, verify files for the game, update drivers, check your antivirus, and as a last resort, reinstall the game.</p>
    `,
  },
  {
    title: "5. I opened AIO, but I can't access anything",
    answer: `
      <p>Make sure your game is running (as it says in the top left of AIO). Your options will be unlocked once AIO detects the game.</p>
    `,
  },
  {
    title:
      "6. I messed with AIO the last time I was in the game and I accidentally messed a few things up, will it be saved?",
    answer: `
      <p>Depends on what you did. If you messed with cars (suspension, gearing, etc.), it won't be saved, but things like XP, money, and added cars to the garage will be.</p>
    `,
  },
  {
    title: "7. What could I get banned for?",
    answer: `
      <p>If you have decided to use this tool and are worried about a ban, you should stop right away. There aren't things that could get you a lower chance of getting banned; it's 50/50. If you don't want a ban, don't use it. If you want to risk it, continue at your own risk.</p>
      <p>This tool has a high chance of getting you banned if you do things such as accessing currently locked cars and racing with them online or if you get 1B credits in less than 24h. Currently, Anticheat isn't bypassed; hence, be extra cautious.</p>
      <p>You can check <a style="text-decoration: underline" href="https://forza.net/myforza/banhistory">here</a> to see all the bans associated with the Xbox account you log in with. Please note that the bans are issued once you enter the game rather than right after being caught; if you never log into that account, the ban will never appear.</p>
    `,
  },
  {
    title: "8. I have gotten a ban, what now?",
    answer: `
      <p>Firstly, look at the previous point to check what kind of ban you got. If it's a warning/few days ban, just let it expire. If it's until the year 2050 or 9999, you realistically have two options out there:</p>
      <p>One would be to use a high-quality spoofer (spoofs your hardware and tricks Forza that you have a different PC than you do bypassing the ban).</p>
      <p>A much better solution is to just reinstall Windows (no system restore point, just a clean reinstall required).</p>
      <p><strong>NOTE:</strong> DO NOT LOG INTO THE SAME XBOX ACCOUNT FROM THE FRESHLY REINSTALLED WINDOWS, IT WILL GET FLAGGED IMMEDIATELY AND YOU'LL HAVE TO REINSTALL AGAIN.</p>
      <p>Simply create a new Xbox account (it's okay if you own it on Steam/MS Store, you don't need to change those accounts).</p>
    `,
  },
  {
    title:
      "9. I had installed a few mods previously and now the game isn't starting anymore",
    answer: `
      <p>If those mods used to mess with tidetables.zip (allowing you to get seasonal playlists completed instantly) or those mods mess with car bodywork (such as custom bodykits of: twin turbo :insert car here: most likely Huracan/R8), some of those mods still work but they require multiple other mods to make them work correctly (such as UCWP or AIO) and require an older build of the game (meaning no online play).</p>
      <p>If you wish to continue to use those, please downgrade to Series 30, aka versions 3.634.818.0 for MS Store and 1.634.818.0 for Steam (we are currently at s32).</p>
      <p>To solve the game not launching, please verify files, and if that doesn't fix it, try: game reinstall, driver updates.</p>
    `,
  },
  {
    title: "10. What about FM/FM8?",
    answer: `
      <p>The support for FM was short-lived. If you wish to use it, use one of the older releases. <strong>Note:</strong> FM support is bare minimum, meaning only slight car adjustments are available, no money/xp mods.</p>
      <p>Also, if FM upgrades its Anticheat in the future (which may or may not happen seeing the game's current state), this will become obsolete as the game is always.</p>
    `,
  },
  {
    title: "11. How do I know I can trust AIO?",
    answer: `
      <p>AIO is open source and on GitHub with all of its files available for everyone to see and to make their versions of it. Please ignore all the sites that scan it and return it as viruses; those are false positives. And if the code were actually harmful, it would have been taken down by GitHub long ago!</p>
    `,
  },
  {
    title:
      "12. I have bought a modded account, and I got banned, can you help?",
    answer: `
      <p>You should have never bought it in the first place (you got scammed). We don't sell anything. If you wish to support us, you can donate on the following links: <for davs> add here link to donos </for davs> or you can access them via AIO on the top right side.</p>
      <p>And no, we can't help you with that.</p>
    `,
  },
  {
    title: "13. I decided to give it a try, would versions matter?",
    answer: `
      <p>Yes, it does. Please visit <a href="#3" style='text-decoration: underline'>issue NO3</a>.</p>
    `,
  },
  {
    title: "14. Will there be FH3 support in the future?",
    answer: `
      <p>No, the game is at the end of its life and there's not much interest around it (it's also not worth doing it) plus you have dev build to play around with. (if you don't know what it is google it)</p>
    `,
  },
  {
    title: "15. Will AIO return to FM in the future?",
    answer: `
      <p>There are no plans to support Motorsport series going forward, only Horizon will be supported.</p>
    `,
  },
{
  title: "16. Is there a guide on how to saveswap?",
  answer: `
    <p>Yes, there is. You can find a saveswap guide for FH5 <a style='text-decoration: underline' target=_blank href='https://gist.github.com/szaaamerik/ec5a1aa522bed118b33bebbd5433d838'>here</a> and for FH4 you can use the AIO if you have the MS version or <a style='text-decoration: underline' target=_blank href='https://docs.google.com/document/d/1LdXcqBSg1suraLZeKn2tTNIMd1K3bjCIO69l-eYZgpQ/edit'>this guide</a>.</p>
  `,
},
{
  title: "17. What dependencies do I need for the AIO?",
  answer:`
  <p>You just need <a style='text-decoration: underline' target=_blank href='https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-7.0.14-windows-x64-installer'>Dot NET 7.0.14</a>.</p>
  `,
},
{
  title: "18. The AIO got deleted/detected by my Anti Virus/Windows Defender.",
  answer: `
  <p>There's a possibility that when downloading the AIO, your antivirus or Windows Defender might flag it as a virus and automatically delete it. In such cases, you may need to disable the antivirus temporarily or add the AIO to the exclusion list to prevent it from being deleted.</p>
  `

},
];

export default function Troubleshoot() {
  return (
    <main className="p-10">
      <div className="my-10 text-center flex flex-col items-center min-h-[calc(100vh-24rem)]">
        <h1 className="text-3xl font-bold capitalize mb-2">Troubleshooting</h1>
        <p className="max-w-lg">
          Having issues with one of our tools? You might resolve your issue
          here.
        </p>

        <div className="mt-10 max-w-4xl w-full text-left">
          {issues.map((qi, index) => (
            <div id={`${index + 1}`} key={index} className="collapse collapse-arrow border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-medium">
            {qi.title}
          </div>
          <div className="collapse-content">
            <div dangerouslySetInnerHTML={{__html: qi.answer}}></div>
          </div>
        </div>
          ))}
        </div>
      </div>
    </main>
  );
}
