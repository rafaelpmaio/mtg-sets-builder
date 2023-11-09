import { useRecoilValue } from "recoil"
import { scryfallCardsDataState } from "state/atom"

export const useGetScryfallCardsData = () => {
    const cardsListData = useRecoilValue(scryfallCardsDataState);
    return cardsListData
}