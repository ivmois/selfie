export function debounce(fn: Function, ms: number) {
  let isCooldown = false;

  return function (this: any, ...args: any[]) {
    if (isCooldown) return;

    fn.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}
