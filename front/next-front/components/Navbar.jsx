"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {

  return (
    <nav className="flex justify-between w-full  relative z-30 py-5 px-5 shadow-md">
      {/* <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">TOTH GABRIEL</p>
      </Link> */}

      <ul className="hidden h-full gap-12 sm:flex">
       
          <Link href="/">Test</Link>
          <Link href="/">Test</Link>
          <Link href="/">Test</Link>
        
      </ul>

     
    </nav>
  );
};

export default Navbar;
