class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a-b);
    this.length=this.items.length

  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('outOfBounds')
    }
    return this.items[pos]
    // for (let i = 0; i <  this.items.length; i++) {
    //   if(pos > this.items.length || pos == -1){
    //     throw new Error('OutOfBounds');
    //   }
    //   else if(pos ==  this.items[i]){
    //   return this.items[i]
    // } 
    // }
    }
  

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    }
    return this.items[this.items.length - 1]
    // let list = []
    // if (list.max([])) {
    //   throw new Error('EmptySortedList');
    // } else {
    //   list = new SortedList()
    //   return list.max()
    // }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    }
    return this.items[0]
  }

  sum() {
    if (!this.items.length) {
      return 0
    }
    return this.items.reduce((a, b) => a + b)
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    }
    return this.sum() / this.items.length
  }
}

module.exports = SortedList;
