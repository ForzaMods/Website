import { auth } from "@/auth";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default async function Header() {
  const session = await auth();
  const parsedUser =
    session !== null && session.user !== null ? session.user : null;
  
  return (
    <header className="px-8 py-4 w-full border-b border-accent-8">
      <DesktopNav user={parsedUser} />
      <MobileNav user={parsedUser} />
    </header>
  );
}