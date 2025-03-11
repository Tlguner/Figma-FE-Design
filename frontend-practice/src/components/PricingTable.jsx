import React from "react";
import Check from "../../public/img/CheckIcon.png";

const allFeatures = [
  "2 GB of space",
  "14 days of backups",
  "Social integrations",
  "Client billing",
  "Remote access",
  "Custom domain",
  "24 hours support",
  "Admin tools",
  "Collaboration tools",
  "User management",
];

const plans = [
  { name: "Starter", price: "9.99", features: ["2 GB of space", "14 days of backups", "Social integrations", "Client billing"] },
  { name: "Professional", price: "19.99", features: ["2 GB of space", "14 days of backups", "Social integrations", "Client billing", "Remote access", "Custom domain", "24 hours support"] },
  { name: "Enterprise", price: "49.99", features: allFeatures },
];

const PricingTable = () => {
  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h2 className="pricing-title">{plan.name}</h2>
          <p className="pricing-price">
            {plan.price} <span className="DollarSign">$</span>
          </p>
          <ul className="pricing-features">
            {allFeatures.map((feature, i) => (
              <li
                key={i}
                className={`feature-item ${plan.features.includes(feature) ? "available" : "unavailable"}`}
              >
                <span className="checkmark">
                  {plan.features.includes(feature) ? (
                    <img className="CheckMark" src={Check} alt="Check" />
                  ) : null}
                </span>
                <span className="feature-text">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="pricing-button">Get Started</button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;