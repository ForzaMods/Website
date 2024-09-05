"use client";

import { Avatar, Button, Text } from "@radix-ui/themes";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from "next/link";
import { ClipboardIcon, Component1Icon, QuestionMarkIcon } from "@radix-ui/react-icons";

export default function MobileNav({ user } : { user : User | null | undefined }) {
  return (
    <>
      <div className="flex justify-between items-center md:hidden">
        <div className="flex gap-7">
          <Link href="/blog"><Component1Icon className="w-6 h-6" /></Link>
          <Link href="/faq"><QuestionMarkIcon className="w-6 h-6" /></Link>
          <Link href="/ideas"><ClipboardIcon className="w-6 h-6" /></Link>
        </div>
        {user ? 
        <>
          <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar src={user.image as string} fallback={(user.name as string)[0]} radius="full" size="2" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end" className="bg-accent-3 p-4 rounded min-w-24 flex flex-col gap-2 items-end mt-5">
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
          <Button asChild variant="surface" className="cursor-pointer">
            <Link href="/login">Login</Link>
          </Button>
        </>}
      </div>
    </>
  );
}