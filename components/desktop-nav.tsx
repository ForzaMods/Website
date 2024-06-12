"use client";

import { Avatar, Button, Separator, Text } from "@radix-ui/themes";
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from "next-auth/react";


export default function DesktopNav({ user } : { user : User | null | undefined }) {
  return (
    <>
      <div className="hidden md:flex justify-between items-center md:max-w-4xl 2xl:max-w-7xl mx-auto z-50">
        <Link href="/">
          <Image src="/forzamods-rect.webp" alt="Forza Mods Logo White" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-10">
          <Button variant="ghost" color="gray" size="2" highContrast asChild>
            <Link href="/mods">Mod Browser</Link>
          </Button>
          <Button variant="ghost" color="gray" size="2" highContrast asChild>
            <Link href="/faq">FAQ & Troubleshooting</Link>
          </Button>
          <Button variant="ghost" color="gray" size="2" highContrast asChild>
            <Link href="/ideas">Submit an idea</Link>
          </Button>
          <Separator orientation="vertical" size="2" className="flex-shrink-0" />
          {user ? 
          <>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar src={user.image as string} fallback={(user.name as string)[0]} radius="full" size="2" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end" className="bg-[var(--accent-3)] p-4 rounded min-w-24 flex flex-col gap-2 items-end mt-5">
                <DropdownMenu.Item asChild>
                  <Link href="/user/profile" className="hover:underline">
                    <Text size="2">Profile</Text>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Text onClick={() => signOut()} className="cursor-pointer hover:underline" size="2">Log out</Text>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </> :
          <>
            <Button variant="surface" size="2" highContrast asChild>
              <Link href="/login">Login</Link>
            </Button>
          </>
          }
          
        </div>
      </div>
    </>
  );
}