export default function debounce(f, ms) {
  let isCooldown = false;
  return function (...rest) {
    if (isCooldown) return;

    f.apply(this, rest);

    isCooldown = true;

    setTimeout(() => {isCooldown = false; return false}, ms);
  };
}
