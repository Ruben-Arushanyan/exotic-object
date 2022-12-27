import { 
    exoticObject,
} from '../.packed'


test('exoticObject', () => {
    {
        const e_o_1 = exoticObject()
        const e_o_2 = exoticObject({
            data: {name: "Ruben"},
            operation: {
                call: (target, argumentsList, thisArg) => {
                   // ....
                },
            },
            propertyOperation: {
                title: {
                  get: (target, property, receiver) => {
                    // ...
                  },
                },
                '*': {
                   get: (target, property, receiver) => {
                    // ...
                  },
                }
              }
        })

    }
})