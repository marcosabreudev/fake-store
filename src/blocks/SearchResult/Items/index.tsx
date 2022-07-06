import api from 'data/products.json';

import { useCallback, useEffect, useState } from 'react';
import { IFilter } from 'types';
import Item from './Item';

interface ItemsProps {
  filter: IFilter
}

export default function Items(props: ItemsProps) {
  const [products, setProducts] = useState(api);
  const { filter } = props;
  const handleFilter = useCallback((category: string) => {
    if (filter !== null) return filter === category;

    return api;
  }, [filter]);
  
  useEffect(() => {
    const newProductList = api.filter((item) => handleFilter(item.category));
    
    setProducts(newProductList);
  }, [filter, handleFilter]);
  
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
      {products.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}