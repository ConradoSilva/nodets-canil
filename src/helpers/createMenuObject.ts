type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish' | 'price' | 'idade';


export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
        price:false,
        idade: false     
    };
    activeMenu !== '' ? returnObject[activeMenu] = true : returnObject;
    
};