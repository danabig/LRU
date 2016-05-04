function Dict(){
	this.innerDict = {};
	this.AddItem = function(id, node){
		this.innerDict[id] = node;
	};
	this.removeItem = function(node){
		delete this.innerDict[node.id];
	};
	this.get = function(id){
		var node = this.innerDict[id];
		if (node == undefined){
			return null;
		}
		return node;
	};
}

