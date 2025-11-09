function Dashboard({isLoggedIn}) {
    return (
        <div>{isLoggedIn ? <p>Waad login garasantahaay!</p> : <p>Faadlaan login garaay.</p>}
        {isLoggedIn ? <p>yes true</p> : <p>No false</p>}
        
        
        </div>
    );
}

export default Dashboard;