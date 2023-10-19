const ProductRow = ({ datas }) => {
    const name = datas.stocked ? ( // 재고가 있으면 ..
      datas.name                          // 상품명 출력
    ) : (                                      // 재고가 없으면
      <span style={{ color: "red" }}>{datas.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{datas.price}</td>
      </tr>
    );
  };
  export default ProductRow;
  