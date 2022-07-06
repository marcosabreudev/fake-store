import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { IFilter, IItem } from 'types';
import Item from './Item';

interface ItemsProps {
  filter: IFilter
}

export default function Items({ filter }: ItemsProps) {
  const [products, setProducts] = useState<IItem[]>();
  const [productsFiltered, setProductsFiltered] = useState<IItem[]>();

  const handleFilter = useCallback((category: string) => {
    if (filter !== null) return filter === category;

    return products;
  }, [filter, products]);

  useEffect(() => {
    axios.get<IItem[]>('https://fakestoreapi.com/products')
      .then(response => { 
        setProducts(response.data);
        setProductsFiltered(response.data);
      });
  }, []);
  
  useEffect(() => {
    if (!products) return setProductsFiltered(products);

    const filtered = products.filter((item) => handleFilter(item.category));
    
    setProductsFiltered(filtered);
  }, [filter, handleFilter, products]);

  if (!productsFiltered) return <h1>Loading...</h1>;
  
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
      {productsFiltered.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}