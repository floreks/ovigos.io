/** PRIVATE **/
export const radius = {
  small: 2,
  medium: 3,
  large: 6,
};

type Radius = typeof radius;

export const width = {
  small: 1,
  medium: 2,
  large: 4,
};

type Width = typeof width;

/** INTERFACES **/
export interface IBorder {
  radius: Radius;
  width: Width;
}

/** CONSTANTS **/
export const border: IBorder = {
  radius,
  width,
};
