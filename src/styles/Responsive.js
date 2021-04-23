  
const size = {
    "xs": "320px",
    "sm": "768px",
    "lg": "1200px",
}
const screenSize = {
    "xs": `(min-width :${size.xs})`,
    "sm": `(min-width : ${size.sm})`,
    "lg": `(min-width : ${size.lg})`
};
const breakpoints = {
    xs:`@media only screen and ${screenSize.xs}`,
    sm:`@media only screen and ${screenSize.sm}`,
    lg:`@media only screen and ${screenSize.lg}`
};
export default breakpoints

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px