import { BeerItem } from "../../models/beer-item.model";
import { useCompHostAttr } from "../../shared/useCompHostAttr";
import "./BeerItemDetails.css";

interface BeerItemDetailsProps {
  item: BeerItem;
}

const BeerItemDetails: React.FC<BeerItemDetailsProps> = ({ item }) => {
  const hostRef = useCompHostAttr<HTMLDivElement>();

  return (
    <div ref={hostRef} className="beer-item-details">
      <hgroup>
        <h2>{item.name}</h2>
        <p>{item.tagline}</p>
      </hgroup>
      <div className="flex-row">
        <div className="description">
          <p>{item.description}</p>
          <p>
            🍺&nbsp;<span>Alcohol by Volume: </span>
            {item.abv}%
          </p>
          {item.foodPairing?.length > 0 ? (
            <p>
              🍴&nbsp;<span>Food Pairing: </span>
              {item.foodPairing[0]}
            </p>
          ) : null}
        </div>
        <img src="img/beer-bottle.png" alt=""></img>
      </div>
    </div>
  );
};

export default BeerItemDetails;
