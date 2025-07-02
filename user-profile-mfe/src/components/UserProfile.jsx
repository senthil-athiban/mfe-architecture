import React, { Suspense } from "react";
import ProfileCard from "./ProfileCard";
import DemographicsInfo from "./DemographicsInfo";

const UserProfile = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Profile</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Suspense fallback={<div>Loading profile...</div>}>
          <ProfileCard />
        </Suspense>
        
        <Suspense fallback={<div>Loading demographics...</div>}>
          <DemographicsInfo />
        </Suspense>
      </div>
    </div>
  );
};

export default UserProfile;