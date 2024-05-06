
"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Radio, RadioGroup} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    shortfirmname: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    firmname: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    customernumber: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    isautomaticgenerate: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [

  {
    key: "shortfirmname",
    label: "SHORTFIRMNAME",
  },
  {
    key: "firmname",
    label: "FIRMNAME",
  },
  {
    key: "customernumber",
    label: "CUSTOMERNUMBER",
  },
  {
    key: "isautomaticgenerate",
    label: "ISAUTOMATICGENERATE",
  },
  {
    key: "address",
    label: "ADDRESS",
  },
  {
    key: "telephonenumber",
    label: "TELEPHONENUMBER",
  },
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "website",
    label: "WEBSITE",
  },
  {
    key: "fax",
    label: "FAX",
  },
];

export default function App() {
  const [selectionBehavior, setSelectionBehavior] = React.useState("toggle");

  return (
    <div className="flex flex-col gap-3">
      <Table 
        aria-label="Rows actions table example with dynamic content"
        selectionMode="multiple"
        selectionBehavior={selectionBehavior}
        onRowAction={(key) => alert(`Opening item ${key}...`)}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <RadioGroup 
        label="Selection Behavior"
        orientation="horizontal"
        value={selectionBehavior}
        onValueChange={setSelectionBehavior}
      >
        <Radio value="toggle">Toggle</Radio>
        <Radio value="replace">Replace</Radio>
      </RadioGroup>
    </div>
  );
}
