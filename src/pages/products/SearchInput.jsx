import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ value, onChange }) => {
  return (
    <label className="flex h-9 w-full items-center gap-2 rounded-full border border-line bg-white px-3 text-muted sm:w-64">
      <FiSearch className="size-3.5 shrink-0" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search groceries..."
        className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-muted"
      />
    </label>
  );
};

export default SearchInput;
