import { IUser } from "types/IUser"

export const sortData = (arr: any[], field: string) => {
    return arr.sort(function (a, b) {
        if (a[field] < b[field]) return -1
        if (a[field] > b[field]) return 1
        return 0
    })
}