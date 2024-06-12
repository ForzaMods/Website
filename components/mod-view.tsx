"use client";

import ModPreview from "@/components/mod-preview";
import { DoubleArrowLeftIcon, DoubleArrowRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, IconButton, RadioCards, Separator, TextField } from "@radix-ui/themes";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  KeyboardEventHandler,
} from "react";

interface ModData {
  id: string;
  title: string;
  shortDescription: string;
  tags: string;
  imageCount: number;
}

export default function ModView({ user }: { user: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState<number>(0);
  const [maxPages, setMaxPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mods, setMods] = useState<ModData[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const getMods = useCallback(
    (query: string, page: number, tags: string): void => {
      setCurrPage(page);
      setIsLoading(true);
      fetch(
        `/api/mods?page=${page.toString()}&search=${query}&tags=${tags}&user=${user}`
      )
        .then((res) => res.json())
        .then((data: { data: any }) => {
          setMods(data.data.mods);
          setMaxPages(data.data.pageCount);
          setIsLoading(false);
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        });
    },
    [user]
  );

  useEffect(() => {
    if (currPage === 0) {
      getMods(searchQuery, 1, "");
    }
  }, [currPage, searchQuery, getMods]);

  const handlePageClick = (page: number) => {
    getMods(searchQuery, page, selectedTags.join(","));
  };

  const handleTagSelection = (tag: string) => {
    if (tag === "All mods") {
      setSelectedTags([]);
      getMods(searchQuery, 1, "");
    } else {
      setSelectedTags((prevTags) => {
        const newTags = prevTags.includes(tag)
          ? prevTags.filter((item) => item !== tag)
          : [...prevTags, tag];
        getMods(searchQuery, 1, newTags.join(","));
        return newTags;
      });
    }
  };

  const debounceTimeout = useRef<number | undefined>();

  useEffect(() => {
    return () => {
      if (debounceTimeout.current !== undefined) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  const handleKeyPress = () => {
    if (debounceTimeout.current !== undefined) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      getMods(searchQuery, 1, selectedTags.join(","));
    }, 500) as unknown as number;
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-5 flex-col">
        <Searchbar
          handleKeyPress={handleKeyPress}
          isLoading={isLoading}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <TagsSelection handleTagSelection={handleTagSelection} selectedTags={selectedTags} />
      </div>

      <div className="flex justify-center flex-wrap gap-x-20 gap-y-5 md:gap-y-10 md:mx-20 my-10">
        {mods.length !== 0
          ? mods.map((mod, index) => <ModPreview key={index} data={mod} />)
          : null}
      </div>
        
      <Pagination currPage={currPage} maxPages={maxPages} handlePageClick={handlePageClick} isLoading={isLoading} />
    </div>
  );
}

function TagsSelection({
  handleTagSelection,
  selectedTags,
}: {
  handleTagSelection: Function;
  selectedTags: string[];
}) {
  const cardsRef = useRef<HTMLDivElement>(null);
  const tags = ["All mods", "Mod Pack", "Car Mod", "Wheel/Tire Mod", "Sound Mod", "Other"];
  return (
    <>
      <Button className="md:hidden w-full cursor-pointer" onClick={() => cardsRef.current?.classList.toggle("max-md:hidden")}>Select tags</Button>
      <RadioCards.Root ref={cardsRef} size="1" className="flex max-md:flex-col items-center gap-5 max-md:w-full max-md:hidden max-md:border border-[var(--accent-6)] p-4">
        {tags.map((tag, index) => (
          <>
            <RadioCards.Item
              onClick={() => handleTagSelection(tag)}
              checked={selectedTags.length === 0 && tag === "All mods" || selectedTags.includes(tag)}
              key={index}
              value={(index + 1).toString()}
              className="max-md:w-full"
            >
              {tag}
            </RadioCards.Item>
            {index == 0 ? <Separator orientation="vertical" size="2" className="max-md:w-full max-md:h-0.5" /> : null}
          </>
        ))}
      </RadioCards.Root>
    </>
  );
}

function Searchbar({
  handleKeyPress,
  searchQuery,
  setSearchQuery,
  isLoading,
}: {
  handleKeyPress: KeyboardEventHandler;
  searchQuery: string;
  setSearchQuery: Function;
  isLoading: boolean;
}) {
  return (
    <label className="input input-bordered flex items-center gap-2 max-md:w-full w-96">
      <TextField.Root
        onKeyUp={handleKeyPress}
        onChange={(e) => {
          setSearchQuery(e.currentTarget.value);
        }}
        value={searchQuery}
        type="text"
        className="grow"
        placeholder="Search…"
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </label>
  );
}

function Pagination({ currPage, maxPages, isLoading, handlePageClick } : { currPage: number, maxPages: number, isLoading: boolean, handlePageClick: Function }) {
  return (
    <div className="flex justify-center">
      <div>
        <IconButton
          radius="none"
          className="cursor-pointer"
          disabled={currPage === 1 || isLoading}
          onClick={() => {
            handlePageClick(currPage - 1);
          }}
        >
          <DoubleArrowLeftIcon className="w-5 h-5" />
        </IconButton>
        <Button radius="none" variant="outline">
          Page {currPage}
        </Button>
        <IconButton
          radius="none"
          className="cursor-pointer"
          disabled={currPage === maxPages || isLoading}
          onClick={() => {
            handlePageClick(currPage + 1);
          }}
        >
          <DoubleArrowRightIcon className="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  );
}
