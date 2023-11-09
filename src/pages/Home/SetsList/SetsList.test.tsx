import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import SetsList from "./SetsList";
import { useGetFilteredSetsList } from "state/hooks/stateHooks/filteredSetsListState/useGetFilteredSetsList";
import { BrowserRouter } from "react-router-dom";

const setsList = [
  {
    id: "1",
    name: "Alliances",
    collect: true,
    isCompleted: false,
    cards: [
      {
        id: "1",
        name: "Force of Will",
      },
      {
        id: "2",
        name: "Helm of Obedience",
      },
      {
        id: "3",
        name: "Lake of the Dead",
      },
    ],
  },
  {
    id: "2",
    name: "Homelands",
    collect: true,
    isCompleted: false,
    cards: [
      {
        id: "1",
        name: "Baron Sengir",
      },
      {
        id: "2",
        name: "Soraya the Falconer",
      },
      {
        id: "3",
        name: "Chandler",
      },
    ],
  },
  {
    id: "3",
    name: "Ice Age",
    collect: false,
    isCompleted: true,
    cards: [
      {
        id: "1",
        name: "Necropotence",
      },
      {
        id: "2",
        name: "Marton Stromgald",
      },
      {
        id: "3",
        name: "Altar of Bone",
      },
    ],
  },
  {
    id: "4",
    name: "Apocalipse",
    collect: false,
    isCompleted: true,
    cards: [
      {
        id: "1",
        name: "Force of Will",
      },
      {
        id: "2",
        name: "Helm of Obedience",
      },
      {
        id: "3",
        name: "Lake of the Dead",
      },
    ],
  },
  {
    id: "5",
    name: "Mirrodin",
    collect: true,
    isCompleted: true,
    cards: [
      {
        id: "1",
        name: "Force of Will",
      },
      {
        id: "2",
        name: "Helm of Obedience",
      },
      {
        id: "3",
        name: "Lake of the Dead",
      },
    ],
  },
  {
    id: "6",
    name: "Alpha",
    collect: false,
    isCompleted: false,
    cards: [
      {
        id: "1",
        name: "Force of Will",
      },
      {
        id: "2",
        name: "Helm of Obedience",
      },
      {
        id: "3",
        name: "Lake of the Dead",
      },
    ],
  },
];

jest.mock("state/hooks/useGetFilteredCollectionsList", () => {
  return {
    useGetFilteredCollectionsList: jest.fn(),
  };
});

describe("given a collections list", () => {
  beforeEach(() => {
    (useGetFilteredSetsList as jest.Mock).mockReturnValue(
      setsList
    );
  });

  test("the list is displayed on the screen", () => {
    render(
      <RecoilRoot>
        <SetsList />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );
    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });

  test("the number of collections displayed matches the selected list", () => {
    render(
      <RecoilRoot>
        <SetsList />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );

    const listItens = screen.getAllByRole("listitem");

    expect(listItens).toHaveLength(setsList.length);
  });
});

describe("given an album of collections selected on select list", () => {
  beforeEach(() => {
    (useGetFilteredSetsList as jest.Mock).mockReturnValue(
      setsList
    );
  });
  test("the correct album is shown on screen", () => {
    render(
      <RecoilRoot>
        <SetsList />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );

    const listItens = screen.getAllByRole("listitem");

    expect(listItens).toHaveLength(setsList.length);
  });
});

// describe("given an empty collections list", () => {
//   beforeEach(() => {
//     (useGetCollectionsList as jest.Mock).mockReturnValue([]);
//   });

//   test("the list is not rendered", () => {
//     render(
//       <RecoilRoot>
//         <CollectionsList />
//       </RecoilRoot>
//     );

//     const list = screen.getByRole("list");

//     expect(list).not.toBeInTheDocument();
//   });
// });
