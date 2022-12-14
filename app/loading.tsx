import React, { ReactNode } from "react";

export default function Loading({ children }: { children: ReactNode }) {
  return (
    <div className="animate-pulse font-serif text-lg text-gray-400 text-center p-10">
      Loading news feed...
    </div>
  );
}
