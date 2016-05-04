var Node = require("./mynode");

function List() {
    this._length = 0;
    this.head = null;
    this.tail = null;

	this.Add = function(id, data){
		var newNode = new Node(id, data);
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
	};

	this.touch = function(node){
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
	};
	this.removeLast = function(){
		var tmpNode = this.tail;
		this.tail = this.tail.prev;
		this.tail.next = null;
		this._length -= 1;
		return tmpNode;
	};
}

module.exports = List;