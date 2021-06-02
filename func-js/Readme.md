```js
// countWordsV1.mjs
export function countWordsV1  (inputWords) {
    return inputWords.reduce((acc,curr)=> {
        acc[curr] = ++ acc[curr]  || 1
        return acc
    },{})
  }
// useModulesV1.mjs
import  {countWordsV1 as V1} from './countWordsV1.mjs'
const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
console.log(countWordsV1(inputWords))
```

```js
//countWordsV2
module.exports  = (input) =>{
    return input.reduce((acc,curr)=> {
        acc[curr] = ++ acc[curr]  || 1
        return acc
    },{})
}
// useModulesV2
const V2 = require('./countWordsV2.js')
const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
console.log(V2(inputWords))
```


// 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