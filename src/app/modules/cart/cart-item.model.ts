export interface CartItem {
  id?: number;
  cartId?: number;
  productId: number;
  quantity: number;
  unitPrice?: number;
  customization?: any;
}
