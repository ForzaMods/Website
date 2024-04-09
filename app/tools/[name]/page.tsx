import type { Metadata } from "next";

const tools = [
  {
    name: "AIO Tool",
    short_description:
      "Forza Mods AIO is a free modding tool. Access a variety of unique features and customize your gaming experience without any cost.",
    description: "No description provided.",
    images: [
      "https://i.imgur.com/aySeiqy.png",
      "https://i.imgur.com/55Bq4CG.png",
      "https://i.imgur.com/Vpmwmk7.png",
      "https://i.imgur.com/04mYA45.png",
    ],
    path: "/aio",
    supported_games: "FH4 & FH5",
    tags: ["All In One", "FH4 & FH5", "Open Source"],
    urls: [
      {
        href: "https://github.com/ForzaMods/Forza-Mods-AIO/releases/latest/download/Forza-Mods-AIO.exe",
        icon: "material-symbols:download",
        name: "Download",
        new_tab: false,
      },
      {
        href: "https://github.com/ForzaMods/Forza-Mods-AIO",
        icon: "tabler:brand-github",
        name: "GitHub",
        new_tab: true,
      },
    ],
  },
  {
    name: "Mod Manager",
    short_description:
      "The Forza Mods Mod Manager is a tool designed to simplify the installation and management of mods.",
    description: "No description provided.",
    images: [],
    path: "/mod-manager",
    supported_games: "FH5",
    tags: ["FH5", "Open Source"],
    urls: [
      {
        href: "https://github.com/ForzaMods/Mod-Manager",
        icon: "ph:code",
        name: "Source Code",
        new_tab: true,
      },
    ],
  },
  {
    name: "Fov Menu",
    short_description:
      "FOV Menu is a C# tool, enabling easy adjustment of field of view (FOV) limits.",
    description: "No description provided.",
    images: [],
    path: "/fov-menu",
    supported_games: "FH4 & FH5",
    tags: ["FH4 & FH5", "Open Source"],
    urls: [
      {
        href: "https://github.com/ForzaMods/Fov-Menu/releases/latest/download/Fov-Menu.exe",
        icon: "material-symbols:download",
        name: "Download",
        new_tab: false,
      },
      {
        href: "https://github.com/ForzaMods/Fov-Menu",
        icon: "ph:code",
        name: "Source Code",
        new_tab: true,
      },
    ],
  },
  {
    name: "Car Table",
    short_description:
      "Car Table is a tool, allowing easy unlocking of cars.",
    description: "No description provided.",
    images: [],
    path: "/car-table",
    supported_games: "FH5",
    tags: ["FH5", "Open Source"],
    urls: [
      {
        href: "https://github.com/ForzaMods/Car-Table/releases/latest/download/Car-Table.exe",
        icon: "material-symbols:download",
        name: "Download",
        new_tab: false,
      },
      {
        href: "https://github.com/ForzaMods/Car-Table",
        icon: "ph:code",
        name: "Source Code",
        new_tab: true,
      },
    ],
  },
];
 
export async function generateMetadata(
  { params }: { params: { name: string } },
): Promise<Metadata> {
  const tool = tools.find((tool) => tool.path === `/${params.name}`);
 
  return {
    metadataBase: new URL('https://forzamods.dev'),
    title: `${tool?.name} | Forza Mods - The Forza Modding Community`,
    description: tool?.short_description,
    openGraph: {
      title: `${tool?.name} | Forza Mods - The Forza Modding Community`,
      description: tool?.short_description,
      images: tool?.images[0] || '',
    },
    twitter: {
      title: `${tool?.name} | Forza Mods - The Forza Modding Community`,
      description: tool?.short_description,
      images: tool?.images[0] || '',
      creator: "https://d4vss.net"
    },
  }
}

export default function ToolView({ params }: { params: { name: string } }) {
  const tool = tools.find((tool) => tool.path === `/${params.name}`);
  if (!tool) {
    return <h1>404 - Tool not found</h1>;
  }

  return (
    <main className="p-10 min-h-[calc(100vh-24rem)]">
      <h1 className="text-center text-3xl font-bold mt-10">{tool.name}</h1>
      <p className="text-center mt-2">{tool.short_description}</p>

      <ul className="flex justify-center max-md:flex-col max-md:items-center gap-5 my-5">
        {tool.urls.map((url, index) => (
          <li key={index}>
            <a
              className="btn btn-wide"
              href={url.href}
              target={url.new_tab ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <i className={url.icon}></i> {url.name}
            </a>
          </li>
        ))}
      </ul>

      <div className={"carousel" + (tool.images.length != 0 ? " mt-10" : "")}>
        {tool.images.map((imageUrl, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className="carousel-item w-full self-center"
          >
            <img
              src={imageUrl}
              className="h-96 object-contain left-1/2 relative -translate-x-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {tool.images.map((_, index) => (
          <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>

      <div className={"text-center" + (tool.images.length != 0 ? " mt-10" : " pb-48")}>
        <p>
          <strong>Supported Games:</strong> {tool.supported_games}
        </p>
        <p>
          <strong>Tags:</strong> {tool.tags.join(", ")}
        </p>
      </div>
    </main>
  );
}
