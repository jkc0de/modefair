import React from "react";

export interface IProductCategory {
  CategoryID?: number;
  CategoryName?: string;
  Description?: string;
  details?: any;
}

export interface IProduct {
  ProductID: number;
  ProductName?: string;
  SupplierID?: number;
  CategoryID?: number;
  QuantityPerUnit?: string;
  UnitPrice?: number;
  UnitsInStock?: number;
  UnitsOnOrder?: number;
  ReorderLevel?: number;
  Discontinued?: boolean;
  Category?: IProductCategory;
  expanded?: boolean;
  inEdit?: boolean | string;
  locked?: boolean;
}

export interface IGrid {
  data: IProduct[];
  detail: React.FC<{ dataItem: IProduct }> | null;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export interface IColumn {
  field: string;
  title: string;
  width?: string;
}

export interface IRow {
  item: any;
  data: any;
  detail: React.FC<{ dataItem: IProduct }> | null;
}
