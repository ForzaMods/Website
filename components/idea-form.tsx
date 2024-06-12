"use client";

import { submitIdea } from "@/app/actions";
import { Button, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes";
import { User } from "next-auth";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton({ state }: { state: number }) {
  const { pending } = useFormStatus();
  const [customMessage, setCustomMessage] = useState<string | null>(null);

  useEffect(() => {
    if (state !== 0) {
      const message = state === 200 ? "Successfully sent!" : "Missing type!";
      setCustomMessage(message);

      const timeoutId = setTimeout(() => {
        setCustomMessage(null);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [state]);

  return (
    <>
      {!customMessage ? (
        <Button className="w-full cursor-pointer" variant="solid" disabled={pending}>
          Submit
        </Button>
      ) : (
        <Button className="w-full cursor-pointer" variant="solid" color={state === 200 ? "green" : "red"}>
          {customMessage}
        </Button>
      )}
    </>
  );
}

export default function IdeaForm({ user }: { user: User }) {
  const [state, formAction] = useFormState(submitIdea, 0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state === 200 && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <div>
      <form action={formAction} ref={formRef} className="flex flex-col gap-6 min-[500px]:min-w-[26rem] max-w-xl">
        <div>
          <Text size="2" weight="medium">Title</Text>
          <TextField.Root required minLength={10} maxLength={50} type="text" name="title" placeholder="Enter a title..." />
        </div>

        <div>
          <Text size="2" weight="medium">Game</Text>
          <TextField.Root required minLength={3} maxLength={30} name="game" type="text" placeholder="Enter a game name..." />
        </div>

        <div>
          <Text size="2" weight="medium">Description</Text>
          <TextArea required minLength={20} maxLength={200} name="description" rows={8} placeholder="Enter a description..." />
        </div>
        
        <div>
          <Text size="2" weight="medium">Select the type</Text>
          <RadioGroup.Root defaultValue="new" name="ideatype">
            <RadioGroup.Item value="new">New feature</RadioGroup.Item>
            <RadioGroup.Item value="change">Change existing feature</RadioGroup.Item>
            <RadioGroup.Item value="remove">Remove feature</RadioGroup.Item>
          </RadioGroup.Root>
        </div>

        <SubmitButton state={state} />
      </form>
    </div>
  );
}