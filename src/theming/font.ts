/** PRIVATE **/
const size = {
  caption: '10px',
  body: '12px',
  subtitle: '14px',
  title: '16px',
};

type Size = typeof size;

const family = {
  default: 'Roboto',
  mono: 'RobotoMono',
};

type Family = typeof family;

/** INTERFACES **/
export interface IFont {
  size: Size;
  family: Family;
}

/** CONSTANTS **/
export const font: IFont = {
  size,
  family,
};
