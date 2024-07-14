export function returnTrueByPercentage(percentage: number) {
    const randomNumber = Math.random() * 100;

    return randomNumber < percentage
}