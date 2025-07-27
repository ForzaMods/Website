import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { css } from "styled-system/css";
import LatestReleaseButton from "~/components/latest-release-button";
import NumberTicker from "~/components/number-ticker";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";

const CONSTANTS = {
  aioDownloads: 715224,
  githubStars: 1200,
  discordMembers: 125000
}

export default function Home() {
  return (
    <>
      <div className={css({
        marginTop: "20dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "lg",
        marginX: "auto",
      })}>
        <Heading size="5xl" maxWidth="md" textAlign="center" fontWeight="extrabold">
          Forza Modding with a single click!
        </Heading>
        <Text size="lg" className={css({ marginY: "10px", textAlign: { lgDown: "center" } })}>
          Forza Mods is a community enabling seamless modding and enhancements for an unparalleled Forza gaming experience.
        </Text>
        <div className={css({ display: "flex", gap: 4, marginTop: 4, flexDirection: { base: "row", mdDown: "column" } })}>
          <LatestReleaseButton />
          <Link href="/mods-and-tools">
            <Button variant="subtle" colorPalette="white">
              View all Mods & Tools 
              <ArrowRightIcon />
            </Button> 
          </Link>
        </div>
      </div>
      <div className={css({ marginTop: "10dvh", textAlign: "center", display: "flex", justifyContent: "space-evenly", gap: "16px", flexDirection: { base: "row", mdDown: "column" } })}>
        <div>
          <Text>Incredible</Text>
          <div className={css({ marginY: "5px" })}>
            <NumberTicker from={0} to={CONSTANTS.aioDownloads} durationInMs={2000} />
          </div>
          <Text>AIO downloads</Text>
        </div>
        <div>
          <Text>In excess of</Text>
          <div className={css({ marginY: "5px" })}>
            <NumberTicker from={0} to={CONSTANTS.githubStars} durationInMs={2000} />
          </div>
          <Text>GitHub stars</Text>
        </div>
        <div>
          <Text>More than</Text>
          <div className={css({ marginY: "5px" })}>
            <NumberTicker from={0} to={CONSTANTS.discordMembers} durationInMs={2000} />
          </div>
          <Text>Discord members</Text>
        </div>
      </div>
    </>
  );
}
