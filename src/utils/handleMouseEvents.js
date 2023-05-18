let startX = 0;

export function handleStart(event) {
  startX = event.clientX || event.touches[0].clientX;
}

export function handleEnd(event) {
  const diff = startX - (event.clientX || event.changedTouches[0].clientX);
  return diff;
}
