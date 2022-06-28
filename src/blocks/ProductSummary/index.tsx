import { useParams } from "react-router-dom";

import products from 'data/products.json';
import NotFound from "blocks/NotFound";

export default function ProductSummary() {
  const params = useParams();
  const { id } = params;
  const item = products.find(item => item.id === Number(id));

  if (!item) return <NotFound />

  return (
    <>
      <br/>
      <br/>
      <br/>
      <h1>{item?.title}</h1>
    </>
  );
}