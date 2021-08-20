import { ITourists } from "../../components.module";
import { IAction, VALUE_CARDS } from "../reducers/reducers.module";

export const setValueCards = (value: ITourists[]): IAction => {
  return {type: VALUE_CARDS, payload: value};
}
