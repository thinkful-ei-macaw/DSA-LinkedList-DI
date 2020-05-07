class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    previousNode.next = new _Node(item, currNode);
  }
  insertAfter(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && previousNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    previousNode.next = new _Node(item, currNode);
  }
  insertAt(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    for (let i = 1; i < parseInt(key); i++) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    // while ((currNode !== null) && (previousNode.value !== key)) {
    //   previousNode = currNode;
    //   currNode = currNode.next;
    // }
    previousNode.next = new _Node(item, currNode);
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(list) {
  if (list.head === null) {
    throw new Error("List is empty or does not");
  }

  let currNode = list.head;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  if (list.head === null) {
    console.log("size 0");
  }

  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }
  console.log(`size: ${counter}`);
  return counter;
}

function isEmpty(list) {
  if (list.head === null) {
    console.log("List is empty");
    return true;
  } else {
    console.log("list is not empty");
    return false;
  }
}

function findPrevious(list, key) {
  if (list.head === null) {
    return;
  }

  let currNode = list.head;
  let previousNode = list.head;

  while (currNode !== null && currNode.value !== key) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  console.log("findPrevious result", previousNode.value);
  return previousNode.value;
}

function findLast(list) {
  if (list.head === null) {
    return;
  }

  let currNode = list.head;
  let previousNode = list.head;

  while (currNode !== null) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  console.log("last node is", previousNode);
  return previousNode;
}

function reverse(list) {
  if (list.head === null) {
    return;
  }
  let previous = null;
  let curr = list.head;
  let nextNode = list.head.next;

  while (curr.next !== null) {
    curr.next = previous;
    previous = curr;
    curr = nextNode;
    nextNode = curr.next;
  }
  list.head = curr;
  curr.next = previous;
  console.log("reverse list is", list);
}

function third(list) {
  let id = parseInt(size(list)) - 2;

  let currNode = list.head;
  let previousNode = list.head;

  for (let i = 1; i < parseInt(id); i++) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return currNode;
}

function findMiddleId(num) {
  if (num % 2 === 0) {
    num = num / 2;
  } else {
    num = Math.floor(num / 2) + 1;
  }
  return num;
}

function findMiddle(list) {
  let middle = parseInt(size(list));

  middle = findMiddleId(middle);

  let currNode = list.head;
  let previousNode = list.head;

  for (let i = 1; i < middle; i++) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  console.log("MIDDLE IS", currNode.value);
  return currNode;
}

function cycle(list) {
  let test = "";
  let curr = list.head;
  let ret = false;

  while (curr.next !== null) {
    if (test.indexOf(curr.next.value) !== -1) {
      ret = true;
    }
    test += curr.value;
    curr = curr.next;
  }
  console.log(ret);
  return ret;
}

function main() {
  let SLL = new LinkedList();
  let empty = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Starbuck");
  // SLL.insertFirst("Tauhida");

  SLL.insertBefore("Athena", "Boomer");

  SLL.insertAfter("Hotdog", "Helo");

  SLL.insertAt("Kat", 3);

  SLL.remove("Tauhida");

  // console.log(SLL.find("Starbuck"));
  display(SLL);
  // size(SLL);
  // isEmpty(SLL);
  // isEmpty(empty);
  // findPrevious(SLL, "Husker");
  // findLast(SLL);
  // reverse(SLL);
  third(SLL);
  display(SLL);
  findMiddle(SLL);
  cycle(SLL);
  return SLL;
}

console.log(main());
// question 4
// function WhatDoesThisProgramDo(lst) {
//   let current = lst.head;
//   while (current !== null) {
//     let newNode = current;
//     while (newNode.next !== null) {
//       if (newNode.next.value === current.value) {
//         newNode.next = newNode.next.next;
//       }
//       else {
//         newNode = newNode.next;
//       }
//     }
//     current = current.next;
//   }
// }
// this function will disconect all duplicate values from the provided list and return nothing
//complexity O(n^2)

// Starbuck;
// Kat;
// Husker;
// Helo;
// Hotdog;
// Athena;
// Boomer;
// Apollo;
