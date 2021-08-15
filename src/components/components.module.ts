export const NUMBER_ONE = 1;

export interface IHotel {
  name: string;
  stars: number;
  city: string;
  price: number;
  img: string;
  flag: string;
}

export interface IOneCard {
  hotel: IHotel;
}
