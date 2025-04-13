"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full rounded-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
        <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center gap-3 text-sm">
          <Link href="/page/condition-of-use">Condition of Use</Link>
          <Link href="/page/privet-policy">Private Policy</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex items-center justify-center text-sm">
          <p className=""> 2000-2025, {APP_NAME}, Inc. or its affililates</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          123, Main Street, Cairo, Zip 12345 \ +2 220-456
        </div>
      </div>
    </footer>
  );
};
