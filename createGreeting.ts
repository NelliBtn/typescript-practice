// EXPLICIT RETURN TYPES

function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

// FOR ARROW FUNCTIONS

const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};