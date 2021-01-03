
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr';

export default function decryptString(str,password='1@mencrypti0n') {

  try{
    var mykey = crypto.createDecipher(algorithm, password);
    var mystr = mykey.update(str, 'hex', 'utf8')
    mystr += mykey.final('utf8');
    return mystr
}
catch(e){
    return str
}

}
