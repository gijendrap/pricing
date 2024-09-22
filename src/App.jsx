const pricingPlans = [
  {
    title: "Pure Coding",
    price: "4999",
    duration: "/project",
    strikePrice: "6000",
    features: [
      "Software development",
      "Error Support",
      "Installation",
    ],
    link: "https://wa.me/message/4EMWQXOY4XMEJ1",
  },
  {
    title: "Coding + Web Interface",
    price: "5999",
    duration: "/project",
    strikePrice: "7000",
    features: [
      "User Friendly",
      "Error Support",
      "Installation + Guide",
    ],
    link: "https://wa.me/message/4EMWQXOY4XMEJ1",
  },
  {
    title: "Coding + Prototype",
    price: "10 - 15k",
    duration: "/project",
    strikePrice: "20k",
    features: [
      "Software and Hardware Components",
      "Error Support",
      "Insatallation + Guide + ppt",
    ],
    link: "https://wa.me/message/4EMWQXOY4XMEJ1",
  },
  {
    title: "Web Development",
    price: null, // Price removed for the fourth card
    duration: "/mo",
    strikePrice: "4999",
    features: [
      "Frontend Dev",
      "Backend Dev",
      "Fullstack Dev",
      "Pricing based on Requirements",
    ],
    link: "https://wa.me/message/4EMWQXOY4XMEJ1",
  },
  {
    title: "UI/Ux Design",
    price: "5999",
    duration: "/project",
    strikePrice: "7000",
    features: [
      "Portfolio",
      "Web design",
      "Animated Website",
      "Deployment",
    ],
    link: "https://wa.me/message/4EMWQXOY4XMEJ1",
  },
  {
    title: "Error Solving & Half Done Projects",
    price: null,
    duration: "/project",
    strikePrice: "7000",
    features: [
      "Finishing Halfdone Projects",
      "Error Solving",
      "Project Guide",
      "ppt",
    ],
    link: "https://wa.me/message/4EMWQXOY4XMEJ1",
  },
];

const Pricing = () => {
  return (
    <div>
      <h1 className="text-center font-style">Pick Your Project</h1>
      <div className="pricing-box-container">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-box text-center ${
              plan.title === "Coding + Web Interface"
                ? "pricing-box-bg-image"
                : ""
            }`}
          >
            <h5>{plan.title}</h5>
            {plan.price ? (
              <p className="price">
                <sup>₹</sup>{plan.price}<sub>{plan.duration}</sub>
                <br />
                <span
                  className="strike-price"
                  style={{ color: plan.title === "Coding + Web Interface" ? "white" : "" }}
                >
                  ₹<del>{plan.strikePrice}</del>
                </span>
              </p>
            ) : (
              <p className="price">Contact Us</p>
            )}
            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <a href={plan.link} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Get Started</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;