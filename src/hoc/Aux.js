/*  HOC component only wraps another component,
    this is useful to pass certain logic
    
    HOC can be used to replace 'div', and in doing so it can be
    used to do more than normal div 

    e.g. we can implement error handling here and it can be wrapped with
    any component to handle http errors
*/

const aux = props => props.children;

export default aux;
