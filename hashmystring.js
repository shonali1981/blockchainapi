import {createHash} from "crypto";

export function hashmystring(blockNumber){
    
    var mytext = blockNumber;
    console.log("Hash Created -> ", createHash("sha256").update(mytext).digest('hex'));
    return mytext;
}
