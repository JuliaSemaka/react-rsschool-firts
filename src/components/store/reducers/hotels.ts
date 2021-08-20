import { IAction, IHotels } from "./reducers.module";
import { listHotels } from '../../../assets/hotels';
import { CARDS_TOURISTS } from "../../components.module";

const defaultState:IHotels = {
  listHotels: listHotels,
  cardsTourists: JSON.parse(localStorage.getItem(CARDS_TOURISTS) || '[]'),
}

export const hotels = (state = defaultState, action: IAction): IHotels => {
  switch (action.type) {
    case '':
      return {...state};
    default:
      return state;
  }
}
