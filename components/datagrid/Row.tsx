import { IRow } from "@/interface/DataGridInterface";
import React, { useState } from "react";

export default function Row({ item, data, detail: DetailComponent }: IRow) {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <React.Fragment>
      <tr className="border even:bg-gray-100 hover:bg-gray-200">
        <td
          onClick={() => setIsExpand(!isExpand)}
          className="flex w-full items-center justify-center px-3 py-2 font-semibold"
        >
          <span className="material-symbols-outlined mx-auto cursor-pointer select-none">
            {isExpand ? "remove" : "add"}
          </span>
        </td>
        {data &&
          data.map((fieldElement: React.ReactElement, index: number) => {
            const fieldName = fieldElement.props.field;
            return (
              <td className="border px-3 py-2" key={index}>
                {item[fieldName]}
              </td>
            );
          })}
      </tr>
      {isExpand && DetailComponent && (
        <tr className="hover:bg-gray-200">
          <td colSpan={1}></td>
          <td colSpan={data && data.length + 1}>
            <DetailComponent dataItem={item} />
          </td>
        </tr>
      )}
    </React.Fragment>
  );
}
