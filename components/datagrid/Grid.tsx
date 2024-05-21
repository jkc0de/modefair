import React from "react";
import { IGrid } from "@/interface/DataGridInterface";
import Row from "./Row";

export default function Grid({ data, detail, style, children }: IGrid) {
  return (
    <div className="container mx-auto mt-5 w-full text-sm" style={style}>
      <table className="min-w-full border-collapse divide-y divide-gray-200 border ">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border" style={{ width: "32px" }}></th>
            {children}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <Row key={index} item={item} detail={detail} data={children} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
