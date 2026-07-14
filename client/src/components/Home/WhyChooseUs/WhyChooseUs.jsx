import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Search",
      text: "Find blood donors quickly during emergencies."
    },
    {
      icon: "🩸",
      title: "Verified Donors",
      text: "Registered and trusted blood donors."
    },
    {
      icon: "🚑",
      title: "24/7 Support",
      text: "Emergency assistance anytime you need it."
    }
  ];

  return (
    <section className="why">
      <div className="container">
        <h2>Why Choose BloodLink?</h2>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;