import {makeAutoObservable} from 'mobx';
import {Product} from '../models/Product';

class ProductStore {

  products: Product[] = [
    new Product(
      '1',
      'First',
      this.descr,
      'https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGcmvYOIMFsBXm7ss658b0S4=/mock-api-2023-01-04%2000-00-00-2023-03-09%2017-02-43',
      150,
      false,
    ),
    new Product(
      '2',
      'Second',
      this.descr,
      'https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGcmvYOIMFsBXm7ss658b0S4=/mock-api-2023-01-04%2000-00-00-2023-03-09%2017-02-43',
      155,
      false,
    ),
    new Product(
      '3',
      'Third',
      this.descr,
      'https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGcmvYOIMFsBXm7ss658b0S4=/mock-api-2023-01-04%2000-00-00-2023-03-09%2017-02-43',
      600,
      false,
    ),
    new Product(
      '4',
      'Fourth',
      this.descr,
      'https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGcmvYOIMFsBXm7ss658b0S4=/mock-api-2023-01-04%2000-00-00-2023-03-09%2017-02-43',
      130,
      false,
    ),
    new Product(
      '5',
      'Five',
      this.descr,
      'https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGcmvYOIMFsBXm7ss658b0S4=/mock-api-2023-01-04%2000-00-00-2023-03-09%2017-02-43',
      49,
      false,
    ),
  ];

  constructor() {
    makeAutoObservable(this);
  }

  handleFavourite(oldProduct: Product) {
    this.products = this.products.map((product: Product) => {
      return oldProduct.id === product.id
        ? new Product(
            product.id,
            product.title,
            product.description,
            product.imageUrl,
            product.price,
            !product.isLiked,
          )
        : product;
    });
  }
}

export default new ProductStore();
