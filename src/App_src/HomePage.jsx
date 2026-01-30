import React, { useState } from "react";
import "../Styles/HomePage.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const [quantity, setQuantity] = useState("");
  const [link, setLink] = useState("");
  const [showOrderDialog, setShowOrderDialog] = useState(false);
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user, 'okokkokkokoko');

  const categoryData = [
    {
      category: "Real Indian Followers Lifetime guaranteed🚀🚀",
      services: [
        {
          name:
            "Real Indian Active Followers | Active profile | Non drop | 100% Active: Indian Followers Permanent | LifeTime Guaranteed (Special Offer : 10k Like + 50k View All Post All Reels) 🚀🚀",
          price: 0.009,
          desc: [
            "⏱ Start Time: Instant–5 mins",
            "🚀 Speed: 100k/5mint",
            "✅ Quality: Real Active",
            "🔻 Drop: 0%",
            "🇮🇳 Country: INDIAN Followers",
            "🔄 Refill Period: Lifetime",
            "🔗 Link type: Profile link",
            "🛡 Safety: 100% Safe",
            "📄 Speed note: 100k/hr",
            "🆘 Support: Good Support"
          ]
        },

        {
          name: "Real Followers | Real profile | 100% Real Followers",
          price: 0.019,
          desc: [
            "⏱ Start Time: Instant",
            "🚀 Speed: Very Fast",
            "📌 Quality: High Quality Real",
            "🔄 Refill: 365 Days",
            "🛡 Safety: Safe & Secure"
          ]
        },

        {
          name: "100% Real Indian Followers 🚀 Active, Engaging & Lifetime Guaranteed 💯",
          price: 0.09,
          desc: [
            "Start Time: 0–15 Minutes 🚀",
            "Quality: High-Quality Indian Profiles 💯",
            "📌 Quality: Real Indian",
          ]
        },

        {
          name: "🚀 BoostMax India 🇮🇳 – 1 Year Refill Support 🔁",
          price: 0.45,
          desc: [
            "🚀Start Time: Instant – starts within 0-5 minutes ⚡",
            "Quality: 100% Real, Active Indian Followers 💯",
            "Refill: 365 Days Long-Term Guarantee 🔁",
          ]
        },

        {
          name:
            "✅ Smart Auto Followers Growth System – 100% Real & Active Indian Audience 🇮🇳",
          price: 0.78,
          desc: [
            "📅 Start Time: ⚡ Instant Activation",
            "🌟 Quality: 💙 Verified Real Indian Followers",
            "♻️ Refill: 🔁 Lifetime Guarantee",
            "🛡️ Drop Rate: 💯 0% – Non-Drop & Super Stable",
          ]
        },

        {
          name:
            "💎 Royal Indian Followers Boost Package – 100% Real & Lifetime Refill 🇮🇳",
          price: 0.09,
          desc: [
            "📅 Start Time: ⚡ Instant Activation",
            "🌟 Quality: 💕 100% Real, Verified & Active Indian Female Followers",
            "♻️ Refill: 🔁 Lifetime Guarantee",
            "🛡️ Drop Rate: 💯 0% – Non-Drop & Super Stable",
            "🚀 Speed: ⚡ Fast & Smooth Delivery",
          ]
        },

        {
          name:
            "💖 Indian Beauty Followers Pack – Verified Female Profiles 🌸",
          price: 0.003,
          desc: [
            "⏱ Start: 5–20 mins",
            "🌸 Quality: Female Verified Audience",
            "🚀 Speed: Good",
            "🔄 Refill: Lifetime",
            "🛡 Safety: Safe"
          ]
        },

        {
          name:
            "💎 InstaReach Premium City Target Followers Package – Real & Verified Indian Location Audience",
          price: 0.022,
          desc: [
            "🌍 Target: City / State Wise",
            "🚀 Speed: Medium–Fast",
            "📌 Quality: Real Indian Targeted",
            "🔄 Refill: Lifetime",
            "🛡 Safety: Trusted"
          ]
        }
      ]
    },
    {
      category: "Bluetick Services Permanent🚀🇮🇳",
      services: [
        {
          name: "Instagram Bluetick Verification Permanent - 509 per🚀",
          price: 509,
          desc: [
            "▶️ Start: 0 - 8Min",
            "💨 Bluetick parmanent",
            "🚀 Speed: Fast",
            "🔄 Refill: Lifetime",
            "🛡 Safe: Yes",
            "🔥 Quality: Real",
            "✅ Order can't be cancel / partial once place order."
          ]
        },

        {
          name: "Facebook Bluetick Verification Permanent - 399 per🚀",
          price: 399,
          desc: [
            "⏱ Start: 0–2 mins",
            "❤️ Quality: Non-Drop Guaranteed",
            "🚀 Speed: Good",
            "🛡 Safety: 100% Safe"
          ]
        }
      ]
    },
    {
      category: "Instagram Views> Real Views Indian🚀🚀🇮🇳",
      services: [
        {
          name: "  Instagram Reel Views - Fast speed working fast🚀🚀 Best service 🙌 - ₹ 1.40 per 1000",
          price: 0.014,
          desc: [
            "🕒 Start Time: Instant-5 mins",
            "🚀 Speed: 1M per day",
            "✅ Quality: Real Active",
            "📉 Drop: 0%",
            "🚀 Country : INDIAN",
            "↗ Refill Period: Lifetime Days",
            "🔗Link type: Profile link",
            "🛡Safety: 100% Safe",
            "🗒Service note: Speed is currently 100k/hr speed may Increase soon",
            "🆘Support: Good Support [R Button Available]"
          ]
        },

        {
          name: "  🎥 InstaReach Premium Indian Views Package – ✅ 100% Real & Active Audience 🇮🇳 - ₹ 3.40 per 1000",
          price: 0.004,
          desc: [
            "⚡ Start Time: 0–2 Minutes",
            "💙 Quality: 100% Real & Active Indian Views",
            "🔁 Refill: Lifetime Guarantee | 💯 Non-Drop",
          ]
        },
      ]
    },
    {
      category: "Instagram Like > Real Indian 🚀🇮🇳",
      services: [
        {
          name: " Indian Real Like > indian profile picture Likes 🚀🚀🇮🇳🇮🇳🚀 Full garntee - ₹ 1.70 per 1000",
          price: 0.017,
          desc: [
            "▶️ Start: 0 - 8Min",
            "💨 Bluetick parmanent",
            "🚀 Speed: Fast",
            "🔄 Refill: Lifetime",
            "🛡 Safe: Yes",
            "🔥 Quality: Real",
            "✅ Order can't be cancel / partial once place order."
          ]
        },

        {
          name: " ❤️ InstaBoost Premium Indian Likes Package – ✅ 100% Real & Active Engagement 🇮🇳 - ₹ 3.40 per 1000",
          price: 0.034,
          desc: [
            "⏱ Start: 0–2 mins",
            "❤️ Quality: Non-Drop Guaranteed",
            "🚀 Speed: Good",
            "🛡 Safety: 100% Safe"
          ]
        },
        {
          name: "  💖 InstaReach Target Likes Package – ✅ 100% Real Indian Location-Based Engagement 📍🇮🇳 - ₹ 6.70 per 1000",
          price: 0.067,
          desc: [
            "⏱ Start: 0–2 mins",
            "❤️ Quality: Non-Drop Guaranteed",
            "🚀 Speed: Good",
            "🛡 Safety: 100% Safe"
          ]
        },
      ]
    },
    {
      category: "Special sale 🚀🇮🇳",
      services: [
        {
          name: "  Real Indian Active Followers | Active profile | Non drop | 100% Active: Indian Followers Parmanent | LifeTime Guaranteed ( Special Offer : 10k Like + 50k View All Post All Reels)🚀🚀 - ₹ 0.98 per 1000",
          price: 0.0098,
          desc: [
            "▶️ Start Time: Instant-5 mins",
            "💨 Speed: 100k/5mint",
            "🚀 Quality: Real Active",
            "📉 Drop: 0%",
            "🚀 Country : INDIAN Followers",
            "↗ Refill Period: Lifetime Days",
            "🔗Link type: Profile link",
            "🛡Safety: 100% Safe",
            "🗒Service note: Speed is currently 100k/hr speed may Increase soon"
          ]
        },

        {
          name: "  Youtube full channel monatize (4k Watch Time+1k Indian subscribers)🫰😍 - ₹ 99.0 per",
          price: 0.0099,
          desc: [
            "⏱ Start: 0–2 mins",
            "❤️ Quality: Non-Drop Guaranteed",
            "🚀 Speed: Good",
            "🛡 Safety: 100% Safe"
          ]
        },
        {
          name: " Instagram Account Unfreeze (Automatic Account Growth) 🎊🤝 - ₹ 99.0 per ",
          price: 0.0099,
          desc: [
            "⏱ Start: 0–2 mins",
            "❤️ Quality: Non-Drop Guaranteed",
            "🚀 Speed: Good",
            "🛡 Safety: 100% Safe"
          ]
        },
      ]
    },
    {
      category: "Instagram Viral bundle",
      services: [
        {
          name: "   🎥 1 Million Organic Reels Views Bundle 🎥 - ₹ 349.0 per ",
          price: 349.0,
          desc: [
            "⚡ Start Time: 15–30 Minutes – Lightning Fast Activation",
            "🌍 100% Organic & Real Reach",
            "📈 Boost Your Virality, Engagement & Explore Page Chances",
            "💎 Perfect for Creators, Brands & Influencers",
            "🔒 Safe & Secure – No Password Needed",
          ]
        },

        {
          name: "   🔥 All Instagram Viral Reels Bundle 🔥 - ₹ 799.0 per ",
          price: 799.0,
          desc: [
            "🚀 Everything you need to make your reels GO VIRAL in one powerful bundle!",
            " ",
            "✅ 1M+ Organic Reel Views",
            "✅ Engagement Boost (Likes + Comments + Shares)",
            "✅ Follower Growth Support",
            "✅ Hashtag Strategy + Viral Tips",
          ]
        },
        {
          name: " Instagram Account Unfreeze (Automatic Account Growth) 🎊🤝 - ₹ 99.0 per ",
          price: 99.0,
          desc: [
            "⏱ Start: 0–2 mins",
            "❤️ Quality: Non-Drop Guaranteed",
            "🚀 Speed: Good",
            "🛡 Safety: 100% Safe"
          ]
        },
      ]
    },
    {
      category: "YOUTUBE INDIAN SUBSCRIBER [NON-DROP]",
      services: [
        {
          name: "  🎬 1K YouTube Subscribers Package 🎬 - ₹ 189.0 per ",
          price: 0.0189,
          desc: [
            "⚡ Start Time: Fast Activation",
            "👥 1,000+ Real & Active Subscribers",
            "🔒 Safe & Secure – No Password Needed",
            "📈 Boost Channel Authority, Reach & Monetization Goals",
            "✅ 30 Days Refill Guarantee – Stay Worry-Free",
          ]
        },

        {
          name: "  🎬 1K YouTube Subscriber-Lifetime Garantee - ₹ 599.0 per ",
          price: 0.0599,
          desc: [
            "⚡ Fast Activation – Instant Growth",
            " 👥 1,000+ Real & Active Subscribers",
            "📈 Boost Your Channel Authority & Monetization Chances",
            "🔒 100% Safe & Secure – No Password Needed",
            "💎 Lifetime Refill Guarantee – Permanent Support",
          ]
        }
      ]
    },
    {
      category: "YOUTUBE VIEWS & LIKES",
      services: [
        {
          name: "  🎬 YouTube Video Views Bundle - ₹ 25.0 per 1000",
          price: 0.025,
          desc: [
            "⚡ Start Time: Superfast Activation",
            "👀 100% Real & Active Views – No Bots, No Fake Stuff",
            "📈 Boost Watch Time, SEO Ranking & Monetization Chances",
            "🌍 Reach a wider global audience & get noticed by YouTube’s algorithm",
            "🔒 Safe, Secure & Lifetime Stable",
          ]
        },

        {
          name: "  👍 YouTube Likes Boost Package  - ₹ 17.60 per 1000",
          price: 0.0176,
          desc: [
            "⚡ Instant Activation – Start in Minutes",
            "👥 Real & Active Likes – No Bots, No Fake Engagement",
            "📈 Boost Video Credibility, Ranking & Reach",
            "🔒 100% Safe & Secure – No Password Needed",
            "💎 Perfect for creators, influencers & brands looking to make their videos more trustworthy and engaging",
          ]
        }
      ]
    },
    {
      category: "INSTAGRAM VIEWS & LIKES",
      services: [
        {
          name: "   🇮🇳 Indian Views & Likes Combo – 10K Views + 5K Likes 🇮🇳 - ₹ 99.0 per ",
          price: 0.099,
          desc: [
            "⚡ Start Time: 15 Minutes – Instant Activation",
            "👀 10,000 Real Indian Views – Targeted Audience",
            "👍 5,000 Real Indian Likes – Boost Engagement & Credibility",
            "📈 Perfect for YouTube creators, influencers & brands looking to dominate the Indian market",
            "🔒 Safe, Secure & Lifetime Stable",
          ]
        },

        {
          name: "  🔥 Instagram Mega Combo – 100K Views + 20K Likes 🔥 - ₹ 199.0 per 1000",
          price: 0.199,
          desc: [
            "⚡ Start Time: 15 Minutes – Instant Activation",
            "👀 100,000 Real Views – Global or Targeted Audience",
            "👍 20,000 Real Likes – Boost Engagement & Credibility Instantly",
            "📈 Skyrocket your Video Ranking, Watch Time & Viral Potential",
            "🔒 100% Safe & Secure",
          ]
        }
      ]
    },
    {
      category: "INSTAGRAM ID HACKING SERVICE🚀🇮🇳",
      services: [
        {
          name: "  Instagram Id hack below 10K followers - ₹ 499.0 per ",
          price: 499,
          desc: [
            "You can hack any account whichever you want",
            "Details share on your email check after",
            "10mint of payment success.",
          ]
        },
      ]
    },


  ];

  const navigate = useNavigate();


  const [selectedCategory, setSelectedCategory] = useState(categoryData[0].category);

  // DEFAULT SERVICES OF FIRST CATEGORY
  const [serviceList, setServiceList] = useState(categoryData[0].services);

  // DEFAULT FIRST SERVICE DESCRIPTION
  const [selectedService, setSelectedService] = useState(categoryData[0].services[0]);

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setSelectedCategory(cat);

    const found = categoryData.find((item) => item.category === cat);

    if (found) {
      setServiceList(found.services);
      setSelectedService(found.services[0]); // ✅ auto-select first service
    } else {
      setServiceList([]);
      setSelectedService(null);
    }

    setQuantity("");  // reset quantity
  };


  // HANDLE SERVICE CHANGE
  const handleServiceChange = (e) => {
    const serviceName = e.target.value;
    const service = serviceList.find((s) => s.name === serviceName);
    setSelectedService(service);
  };


  const totalPrice = selectedService
    ? quantity && Number(quantity) > 0
      ? (selectedService.price * quantity).toFixed(2)    // normal calculation
      : selectedService.price.toFixed(2)                 // minimum price
    : "0.00";


  const serviceOptions = serviceList.map((service) => ({
    value: service.name,
    label: service.name,
  }));

  const categoryOptions = categoryData.map(item => ({
    value: item.category,
    label: item.category
  }));

  const handleLogout = () => {
    // Remove only required keys (recommended)
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");

    // OR remove everything (if safe)
    localStorage.clear();

    // Redirect to login page
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!selectedCategory || !selectedService || !link || !quantity) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create order object
    const orderData = {
      id: Date.now(), // Simple ID generation
      category: selectedCategory,
      service: selectedService.name,
      link: link,
      quantity: parseInt(quantity),
      charge: parseFloat(totalPrice),
      date: new Date().toISOString(),
      status: "Pending"
    };

    // Store order in state
    setOrders(prevOrders => [...prevOrders, orderData]);

    // Reset form fields
    setLink("");
    setQuantity("");

    // Show the order success dialog
    setShowOrderDialog(true);
  };

  const closeOrderDialog = () => {
    setShowOrderDialog(false);
  };




  return (
    <div className="home-container">

      {/* HEADER */}
      <div className="home-header">
        {/* <img
          src="https://cdn.blazepanel.com/public/WS5tPj/0546f510e697fac5b49c4c4686a37eea.png"
          alt="Logo"
          className="home-logo"
        /> */}

        <div className="home-header-right">

          <div className="wallet-box">
            <img
              src="data:image/png;base64,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"
              alt="User"
              className="wallet-img"
            />
            <span className="wallet-balance">₹ 0.00</span>
          </div>

        </div>

      </div>

      {/* SIDEBAR (Mobile collapsible later) */}
      <div className="sidebar">
        <div
          className="side-item active"
          onClick={() => navigate("/addfunds")}
        >💰 Add Funds</div>
        <div
          className="side-item active"
          onClick={() => navigate("/orderpage")}
        >📋 Orders</div>
        {/* <div className="side-item">📑 Services</div> */}
        {/* <div className="side-item">👤 Account</div> */}
        <div
          className="side-item"
          onClick={() => handleLogout()}
        >
          🚪 Logout
        </div>
      </div>

      {/* MAIN DASHBOARD CARDS */}
      <div className="dashboard">

        {/* FULL WIDTH USER CARD */}
        <div className="card user-card">
          <div>
            <h3>{user?.username}</h3>
            <p>Welcome to our pannel!!</p>
          </div>
          <div className="icon red">👤</div>
        </div>

        {/* 3-CARD GRID */}
        <div className="stats-grid">
          <div className="card">
            <div>
              <h3>₹00</h3>
              <p>Total Spent</p>
            </div>
            <div className="icon blue">💲</div>
          </div>

          <div className="card">
            <div>
              <h3>6679892</h3>
              <p>Total Orders</p>
            </div>
            <div className="icon yellow">➕</div>
          </div>

          <div className="card">
            <div>
              <h3>₹00</h3>
              <p>Total Balance</p>
            </div>
            <div className="icon green">💳</div>
          </div>
        </div>
      </div>

      <form className="order-wrapper" onSubmit={handleSubmit}>

        <label className="input-label">Category</label>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          required
          options={categoryOptions}
          value={categoryOptions.find(o => o.value === selectedCategory)}
          onChange={(selected) =>
            handleCategoryChange({ target: { value: selected.value } })
          }
          placeholder="Select Category"
          isSearchable={false}
        />

        {/* SERVICES */}
        <label className="input-label">Services</label>
        <Select
          className="react-select-container"
          required
          classNamePrefix="react-select"
          options={serviceOptions}
          value={serviceOptions.find((o) => o.value === selectedService?.name)}
          onChange={(selected) => handleServiceChange({ target: { value: selected.value } })}
          placeholder="Select Service"
          isSearchable={false}
        />


        {/* DESCRIPTION BOX */}
        <label className="input-label">Description</label>
        <div className="desc-box">
          {selectedService.desc.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* LINK INPUT */}
        <label className="input-label">Link</label>
        <input
          className="input-field"
          required
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        {/* QUANTITY INPUT */}
        <label className="input-label">Quantity</label>
        <input
          type="number"
          required
          className="input-field"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter Quantity"
        />

        <p className="min-max">Min: 1000 - Max: 1000000</p>

        {/* CHARGE */}
        <label className="input-label">Charge</label>
        <div className="charge-box">₹{totalPrice}</div>

        <button type="submit" className="order-btn">Place Order</button>
      </form>

      {/* SUBMISSION POPUP */}
      {showOrderDialog && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeOrderDialog}
        >
          <div
            style={{
              color:"black",
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Submitted</h2>
            <p>Your order has been submitted successfully!</p>
            <button
              onClick={closeOrderDialog}
              style={{
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
