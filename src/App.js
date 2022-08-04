import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Destination from "./components/Destination/Destination";
import data from "./assets/data/data";

function App() {
  const destinations = data.map((item) => (
    <Destination
      key={item.title}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  ));
  return (
    <div className="pageWrapper">
      <Navbar />
      <div className="destinationsWrapper">{destinations}</div>
    </div>
  );
}

export default App;
