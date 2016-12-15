class Password{
  constructor(pb,pv){
    this.publickey = pb; //string of any character
    this.privatekey = pv; //secret string (xxxx-xxxx-xxxx)
  }

  validPublicKey(){
    if(this.publickey.length >= 8 && this.publickey.length <= 25){
      return true;
    }
    else{
      return false;
    }
  }

  validPrivateKey(){
    for(b=0; b<this.privatekey.length; b++){
      if(this.privatekey[4] !== "-" || this.privatekey[9] !== "-"){
        return false;
      }
      else{
        if(Number.isNaN){
          return false;
        }
      }
    }
  }

  static makePrivateKey(){
    let key = [];
    const limit = 14;
    let group1 = "";
    let group2 = "";
    let group3 = "";
    for (c=0; c<4; c++){
      group1 += String(Math.floor(Math.random()*10));
      group2 += String(Math.floor(Math.random()*10));
      group3 += String(Math.floor(Math.random()*10));
    }
    return group1 + "-" + group2 + "-" + group3;
  }
}
