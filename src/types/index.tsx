import filters from 'data/filters.json';

export interface ItemProps {
  key: React.Key,
  item: IItem
}

export interface IItem {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export interface FiltersProps {
  filter: string | null,
  setFilter: React.Dispatch<React.SetStateAction<string | null>>
}

export type Category = typeof filters[0];