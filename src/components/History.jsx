import { calculateCurrentCaffeineLevel, getCaffeineAmount, timeSinceConsumption } from "../utils";
import { useAuth } from "../context/authContext";

export default function History() {
  const { globalData } = useAuth();

  if (!globalData || Object.keys(globalData).length === 0) {
    return <p>No coffee history found.</p>;
  }

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-timeline"></i>
        <h2>History</h2>
      </div>
      <p><i>Hover for more info</i></p>
      <div className="coffee-history">
        {Object.keys(globalData)
          .sort((a, b) => Number(a) - Number(b))
          .map((utcTime, coffeeIndex) => {
            const coffee = globalData[utcTime];
            const timeSinceConsume = timeSinceConsumption(utcTime);
            const originalAmount = getCaffeineAmount(coffee.name);
            const remaingAmount = calculateCurrentCaffeineLevel(utcTime, coffee);
            const cost = coffee.cost;

            const summary = `${coffee.name} | ${timeSinceConsume} | ₹${cost} | ${originalAmount}mg / ${remaingAmount}mg`;

            return (
              <div className="coffee-item" title={summary} key={coffeeIndex}>
                <i className="fa-solid fa-mug-hot"></i>
              </div>
            );
          })}
      </div>
    </>
  );
}
