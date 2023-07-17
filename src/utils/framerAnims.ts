export const screenFade = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1 },
};

export const screenLeftToRight = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: { opacity: 1, x: 0 },
};

export const screenRightToLeft = {
  offscreen: { opacity: 0, x: 100 },
  onscreen: { opacity: 1, x: 0 },
};

export const screenTopToBottom = {
  offscreen: { opacity: 0, y: -100 },
  onscreen: { opacity: 1, y: 0 },
};

export const screenBottomToTop = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0 },
};


export * as FramerAnims from './framerAnims';
