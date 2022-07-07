import axios from 'axios';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { IFilter } from 'types';

import styles from './Filters.module.scss';

export interface FiltersProps {
  filter: IFilter,
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>
}

export default function Filters({ filter, setFilter }: FiltersProps) {
  const [categories, setCategories] = useState<IFilter[]>();

  useEffect(() => {
    axios.get<IFilter[]>('https://fakestoreapi.com/products/categories')
    .then(response => setCategories(response.data));
  }, []);

  function filterByCategory(category: string | null) {
    if (category === filter) return setFilter(null);
    setFilter(category);
  }

  if (!categories) return <h5>Loading filters....</h5>;

  return (
    <>
    <h5>Categorias</h5>
    <ul className='nav nav-pills flex-column'>
      {categories.map((category, index) => (
        <li key={index} className='nav-item'>
          <button className={classNames({
            'nav-link': true,
            [styles.filters__filter]: true,
            'active': filter === category
          })}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
    </>
  )
}