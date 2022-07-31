/** PRIVATE **/
export const spacing = {
  xsmall: 2,
  small: 4,
  medium: 8,
  large: 16,
  xlarge: 32,
};

type Spacing = typeof spacing;

export const elements = {
  toolbarHeight: 64,
  minWindowHeight: 600,
};

type Elements = typeof elements;

/** INTERFACES **/
export interface ILayout {
  spacing: Spacing;
  elements: Elements;
}

/** CONSTANTS **/
export const layout: ILayout = {
  spacing,
  elements,
};
