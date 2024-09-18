import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row
} from 'material-react-table';
import { User } from '../../types/user';

// Define the props for the component
type UserTableProps = {
  data: User[];
  handleUserDetail: (data: User) => void;
};

// Define the UserTable component
const UserTable: React.FC<UserTableProps> = ({ data, handleUserDetail }) => {
  // Memoize the column definitions
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name.firstName', // Access nested data with dot notation
        header: 'First Name',
        size: 150
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        size: 150
      },
      {
        accessorKey: 'address.country',
        header: 'Country',
        size: 150
      },
      {
        accessorKey: 'contact.email',
        header: 'Email',
        size: 150
      },
      {
        // Add a "See More" column
        accessorKey: 'detail',
        header: 'Actions',
        size: 80,
        enableSorting: false,
        enableColumnActions: false,
        // Define the cell render function
        Cell: ({ row }: { row: MRT_Row<User> }) => (
          <button
            className="bg-blue-500 px-2 py-1 rounded-lg text-white"
            onClick={() => handleUserDetail(row.original)}
          >
            detail
          </button>
        )
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      pagination: {
        pageIndex: 0, // Start on the first page
        pageSize: 5 // Show 5 rows per page
      }
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5], //fix for 5 rows it fit on our screen size
      showFirstButton: false,
      showLastButton: false
    }
  });

  // Render the table
  return <MaterialReactTable table={table} />;
};

export default UserTable;
