text-coder
====

Common interface for TextEncoder & TextDecoder.
In node uses [util module](https://nodejs.org/api/util.html#util_class_util_textdecoder).
In browser uses [classes from global scope](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) and shim if they are not available. Typings included.

Example
---

```typescript
import {TextEncoder, TextDecoder} from "text-coder";

let text = "Some text";

let te = new TextEncoder();
let array = te.encode(text);

let td = new TextDecoder();
let res = td.decode(array);

console.log(text == res, text, array, res);
```

License
---

The MIT License (MIT)
