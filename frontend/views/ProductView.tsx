import {AutoGrid} from "@hilla/react-grid";
import {ProductService} from "Frontend/generated/endpoints";
import ProductModel from "Frontend/generated/com/example/application/ProductModel";

export default function ProductView() {
  return (
    <div className="p-l">
      <AutoGrid service={ProductService} model={ProductModel}/>
    </div>
  );
}
