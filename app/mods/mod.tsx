"use client"

import Link from "next/link";

export default function Mod() {
  return (
    <Link
      href={"/mods/" + 2 % 2 + 2 / (2 % 2 + 1)}
      className="card card-bordered border-2 rounded-sm card-compact w-[28rem] bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={`${"https://cdn.forzamods.dev/images/335886-"}${2}${".webp"}`}
          alt="Preview image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">2008 BMW M3 E92 DOUBLE TURBO</h2>
        <p>
          Features: Formula Drift M2 Engine and Engine Bay Twin Turbos Carbon
          front grille Removed ...
        </p>
        <div className="card-actions justify-end mt-3">
          <div className="badge badge-outline">Car Mod</div>
          <div className="badge badge-outline">Sound Mod</div>
          <div className="badge badge-outline">2 more ...</div>
        </div>
      </div>
    </Link>
  );
}
