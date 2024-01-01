import {Calculator} from './testservice';

describe("testService",()=>{
    it("should add two numbers",()=>{
        const service=new Calculator();
        expect(service.add(2,2)).toBe(4);
    });
    it('should sub 2 numbers',()=>{
        const service=new Calculator();
        expect(service.subtract(2,2)).toBe(0)    
    })
})