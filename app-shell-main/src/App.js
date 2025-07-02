import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load remote components
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const UserProfile = React.lazy(() => import("userProfile/UserProfile"));

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={<div className="p-6">Loading Dashboard...</div>}>
                  <Dashboard />
                </Suspense>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <Suspense fallback={<div className="p-6">Loading Dashboard...</div>}>
                  <Dashboard />
                </Suspense>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <Suspense fallback={<div className="p-6">Loading Profile...</div>}>
                  <UserProfile />
                </Suspense>
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;