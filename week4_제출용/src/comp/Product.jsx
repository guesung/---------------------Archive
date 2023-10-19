import ProductCategoryRow from './ProductCategoryRow' ;
import ProductRow from './ProductRow' ;
const Product = ({datas}) => {
  const rows = [];                      // 빈 배열
  let lastCategory = null;            // null 값 
 datas.forEach((datas) => {  // 모둔 상퓸(datas)에 대해서…..
      if (datas.category !== lastCategory) {  // category 가 다를 때
      rows.push(<ProductCategoryRow category={datas.category} />)
      }
    // product 보냄(상품명과 가격을 출력)
    rows.push(< ProductRow datas ={datas} />);
    lastCategory = datas.category;
  });
  return (
    <table>
      <tr> <th>Name</th> <th>Price</th> </tr>
      {rows}
    </table>
  );
};
export default Product ;
