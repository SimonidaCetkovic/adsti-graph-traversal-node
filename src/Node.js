class Node {
  constructor(completeWordFlag) {
    this.completeWordFlag = completeWordFlag;
    this.children = new Array(26);
  }
  
  setChild(character, completeWordFlag){
    const child = new Node(completeWordFlag);
    this.children[character.charCodeAt(0)-97] = child;

    return child;
  }
}

module.exports = Node;
