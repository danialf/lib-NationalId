# IR National ID Validator

## Samples
``` typescript
import NationalId from '../index';

// using ctor
let nationalId = new NationalId("0123456789");
console.log(nationalId.IsValid); // false
console.log(nationalId.Value); // XXXXXXXXXX
console.log(nationalId.ToString()); // XXXXXXXXXX
console.log(nationalId.ToFormattedString()); // XXX-XXXXXX-X
console.log(nationalId.getParity); // X
console.log(nationalId.getSectorCode); // XXX
console.log(nationalId.getUID); // XXXXXX

// Using create instance
nationalId = NationalId.create("0683504169");
console.log(nationalId.IsValid); // true
console.log(nationalId.Value); // 0683504169
console.log(nationalId.ToString()); // 0683504169
console.log(nationalId.ToFormattedString()); // 068-350416-9
console.log(nationalId.getParity); // 9
console.log(nationalId.getSectorCode); // 068
console.log(nationalId.getUID); // 350416
```