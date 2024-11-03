import { flex } from "styled-system/patterns";
import { Heading } from "~/components/ui/heading";

export default function NotFound() {
  return (
    <div
      className={flex({
        minHeight: "70vh",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Heading size="xl">Sorry, this page couldn&apos;t be found.</Heading>
    </div>
  );
}
