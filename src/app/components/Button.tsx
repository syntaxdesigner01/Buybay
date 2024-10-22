"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

/**
 *
 * @param Text : what to display as the button text
 * @param Link : Path
 * @returns
 */
export default function Button({
  Text,
  Link,
  Pointer,
}: {
  Text: string;
  Link: string;
  Pointer:boolean;
}) {
  const [showArrow, setShowArrow] = useState<boolean>(false);

  const route = useRouter();

  useEffect(() => {
    setShowArrow(Pointer);
  }, [Pointer]);

  return (
    <button onClick={() => route.push(Link)} className=" border-2 px-4  flex items-center justify-center gap-2 border-black text-sm">
      {Text}
      {showArrow && <FaArrowRightLong size={10} />}
    </button>
  );
}
