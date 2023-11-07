import ICard from "interfaces/ICard";
import { IScryfallData } from "interfaces/IScryfallData";
import ISet from "interfaces/ISet";
import { atom } from "recoil";

export const setsListState = atom<ISet[]>({
  key: "setsListState",
  default: [],
});

export const filteredSetsListState = atom<ISet[]>({
  key: "filteredSetsListState",
  default: [],
});

export const selectedSetState = atom<ISet | null>({
  key: "selectedSetState",
  default: null,
});

export const filteredCardsListState = atom<ICard[] | null>({
  key: "filteredCardsListState",
  default: null,
});

export const scryfallCardsDataState = atom<IScryfallData[]>({
  key:'scryfallCardsDataState',
  default:[]
})

export const dropdownMenuOptionsState = atom<string[]>({
  key: "dropdownMenuOptionsState",
  default: [],
});

export const saveSetInMemoryState = atom<string[]>({
  key:'saveSetInMemoryState',
  default:[]
})

