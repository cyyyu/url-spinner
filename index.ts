export interface UrlSpinnerOptions {
  spinner?: string[];
  duration?: number;
}

const defaultOptions: UrlSpinnerOptions = {
  spinner: ["◓", "◑", "◒", "◐"],
  duration: 10000
};

export function startSpinning(options?: UrlSpinnerOptions) {
  if (!options) options = defaultOptions;
  else options = Object.assign({}, defaultOptions, options);

  const url = location.href;
  const render = makeRenderer(options.spinner!);
  const timer = setInterval(render, 100, options);

  if (options.duration) {
    setTimeout(stopSpinning(timer, url), options.duration);
  }
  return stopSpinning(timer, url);
}

function makeRenderer(spinner: string[]) {
  let currentSpinnerIndex = 0;
  return function render() {
    window.history.replaceState(null, "", `?${spinner[currentSpinnerIndex]}`);
    if (currentSpinnerIndex === spinner.length - 1) {
      currentSpinnerIndex = 0;
    } else {
      ++currentSpinnerIndex;
    }
  };
}

function stopSpinning(timer: number, url: string) {
  return () => {
    if (timer) clearInterval(timer);
    history.replaceState(null, "", url);
  };
}
