"use client";

import { IColumn } from "@/interface/DataGridInterface";

export default function Column({ field, title, width }: IColumn) {
  return (
    <th className="border px-3 py-2" style={{ width }}>
      {title}
    </th>
  );
}
