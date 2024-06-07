export default function filterLanguage<T extends {language:string}>(arr: T[], language: string): T[] {
    const selectedLanguage = arr.filter(item => item.language === language);

    return !selectedLanguage.length ? [arr[0]] : selectedLanguage
}