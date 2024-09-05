import Link from 'next/link';
import Image from 'next/image';
import { Heading, Text } from '@radix-ui/themes';

const footer = {
  tools: [
    { href: "/tools/aio", name: "Forza Mods AIO" },
    { href: "/tools/mod-manager", name: "Mod Manager" },
    { href: "/tools/fov-menu", name: "FOV Menu" },
    { href: "/tools/car-table", name: "Car Table" }
  ],
  miscellaneous: [
    { href: "/faq", name: "FAQ & Troubleshooting" },
    { href: "/blog", name: "Blog" },
    { href: "/ideas", name: "Submit an idea" }
  ],
  external: [
    { href: "https://github.com/ForzaMods", name: "GitHub", target: "_blank" },
    { href: "https://discord.gg/forzamods", name: "Discord Server", target: "_blank" },
    { href: "https://github.com/szaaamerik", name: "Support Us", target: "_blank" }
  ]
};

export default function Footer() {
  const { tools, miscellaneous, external } = footer;

  const renderLinks = (links: { href: string, name: string, target?: string, }[]) =>
    links.map((link, index) => (
      <Text key={index} size="1" asChild>
        <Link href={link.href} target={link.target || "_self"} className="hover:underline w-fit">{link.name}</Link>
      </Text>
    ));

  return (
    <footer className="border-t border-accent-8">
      <div className="flex flex-col gap-10 md:grid grid-cols-3 mx-auto p-10 px-12 lg:px-20 ">
        <nav className="flex flex-col gap-1">
          <Heading as="h4" size="3" weight="bold" color="gray" className="footer-title">Tools</Heading>
          <div className="flex flex-col gap-2">
            {renderLinks(tools)}
          </div>
        </nav>
        <nav className="flex flex-col gap-1">
        <Heading as="h4" size="3" weight="bold" color="gray" className="footer-title">Miscellaneous</Heading>
          <div className="flex flex-col gap-2">
            {renderLinks(miscellaneous)}
          </div>
        </nav>
        <nav className="flex flex-col gap-1">
        <Heading as="h4" size="3" weight="bold" color="gray" className="footer-title">External</Heading>
          <div className="flex flex-col gap-2">
            {renderLinks(external)}
          </div>
        </nav>
      </div>
      <div className="flex flex-row px-12 lg:px-20 py-6 border-t border-accent-8 bg-accent-2">
        <aside className="flex gap-2">
          <Image src="/forzamods-square.webp" alt="Forza Mods Logo" width={48} height={48} />
          <div>
          <Text size="1">
            Forza Mods by <Link className="hover:underline" href="https://d4vss.net" target="_blank">Davsツ</Link>
          </Text>
          <Text size="1" className="block">
          Effortless Forza Modding Made Simple! 
          </Text>
          </div>
        </aside>
      </div>
    </footer>
  );
};