# url-spinner

[![npm version](https://badge.fury.io/js/url-spinner.svg)](https://badge.fury.io/js/url-spinner)

The spinner in your address bar. Inspired by http://wavyurl.com

<img src="./assets/example1.gif" width="500" />
<img src="./assets/example2.gif" width="500" />
<img src="./assets/example3.gif" width="500" />
<img src="./assets/example4.gif" width="500" />

## Get started

### Install

With npm: `npm install url-spinner`

### Usage

Simple example

```javascript
import { startSpinning } from "url-spinner";

const stopSpinning = startSpinning();

// Perform some async tasks and call stopSpinning at a proper time
setTimeout(stopSpinning, 3000);
```

To stop spinning automatically by 3s later

```javascript
startSpinning({ duration: 3000 });
```

To customize the spinner

```javascript
startSpinning({
  duration: 3000,
  spinner: ["🌚", "🌘", "🌗", "🌖", "🌝", "🌔", "🌓", "🌒"]
});
```

<img src="./assets/example2.gif" />

## Apis

`startSpining(options: UrlSpinnerOptions)`

```typescript
export interface UrlSpinnerOptions {
  spinner?: string[];
  duration?: number;
}
```

## License

MIT ([Chuang Yu <cyu9960@gmail.com>](https://github.com/cyyyu))
