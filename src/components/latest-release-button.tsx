"use client"

import { ArrowDownToLineIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LatestReleaseButton() {
  const [selectedValue, setSelectedValue] = useState<string | undefined | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchLatestRelease = async () => {
        try {
          const url = "https://api.github.com/repos/ForzaMods/Forza-Mods-AIO/releases";
          const response = await fetch(url);
          const data = await response.json();
          
          setSelectedValue(data[0].assets[0].browser_download_url);
        } catch (error) {
          console.error("Error fetching release:", error);
        }
      };
    
      fetchLatestRelease();
    }, []);

  return (
    <Link href={selectedValue || "#"} passHref download={true} target="_blank">
      <Button variant="solid">
        Download Latest AIO 
        <ArrowDownToLineIcon />
      </Button>
    </Link>
  );
}
