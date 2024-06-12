"use client";

import { Button } from "@radix-ui/themes";
import { Component1Icon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginButtons() {  
  return (
    <>
      <SubmitButton />
    </>
  );
}

function SubmitButton() {
  const [pending, setIsPending] = useState(false);
  return (
    <>
      <Button
        disabled={pending}
        type="submit"
        className="w-full lg:w-96 mt-2 cursor-pointer"
        onClick={() => {setIsPending(true); signIn("discord")}}
      >
        {!pending ? (
          "Continue with Discord"
        ) : (
          <>
            <Component1Icon className="w-4 h-4 mr-4 animate-spin" /> Redirecting to Discord ...
          </>
        )}
      </Button>
    </>
  );
}