const SearchBar = (props) => {
  const { filterText, inStockOnly, changeFilterText, changeInStockOnly } =
    props;
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={changeFilterText}
      />
      <p>
         
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={changeInStockOnly}
        />
                Only show products in stock
      </p>
    </form>
  );
};
export default SearchBar;
