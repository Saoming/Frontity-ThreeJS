export const breakpoints = {
    sm: 320,
    md: 768,
    lg: 1024,
    xl: 1440
  };
  
  export const mediaQueries = key => {
    return style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
  };