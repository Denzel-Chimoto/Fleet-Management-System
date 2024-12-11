import React from "react";
import "./styles/ReportsPage.css"; // Optional: Add your CSS for styling
import AnalyticsImg from "../AnalyticsImg.png";

const ReportsPage = () => {
  return (
    <div className="reports-page">
      <h1 className="reports-header">Reports</h1>
      <div className="reports-images">
        <h1>This will display Machine Learning Graphs after data analysis</h1>
        <img src={AnalyticsImg} alt="Analytics not Available. Contact Server Administrator" />
      </div>
    </div>
  );
};

export default ReportsPage;
