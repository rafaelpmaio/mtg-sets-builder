export const accordionDataArr = [
    {
        language: "pt-BR",
        data: [{
            title: "Sobre",
            description:
                `
            Aplicativo que requisita dados de coleções de MTG e estrutura no formato ISet*
            <h4>ISet </h4>{
                <ul>
                    <li><span>id</span>: string;</li>
                    <li><span>name</span>: string;</li>
                    <li><span>image</span>: string;</li>
                    <li><span>totalSetSize</span>: number;</li>
                    <li><span>collectedCardsTotal</span>: number;</li>
                    <li><span>releaseDate?</span>: string;</li>
                    <li><span>block?</span>: string; </li>
                    <li><span>collect</span>: boolean; </li>
                    <li><span>isCompleted</span>: boolean; </li>
                    <li><span>cards</span>: ICard[]; </li>
                </ul>
              }`

        }, {
            title: "Objetivo",
            description:
                `Este projeto foi elaborado para enfrentar um desafio significativo enfrentado pelo aplicativo MTG Collection: tempo de carregamento prolongado. Assumindo a tarefa crucial de lidar com a solicitação HTTP para arquivos de dados extensos da API mtgJson, ele filtra meticulosamente os dados com base no intervalo de datas de lançamento das coleções selecionado e os estrutura de forma eficiente em um arquivo JSON contendo objetos ISet personalizados para integração no aplicativo final.
              `
        }, {
            title: "Descrição / Tecnologias",
            description: `Aplicação criada utilizando React junto com Typescript, para a requisição HTTP foi utilizado a biblioteca Axios, e material Material-UI para a criação dos componentes.<br><br>
            <strong> React | Typescript | Axios | Material-UI </strong>`
        }
        ]
    },
    {
        language: "en-US",
        data: [{
            title: "About",
            description:
                `
            Application that request MTG card sets data and structure them into ISet format.
            <h4>ISet </h4>{
                <ul>
                    <li><span>id</span>: string;</li>
                    <li><span>name</span>: string;</li>
                    <li><span>image</span>: string;</li>
                    <li><span>totalSetSize</span>: number;</li>
                    <li><span>collectedCardsTotal</span>: number;</li>
                    <li><span>releaseDate?</span>: string;</li>
                    <li><span>block?</span>: string; </li>
                    <li><span>collect</span>: boolean; </li>
                    <li><span>isCompleted</span>: boolean; </li>
                    <li><span>cards</span>: ICard[]; </li>
                </ul>
              }`
        }, {
            title: "Goal",
            description:
                `This project was crafted to tackle a significant challenge faced by the MTG Collection app: prolonged loading times. Taking on the crucial task of handling HTTP requests for extensive data files from the mtgJson API, it meticulously filters the data based on the selected date range of the card sets release date, and efficiently structures it into a JSON file containing ISet objects tailored for integration into the final application.`
        },
        {
            title: "Description / Tools",
            description: `Application created using React along with Typescript, axios lib was used for the HTTP request, and Material-UI material to create the components. <br><br>
            <strong> React | Typescript | Axios | Material-UI  </strong>`
        }
        ]
    },
]