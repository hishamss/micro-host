import React from "react";
import { Table } from "@uitk/react";

const config = {
  columns: [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Date", key: "date" },
    { label: "SSN", key: "ssn" },
  ],
  caption: {
    headerText: "Home Table",
  },
};

const dataSource = [
  {
    id: "1",
    firstName: "Joe",
    lastName: "Blogs",
    date: "1987-08-12",
    ssn: "SSN_000005",
  },
  {
    id: "2",
    firstName: "Stephen",
    lastName: "Cruise",
    date: "2000-05-23",
    ssn: "SSN_000002",
  },
];

const HomeTable= () => (
  <Table data={dataSource} config={config} />
);

export default HomeTable;



