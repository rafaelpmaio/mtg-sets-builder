import { useRecoilValue } from "recoil"
import { scryfallCardsDataState } from "state/atom"

export const useGetScryfallData = () => {
    const cardsListData = useRecoilValue(scryfallCardsDataState);
    return cardsListData
}