type Node = {
    addLink: (another: Node) => void,
    getLinks: () => Node[],
    getName: () => string,
    printNode: () => void
}

const Node = (name: string) => {

    const links: Node[] = []
    
    const addLink = (another: Node) => {
        links.push(another)
    }

    const getLinks = () => {
        return links
    }

    const getName = () => {
        return name
    }

    const printNode = () => {
        console.log(`node ${name}${links.length?" and links:":" without links"}`)
        links.map(link => console.log(link.getName()))
    }

    return {
        addLink,
        getLinks,
        getName,
        printNode
    }
}

const Graph = () => {
    const nodes: Node[] = []

    const addNode = (name: string) => {
        nodes.push(Node(name))
    }

    const addEdge = (node1: Node | undefined | string, node2: Node | undefined | string) => {
        const n1 = typeof node1 === "string" ? getNode(node1) : node1
        const n2 = typeof node2 === "string" ? getNode(node2) : node2
        if (n1 && n2){
            n1.addLink(n2)
        }
    }

    const getNodes = () => {
        return nodes
    }

    const getNode = (name: string) => {
        return nodes.find(node => node.getName() === name)
    }

    const printNodes = () => {
        nodes.map(node => node.printNode())
    }

    return {
        addNode,
        addEdge,
        getNode,
        getNodes,
        printNodes
    }
}

export default Graph