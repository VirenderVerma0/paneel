import React, { useState } from "react";
import "../Styles/OrdersPage.css";

const tabs = [
    "All",
    "Pending",
    "In Progress",
    "Completed",
    "Partial",
    "Processing",
    "Canceled",
];

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div className="orders-screen">

            {/* TABS */}
            <div className="tabs-container">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* SEARCH BAR */}
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search orders through link"
                    className="search-input"
                />
                <button className="search-btn">
                    🔍
                </button>
            </div>

            {/* TABLE HEADER */}
            <div className="table-scroll">
                <div className="table-header">
                    <span>ID</span>
                    <span>Date</span>
                    <span>Link</span>
                    <span>Charge</span>
                    <span>Start</span>
                    <span>Quantity</span>
                    <span>Service Name</span>
                    <span>Status</span>
                    <span>Remains</span>
                </div>
            </div>

            {/* WARNING FOR ALL TAB */}
            {activeTab === "All" && (
                <div style={{
                    backgroundColor: 'white',
                    color: 'red',
                    border: '1px solid #f87171',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    marginTop: '20px'
                }}>
                    Your order is not completed because your account is a business account.
                </div>
            )}


        </div>
    );
}
