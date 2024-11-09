import HeaderNav from "../components/HeaderNav.jsx";
import Card from '../components/Card.jsx';

function Home() {
    return (
      <>
        <HeaderNav/>

        <div className="Cards" style={{display: "flex", justifyContent: "space-evenly", marginTop: "12rem"}}>
            <Card title={"Next deadline"} text={"Daerre"}/>
            <Card title={"Overdue deadlines"} text={"4r234dsf4r234dsf4r234dsf4r234dsf"}/>
            <Card title={"Top 5 next deadlines"} text={"rewfytety64353453543gerhkj768i7687688888888"}/>
        </div>
      </>
    );
}

export default Home;