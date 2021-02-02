class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  
  add(item) {
    this.items.push(item)
    this.length++

    this.items.sort(function(a,b){
      return a-b
    }
    )
    
  }

  get(pos) {
    for (let i = 0; i <  this.items.length; i++) {
      if(pos > this.items.length || pos == -1){
        throw new Error('OutOfBounds');
      }
       else if(pos ==  this.items[i]){
      return this.items[i]
    } 
    }
    }
  

  max() {
    let list = []
    if (list.max([])) {
      throw new Error('EmptySortedList');
    } else {
      list = new SortedList()
      return list.max()
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
