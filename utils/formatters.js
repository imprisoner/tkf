export function formatMoney(amount, decimalCount = 0, thousands = ' ', decimal = ',') {
    let decimalCountParsed = Math.abs(decimalCount)
    decimalCountParsed = Number.isNaN(decimalCountParsed) ? 0 : decimalCountParsed

    const negativeSign = amount < 0 ? '-' : ''

    const amountParsed = Math.abs(Number(amount) || 0).toFixed(decimalCountParsed)
    const i = parseInt(amountParsed, 10).toString()
    const j = i.length > 3 ? i.length % 3 : 0

    return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
        (decimalCountParsed
            ? decimal +
            Math.abs(amountParsed - i)
                .toFixed(decimalCountParsed)
                .slice(2)
            : '')
    )
}
