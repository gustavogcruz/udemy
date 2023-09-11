const texto1 = `
Lista telefônica:
- (11) 98756-1212
- 98765-4321
- (85)3333-7890
- (1) 4321-1234
- (15)999999999
`

console.log(texto1.match(/(\(\d{1,2}\)\s?)?\d{4,5}-?\d{4}/g))