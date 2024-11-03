"use client"

import { ChartNoAxesGantt, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { css } from "styled-system/css";
import { flex } from 'styled-system/patterns'
import { Button } from "~/components/ui/styled/button";
import { Drawer } from "./ui/drawer";
import { IconButton } from "./ui/icon-button";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css({
      paddingY: 2,
      paddingX: {
        base: 6,
        lg: 24,
        '3xl': 48
      },
      borderBottom: "1px var(--colors-bg-muted) solid"
    })}>
      <header className={
        flex({
          direction: "row",
          justify: "space-between",
          alignItems: "center"
        })}>
        <Link href="/">
          <Image priority src="/forzamods-square.webp" alt="Forza Mods" width={80} height={80} />
        </Link>
        <nav className={flex({
            direction: "row",
            gap: 6,
            alignItems: "center",
            display: {
              base: "none",
              md: "flex"
            }
          })}>
          <Button colorPalette="violet" variant="subtle" asChild>
            <Link href="/mods-and-tools">
              Mods & Tools
            </Link>
          </Button>
          <Button colorPalette="violet" variant="subtle" asChild>
            <Link href="/faq">
              Frequently Asked Questions
            </Link>
          </Button>
          <Button colorPalette="violet" variant="subtle" asChild>
            <Link target="_blank" href="https://github.com/forzamods">
              GitHub
            </Link>
          </Button>
        </nav>
        
        <Drawer.Root open={isOpen}>
          <Drawer.Trigger onClick={() => setIsOpen(true)} asChild>
            <ChartNoAxesGantt className={css({ display: { md: "none" }})} />
          </Drawer.Trigger>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>
                  <Image src="/forzamods-rect.webp" alt="Forza Mods" width={96} height={0}></Image>
                </Drawer.Title>
                <Drawer.CloseTrigger asChild position="absolute" top="3" right="4" onClick={() => setIsOpen(false)}>
                  <IconButton variant="ghost">
                    <XIcon />
                  </IconButton>
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body className={flex({ flexDirection: "column", gap: 4 })}>
                <Button onClick={() => setIsOpen(false)} colorPalette="violet" variant="subtle" asChild>
                  <Link href="/mods-and-tools">
                    Mods & Tools
                  </Link>
                </Button>
                <Button onClick={() => setIsOpen(false)} colorPalette="violet" variant="subtle" asChild>
                  <Link href="/faq">
                    Frequently Asked Questions
                  </Link>
                </Button>
                <Button onClick={() => setIsOpen(false)} colorPalette="violet" variant="subtle" asChild>
                  <Link target="_blank" href="https://github.com/forzamods">
                    GitHub
                  </Link>
                </Button>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </header>
    </div>
  );
}