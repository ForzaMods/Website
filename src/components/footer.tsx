import { css } from "styled-system/css";
import { flex, grid } from "styled-system/patterns";
import { Heading } from "~/components/ui/heading";
import { Link } from "~/components/ui/link";
import { Text } from "~/components/ui/text";

import NextLink from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className={css({
        paddingY: 8,
        paddingX: {
          base: 6,
          lg: 24,
          "3xl": 48
        },
        borderTop: "1px var(--colors-bg-muted) solid"
      })}>
        <div className={grid({
          gridTemplateColumns: {
            base: "1",
            md: "3"
          },
          gap: 8
        })}>
          <div className={css({
            marginBottom: 1
          })}>
            <Heading size="lg">Useful Links</Heading>
            <div className={flex({
              flexDirection: "column"
            })}>
              <Link asChild>
                <NextLink target="_blank" href="https://forza.net/myforza/banhistory" className={css({
                    width: "fit"
                  })}>
                  <Text fontWeight="normal">Ban history</Text>
                </NextLink>
              </Link>
              <Link asChild>
                <NextLink target="_blank" href="https://github.com/ForzaMods/Forza-Mods-AIO/issues/new?assignees=&labels=bug%2Cneeds-triage&projects=&template=bug_report.yaml" className={css({
                    width: "fit",
                  })}>
                  <Text fontWeight="normal">Report a bug</Text>
                </NextLink>
              </Link>
              <Link asChild>
                <NextLink target="_blank" href="https://github.com/ForzaMods/Forza-Mods-AIO/issues/new?assignees=&labels=needs-triage%2Cenhancement&projects=&template=feature_request.yaml" className={css({
                    width: "fit"
                  })}>
                  <Text fontWeight="normal">Request a feature</Text>
                </NextLink>
              </Link>
            </div>
          </div>
          <div className={css({
            marginBottom: 1
          })}>
            <Heading size="lg">Socials & Partners</Heading>
            <div className={flex({
              flexDirection: "column"
            })}>
              <Link asChild>
                <NextLink target="_blank" href="https://github.com/forzamods" className={css({
                    width: "fit"
                  })}>
                  <Text fontWeight="normal">GitHub</Text>
                </NextLink>
              </Link>
              <Link asChild>
                <NextLink target="_blank" href="https://discord.com/invite/forzamods" className={css({
                    width: "fit",
                  })}>
                  <Text fontWeight="normal">Discord</Text>
                </NextLink>
              </Link>
              <Link colorPalette="green" asChild>
                <NextLink target="_blank" href="https://zap-hosting.com/forzamods" className={css({
                    width: "fit"
                  })}>
                  <Text fontWeight="normal">ZAP-Hosting</Text>
                </NextLink>
              </Link>
            </div>
          </div>
          <div className={css({
            marginBottom: 1
          })}>
            <Heading size="lg">Support us</Heading>
            <div className={flex({
              flexDirection: "column"
            })}>
              <Link asChild>
                <NextLink target="_blank" href="https://ko-fi.com/merikaaaaa" className={css({
                    width: "fit"
                  })}>
                  <Text fontWeight="normal">Ko-fi to Merik</Text>
                </NextLink>
              </Link>
              <Link asChild>
                <NextLink target="_blank" href="https://www.paypal.com/donate?hosted_button_id=DACQKRJ4HTZRN" className={css({
                    width: "fit",
                  })}>
                  <Text fontWeight="normal">PayPal to Yeethan</Text>
                </NextLink>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${css({
        paddingY: 1,
        paddingX: {
          base: 6,
          lg: 24,
          "3xl": 48
        },
        bg: "bg.muted",
      })} ${flex({
        placeItems: "center",
        gap: 4
      })}`}>
        <Image src="/forzamods-square.webp" alt="Forza Mods" width={48} height={48} className={css({ marginTop: 2 })} />
        <Text size="sm" fontWeight="normal">Forza Mods by&nbsp;
          <Link colorPalette="black" asChild>
            <NextLink target="_blank" href="https://www.d4vss.net" className={css({
                width: "fit",
                textDecoration: "underline"
              })}>
              Davsツ
            </NextLink>
          </Link>
        </Text>
      </div>
    </footer>
  );
}