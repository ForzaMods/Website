"use client"

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (isSidebarOpen == true) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        onChange={toggleSidebar}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar px-8 pt-4">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link className="flex-1 px-2 mx-2 font-bold flex gap-2" href="/">
            <Image src="/forzamods.png" alt="Forza Mods Logo" width={48} height={48} />
            Forza Mods
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link href="/mods">Mod Browser</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/troubleshooting">Troubleshooting</Link>
              </li>
              <li>
                <Link href="/ideas">Ideas</Link>
              </li>
              <div className="divider divider-horizontal"></div>
              <li>
                <Link href="/signin">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link href="/" className="px-2 mx-2 font-bold text-lg">Forza Mods</Link>
          </li>
          <div className="divider"></div>
          <h2 className="px-5 mb-2 font-bold scale-105 uppercase">Main</h2>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/signin">Sign in</Link>
          </li>
          <div className="divider"></div>
          <h2 className="px-5 mb-2 font-bold scale-105 uppercase">Tools</h2>
          <li>
            <Link href="/tools/aio">Forza Mods AIO</Link>
          </li>
          <li>
            <Link href="/tools/mod-manager">Mod Manager</Link>
          </li>
          <li>
            <Link href="/tools/fov-menu">FOV Menu</Link>
          </li>
          <li>
            <Link href="/tools/car-table">Car Table</Link>
          </li>
          <div className="divider"></div>
          <h2 className="px-5 mb-2 font-bold scale-105 uppercase">
            Miscellaneous
          </h2>
          <li>
            <Link href="/mods">Mod Browser</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/troubleshooting">Troubleshooting</Link>
          </li>
          <li>
            <Link href="/ideas">Ideas</Link>
          </li>
          <div className="divider"></div>
          <h2 className="px-5 mb-2 font-bold scale-105 uppercase">
            External
          </h2>
          <li>
          <Link
                href="https://status.forzamods.dev"
                target="_blank"
              >
                Status
              </Link>
          </li>
              <li>
              <Link
                href="https://github.com/ForzaMods"
                target="_blank"
              >
                GitHub
              </Link>
              </li>
              <li>
              <Link
                href="https://discord.gg/forzamods"
                target="_blank"
              >
                Discord Server
              </Link>
              </li>
              <li>
              <Link
                href="https://ko-fi.com/merikaaaaa"
                target="_blank"
              >
                Ko-fi
              </Link>
              </li>
        </ul>
      </div>
    </div>
  );
}
