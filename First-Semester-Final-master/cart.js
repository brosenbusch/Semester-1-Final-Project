class Cart{
  constructor (l,q){
    this.itemList = l;
    this.itemQuantity = q;
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
    let subCart
  }
}
