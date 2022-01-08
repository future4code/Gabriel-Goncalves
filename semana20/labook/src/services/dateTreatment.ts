export class DateTreatment {
    setDateToYYYYMMDDHHMMSS(date: any): string {
        const months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        const year = date.getFullYear()
        const month = months[date.getMonth()]
        const day = date.getDate()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const configuredDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
        return configuredDate
    }
}