"use client";
 
import { Heading, Button, Text } from '@radix-ui/themes';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  const [pending, setIsPending] = useState(false);
  const router = useRouter();


  return (
    <div className="flex items-center justify-center flex-col gap-10 min-h-[calc(100vh-16rem)]">
      <Heading size="5">This page does not exist.</Heading>
      <Button variant="soft" radius="small" className="cursor-pointer" disabled={pending} onClick={() => { setIsPending(true); router.push("/") }}><Text size="2">{pending ? "Redirecting to homepage..." : "Return to the homepage"}</Text></Button>
    </div>
  )
}