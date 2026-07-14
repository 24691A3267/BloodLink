import "./Statistics.css";

function Statistics() {
  const stats = [
    {
      number: "500+",
      title: "Registered Donors",
      icon: "🩸",
    },
    {
      number: "50+",
      title: "Hospitals",
      icon: "🏥",
    },
    {
      number: "1000+",
      title: "Lives Saved",
      icon: "❤️",
    },
    {
      number: "24/7",
      title: "Emergency Support",
      icon: "🚑",
    },
  ];

  return (
    <section className="statistics">
      <div className="container">

        <h2>BloodLink Impact</h2>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>

              <h3>{item.number}</h3>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Statistics;