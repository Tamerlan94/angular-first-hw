import { category } from "./category";

export interface product {
    id: number,
    name: string,
    description: string,
    image: string,
    category: category
}

export const products = [
    {
        id: 1,
        name: "iphone",
        description: "телефон для понтов",
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/f461682c5982e6a9ad95f5d4519a51a358afd290-tc-img-thumb.jpg",
        category: category.phone
    },
    {
        id: 2,
        name: "xiaomi 12",
        description: "телефон для реальных пацанов",
        image: "https://mobitron.kz/upload/iblock/5a1/2epwncrdti30gynjtl1lh1o78w2mmvbo.jpg",
        category: category.phone
    },
    {
        id: 3, 
        name: "samsung s22",
        description: "телефон для просто так",
        image: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2202/gallery/kz-ru-galaxy-s22-s901-sm-s901bzggskz-530859182?$650_519_PNG$",
        category: category.phone
    },
    {
        id: 4, 
        name: "philips 21.3",
        description: "простой монитор",
        image: "https://images.philips.com/is/image/PhilipsConsumer/196V3LAB_00-IMS-ru_RU?$jpglarge$&wid=1250",
        category: category.monitor
    },
    {
        id: 5, 
        name: "aoc 24",
        description: "игровой монитор",
        image: "https://c.dns-shop.kz/thumb/st4/fit/300/300/ece54c5c687f128696f5f9a692d35122/16e751fd25fc06188b74c5c74728b3702c9dfa4660d7f63d26529db42adbc69c.jpg",
        category: category.monitor
    },
    {
        id: 6, 
        name: "ram 2gb",
        description: "ddr2 800",
        image: "https://frankfurt.apollo.olxcdn.com/v1/files/o7oqxzhdy7x3-KZ/image;s=644x461",
        category: category.ram
    }

]