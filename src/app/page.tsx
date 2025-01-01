"use client"

import { ArrowDownToLineIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { css } from "styled-system/css";
import NumberTicker from "~/components/number-ticker";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<any | undefined>();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const url = "https://api.github.com/repos/ForzaMods/Forza-Mods-AIO/releases";
        const response = await fetch(url);
        const data = await response.json();
        
        setSelectedValue(data[0].assets[0].browser_download_url);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
  
    fetchTags();
  }, []);
  return (
    <>
      <div className={css({
        marginTop: "20dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "lg",
        marginX: "auto",
      })}>
        <Heading size="5xl" maxWidth="md" textAlign="center" fontWeight="extrabold">
          Forza Modding with a single click!
        </Heading>
        <Text size="lg" className={css({ marginY: "10px", textAlign: { lgDown: "center" } })}>
          Forza Mods is a community enabling seamless modding and enhancements for an unparalleled Forza gaming experience.
        </Text>
        <div className={css({ display: "flex", gap: 4, marginTop: 4, flexDirection: { base: "row", mdDown: "column" } })}>
          <Link href={selectedValue}>
            <Button variant="solid">
              Download Latest AIO 
              <ArrowDownToLineIcon />
            </Button>
          </Link>
          <Link href="/mods-and-tools">
            <Button variant="subtle" colorPalette="white">
              View all Mods & Tools 
              <ArrowRightIcon />
            </Button> 
          </Link>
        </div>
      </div>
      <div className={css({ marginTop: "10dvh", textAlign: "center", display: "flex", justifyContent: "space-evenly", gap: "16px", flexDirection: { base: "row", mdDown: "column" } })}>
        <div>
          <Text>Incredible</Text>
          <div className={css({ marginY: "5px" })}>
            <NumberTicker from={0} to={1322784} durationInMs={2000} />
          </div>
          <Text>AIO downloads</Text>
        </div>
        <div>
          <Text>In excess of</Text>
          <div className={css({ marginY: "5px" })}>
            <NumberTicker from={0} to={1020} durationInMs={2000} />
          </div>
          <Text>GitHub stars</Text>
        </div>
        <div>
          <Text>More than</Text>
          <div className={css({ marginY: "5px" })}>
            <NumberTicker from={0} to={93440} durationInMs={2000} />
          </div>
          <Text>Discord members</Text>
        </div>
      </div>
    </>
  );
}
