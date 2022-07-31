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

const weight = {
  normal: 400,
  bold: 600,
};

type Weight = typeof weight;

/** INTERFACES **/
export interface IFont {
  size: Size;
  family: Family;
  weight: Weight;
}

/** CONSTANTS **/
export const font: IFont = {
  size,
  family,
  weight,
};
