import { 
    exoticObject,
} from '../../.packed'

import { 
  GetNotAllowedError,
} from '../../.packed/errors'


test('exoticObject get', () => {
    {
        const e_o = exoticObject()
        expect(() => e_o.abc).toThrow(GetNotAllowedError)
    }
  
    {
      const e_o = exoticObject({
        propertyOperation: {
            abc: {
                get: {}
            }
        }
      })
      expect(() => e_o.abcde).toThrow(GetNotAllowedError)
      expect(() => e_o.abc).toThrow(TypeError)
    }

    {
        const e_o = exoticObject({
          propertyOperation: {
              abc: {
                  get: (state, property) => {
                    return property
                  }
              }
          }
        })
        expect(e_o.abc).toBe("abc")
    }

    {
        const e_o = exoticObject({
            state: {name: "Ruben"},
            propertyOperation: {
              abc: {
                  get: (state, property) => {
                    return state
                  }
              }
          }
        })
        expect(e_o.abc).toEqual({
            name: "Ruben",
        })
        const state = e_o.abc
        state.name = "Abc"
        expect(e_o.abc).toEqual({
            name: "Abc",
        })
    }

    {
        const e_o = exoticObject({
            propertyOperation: {
                abc: {
                    get: (state, property) => {
                        return property + 1
                    }
                },
                abcd: {
                    get: (state, property) => {
                        return property + 2
                    }
                },
                '*': {
                    get: (state, property) => {
                        return property + 3
                    }
                }
          }
        })
        expect(e_o.abc).toBe("abc1")
        expect(e_o.abcd).toBe("abcd2")
        expect(e_o.abcde).toBe("abcde3")
        expect(e_o['*']).toBe("*3")
    }
})