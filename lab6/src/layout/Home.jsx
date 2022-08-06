import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <ListProduct />
        <AddProduct />
      </div>
    </div>
  );
}
