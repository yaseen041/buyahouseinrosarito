import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "select2/dist/css/select2.min.css";
import "select2/dist/js/select2.min.js";
import "./MultiSelect.css";

const MultiSelect = ({ options = [], onChange }) => {
  const selectRef = useRef(null);

  useEffect(() => {
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
    <select ref={selectRef} style={{ width: "100%" }} >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {`${option.code} - ${option.title}`}
        </option>
      ))}
    </select>
  );
};

export default MultiSelect;
