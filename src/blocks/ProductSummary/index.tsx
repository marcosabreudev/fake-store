import { useParams } from "react-router-dom";

import styles from './ProductSummary.module.scss';

import products from 'data/products.json';
import NotFound from "blocks/NotFound";
import classNames from "classnames";

export default function ProductSummary() {
  const params = useParams();
  const { id } = params;
  const item = products.find(item => item.id === Number(id));

  if (!item) return <NotFound />

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
          <img src={item?.image} alt="Product image" />
        </div>

        <div className={classNames({
          'col': true,
          [styles['product-summary__details-container']]: true
        })}>
          <p>{item?.category}</p>
          <h2>{item?.title}</h2>
          <span>{item?.rating.rate}</span>
          <p>R$ {item?.price}</p>
          <button>Comprar</button>
          <p>{item?.description}</p>
        </div>
      </div>
    </div>
  );
}