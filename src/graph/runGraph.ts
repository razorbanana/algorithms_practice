import Graph from "./Graph.ts";

const graph = Graph()

graph.addNode("1")
graph.addNode("2")
graph.addNode("3")
graph.addNode("4")
graph.addNode("5")
graph.addEdge("1", "2")
graph.addEdge("1", "3")
graph.addEdge("2", "4")
graph.addEdge("4", "5")
graph.addEdge("3", "5")

graph.printNodes()
