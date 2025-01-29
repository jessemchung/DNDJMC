function convertRemToPixels(remValue: number) {
  return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const MENU_WIDTH = convertRemToPixels(20);
export const MENU_HEIGHT = convertRemToPixels(20);
