const Node = require("../src/Node");
const GraphTraversal = require("../src/GraphTraversal");

const catNode = new Node(true);
const catsNode = catNode.setChild('s', true);
const catcNode = catNode.setChild('c', false);
const catchNode = catcNode.setChild('h', true);
const cateNode = catNode.setChild('e', false);
const caterNode = cateNode.setChild('r', true);

const graph = new GraphTraversal();
const result = graph.collectWords('cat', catNode);

describe('Graph Traversal', () => {
  test('return complete words', () => {
    expect(result).toEqual(["cat","cats", "catch", "cater"]);
  });
});
