"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative ">
      <Image
        src={"/profile.png"}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />

      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href={"/profile"}>Profile</Link>
        </div>
      )}

      <Image
        src={"/notification.png"}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />

      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src={"/cart.png"} alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-cart rounded-full text-white text-sm flex items-center justify-center">1</div>
      </div>
    </div>
  );
};

export default NavIcons;
