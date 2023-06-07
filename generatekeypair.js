// Node.js program to demonstrate the flow of crypto.generateKeyPair() method

// Importing generateKeyPair from crypto module
import { generateKeyPair } from 'crypto';

// Calling generateKeyPair() method with the below parameters for elliptic curve 'ec'
generateKeyPair('ec', {
   namedCurve: 'secp256k1', // Options
   publicKeyEncoding: {
      type: 'spki',
      format: 'der'
   },
   privateKeyEncoding: {
      type: 'pkcs8',
      format: 'der'
   }
},(err, publicKey, privateKey) => { // Callback function
   if(!err)
   {
      // This will print the asymmetric key pair
      console.log("Public Key hex: ", publicKey.toString('hex'));
      console.log();
     
      console.log("Private Key in hex is: ",
      privateKey.toString('hex'));
   }else{
      // Prints error if any
      console.log("Errr is: ", err);
   }
});