import { BsSearch } from 'react-icons/bs';

import styles from '@/assets/styles/components/SearchBar.module.scss';



/**
 * Renders a SearchBar.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const SearchBar = (props: any) => {
  // TODO: Include functionality for internal searching.

  return (
    <div className={styles.SearchBar}>
      <form
        name="searchForm"
        className={styles.SearchForm}
        action="/search"
        method="GET"
        autoComplete="off"
        onInvalid={(e) => {(e.target as HTMLInputElement).setCustomValidity("Enter a search term")}}
        onInput={(e) => {(e.target as HTMLInputElement).setCustomValidity("")}}
      >
        <input
          type="text"
          name="q"
          placeholder="filter()"
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
  );
}

export default SearchBar;
