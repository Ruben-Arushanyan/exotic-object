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
                toPrimitive: (state, hint) => hint === "number" ? 123 : "hello"
            }
        })
        expect(+e_o).toBe(123)
        expect(e_o + '').toBe("hello")
    }

    {
        const e_o = exoticObject({
            state: {name: "Ruben"},
            operation: {
                toPrimitive: (state, hint) => state.name
            }
        })
        expect(String(e_o)).toBe("Ruben")
    }
})