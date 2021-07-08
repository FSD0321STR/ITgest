import { useState } from 'react'

export const useForm = ( initialState = {
        category: '',
        model: '',
        brand: '',
        supplier: '',
        price: '',
        stock: ''
} ) => {
    
    const [ values, setValues ] = useState(initialState);

    const handleInputChange = ({ target }) => {

        setValues({
          ...values,
          [ target.name ]: target.value,
        });
    }

    return [ values, handleInputChange ];
}
