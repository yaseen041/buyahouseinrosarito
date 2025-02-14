"use client"; // Ensure it's a client component

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic"; 

// Load jQuery & Select2 only on the client side
const $ = typeof window !== "undefined" ? require("jquery") : () => {};
typeof window !== "undefined" && require("select2/dist/css/select2.min.css");
typeof window !== "undefined" && require("select2/dist/js/select2.min.js");

import "./MultiSelect.css";

const MultiSelect = ({ options = [], onChange }) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it's client-side

    const $select = $(selectRef.current);

    $select.select2({
      placeholder: "Select Properties",
      multiple: true,
      allowClear: true,
    });

    const handleChange = () => {
      const selectedValues = $select.val();
      onChange(selectedValues || []);
    };

    $select.on("change", handleChange);

    return () => {
      $select.off("change", handleChange);
      $select.select2("destroy");
    };
  }, [onChange]);

  return (
    <select ref={selectRef} style={{ width: "100%" }}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {`${option.code} - ${option.title}`}
        </option>
      ))}
    </select>
  );
};

export default dynamic(() => Promise.resolve(MultiSelect), { ssr: false });
