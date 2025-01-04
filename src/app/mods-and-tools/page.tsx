import { ArrowDownToLine, ClipboardList } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

import AioVersionSelect from "~/components/aio-version-select";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Heading } from "~/components/ui/heading";
import { IconButton } from "~/components/ui/icon-button";
import { Text } from "~/components/ui/text";

export const metadata: Metadata = {
  title: "Mods & Tools",
  description: "Forza Mods is developing tools for Forza Horizon 4 and Forza Horizon 5. Explore a new dimension of customization and exhilarating gameplay with us.",
  keywords: ["Forza Mods", "Forza Horizon 4 Mods", "Forza Horizon 5 Mods", "Forza Horizon Mods Download", "Forza Horizon 5 Custom Liveries", "Forza Horizon 4 Graphics Mods", "Forza Tuning Setups", "Forza Modding Tools", "Forza AIO Tool", "All in One Forza Mods AIO", "Forza Performance Enhancements", "Forza Car Mods", "Forza Horizon Texture Mods", "Forza Custom Cars", "Forza Modding Guide", "Forza Horizon Gameplay Mods", "Forza Modding Community", "Forza Visual Mods", "Forza Online Mods", "Free Forza Mods", "Forza Horizon Sound Mods", "Forza Community Mods", "Forza Horizon Open Source Tools", "Forza Horizon PC Mods", "Forza Graphics Enhancements"],
  twitter: {
    title: "Mods & Tools",
    description: "Forza Mods is developing tools for Forza Horizon 4 and Forza Horizon 5. Explore a new dimension of customization and exhilarating gameplay with us.",
    images: []
  },
  openGraph: {
    title: "Mods & Tools",
    description: "Do you have any questions or issues about everything related to Forza Mods? You might find your answer here.",
    images: []
  },
}

export default function ModsAndTools() {
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
        Mods & Tools
      </Heading>
      <Text>
        Forza Mods is developing tools for Forza Horizon 4 and Forza Horizon 5.
        Explore a new dimension of customization and exhilarating gameplay with
        us.
      </Text>
      <div className={`${css({ marginTop: 12 })} ${flex({ flexDirection: "column", gap: 8 })}`}>
        <Card.Root width="full" overflow={"visible"}>
          <Card.Header>
            <Card.Title>Forza Mods AIO</Card.Title>
            <Card.Description>
              Forza Mods AIO is a free FH4 and FH5 mod tool that aims to bring cool, new and unique features, all at NO cost!
            </Card.Description>
          </Card.Header>
          <Card.Footer className={flex({
            flexDirection: {
              base: "column",
              md: "row"
            },
            gap: 3
          })}>
            <Link href="https://github.com/ForzaMods/Forza-Mods-AIO">
              <Button className={css({
              width: {
                mdDown: "full",
              }
            })} variant="outline">View on GitHub</Button>
            </Link>
            <div className={`${css({
              width: {
                mdDown: "full",
              }
            })} ${flex({ gap: 3 })}`}>
            <AioVersionSelect />
            </div>
          </Card.Footer>
        </Card.Root>
        <Card.Root width="full" overflow={"visible"}>
          <Card.Header>
            <Card.Title>Saveswapper</Card.Title>
            <Card.Description>
              Tool that&apos;s going to automatically decrypt, replace xuid then reencrypt for you.
            </Card.Description>
          </Card.Header>
          <Card.Footer className={flex({
            flexDirection: {
              base: "column",
              md: "row"
            },
            gap: 3
          })}>
            <Link href="https://github.com/ForzaMods/SaveTools">
              <Button className={css({
              width: {
                mdDown: "full",
              }
            })} variant="outline">View on GitHub</Button>
            </Link>
            <Link href={`https://gist.github.com/szaaamerik/3358f2feff9f613734170be1676c842f`}>
              <Button className={css({
              width: {
                mdDown: "full",
              }
            })} aria-label="Download" variant="outline">
                Read Guide
                <ClipboardList />
              </Button>
            </Link>
            <Link href={`https://github.com/ForzaMods/SaveTools/releases/latest/download/forza_saveswapper.exe`}>
              <IconButton className={css({
              width: {
                mdDown: "full",
              }
            })} aria-label="Download" variant="outline">
                <ArrowDownToLine />
              </IconButton>
            </Link>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  );
}
