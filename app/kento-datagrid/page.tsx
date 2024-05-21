"use client";

import * as React from "react";
import products from "@/data/DataGridProducts.json";
import { IProduct } from "@/interface/DataGridInterface";
import Grid from "@/components/datagrid/Grid";
import Column from "@/components/datagrid/Column";

interface Props {
  dataItem: IProduct;
}

const DetailComponent: React.FC<Props> = ({ dataItem }) => {
  return (
    <section className="flex flex-col px-3 py-2 ">
      <p className="mb-3.5">
        <strong>In Stock:</strong> {dataItem.UnitsInStock} units
      </p>
      <p className="mb-3.5">
        <strong>On Order:</strong> {dataItem.UnitsOnOrder} units
      </p>
      <p className="mb-3.5">
        <strong>Reorder Level:</strong> {dataItem.ReorderLevel} units
      </p>
      <p className="mb-3.5">
        <strong>Discontinued:</strong>{" "}
        {dataItem.Discontinued && dataItem.Discontinued.toString()}
      </p>
      <p className="mb-3.5">
        <strong>Category:</strong> {dataItem.Category?.CategoryName} -{" "}
        {dataItem.Category?.Description}
      </p>
    </section>
  );
};

export default function DataGrid() {
  const [data, setData] = React.useState<Array<IProduct>>(products);

  return (
    <main className="mx-auto flex h-screen w-[85%] items-center justify-center">
      <Grid data={data} detail={DetailComponent} style={{ height: "400px" }}>
        <Column field="ProductName" title="Product" width="300px" />
        <Column field="ProductID" title="ID" width="50px" />
        <Column field="UnitPrice" title="Unit Price" width="100px" />
        <Column field="QuantityPerUnit" title="Qty Per Unit" />
      </Grid>
    </main>
  );
}
