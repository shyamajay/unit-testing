import { compute } from "./compute";

describe('compute',()=>{
    it('should return zero if input less than 0',()=>{
        const result = compute(-1);
        expect(result).toBe(0)
    })
    it('should increement if it is a positive number',()=>{
        const result = compute(1);
        expect(result).toBe(2)
    })
})