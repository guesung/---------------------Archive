import { useState } from "react";
import SearchBar from "./SearchBar";
import Product from "./Product";
import datas from "./datas";
const Productable = () => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const changeFilterText = (e) => {
    setFilterText(e.target.value);
  };
  const changeInStockOnly = (e) => {
    setInStockOnly(e.target.checked);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        changeFilterText={changeFilterText}
        changeInStockOnly={changeInStockOnly}
      />
           
      <Product
        datas={datas}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
         
    </div>
  );
};
export default Productable;
