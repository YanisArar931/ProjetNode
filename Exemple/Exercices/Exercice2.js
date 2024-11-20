function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizes(str) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}

function camelCase(str) {
return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function snakeCase(str) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("_");
}

function leet(str) {
    const leetMap = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0',
      'u': 'u',
      'A': '4',
      'E': '3',
      'I': '1',
      'O': '0',
      'U': 'u'
    };
  
    return str.split('').map(char => leetMap[char] || char).join('');
}

function verlan(str) {
    return str
      .split(" ")
      .map(word => word.split('').reverse().join(''))
      .join(" ");
}

function yoda(str) {
    return str
      .split(" ") 
      .reverse()
      .join(" ");
}

// function type_check_v1(arg1, arg2) {
//     return typeof arg1 === arg2;
// }
  
  
const text = "hello world";
  
console.log('ucfirst : ' + ucfirst(text));
console.log('capitalizes : ' + capitalizes(text)); 
console.log('camelCase : ' + camelCase(text));
console.log('snakeCase : ' + snakeCase(text));
console.log('leet : ' + leet(text));
console.log('verlan : ' + verlan(text));
console.log('yoda : ' + yoda(text));
// console.log('type_check_v1 : ' + type_check_v1(text));


