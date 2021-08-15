export const NUMBER_ONE = 1;

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

export interface IRadio {
  valueForm: ITourists;
  setValueForm: React.Dispatch<React.SetStateAction<ITourists>>;
  field: keyof ITourists;
  title: string;
  listData?: string[] | number[];
}
