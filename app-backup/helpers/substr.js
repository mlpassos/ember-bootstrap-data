import Ember from 'ember';

export function substr([value], namedArgs) {
  // if (typeof value != 'undefined') {
  //   console.log('aqui: ' + value);
    let str = value;
  // } else {
  //   let str = "Ocorreu algum problema, por favor, reinicie o aplicativo.";
  // }
  let len = namedArgs.size;
  // let start = 0;

  // let out = str.substr(start, len);

  let expString = str.split(/\s+/,len);
  let out = expString.join(" ");

  if (str.length > len) {
  	out += ' [...]';
  }
  
  return Ember.String.htmlSafe(out);
}

export default Ember.Helper.helper(substr);