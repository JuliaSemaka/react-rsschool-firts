import { ITourists } from "../../components.module";
import { ADD_VALUE_CARDS, DEL_VALUE_CARDS, IAction } from "../reducers/reducers.module";

export const addValueCards = (cards: ITourists): IAction => {
  return {type: ADD_VALUE_CARDS, payload: cards};
}

export const delValueCards = (index: number): IAction => {
  return {type: DEL_VALUE_CARDS, payload: index};
}
