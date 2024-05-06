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
import { Search } from "lucide-react";

type tableProps = {
  contacts: Object[];
  handleDel: (num: string) => void;
  handleEditClick: (contact: any) => void;
  setContacts: any;
};
const columns = [
  {
    key: "name",
    label: "name",
  },
  {
    key: "telephonee",
    label: "telephone",
  },
  {
    key: "email",
    label: "email",
  },
  {
    key: "owner",
    label: "owner",
  },
  {
    key: "organization",
    label: "organization",
  },
  {
    key: "technical",
    label: "technical",
  },
  {
    key: "security",
    label: "security",
  },
  {
    key: "action",
    label: "Action",
  },
];

export default function FirmTable({
  contacts,
  handleDel,
  handleEditClick,
  setContacts,
}: tableProps) {
  // console.log(contacts);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "text-black",
        "border",
        "border-red-400",
        "bg-green-300",
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

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput === "") {
      setContacts(contacts);
    }
    const newList = contacts.filter((post) =>
      post.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setContacts(newList);
  };

  return (
    <div className="flex flex-col justify-evenly mt-10 bg-indigo-500">
      <div className="flex justify-between mt-4">
        <span className="ml-16 text-4xl text-white">Kontakt person</span>
        <div className="flex items-center bg-white mr-16 w-72 rounded-md">
          <Search className="ml-4" />
          <input
            className="h-11"
            placeholder="search by colums name"
            onChange={(e)=>setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </div>
      <div className="mt-14 ml-20 mb-16">
        <Table
          classNames={classNames}
          aria-label="Example table with dynamic content"
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {contacts.filter((row)=>{
          if(searchInput==""){
            return row;
          }else if(row.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())){
            return row
          }
      })?.map((row) => (
              <TableRow key={row.key}>
                <TableCell onClick={(e) => handleEditClick(row)}>
                  {row.name}
                </TableCell>
                <TableCell>{row.telephone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>{row.organization}</TableCell>
                <TableCell>{row.technical}</TableCell>
                <TableCell>{row.security}</TableCell>
                <TableCell onClick={() => handleDel(row.key)}>del</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
