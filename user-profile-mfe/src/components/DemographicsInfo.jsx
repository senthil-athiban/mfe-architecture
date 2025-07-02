import React, { Suspense } from "react";

const Card = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.Card })));
const CardHeader = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.CardHeader })));
const CardTitle = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.CardTitle })));
const CardContent = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.CardContent })));

const demographicsData = {
  age: 32,
  location: "San Francisco, CA",
  timezone: "PST (UTC-8)",
  language: "English",
  country: "United States",
  phoneNumber: "+1 (555) 123-4567",
  address: "123 Main Street, Apt 4B",
  emergencyContact: "Jane Doe - +1 (555) 987-6543"
};

const DemographicsInfo = () => {
  return (
    <Suspense fallback={<div>Loading demographics...</div>}>
      <Card>
        <CardHeader>
          <CardTitle>Demographics Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-500">Age</label>
              <p>{demographicsData.age} years old</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Location</label>
              <p>{demographicsData.location}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Timezone</label>
              <p>{demographicsData.timezone}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Language</label>
              <p>{demographicsData.language}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Country</label>
              <p>{demographicsData.country}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Phone</label>
              <p>{demographicsData.phoneNumber}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Address</label>
              <p>{demographicsData.address}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Emergency Contact</label>
              <p>{demographicsData.emergencyContact}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default DemographicsInfo;