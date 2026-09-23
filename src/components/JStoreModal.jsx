import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./jstoremodal.css";

const JStoreModal = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const sampleProducts = [
    { 
      name: "Black Cargo Pants", 
      type: "Pants", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Oversized White Shirt", 
      type: "Shirts", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Classic Denim Jeans", 
      type: "Pants", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1542272454315-7f6d5635b3a4?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Cotton Beige Trousers", 
      type: "Pants", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Casual Black T-Shirt", 
      type: "Shirts", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Slim Fit Chinos", 
      type: "Pants", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Floral Print Blouse", 
      type: "Shirts", 
      gender: "Women",
      image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Striped Casual Shirt", 
      type: "Shirts", 
      gender: "Men",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "High-Waist Wide Leg Pants", 
      type: "Pants", 
      gender: "Women",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Premium Polo Shirt", 
      type: "Shirts", 
      gender: "Men",
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Leather Jogger Pants", 
      type: "Pants", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Graphic Print T-Shirt", 
      type: "Shirts", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Classic White Sneakers", 
      type: "Shoes", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Leather Jacket", 
      type: "Jackets", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Summer Dress", 
      type: "Dresses", 
      gender: "Women",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Denim Jacket", 
      type: "Jackets", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Running Shoes", 
      type: "Shoes", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Hooded Sweatshirt", 
      type: "Hoodies", 
      gender: "Unisex",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80"
    },
  ];

  return (
    <div className="jstore-fullpage">
      {/* Back Button */}
      <button 
        className="back-to-cases-btn" 
        onClick={() => navigate("/")}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
        }}
      >
        ← Back to Home
      </button>

      <div className="jstore-modal-content">
        
        {/* Page Header */}
        <div className="jstore-modal-header">
          <div className="jstore-logo-wrapper">
            <span className="jstore-logo-tag">🛍️ FASHION BRAND</span>
            <h1 className="jstore-logo-text">j.Store</h1>
          </div>
          <p className="jstore-tagline">
            A premium, responsive e-commerce fashion application built with React.js, featuring modern gradients and a state-of-the-art glassmorphic design.
          </p>
          <div className="jstore-badges">
            <span className="jstore-badge badge-react">React.js</span>
            <span className="jstore-badge badge-context">Context API</span>
            <span className="jstore-badge badge-router">React Router</span>
            <span className="jstore-badge badge-css">CSS3 (Vanilla)</span>
            <span className="jstore-badge badge-vite">Vite</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="jstore-tab-nav">
          <button 
            className={`jstore-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview & Features
          </button>
          <button 
            className={`jstore-tab-btn ${activeTab === "pages" ? "active" : ""}`}
            onClick={() => setActiveTab("pages")}
          >
            Pages & Components
          </button>
          <button 
            className={`jstore-tab-btn ${activeTab === "design" ? "active" : ""}`}
            onClick={() => setActiveTab("design")}
          >
            Design & Structure
          </button>
          <button 
            className={`jstore-tab-btn ${activeTab === "products" ? "active" : ""}`}
            onClick={() => setActiveTab("products")}
          >
            Sample Products ({sampleProducts.length})
          </button>
        </div>

        {/* Tab Body */}
        <div className="jstore-tab-body">

          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="jstore-tab-pane animate-fade-in">
              <div className="jstore-overview-grid">
                <div className="jstore-overview-card main-overview">
                  <h3>About the Project</h3>
                  <p>
                    <strong>j.Store</strong> is a frontend-focused e-commerce application designed to deliver a seamless shopping experience for a modern fashion brand. Targeting pants and shirts for men and women, the platform merges clean functionality with high-end aesthetics, providing users with fluid transitions, instant filter feedback, and persistent shopping state.
                  </p>
                  
                  <div className="jstore-key-metrics">
                    <div className="metric-box">
                      <span className="metric-icon">⚡</span>
                      <div className="metric-info">
                        <h4>Zero Backend Delay</h4>
                        <p>Fully simulated frontend database</p>
                      </div>
                    </div>
                    <div className="metric-box">
                      <span className="metric-icon">💾</span>
                      <div className="metric-info">
                        <h4>Local Persistence</h4>
                        <p>LocalStorage tracks cart & wishlist</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="jstore-overview-card list-overview">
                  <h3>Key Functionalities</h3>
                  <ul className="jstore-func-list">
                    <li>
                      <div className="func-check">✓</div>
                      <div>
                        <strong>Persistent Shopping Cart:</strong> Add/remove products, adjust quantities dynamically, and calculate order totals instantly. Operates seamlessly using React Context.
                      </div>
                    </li>
                    <li>
                      <div className="func-check">✓</div>
                      <div>
                        <strong>Wishlist System:</strong> Save favorite items for later. Includes visual heart icons and instant UI feedback toggling.
                      </div>
                    </li>
                    <li>
                      <div className="func-check">✓</div>
                      <div>
                        <strong>Product Filtering & Sorting:</strong> Filter items in real time by category (Pants, Shirts), gender (Men, Women), and price range slider, combined with price/rating sorting.
                      </div>
                    </li>
                    <li>
                      <div className="func-check">✓</div>
                      <div>
                        <strong>Responsive Layout:</strong> Styled from mobile-first perspective with responsive breakpoints (&lt;480px, 481px-768px, 769px-1024px, &gt;1024px).
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* PAGES & COMPONENTS TAB */}
          {activeTab === "pages" && (
            <div className="jstore-tab-pane animate-fade-in">
              <div className="jstore-pages-section">
                <div className="jstore-pages-column">
                  <h3>📁 Core Pages (8)</h3>
                  <div className="jstore-list-items">
                    <div className="jstore-item-card">
                      <span className="item-num">01</span>
                      <div>
                        <h4>Home Page</h4>
                        <p>Hero banner, visual category blocks, featured listings, and brand features.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card">
                      <span className="item-num">02</span>
                      <div>
                        <h4>Shop Page</h4>
                        <p>Complete grid display with live side-bar filters and sorting controls.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card">
                      <span className="item-num">03</span>
                      <div>
                        <h4>Product Details Page</h4>
                        <p>Detailed view, high-quality images, description, size, and color picker.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card">
                      <span className="item-num">04</span>
                      <div>
                        <h4>Cart Page</h4>
                        <p>Lists active items, quantity controls, subtotal/total billing, and checkout flow.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card">
                      <span className="item-num">05</span>
                      <div>
                        <h4>Wishlist Page</h4>
                        <p>Displays all saved items, allowing users to quickly transfer them to the cart.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card">
                      <span className="item-num">06</span>
                      <div>
                        <h4>About Page</h4>
                        <p>Rich brand story, editorial layout, fashion philosophies, and core values.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card">
                      <span className="item-num">07</span>
                      <div>
                        <h4>Contact Page</h4>
                        <p>Beautiful contact form with input validation, location map, and brand details.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card">
                      <span className="item-num">08</span>
                      <div>
                        <h4>Login / Register Page</h4>
                        <p>Responsive authorization UI form with smooth transition between panels.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="jstore-pages-column">
                  <h3>🧱 Reusable Components</h3>
                  <div className="jstore-list-items">
                    <div className="jstore-item-card comp-card">
                      <span className="comp-icon">🧭</span>
                      <div>
                        <h4>Navbar Component</h4>
                        <p>Sticky navigation layout containing brand logo, search bar, active Wishlist counter, and Cart item indicator. Collapses to a hamburger menu on mobile devices.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card comp-card">
                      <span className="comp-icon">🎬</span>
                      <div>
                        <h4>Hero Section</h4>
                        <p>Immersive banner styled with striking color gradients, custom animations, and a discount/call-to-action button to direct traffic to the store.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card comp-card">
                      <span className="comp-icon">🎴</span>
                      <div>
                        <h4>Product Card</h4>
                        <p>A reusable card component with card-scaling hover effects, ratings, a quick-add action, and a wishlist save toggle. Adapts seamlessly to grids.</p>
                      </div>
                    </div>
                    <div className="jstore-item-card comp-card">
                      <span className="comp-icon">🏁</span>
                      <div>
                        <h4>Footer</h4>
                        <p>Multi-column layout displaying helpful resource links, social icons, and an interactive newsletter signup input.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DESIGN & STRUCTURE TAB */}
          {activeTab === "design" && (
            <div className="jstore-tab-pane animate-fade-in">
              <div className="jstore-design-grid">
                
                {/* Design tokens */}
                <div className="jstore-design-card">
                  <h3>🎨 Visual System & Identity</h3>
                  <p>Built completely on custom CSS variables to enforce consistency without external overhead.</p>
                  
                  <div className="design-token-group">
                    <h4>Color Palette</h4>
                    <div className="color-swatches">
                      <div className="swatch-item">
                        <div className="swatch-color color-primary"></div>
                        <span>Primary (Purple Gradient)</span>
                      </div>
                      <div className="swatch-item">
                        <div className="swatch-color color-secondary"></div>
                        <span>Secondary (Pink Gradient)</span>
                      </div>
                      <div className="swatch-item">
                        <div className="swatch-color color-bg"></div>
                        <span>Backgrounds (Gray/Blue)</span>
                      </div>
                    </div>
                  </div>

                  <div className="design-token-group">
                    <h4>Typography</h4>
                    <p><strong>Font Family:</strong> Poppins (Google Fonts)</p>
                    <p>Features clean weights (400, 500, 600, 700) for hierarchical readability.</p>
                  </div>

                  <div className="design-token-group">
                    <h4>Aesthetic Details</h4>
                    <ul>
                      <li>Border radius: <code>20px</code> for soft, modern card containers.</li>
                      <li>Shadows: Layered box-shadows for a floating depth look.</li>
                      <li>Glassmorphism: Card overlays with blur-backdrops.</li>
                      <li>Micro-interactions: Cards scale up (1.03x) and button overlays slide on hover.</li>
                    </ul>
                  </div>
                </div>

                {/* Directory tree structure */}
                <div className="jstore-design-card">
                  <h3>📁 Directory Architecture</h3>
                  <div className="directory-tree">
                    <pre>{`j.Store/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── ProductCard.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── Shop.jsx / .css
│   │   ├── ProductDetails.jsx / .css
│   │   ├── Cart.jsx / .css
│   │   ├── Wishlist.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Login.jsx / .css
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx / .css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md`}</pre>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* PRODUCTS TAB */}
          {activeTab === "products" && (
            <div className="jstore-tab-pane animate-fade-in">
              <h3>🛍️ Pre-configured Product Items ({sampleProducts.length})</h3>
              <p className="products-intro">The client-side store uses these 12 mockup products structured with specific metadata for live filters:</p>
              
              <div className="jstore-products-grid">
                {sampleProducts.map((p, idx) => (
                  <div key={idx} className="jstore-product-item-card">
                    <div className="product-item-badge">{p.type}</div>
                    <div className="product-item-image">
                      <img src={p.image} alt={p.name} />
                    </div>
                    <h4>{p.name}</h4>
                    <span className="product-item-gender">{p.gender} Collection</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Page Footer */}
        <div className="jstore-modal-footer">
          <div className="footer-meta-info">
            <span>🚀 <strong>Getting Started:</strong> Run <code>npm install</code> followed by <code>npm run dev</code> to boot the project locally at port 5173.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JStoreModal;
