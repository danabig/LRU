function Dict(){
	this.innerDict = {};
}

function AddItem(id, node){
	this.innerDict[id] = node;
}

function remove(node){
	delete this.innerDict[node.id];
}

function get(id){
	var node = this.innerDict[id];
	if (node == undefined){
		return null;
	}
	return node;
}