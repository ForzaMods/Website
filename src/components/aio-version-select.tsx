"use client"

import { ArrowDownToLineIcon, ChevronsUpDownIcon } from "lucide-react";
import { Select } from "./ui/select";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IconButton } from "./ui/icon-button";
import { css } from "styled-system/css";
import { redirect } from "next/navigation";

export default function AioVersionSelect() {
  const [items, setItems] = useState([{ label: null, value: null, url: null }]);
  const [selectedValue, setSelectedValue] = useState<any | undefined>();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const url = "https://api.github.com/repos/ForzaMods/Forza-Mods-AIO/releases";
        const response = await fetch(url);
        const data = await response.json();
        const tagItems = data
          .filter((obj: any) => /^[0-9]/.test(obj.name))
          .map((obj: any, index: number) => ({
            label: obj.tag_name + (index === 0 ? " - Latest" : ""),
            value: obj.tag_name,
            url: obj.assets[0].browser_download_url,
          }));
        const itemsToSet = tagItems.slice(0, 9);
        setItems(itemsToSet);
        if (itemsToSet.length > 0) {
          console.log(itemsToSet[0].value)
          setSelectedValue(itemsToSet[0].value);
        }
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
  
    fetchTags();
  }, []);
  

  return (
    <>
      <Select.Root positioning={{ sameWidth: true, flip: true, arrowPadding: 2 }} className={css({ width: { md: "2xs" }})} items={items} defaultValue={[selectedValue]} onValueChange={(item: any) => setSelectedValue(item.value)} variant="outline">
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={items.find((item) => item.value === selectedValue)?.label || ""} />
            <ChevronsUpDownIcon />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
            {selectedValue && items.map((item: any) => (
              <Select.Item
                key={item.value}
                item={item}
                className={selectedValue === item.value ? "selected-class" : ""}
              >
                <Select.ItemText>{item.label}</Select.ItemText>
                {selectedValue === item.value && <Select.ItemIndicator>✓</Select.ItemIndicator>}
              </Select.Item>
            ))}

              <Select.Item key="View all" item="View all" asChild>
                <Select.ItemText onClick={() => redirect("https://github.com/ForzaMods/AIO/releases")}>View older versions</Select.ItemText>
              </Select.Item>
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
      {selectedValue == null ? 
      <IconButton disabled aria-label="Download" variant="outline">
        <ArrowDownToLineIcon />
      </IconButton> : 
      <Link href={items.find((item) => item.value == selectedValue)?.url || ""}>
        <IconButton aria-label="Download" variant="outline">
          <ArrowDownToLineIcon />
        </IconButton>
      </Link>
      }
    </>
  );
}