import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, getTopThreeCoffees, timeSinceConsumption } from "../utils";

export default function History() {
    return (
        <>
        <div className="section-header">
            <i className="fa-solid fa-timeline"></i>
            <h2>History</h2>
        </div>
        <p><i>Hover for more info</i></p>
        <div className="coffee-history">
         { Object.keys(coffeeConsumptionHistory).sort((a,b) => a-b).map((utcTime, coffeeIndex) => {
          const coffee = coffeeConsumptionHistory[utcTime];
          const timeSinceConsume = timeSinceConsumption(utcTime);
          const originalAmount = getCaffeineAmount(coffee.name);
          const remaingAmount = calculateCurrentCaffeineLevel({
            [utcTime] : coffee
          });
          const cost = coffee.cost;
          const summary = `${coffee.name} | ${timeSinceConsume} | ₹${cost}  | ${originalAmount}mg / ${remaingAmount}mg `
          return (
            <div title={summary} key={coffeeIndex}> 
               <i className="fa-solid fa-mug-hot"></i>
                

            </div>
          )
         })

         }
        </div>
        </>
    )
}