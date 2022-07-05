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

export interface ICategory {
  name: string,
  id: number
}

export type IFilter = string | null;