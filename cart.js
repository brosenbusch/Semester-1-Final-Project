class Cart{
  constructor (l,q){
    this.itemList = l; //array
    this.itemQuantity = q; //array
  }

  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }

  totalCart(){
    let total = 0;
    for(a=0; a<this.itemList.length; a++){
      total += this.itemList[a].price*this.itemQuantity[a];
    }
    return total;
  }

  subCart(days){
    let subCart = new Cart([],[]);
    for(a=0; a<this.itemList.length; a++){
      if(this.itemList[a].shipping == days){
        subCart.push([a]);
      }
    }
    return subCart;
  }
}
