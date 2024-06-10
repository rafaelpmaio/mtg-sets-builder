export const accordionDataArr = [
    {
        language: "pt-BR",
        data: [{
            title: "Sobre",
            description: "Aplicativo que requisita dados da api mtgJson, filtra os sets de acordo com o período de lançamento selecionado e baixa o arquivo JSON criado."
        }, {
            title: "Objetivo",
            description: `Solucionar o desafio de tempo de carregamento do webApp MTG Collection, através da estruturação de um arquivo JSON com objetos ISet*. Desta forma este aplicativo assume a função de requisitar o arquivo recebido da api mtgJson e tratá-lo, e o MTG Collection app apenas lê o arquivo e apresenta seu conteúdo ao usuário final, diminuindo consideravelmente o tempo de carregamento.
            
            ISet {
                id: string;
                name: string;
                image: string;
                totalSetSize: number;
                collectedCardsTotal: number;
                releaseDate?: string;
                block?: string; //the block name the set is
                collect: boolean;
                isCompleted: boolean;
                cards: ICard[];
              }
              `
        }, {
            title: "Descrição",
            description: "Aplicação criada utilizando React junto com Typescript, para a requisição HTTP foi utilizado a biblioteca Axios, e material Material-UI para a criação dos componentes."
        },
        {
            title: "Tecnologias",
            description: "React | Typescript | Axios | Material-UI"
        }]
    },
    {
        language: "en-US",
        data: [{
            title: "About",
            description: "App that request data from mtgJson api, filter the sets by the selected release date range and download the JSON file."
        }, {
            title: "Goal",
            description: `Resolve the faced challenge of big loading time from the webApp MTG Collection by structuring a JSON file with ISet* objects. By doing this, the application assumes the responsability of requesting the file receive from mtgJson api and processing it, and the MTG Collection app only reads the file and display it for the final user, reducing considerably the loading time.
            
            ISet {
            id: string;
            name: string;
            image: string;
            totalSetSize: number;
            collectedCardsTotal: number;
            releaseDate?: string;
            block?: string; //the block name the set is
            collect: boolean;
            isCompleted: boolean;
            cards: ICard[];
        }
            `
        },
        {
            title: "Description",
            description: "Application created using React along with Typescript, axios lib was used for the HTTP request, and Material-UI material to create the components."
        },
        {
            title: "Tools",
            description: "React | Typescript | Axios | Material-UI"
        },]
    },
]