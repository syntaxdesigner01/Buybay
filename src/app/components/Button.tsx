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
  Width,
  Style,
}: {
  Text: string;
  Link: string;
  Width?: string;
  Pointer: boolean;
  Style?: React.CSSProperties;
}) {
  const [showArrow, setShowArrow] = useState<boolean>(false);

  const route = useRouter();

  useEffect(() => {
    setShowArrow(Pointer);
  }, [Pointer]);

  return (
    <button
      onClick={() => route.push(Link)}
      className={`border-2 px-4 w-[${Width}] flex items-center justify-center gap-2 border-black text-sm`}
      style={Style}
    >
      {Text}
      {showArrow && <FaArrowRightLong size={10} />}
    </button>
  );
}
