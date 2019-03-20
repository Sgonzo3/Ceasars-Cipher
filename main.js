const button = document.querySelector('#check');
const output = document.querySelector('#output');

function rot13(str) {
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // alpha.split('');
  let regex = new RegExp(/\W|\d/g);
  let answer = [];

  str = str.toUpperCase();
  str.split('').map( (letter, i) => {
    let position = alpha.indexOf(letter);
    if(letter.match(regex)){
      answer.push(letter);
    } else {
      answer.push(alpha[(position + 13)]);
    }
  });
  output.innerText = `Your encrypted phrase is: "${answer.join('')}"`;
}

button.addEventListener('click', function(e){
  e.preventDefault();
  let input = document.querySelector('#user-input').value;
  rot13(input.toUpperCase());
});
