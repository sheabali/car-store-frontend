export type TCar = {
  _id?: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
};

export type OrderStatus =
  | 'Pending'
  | 'Paid'
  | 'Shipped'
  | 'Completed'
  | 'Cancelled';

export type TransactionDetails = {
  id: string;
  transactionStatus: string;
  bank_status: string;
  sp_code: string;
  sp_message: string;
  method: string;
  date_time: string;
};

export type OrderProduct = {
  product: Types.ObjectId;
  quantity: number;
};

export type OrderType = {
  user: Types.ObjectId;
  products: OrderProduct[];
  totalPrice: number;
  status: OrderStatus;
  transaction: TransactionDetails;
  createdAt?: Date;
  updatedAt?: Date;
};
