import { getCurrencies } from "./getCurrencies"

describe('getCurrencues',()=>{
    it('should contain one of the currencies',()=>{
        const result = getCurrencies();
        expect(result).toContain('USD')
        expect(result).toContain('AUD')
        expect(result).toContain('EUR')
    })
})