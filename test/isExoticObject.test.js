import { 
    isExoticObject,
    exoticObject,
} from '../.packed'


test('isExoticObject', () => {
    expect(isExoticObject()).toBe(false)
    expect(isExoticObject(4)).toBe(false)
    expect(isExoticObject("abc")).toBe(false)
    expect(isExoticObject({})).toBe(false)
    
    expect(isExoticObject(exoticObject())).toBe(true)
})