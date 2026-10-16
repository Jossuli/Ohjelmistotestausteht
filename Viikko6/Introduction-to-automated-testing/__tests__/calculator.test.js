import { divide } from '../src/calculator.js'

describe('divide', () => {
    //Katsotaan jakamalla
    it('divides two positive numbers', () => {
        expect(divide(6, 3)).toBe(2)
    })
    // Katsotaan jakamalla negatiivisia lukuja
    it('divides negative numbers', () => {
        expect(divide(-6, 3)).toBe(-2)
    })
    // Katsotaan, jos kirjoitetaan muita kuin lukuja
    it('throws error when input is not number', () => {
        expect(() => divide('kaksi', 3)).toThrow('Both arguments must be numbers')
    })
    // Katsotaan, jos kirjoitetaan NaN
    it('throws error when input is NaN', () => {
        expect(() => divide(NaN, 3)).toThrow('Arguments cannot be NaN')
    })
    // Katsotaan, jos kirjoitetaan nolla
    it('throws error when input is zero', () => {
        expect(() => divide(2, 0)).toThrow('Division by zero is not allowed')
    })
    // katsotaan kolmella numerolla
    it('throws error when input is 3 arguments', () => {
        expect(() => divide(2,5,7)).toThrow('Divide expects two arguments')
    })
})
