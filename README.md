# IR National ID Validator
Iranian NationalId (NID , SSN) validation package
[![CI](https://github.com/danialf/lib-NationalId/actions/workflows/node.js.yml/badge.svg)](https://github.com/danialf/lib-NationalId/actions/workflows/node.js.yml)
[![Package Build](https://github.com/danialf/lib-NationalId/actions/workflows/npm-publish.yml/badge.svg?branch=main)](https://github.com/danialf/lib-NationalId/actions/workflows/npm-publish.yml)

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