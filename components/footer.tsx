import Link from 'next/link';
import Image from 'next/image';

export default function Footer() { 
  return (
    <footer>
          <div className="footer p-10 px-12 lg:px-20 border-t border-base-300 text-base-content">
            <nav>
              <h6 className="footer-title">Tools</h6>
              <Link className="link link-hover" href="/tools/aio">Forza Mods AIO</Link>
              <Link className="link link-hover" href="/tools/mod-manager">Mod Manager</Link>
              <Link className="link link-hover" href="/tools/fov-menu">FOV Menu</Link>
              <Link className="link link-hover" href="/tools/car-table">Car Table</Link>
            </nav>
            <nav>
              <h6 className="footer-title">Miscellaneous</h6>
              <Link className="link link-hover" href="/mods">Mod Browser</Link>
              <Link className="link link-hover" href="/faq">FAQ</Link>
              <Link className="link link-hover" href="/troubleshooting">Troubleshooting</Link>
              <Link className="link link-hover" href="/ideas">Ideas</Link>
            </nav>
            <nav>
              <h6 className="footer-title">External</h6>
              <Link
                className="link link-hover"
                href="https://status.forzamods.dev"
                target="_blank"
              >
                Status
              </Link>
              <Link
                className="link link-hover"
                href="https://github.com/ForzaMods"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                className="link link-hover"
                href="https://discord.gg/forzamods"
                target="_blank"
              >
                Discord Server
              </Link>
              <Link
                className="link link-hover"
                href="https://ko-fi.com/merikaaaaa"
                target="_blank"
              >
                Ko-fi
              </Link>
            </nav>
          </div>
          <div className="footer px-12 lg:px-20 py-6 border-t border-base-300 bg-base-200 text-base-content">
            <aside className="items-center grid-flow-col">
              <Image
                src="/forzamods.png"
                alt="Forza Mods Logo"
                width={48}
                height={48}
              />
              <p>
                Forza Mods by{" "}
                <Link className="link link-hover" href="https://d4vss.net" target="_blank">
                  Davsツ
                </Link>
                <br />
                Effortless Forza Modding Made Simple!
              </p>
            </aside>
          </div>
        </footer>
  )
}