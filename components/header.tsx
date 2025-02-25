import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="flex py-4 px-[80px] bg-primary">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={132}
          height={58}
          quality={100}
          alt="ShortDrama"
        />
      </Link>
    </div>
  );
};
