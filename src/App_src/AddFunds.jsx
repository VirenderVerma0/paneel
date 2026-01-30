import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../Styles/AddFunds.css";

export default function AddFunds() {
    const [method, setMethod] = useState("PayTM QR");
    const [qrImageUrl, setQrImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    const methodOptions = [
        { value: "PayTM QR", label: "PayTM QR" },
        { value: "PhonePe QR", label: "PhonePe QR" },
        { value: "GPay QR", label: "GPay QR" },
    ];

    // Fetch QR Code from your backend
    useEffect(() => {
        const fetchQrCode = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://smm-backend-5.onrender.com/api/auth/qr"); // Change to your live URL later
                const data = await response.json();

                if (data.status && data.qrImageUrl) {
                    setQrImageUrl(data.qrImageUrl);
                } else {
                    fallbackToDefaultQr();
                }
            } catch (err) {
                console.log("QR API failed, using default",err);
                fallbackToDefaultQr();
            } finally {
                setLoading(false);
            }
        };

        const fallbackToDefaultQr = () => {
            // Your current base64 image (keeps working even if server is down)
            setQrImageUrl(
                "data:image/png;base64,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"
            );
        };

        fetchQrCode();
    }, []);

    return (
        <div className="addfunds-page">
            <div className="addfunds-card">
                <h1 className="title">Add Funds</h1>

                {/* Method */}
                <label className="input-label">Method</label>
                <Select
                    className="react-select-container"
                    classNamePrefix="react-select"
                    options={methodOptions}
                    value={methodOptions.find((o) => o.value === method)}
                    onChange={(selected) => setMethod(selected.value)}
                    placeholder="Select Method"
                    isSearchable={false}
                />

                {/* QR Code Display */}
                <div className="qr-image-box">
                    {loading ? (
                        <div className="qr-loading">
                            <div className="spinner"></div>
                            <p>Loading QR Code...</p>
                        </div>
                    ) : qrImageUrl ? (
                        <img src={qrImageUrl} alt="Payment QR Code" className="qr-image" />
                    ) : (
                        <p>No QR Code Available</p>
                    )}
                </div>

                {/* Instructions */}
                <label className="input-label">Instructions</label>
                <div className="warning-box">
                    <span className="warning-icon">Warning</span>
                    <span className="warning-title">महत्वपूर्ण जानकारी:</span>
                </div>

                <ul className="instruction-list">
                    <li>न्यूनतम जमा राशि ₹199 है — इससे कम राशि स्वीकार नहीं की जाएगी।</li>
                    <li>हमेशा ऊपर दिए गए QR कोड से ही पेमेंट करें ताकि फंड तुरंत जुड़ सके।</li>
                </ul>

                {/* Amount */}
                <label className="input-label">Amount [ ~ INR ]</label>
                <input type="text" className="input-box" placeholder="199" />

                {/* Transaction ID */}
                <label className="input-label">
                    Enter Transaction/Order ID without spaces.
                </label>
                <input type="text" className="input-box" placeholder="202010122210100058" />

                <button onClick={()=>alert("first enter the amount ")} className="add-btn">Add Funds</button>
            </div>

            {/* TABLE HEADER */}
            <div className="table-scroll">
                <div className="table-header">
                    <span>ID</span>
                    <span>Amount</span>
                    <span>Payment Method</span>
                    <span>Date</span>
                    <span>Transaction Id</span>
                </div>
            </div>
        </div>
    );
}