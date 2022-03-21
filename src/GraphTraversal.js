class GraphTraversal {
  collectWords(currentWord, node){
    let response = [];
    
    if(node.completeWordFlag){
      response.push(currentWord);
    }
    
    for(let i = 0; i<26; i++){
        if(node.children[i] != null){
          response.push(...this.collectWords(currentWord + String.fromCharCode('a'.charCodeAt(0) + i), node.children[i]));
      }
    }
    
    return response;
  }
}

module.exports = GraphTraversal;
