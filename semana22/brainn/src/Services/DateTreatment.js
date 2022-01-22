export const setDateToDDMMYYY = (stringDate) => {
    const toParse = Date.parse(stringDate)
    const parseToDate = new Date(toParse)
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const days = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
    const year = parseToDate.getFullYear()
    const month = months[parseToDate.getMonth()]
    const day = days[parseToDate.getDate()]
    const configuredDate = `${day}/${month}/${year}`
    return configuredDate
}