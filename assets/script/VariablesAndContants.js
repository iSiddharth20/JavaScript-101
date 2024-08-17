{/*
  Variable Name:
    - has to be in camelCase
    - is Case Sensitive
    - can start with and contain $ or _ 
    - must not start with digit
    - cannot have any special character other than $ or _
  
    Keywords:
      - const : Constant
      - let : Can be Overridden, Cannot leave Block Scope
      - var : Can be Overridden, Can leave Block Scope
*/}


// Numbers and Operators
const someNumber = 100
let _sum         = someNumber + 10
let _difference  = someNumber - 10
let _product     = someNumber * 10
let _quotient    = someNumber / 10
let _remainder   = someNumber % 10
let _exponent    = someNumber ** 2


// String Concatenation
let printMethon1 = 'someNumber = '          + someNumber  + '\n' +
                    someNumber + ' + 10 = ' + _sum        + '\n' +
                    someNumber + ' - 10 = ' + _difference + '\n' +
                    someNumber + ' * 10 = ' + _product    + '\n' +
                    someNumber + ' / 10 = ' + _quotient   + '\n' +
                    someNumber + ' % 10 = ' + _remainder  + '\n' +
                    someNumber + ' ** 2 = ' + _exponent

alert(printMethon1)

// Template Literal
let printMethon2 = `someNumber = ${someNumber}          \n 
                    ${someNumber} + 10 = ${_sum}        \n
                    ${someNumber} - 10 = ${_difference} \n
                    ${someNumber} * 10 = ${_product}    \n
                    ${someNumber} / 10 = ${_quotient}   \n
                    ${someNumber} % 10 = ${_remainder}  \n
                    ${someNumber} ** 2 = ${_exponent}     `

alert(printMethon2)