import { 
    exoticObject,
} from '../../.packed'

import { 
  SetNotAllowedError,
} from '../../.packed/errors'


test('exoticObject set', () => {
    {
        const e_o = exoticObject()
        expect(() => e_o.abc = 123).toThrow(SetNotAllowedError)
    }
  
    {
      const e_o = exoticObject({
        propertyOperation: {
            abc: {
                set: {}
            }
        }
      })
      expect(() => e_o.abcde = 123).toThrow(SetNotAllowedError)
      expect(() => e_o.abc = 123).toThrow(TypeError)
    }

    {
        const state = {}
        const e_o = exoticObject({
            state,
            propertyOperation: {
                abc: {
                    set: (state, value, property) => {
                        state[property] = value
                    }
                }
            }
        })
        e_o.abc = "Abc"
        expect(state).toEqual({abc: "Abc"})
    }

    {
        const state = {}
        const e_o = exoticObject({
            state,
            propertyOperation: {
                abc: {
                    set: (state, value, property) => {
                        state[property] = value + 1
                    }
                },
                abcd: {
                    set: (state, value, property) => {
                        state[property] = value + 2
                    }
                },
                '*': {
                    set: (state, value, property) => {
                        state[property] = value + 3
                    }
                }
          }
        })
        e_o.abc = 10
        expect(state).toEqual({
            abc: 11,
        })

        e_o.abcd = 10
        expect(state).toEqual({
            abc: 11,
            abcd: 12,
        })

        e_o.abcde = 10
        expect(state).toEqual({
            abc: 11,
            abcd: 12,
            abcde: 13,
        })

        e_o['*'] = 10
        expect(state).toEqual({
            abc: 11,
            abcd: 12,
            abcde: 13,
            '*': 13,
        })
    }
})