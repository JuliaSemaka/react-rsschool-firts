export const NUMBER_ONE = 1;
export const DEFAULT_COUNT_NIGHT = '8';
export const CARDS_TOURISTS = 'cardsTourists';

export enum ECountNight {
  six = 6,
  seven = 7,
  eight = 8,
  nine = 9,
  ten = 10,
  eleven = 11,
}

export enum EGender {
  MAN = 'man',
  WOMAN = 'woman',
}

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

export interface IHeader {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITourists {
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  CountNight: string;
  gender: EGender;
  agree: boolean;
}

export interface IErrors {
  FirstName?: string;
  LastName?: string;
  DateOfBirth?: string;
  agree?: string;
}

export interface IRadio {
  valueForm: ITourists;
  setValueForm: React.Dispatch<React.SetStateAction<ITourists>>;
  field: keyof ITourists;
  title: string;
  listData?: string[] | number[];
  type?: string;
  errors?: string
}

export interface IForm {
  valueForm: ITourists;
  setValueForm: React.Dispatch<React.SetStateAction<ITourists>>;
  addCards: (cards: ITourists) => void;
}

export interface ICardsTourists {
  valueCards: ITourists[]
}
