import { IScryfallData } from "interfaces/IScryfallData"
import { useSetRecoilState } from "recoil"
import { scryfallCardsDataState } from "state/atom"

export const useSetScryfallData = () => {
    const setData = useSetRecoilState(scryfallCardsDataState)

    return (cardsListData: IScryfallData[]) => {
        setData(data => [...data, ...cardsListData])
    }
}