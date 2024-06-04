import { IScryfallData } from "interfaces/IScryfallData";
import ISet from "interfaces/ISet";
import { atom } from "recoil";

export const setsListState = atom<ISet[]>({
  key: "setsListState",
  default: [],
});

export const scryfallCardsDataState = atom<IScryfallData[]>({
  key:'scryfallCardsDataState',
  default:[]
})
