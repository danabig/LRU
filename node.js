function Node(id, data) {
    this.data = data;
    this.next = null;
    this.prev = null;
    this.id = id;
}

module.exports = Node;