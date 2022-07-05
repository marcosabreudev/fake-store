import styles from './ProductSummary.module.scss';

import classNames from "classnames";
import { IItem } from "types";

export default function ProductSummary(item: IItem) {

  return (
    <div className={classNames({
      'container': true,
      [styles['product-summary']]: true
    })}>
      <div className='row align-items-start'>
        <div className={classNames({
          'col': true,
          [styles['product-summary__image-container']]: true
        })}>
          <img src={item?.image} alt="Product" />
        </div>

        <div className={classNames({
          'col': true,
          [styles['product-summar1y__details-container']]: true
        })}>
          <p>{item.category}</p>
          <h2>{item.title}</h2>
          <span>{item.rating.rate}</span>
          <p>R$ {item.price}</p>
          <button>Comprar</button>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}