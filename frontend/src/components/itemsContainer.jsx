import Item from "./item";
import { PRODUCTS, COMPANY, SUPPORT } from "./menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-40 ml-40 py-4">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;