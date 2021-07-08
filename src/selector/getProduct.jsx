import { product } from '../data/dbCreateProduct';


export const getProductById = ( id ) => {



    return product.find( product => product.id  === id );
}



