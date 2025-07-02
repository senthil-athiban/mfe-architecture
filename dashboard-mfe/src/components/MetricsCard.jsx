import React, { lazy, Suspense } from "react";

const Card = lazy(() => import("designSystem/Card").then(module => ({ default: module.Card })));
const CardHeader = lazy(() => import("designSystem/Card").then(module => ({ default: module.CardHeader })));
const CardTitle = lazy(() => import("designSystem/Card").then(module => ({ default: module.CardTitle })));
const CardContent = lazy(() => import("designSystem/Card").then(module => ({ default: module.CardContent })));

const metricsData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up"
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    trend: "up"
  },
  {
    title: "Conversion Rate",
    value: "12.5%",
    change: "+19%",
    trend: "up"
  },
  {
    title: "Bounce Rate",
    value: "45.2%",
    change: "-4.5%",
    trend: "down"
  }
];

const MetricsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<div>Loading cards...</div>}>
        {metricsData.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </Suspense>
    </div>
  );
};

export default MetricsCards;