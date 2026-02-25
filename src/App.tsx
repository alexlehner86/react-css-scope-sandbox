import "./App.css";
import BeerItemList from "./components/BeerItemList/BeerItemList";
import { BEER_LIST } from "./constants/app.constants";
import { BeerItem } from "./models/beer-item.model";

function App() {
    const beerItems = BEER_LIST.map(response => new BeerItem(response));

  return (
    <>
      <header className="App-header">
        <h1>Beer List 🍻</h1>
      </header>
      <main>
        <BeerItemList items={beerItems} />
        <div className="attribution">
          <p>
            Disclaimer: This website is a demo project to demonstrate various
            web features like, e.g., subgrids. It is not endorsed nor does it
            officially represent BrewDog PLC. Most product names and
            descriptions are copied from www.brewdog.com
          </p>
          <a
            href="https://www.vecteezy.com/free-vector/beer-bottle-icon"
            target="_blank"
            rel="noreferrer"
          >
            Beer Bottle Icon Vectors by Vecteezy
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
