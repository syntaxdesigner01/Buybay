interface DataType {
    id: number;
    name: string;
    description: string; // Fixed the typo here ('desciption' to 'description')
    stars: number;
    price: string;
    oldPrice?: string;
    image: string;
}

export const allProducts: DataType[] = [
    {id: 1,
        name: 'Whitetails store',
        description: 'Whitetails Women’s Open Sky ',
        stars: 5,
        price: '  $340.00',
        oldPrice: '$475.00',
        image: 'prodcut-1.png'
    },
    {
        id: 2,
        name: 'Backpack, Wonder',
        description: 'Simple Modern School Boys ',
        stars: 5,
        price: ' $102.00',
        oldPrice: '$119.00',
        image: 'prodcut-2.png'
    },
    {
        id: 3,
        name: 'Shoes, Men’s',
        description: 'Men’s Essentials Convertible ',
        stars: 5,
        price: '$40.00',
        // oldPrice: '$119.00'
        image: 'prodcut-7.png'
    },
    {
        id:4,
        name: 'Backpack, Wonder',
        description: 'Simple Modern School Boys ',
        stars: 5,
        price: ' $102.00',
        oldPrice: '$119.00',
        image: 'prodcut-6.png'
    },
    
    {
        id:5,
        name: 'Backpack, Wonder',
        description: 'Simple Modern School Boys ',
        stars: 5,
        price: ' $102.00',
        oldPrice: '$119.00',
        image: 'prodcut-3.png'
    },
    {
        id: 6,
        name: 'Backpack, Wonder',
        description: 'Simple Modern School Boys ',
        stars: 5,
        price: ' $102.00',
        oldPrice: '$119.00',
        image: 'prodcut-5.png'
    },
    {
        id: 7,
        name: 'Backpack, Wonder',
        description: 'Simple Modern School Boys ',
        stars: 5,
        price: ' $102.00',
        oldPrice: '$119.00',
        image: 'prodcut-8.png'
    },
    {
        id: 8,
        name: 'Backpack, Wonder',
        description: 'Simple Modern School Boys ',
        stars: 5,
        price: ' $102.00',
        oldPrice: '$119.00',
        image: 'prodcut-4.png'
    },
    
]