import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Item.module.scss';

interface Props {
  key: React.Key,
  item: IItem
}

interface IItem {
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

export default function Item(props: Props) {
  const {title, image, price, category, id} = props.item;
  const navigate = useNavigate();

  return (
    <section className={classNames({
      'col mb-5': true,
      [styles['item']]: true
    })} onClick={() => navigate(`/product/${id}`)}>
      <div className={styles.item__image}>
        <img src={image} alt={title} className='card-img-top' />
      </div>
      <p className={styles.item__title}>{title}</p>
      <span className={styles.item__category}>{category}</span>
      <p className={styles.item__price}>R$ {price}</p>
    </section>
  );
}