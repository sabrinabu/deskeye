"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

/*const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAMe",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];*/

export default function Tablel() {
  const [value, setValue] = useState(false);

  const rows = [
    {
      key: "1",
      shortfirmname: "hhhh",
      firmname: "asss",
      customernumber: 0,
      isautomaticgenerate: value ? "ja" : "nain",
      address: "34 stre",
      telephonenumber: "012255",
      email: "ron@gmail",
      website: "ggg",
      fax: "022",
    },
    {
      key: "2",
      shortfirmname: "bbh",
      firmname: "hh",
      customernumber: 0,
      isautomaticgenerate: false,
      address: "43stre",
      telephoneNumber: "0144",
      email: "ron@gmail.com",
      website: "vv",
      fax: "4444",
    },
  ];
  const [todos, setTodos] = useState(rows);
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
    {
      key: "action",
      label: "Action",
    },
  ];

  const handleDel = (id) => {
    const newContacts = [...todos];

    const index = todos.findIndex((contact) => contact.key === id);

    newContacts.splice(index, 1);

    setTodos(newContacts);
  };

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {todos.map((row) => (
          <TableRow key={row.key}>
            <TableCell>{row.shortfirmname}</TableCell>
            <TableCell>{row.firmname}</TableCell>
            <TableCell>{row.customernumber}</TableCell>
            <TableCell>{row.isautomaticgenerate}</TableCell>
            <TableCell>{row.address}</TableCell>
            <TableCell>{row.telephonenumber}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.website}</TableCell>
            <TableCell>{row.fax}</TableCell>
            <TableCell onClick={() => handleDel(row.key)}>del</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
