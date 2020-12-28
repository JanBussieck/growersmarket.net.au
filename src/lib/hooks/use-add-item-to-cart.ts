import { useAddItemsToCart } from './use-add-items-to-cart';
import { AttributeInput } from '../../types';

function useAddItemToCart() {
  const addItemsToCart = useAddItemsToCart();

  async function addItemToCart(
    variantId: number | string,
    quantity: number,
    customAttributes?: AttributeInput[]
  ) {
    const item = [{ variantId, quantity, customAttributes }];

    return addItemsToCart(item);
  }

  return addItemToCart;
}

export { useAddItemToCart };
