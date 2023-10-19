import React, { Component } from "react";

class Vegetables extends Component {
  render() {
    const { datas } = this.props;

    return (
      <div>
        <h1>채소 종류</h1>
        <ul>
          {datas.map((data) => {
            return <li key={data.id}>{data.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Vegetables;
