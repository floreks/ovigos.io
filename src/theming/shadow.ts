/** PRIVATE **/
export const shadow = {
  default: '0 3px 3px rgba(0,0,0,0.2)',
  smooth: `0 1px 1px rgba(0,0,0,0.12), 
           0 2px 2px rgba(0,0,0,0.12), 
           0 4px 4px rgba(0,0,0,0.12), 
           0 8px 8px rgba(0,0,0,0.12),
           0 16px 16px rgba(0,0,0,0.12)`,
  diffuse: `0 1px 1px rgba(0,0,0,0.08), 
            0 2px 2px rgba(0,0,0,0.12), 
            0 4px 4px rgba(0,0,0,0.16), 
            0 8px 8px rgba(0,0,0,0.20)`,
  sharp: `0 1px 1px rgba(0,0,0,0.25), 
          0 2px 2px rgba(0,0,0,0.20), 
          0 4px 4px rgba(0,0,0,0.15), 
          0 8px 8px rgba(0,0,0,0.10),
          0 16px 16px rgba(0,0,0,0.05)`,
};

type Shadow = typeof shadow;

/** INTERFACES **/
export interface IEffect {
  shadow: Shadow;
}

/** CONSTANTS **/
export const effect: IEffect = {
  shadow,
};
