import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ItemProps } from 'types';

import styles from './Item.module.scss';

export default function Item(props: ItemProps) {
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