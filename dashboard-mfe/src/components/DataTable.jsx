import React, { Suspense } from "react";

const Table = React.lazy(() => import("designSystem/Table").then(module => ({ default: module.Table })));
const TableHeader = React.lazy(() => import("designSystem/Table").then(module => ({ default: module.TableHeader })));
const TableBody = React.lazy(() => import("designSystem/Table").then(module => ({ default: module.TableBody })));
const TableHead = React.lazy(() => import("designSystem/Table").then(module => ({ default: module.TableHead })));
const TableRow = React.lazy(() => import("designSystem/Table").then(module => ({ default: module.TableRow })));
const TableCell = React.lazy(() => import("designSystem/Table").then(module => ({ default: module.TableCell })));
const Card = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.Card })));

const tableData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    role: "Admin",
    lastLogin: "2024-01-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Active",
    role: "User",
    lastLogin: "2024-01-14"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "Inactive",
    role: "User",
    lastLogin: "2024-01-10"
  }
];

const DataTable = () => {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
        <Suspense fallback={<div>Loading table...</div>}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Login</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </div>
    </Card>
  );
};

export default DataTable;