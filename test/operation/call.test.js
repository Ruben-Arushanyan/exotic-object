import { 
    exoticObject,
} from '../../.packed'

import { 
  CallNotAllowedError,
} from '../../.packed/errors'


test('exoticObject call', () => {
    {
        const e_o = exoticObject()
        expect(() => e_o()).toThrow(CallNotAllowedError)
    }
  
    {
      const e_o = exoticObject({
        operation: {
          call: {}
        }
      })
      expect(() => e_o()).toThrow(TypeError)
    }
  
    {
      const e_o = exoticObject({
        operation: {
          call: (state, argumentsList, thisArg) => {
            return argumentsList.reduce((sum, item) => sum + item, 0)
          }
        }
      })
  
      expect(e_o(1, 2, 3)).toBe(6)
    }
  
    {
      const e_o = exoticObject({
        state: {name: "Ruben"},
        operation: {
          call: (state, argumentsList, thisArg) => {
            return state
          }
        }
      })
  
      expect(e_o()).toEqual({name: "Ruben"})
      const state = e_o()
      state.name = "abc"
      expect(e_o()).toEqual({name: "abc"})
    }
  
    {
      const e_o = exoticObject({
        operation: {
          call: (state, argumentsList, thisArg) => {
            return thisArg
          }
        }
      })
  
      expect(e_o()).toEqual(undefined)
  
      const obj = {
        name: "Ruben",
        __proto__: {
          e_o,
        }
      }
  
      expect(obj.e_o()).toEqual({name: "Ruben"})
    }
})