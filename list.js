function Node(id, data) {
    this.data = data;
    this.next = null;
    this.prev = null;
    this.id = id;
}

function List() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

function Add(id, data){
	var newNode = new Node(data);
	newNode.next = head;
	head = newNode;
	if (newNode.next != null){
		newNode.next.prev = newNode;
	}
	if (this.tail == null){
		this.tail = newNode;
	}
	this._length += 1;
	return newNode;
}

function touch(node){
	var next = node.next;
	var prev = node.prev;

	if (prev != null){
		node.prev.next = node.next;
	}
	if (next != null){
		node.next.prev = node.prev;
	}

	if (node === this.tail){
		this.tail = prev;
	}

	node.prev = null;
	node.next = head.next;
	head = node;
}

function removeLast(){
	var tmpNode = this.tail;
	this.tail = this.tail.prev;
	this._length -= 1;
	return tmpNode;
}