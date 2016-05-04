

function InitLRU(){
	this.lruLimit = 5;
	this.queue = new List(this.lruLimit);
	this.dict = new Dict();
}

function GetItem(id){
	var node = this.Dict.get(id);
	if (node != null){
		this.queue.touch(node);
	}
	return node;
}

function AddItem(id, data){
	var newNode = this.queue.AddItem(id, data);
	this.dict.AddItem(id, newNode);

	if (this.queue._length > this.lruLimit){
		var removed = this.queue.removeLast();
		this.dict.remove(removed);
	}
}