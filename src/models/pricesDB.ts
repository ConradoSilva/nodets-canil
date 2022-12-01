type list = {
    produto: string,
    price: number,
    type: string
}


const list = [
{produto: 'Maçã', price: 80, type: 'fruit'},
{produto: 'Y', price: 100, type: 'Object'},
{produto: 'Z', price: 150, type: 'home'},
{produto: 'X', price: 50, type: 'card'},
{produto: 'D', price: 200, type: 'home'}
];

export const listProduct = {

    getAll: (): list[] => {
        return list; 
    },
    
    getListFilter: (price: number): list[] => {
        return list.filter(item => item.price > price)
    }
   
};