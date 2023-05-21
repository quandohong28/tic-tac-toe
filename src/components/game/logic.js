export function findWinner(array) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if(array[a] && array[a] === array[b] && array[a] === array[c]) {
            return array[a]
        }
    }
    return null

    // @version 1.0.0
}
