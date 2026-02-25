import { BeerItem } from "../../models/beer-item.model";
import BeerItemDetails from "../BeerItemDetails/BeerItemDetails";
import styles from "./BeerItemList.module.css";

interface BeerItemListProps {
  items: BeerItem[];
}

const BeerItemList: React.FC<BeerItemListProps> = ({ items }) => (
  <ul className={styles.beerGrid}>
    {items.map((item) => (
      <li key={item.id}>
        <BeerItemDetails item={item} />
      </li>
    ))}
  </ul>
);

export default BeerItemList;