import { greet } from "./greet"

describe('greet',()=>{
    it('should return the name that is passed from the user',()=>{
        const result = greet('shyam')
        expect(result).toContain('shyam')
    })
})