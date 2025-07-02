import React, { Suspense } from "react";
import DataTable from "./DataTable";
import MetricsCards from "./MetricsCard";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      
      <Suspense fallback={<div>Loading metrics...</div>}>
        <MetricsCards />
      </Suspense>
      
      <Suspense fallback={<div>Loading data table...</div>}>
        <DataTable />
      </Suspense>
    </div>
  );
};

export default Dashboard;