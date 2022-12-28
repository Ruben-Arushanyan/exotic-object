import { 
    exoticObject,
} from '../../.packed'

import { 
  ToPrimitiveNotAllowedError,
} from '../../.packed/errors'


test('exoticObject toPrimitive', () => {
    {
        const e_o = exoticObject()
        expect(() => e_o + '').toThrow(ToPrimitiveNotAllowedError)
    }

    {
        const e_o = exoticObject({
            operation: {
                toPrimitive: {}
            }
        })
        expect(() => +e_o).toThrow(TypeError)
    }

    {
        const e_o = exoticObject({
            operation: {
                toPrimitive: (target, hint) => hint === "number" ? 123 : "hello"
            }
        })
        expect(+e_o).toBe(123)
        expect(e_o + '').toBe("hello")
    }

  
    // {
    //   const e_o = exoticObject({
    //     data: {name: "Ruben"},
    //     operation: {
    //       call: (target, argumentsList, thisArg) => {
    //         return target.data
    //       }
    //     }
    //   })
  
    //   expect(e_o()).toEqual({name: "Ruben"})
    //   const data = e_o()
    //   data.name = "abc"
    //   expect(e_o()).toEqual({name: "abc"})
    // }
  
    // {
    //   const e_o = exoticObject({
    //     operation: {
    //       call: (target, argumentsList, thisArg) => {
    //         return thisArg
    //       }
    //     }
    //   })
  
    //   expect(e_o()).toEqual(undefined)
  
    //   const obj = {
    //     name: "Ruben",
    //     __proto__: {
    //       e_o,
    //     }
    //   }
  
    //   expect(obj.e_o()).toEqual({name: "Ruben"})
    // }
})