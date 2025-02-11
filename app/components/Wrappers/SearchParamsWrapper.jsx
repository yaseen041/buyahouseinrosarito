"use client"; // ✅ Ensures this is a Client Component

import { useSearchParams } from "next/navigation";
import React from "react";

const SearchParamsWrapper = ({ children }) => {
  const searchParams = useSearchParams(); // ✅ Now it's inside a Client Component

  return <>{children}</>;
};

export default SearchParamsWrapper;
