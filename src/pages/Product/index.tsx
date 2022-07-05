import axios from "axios";
import NotFound from "blocks/NotFound";
import ProductSummary from "blocks/ProductSummary";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem } from "types";

export default function Produto() {
  const params = useParams();
  const [item, setItem] = useState<IItem>();

  useEffect(() => {
    const getItemData = () => axios.get<IItem>(`https://fakestoreapi.com/products/${params.id}`);
    let isMounted = true;

    getItemData().then(response => { 
      if (isMounted) setItem(response.data) 
    });

    return () => { isMounted = false };
  }, [params]);

  if (!item) return <NotFound />;
  
  return <ProductSummary {...item} />;
}