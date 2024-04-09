"use client"

import { FormEvent, useState } from "react"
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function ClientContent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading == true || isSent == true) return;

    setIsLoading(true);
    setError(null);
 
    const formData = new FormData(event.currentTarget)

    const ideaType = formData.get("ideatype") as string;
    if (!ideaType) {
      setError("Please select an idea type.");
      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/ideas", {
      method: "POST",
      body: formData,
    })
 
    const data = await response.json()
    if (!data.success) {
      setError(data.message);
      setIsLoading(false);
      return;
    }
    setIsSent(true);
    setIsLoading(false);
  }
 
  return (
    <div className="p-10">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async={true}
        defer={true}
      />
      <div className={`${"flex flex-col items-center"} ${isSent ? "hidden" : ""}`}>
        <div className="my-10 text-center">
          <h1 className="text-3xl font-bold capitalize mb-2">Submit your ideas</h1>
          <p className="max-w-md">Any suggestions on making things better? Tell us! <br /><br />
          <b>Note:</b> Be aware that you can only submit 1 idea per day. Doing dumb stuff can result in a permanent ban.</p>
        </div>
        <form 
          method="POST"
          action="/api/ideas"
          onSubmit={onSubmit}
          className="flex flex-col gap-6 min-[500px]:min-w-[26rem] max-w-xl"
        >
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Title</span>
              <span className="label-text-alt">Required</span>
            </div>
            <input
              disabled={isLoading}
              required
              minLength={10}
              maxLength={50}
              type="text"
              name="title"
              placeholder="Flying cars"
              className="input input-bordered w-full max-w-md"
            />
          </label>

          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Description</span>
              <span className="label-text-alt">Required</span>
            </div>
            <textarea
              disabled={isLoading}
              required
              minLength={25}
              maxLength={200}
              rows={8}
              name="description"
              className="textarea textarea-bordered w-full max-w-md text-[1.03rem]"
              placeholder="Make cars fly like in star wars"
            ></textarea>
          </label>

          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">What game?</span>
              <span className="label-text-alt">Required</span>
            </div>
            <input
              disabled={isLoading}
              required
              minLength={3}
              maxLength={30}
              name="game"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md"
            />
          </label>

          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Select the type</span>
              <span className="label-text-alt">Required</span>
            </div>
            <select className="select select-bordered max-w-md" required name="ideatype" defaultValue={"nothing"} disabled={isLoading}>
              <option value={"nothing"} disabled>Pick one</option>
              <option value={"new"}>Suggestion to add something new</option>
              <option value={"change"}>Suggestion to change something</option>
              <option value={"remove"}>Suggestion to remove something</option>
            </select>
          </label>

          <div className="flex items-center flex-col gap-4">
            <div
              className="cf-turnstile"
              data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
            />
            <p>Can&apos;t see the verification box? Click <a onClick={() => window.location.reload()} className="cursor-pointer underline">here</a>!</p>
          </div>
          {!isLoading ? <input type="submit" value="Submit" className="btn mt-4" /> : 
          <span className="btn cursor-not-allowed no-animation">
            <span className="loading loading-spinner"></span>
            Loading
          </span>}
          {error && <div className="text-error text-center">{error}</div>}
        </form>
      </div>
      <div className={`${"my-10 text-center flex flex-col gap-10 items-center min-h-[calc(100vh-34.5rem)]"} ${!isSent ? "hidden" : ""}`}>
        <h2 className="text-2xl font-bold mt-5">Your idea was successfully sent.</h2>
        <Link className="btn w-fit" href="/">Return to Homepage</Link>
        <Image unoptimized src="/happy-cat.gif" alt="happy-cat-happy-happy-cat" width={400} height={500} />
      </div>
    </div>
  );
}
