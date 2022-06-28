import api from 'data/products.json';

import { useEffect, useState } from 'react';
import Item from './Item';

interface IProps {
  filter: string | null
}

export default function Items(props: IProps) {
  const [products, setProducts] = useState(api);
  const { filter } = props;

  function handleFilter(category: string) {
    if (filter !== null) return filter === category;

    return api;
  }

  useEffect(() => {
    const newProductList = api.filter((item) => handleFilter(item.category));
    
    setProducts(newProductList);
  }, [filter]);
  
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
      {products.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}