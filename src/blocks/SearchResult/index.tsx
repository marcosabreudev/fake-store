import { useState } from 'react';

import Items from 'blocks/SearchResult/Items';
import Filters from './Filters';
import { IFilter } from 'types';

export default function SearchResult() {
  const [filter, setFilter] = useState<IFilter>(null);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-3'>
          <Filters filter={filter} setFilter={setFilter} />
        </div>

        <div className='col-sm-9'>
          <Items filter={filter} />
        </div>
      </div>
    </div>
  );
}