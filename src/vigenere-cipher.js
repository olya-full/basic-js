const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }


  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error("Incorrect arguments!");
    let currentKey = key.repeat(Math.ceil(message.length / key.length)).toUpperCase().split("");
    message = message.toUpperCase().split("");
    let encryptedMessage = [];

    for (let i = 0, j = 0; i < message.length; i++){
      console.log(message[i]);
      let messageCharacter = message[i].charCodeAt(0);
      if (messageCharacter>=65 && messageCharacter<=90){
      let characterToPush = ((message[i].charCodeAt(0) + currentKey[j].charCodeAt(0) - 130)%26)+65;
      encryptedMessage.push(String.fromCharCode(characterToPush));
      j++;
      } else {
      encryptedMessage.push(message[i]);
    }
  }

  return this.direct ? encryptedMessage.join('') : encryptedMessage.reverse().join('');

  }


  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) throw new Error("Incorrect arguments!");
    let currentKey = key.repeat(Math.ceil(encryptedMessage.length / key.length)).toUpperCase().split("");
    encryptedMessage = encryptedMessage.toUpperCase().split("");
    let message = [];

    for (let i = 0, j = 0; i < encryptedMessage.length; i++){
      console.log(encryptedMessage[i]);
      let messageCharacter = encryptedMessage[i].charCodeAt(0);
      if (messageCharacter>=65 && messageCharacter<=90){
        let characterToPush = ((encryptedMessage[i].charCodeAt(0) - currentKey[j].charCodeAt(0) + 26)%26)+65;
        message.push(String.fromCharCode(characterToPush));
        j++;
      } else {
      message.push(encryptedMessage[i]);
    }
  }

  return this.direct ? message.join('') : message.reverse().join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
