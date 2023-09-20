import { AutoGrid } from "@hilla/react-grid";
import { ProductService } from "Frontend/generated/endpoints";
import ProductModel from "Frontend/generated/com/example/application/ProductModel";
import { useMemo, useState } from "react";
import { TextField } from "@hilla/react-components/TextField";

export default function FilteredProductsView() {
  const [filterValue, setFilterValue] = useState("");
  const nameFilter = useMemo(() => {
    return {
      t: "propertyString",
      propertyId: "name",
      matcher: "CONTAINS",
      filterValue,
    };
  }, [filterValue]);

  return (
    <div className="flex flex-col items-start gap-m p-l">
      <TextField
        value={filterValue}
        onValueChanged={(e) => setFilterValue(e.detail.value)}
        label="Filter by name"
      />
      <AutoGrid
        service={ProductService}
        model={ProductModel}
        filter={nameFilter}
      />
    </div>
  );
}
