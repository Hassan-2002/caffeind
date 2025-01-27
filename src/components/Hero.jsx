export default function Hero() {
    return (
        <>
          <h2>Coffee Tracking for Coffee <abbr title="An enthusiast or a devotee">Fiends</abbr></h2>  
          <div className="benefits-list">
            <h3 className="font-bolder">Try <span className="text-gradient text-center">Caffeind</span> and start...</h3>
            <p>&#9989; Tracking your coffee</p>
            <p>&#9989; Measuring your blood caffeine levels</p>
            <p>&#9989; Costing and quantifying your addiction</p>
            </div> 
            <div className="card card-info">
                <div>
                    <i className="fa-solid fa-circle-info"></i>
                    <h3>Did you know?</h3>
                </div>
                <h5><span className="text-gradient text-center">Caffeine</span> is the most addictive drug in the world</h5>
                <p>According to the <a href="https://www.who.int/news-room/fact-sheets/detail/caffeine">World Health Organization</a>, caffeine is the most addictive drug in the world.</p>
                <p>Our app is here to help you track your caffeine consumption and manage your addiction</p>
            </div>
        </>
    );
}