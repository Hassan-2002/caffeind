import { calculateCoffeeStats, calculateCurrentCaffeineLevel,  getTopThreeCoffees, statusLevels } from "../utils";
import { useAuth } from "../context/authContext";
function StatCard   (props) {

    const {lg, title, children} = props
    

    return (
          <div className={"card stat-card " +(lg ? "col-span-2" : "")}> 
               <h4>{title }</h4>
               {children}
          </div>
        );
}


export default function Stats() {
    const { globalData } = useAuth();
    const stats = calculateCoffeeStats(globalData)
    const caffeineLevel = calculateCurrentCaffeineLevel(globalData)
    const warningLevel = caffeineLevel < statusLevels['low'].maxLevel ?
    'low' : caffeineLevel < statusLevels['moderate'].maxLevel ? 'moderate' : 'high'
    return (
        <>
        <div className="section-header">
            <i className="fa-solid fa-chart-simple"></i> 
            <h2>Stats</h2>
        </div>
        <div className="stats-grid">
            <StatCard lg title="Active Caffeine level">
                <div className="status">
                <p><span className="stat-text">{caffeineLevel}</span> mg</p>
                 <h5 style={{color: statusLevels[warningLevel].color , backgroundColor: statusLevels[warningLevel].background} }>{warningLevel}</h5>   
                  <p>{statusLevels[warningLevel].description}</p>  
                    </div>
            </StatCard>
            <StatCard title="Daily Caffeine">
                <p><span className="stat-text">{stats.daily_caffeine}</span> mg</p>
            </StatCard>
            <StatCard title="Avg # of Coffee">
            <p><span className="stat-text">{stats.average_coffees}</span></p>
            </StatCard>
            <StatCard title="Daily cost">
            <p><span className="stat-text">{stats.daily_cost}</span></p>
            </StatCard>
            <StatCard title="Total cost">
            <p><span className="stat-text">{stats.total_cost}</span></p>
            </StatCard>
            <table className="stat-table">
                <thead>
                    <tr>
                        <th>Coffee Names</th>
                        <th>Number of purchases</th>
                        <th>Percentage of Total</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {getTopThreeCoffees(globalData).map((coffee, coffeeindex) => {
                        return (
                            <tr key={coffeeindex}>
                                <td>{coffee.coffeeName}</td>
                                <td>{coffee.count}</td>
                                <td>{coffee.percentage}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}