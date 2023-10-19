import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";
const Product = ({ datas, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;
  datas.forEach((data) => {
    if (data.name.indexOf(filterText) === -1) return;
    if (inStockOnly && !data.stocked) return;
    if (data.category !== lastCategory) {
      rows.push(<CategoryRow category={data.category} key={data.category} />);
    }
    rows.push(<ProductRow data={data} key={data.name} />);
    lastCategory = data.category;
  });
  return (
    <table>
             {" "}
      <tr>
        <th>Name</th> <th>Price</th>{" "}
      </tr>
            {rows}   {" "}
    </table>
  );
};
export default Product;
