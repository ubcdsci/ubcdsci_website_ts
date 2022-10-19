// Library imports.
import React from "react";
import { BsSearch } from "react-icons/bs";

// Component imports.

// Media imports.

/**
 * Renders a SearchBar.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function SearchBar(props) {
  // TODO: Include functionality for internal searching.

  return (
    <>
      <div className="searchBar">
        <form
          name="searchForm"
          action="/search"
          method="GET"
          autoComplete="off"
          onInvalid={(e) => e.target.setCustomValidity("Enter a search term")}
          onInput={(e) => e.target.setCustomValidity("")}
        >
          <input
            type="text"
            name="q"
            placeholder="Search..."
            onFocus={(e) => {
              e.target.value = "";
            }}
            required
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    </>
  );
}
