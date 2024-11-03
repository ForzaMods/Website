"use client"

import { ArrowDownToLineIcon, CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { Select } from "./ui/select";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IconButton } from "./ui/icon-button";
import { css } from "styled-system/css";

export default function AioVersionSelect() {
  const [items, setItems] = useState([{ label: null, value: null }]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const url = "https://api.github.com/repos/ForzaMods/Forza-Mods-AIO/tags";
        const response = await fetch(url);
        const data = await response.json();
        const tagItems = data
          .filter((obj: any) => /^[0-9]/.test(obj.name))
          .map((obj: any) => ({ label: obj.name, value: obj.name }));
        setItems(tagItems.slice(0, 9));
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  return (
    <>
      <Select.Root positioning={{ sameWidth: true, flip: true, arrowPadding: 2 }} className={css({ width: { md: "2xs" }})} items={items} variant="outline">
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Version" />
            <ChevronsUpDownIcon />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              {items.map((item) => (
                <Select.Item key={item.value} item={item} onClick={() => setSelectedTag(item.value)}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
              <Select.Item key="View all" item="View all">
                <Link href="https://github.com/ForzaMods/Forza-Mods-AIO/tags">
                  <Select.ItemText>View older versions</Select.ItemText>
                </Link>
              </Select.Item>
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
      {selectedTag == null ? 
      <IconButton disabled aria-label="Download" variant="outline">
        <ArrowDownToLineIcon />
      </IconButton> : 
      <Link href={`https://github.com/ForzaMods/Forza-Mods-AIO/releases/download/${selectedTag}/Forza-Mods-AIO.exe`}>
        <IconButton aria-label="Download" variant="outline">
          <ArrowDownToLineIcon />
        </IconButton>
      </Link>
      }
    </>
  );
}