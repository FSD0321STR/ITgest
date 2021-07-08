import { renderHook, act} from "@testing-library/react-hooks";
import {useForm} from '../hooks/useForm'

describe('useForm', () =>{

    const initForm = {
        category: '',
        model: '',
        brand:'',
        provedor:'',
        price:'',
        stock:'',

    };

    test('should be return a form', () => {
        const { result } = renderHook( () => useForm( initForm ));
        const [ formValues, handleInputChange, reset ] = result.current;
        
        expect( formValues ).toEqual( initForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function');
    });

    test('should be change the form value', () => {
        const { result } = renderHook( () => useForm( initForm ));
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                category: 'category',
                value: 'Telefono',

                }
            })
        });
        const [ formValues ] = result.current;
    });

    test('should be reset form', () => {
        
    });
    
})