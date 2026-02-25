import { BeerItem } from "../../models/beer-item.model";
import { useCompHostAttr } from "../../shared/useCompHostAttr";
import BeerItemDetails from "../BeerItemDetails/BeerItemDetails";
import "./BeerItemList.css";

interface BeerItemListProps {
  items: BeerItem[];
}

const BeerItemList: React.FC<BeerItemListProps> = ({ items }) => {
  const hostRef = useCompHostAttr<HTMLUListElement>();

  return (
    <ul ref={hostRef} className="beer-grid">
      {items.map((item) => (
        <li key={item.id}>
          <BeerItemDetails item={item} />
        </li>
      ))}
    </ul>
  );
};

export default BeerItemList;
