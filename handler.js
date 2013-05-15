function get(pathname){
	try{
		return require("./requestHandlers" + pathname).get;
	}catch(err){
		console.log("No request handler found for '" + pathname + "' .");
		return require("./requestHandlers/getPage").get;
	}
}

exports.get = get;