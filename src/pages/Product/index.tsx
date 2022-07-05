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
    const abortController = new AbortController();
    const getItemData = () => { 
      return axios.get<IItem>(`https://fakestoreapi.com/products/${params.id}`, {
        signal: abortController.signal
      })
    }

    getItemData()
      .then(response => { 
        setItem(response.data) 
      })
      .catch(err => {
        if (abortController.signal.aborted) {
          console.log('request aborted', err);
        } else {
          //setItem(???)
        }
      });

    return () => abortController.abort();
  }, [params]);

  if (!item) return <NotFound />;
  
  return <ProductSummary {...item} />;
}