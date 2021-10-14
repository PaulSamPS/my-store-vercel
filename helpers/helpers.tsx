import { FirstLevelMenuItem } from "../interfaces/menu.interface"
import { TopLevelCategory } from "../interfaces/page.interface"
import CoursesIcon from "./icons/courses.svg"

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
]


export const priceRu = (price: number | undefined): string => {
    if (!price) {
        return ''
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
}

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}