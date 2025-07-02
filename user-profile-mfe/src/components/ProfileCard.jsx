import React, { Suspense } from "react";

const Card = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.Card })));
const CardHeader = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.CardHeader })));
const CardTitle = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.CardTitle })));
const CardContent = React.lazy(() => import("designSystem/Card").then(module => ({ default: module.CardContent })));
const Button = React.lazy(() => import("designSystem/Button").then(module => ({ default: module.Button })));

const userProfileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  role: "Senior Developer",
  department: "Engineering",
  joinDate: "January 2020"
};

const ProfileCard = () => {
  return (
    <Suspense fallback={<div>Loading profile card...</div>}>
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={userProfileData.avatar}
              alt={userProfileData.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">{userProfileData.name}</h3>
              <p className="text-gray-600">{userProfileData.role}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div>
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p>{userProfileData.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Department</label>
              <p>{userProfileData.department}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Join Date</label>
              <p>{userProfileData.joinDate}</p>
            </div>
          </div>
          
          <Button className="w-full">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default ProfileCard;