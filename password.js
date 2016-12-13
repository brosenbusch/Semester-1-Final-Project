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
    if(this.privatekey.charAt([4] && [9] == "-")){

    }
  }
}
