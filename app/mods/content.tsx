"use client";

import { useState } from "react";
import Mod from "./mod";

export default function ClientContent() {
  const [currPage, setCurrPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const array = [...Array(12)];

  const isBrowser = () => typeof window !== "undefined";

  function handlePageClick(page: number) {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrPage(page);
  }

  return (
    <div className="p-10">
      <div className="my-10 text-center flex flex-col items-center">
        <div role="alert" className="alert w-[26rem] mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>This page is currently under development.</span>
        </div>

        <h1 className="text-3xl font-bold capitalize mb-2">Mod Browser</h1>
        <p className="max-w-lg">
          This is the modding browser for searching modded mods. <br />
          <br />
          <b>Note:</b> Everything here is user content that could potentially
          contain malware. Check everything you download with <a className="link link-hover" href="https://www.virustotal.com/">VirusTotal</a> or other Anti Malware Software.
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 max-md:flex-col">
        <label className="input input-bordered flex items-center gap-2 max-md:w-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Select tags
          </div>
          <div className="join join-vertical dropdown-content z-[1] menu shadow rounded-box w-52">
            <input
              className="join-item btn"
              type="checkbox"
              name="options"
              aria-label="All Mods"
            />
            <input
              className="join-item btn"
              type="checkbox"
              name="options"
              aria-label="Mod Packs"
            />
            <input
              className="join-item btn"
              type="checkbox"
              name="options"
              aria-label="Car Mods"
            />
            <input
              className="join-item btn"
              type="checkbox"
              name="options"
              aria-label="Wheel/Tire Mods"
            />
            <input
              className="join-item btn"
              type="checkbox"
              name="options"
              aria-label="Sound Mods"
            />
          </div>
        </div>

        <input type="submit" value="Search" className="btn max-md:w-full" />
      </div>

      <div className="flex justify-center flex-wrap gap-x-20 gap-y-5 md:gap-y-10 md:mx-20 my-10">
        {array.map((_, index) => (
          <Mod key={index} />
        ))}
      </div>

      <div className="flex justify-center">
        <div className="join">
          <button
            className="join-item btn"
            disabled={currPage === 1}
            onClick={() => {
              handlePageClick(currPage - 1);
            }}
          >
            «
          </button>
          <button className="join-item btn pointer-events-none">
            Page {currPage}
          </button>
          <button
            className="join-item btn"
            disabled={maxPages === currPage}
            onClick={() => {
              handlePageClick(currPage + 1);
            }}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}