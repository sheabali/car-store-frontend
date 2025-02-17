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

// export type OrderProduct = {
//   product: Types.ObjectId;
//   quantity: number;
// };

// export type OrderType = {
//   user: Types.ObjectId;
//   products: OrderProduct[];
//   totalPrice: number;
//   status: OrderStatus;
//   transaction: TransactionDetails;
//   createdAt?: Date;
//   updatedAt?: Date;
// };

export const bannerImage = 'https://i.ibb.co.com/PvKDxssn/slider51-png.png';
export const logo =
  'https://i.ibb.co.com/Z6H8JScS/auto-car-16-removebg-preview.png';
export const ContainerImage = 'https://i.ibb.co.com/MD1tNhRc/Container.png';
export const SearchImage =
  'https://i.ibb.co.com/39mQ5nzy/The-All-New-2021-Rolls-Royce-Ghost-Will-Spoil-You-For-Choice-Carscoops.jpg';
export const sell = 'https://i.ibb.co.com/fGPJz3Cw/4.png';
export const ProductImg =
  'https://i.ibb.co.com/1YVWKKm4/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg';
export const ProductImg2 = 'https://i.ibb.co.com/fGPJz3Cw/4.png';

export const profileImage =
  'https://i.ibb.co.com/3mN5km2h/dan-gold-N7-Ri-Dzf-F2iw-unsplash.jpg';
