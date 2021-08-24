import {
  ADD_VALUE_CARDS, DEL_VALUE_CARDS, IAction, IHotels,
} from './reducers.module';
import { listHotels } from '../../../assets/hotels';
import { CARDS_TOURISTS, ECountNight } from '../../components.module';

const defaultState: IHotels = {
  listHotels,
  cardsTourists: JSON.parse(localStorage.getItem(CARDS_TOURISTS) || '[]'),
  countNight: [
    ECountNight.six,
    ECountNight.seven,
    ECountNight.eight,
    ECountNight.nine,
    ECountNight.ten,
    ECountNight.eleven,
  ],
};

export const hotels = (state = defaultState, action: IAction): IHotels => {
  switch (action.type) {
    case ADD_VALUE_CARDS:
      return { ...state, cardsTourists: state.cardsTourists.concat(action.payload) };
    case DEL_VALUE_CARDS:
      return { ...state, cardsTourists: state.cardsTourists.filter((item, i) => action.payload !== i) };
    default:
      return state;
  }
};
