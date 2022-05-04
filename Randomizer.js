class Randomizer {

    getString(chars, length){
        let string = '';
	    for ( let i = 0; i < length; i++ ) {
	       string += chars.charAt(Math.floor(Math.random() * chars.length));
	    }
	    return string;
    }

    /**
    * Returns a random number between start and end.
    * min value that can be returned is start
    * max value that can be returned is end-1
    */
    getNumber(start, end){
    	return Math.floor(Math.random() * (end - start)) + start;
    }

    getBoolean(){
    	return Math.floor(Math.random() * 2) ? true : false;
    }

    /**
    * Shuffle elements in an array (https://stackoverflow.com/questions/2450954)
    */
    shuffle(array) {
    	let arr = cloneDeep(array);
        var currentIndex = arr.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }

        return arr;
    }

    shuffleString(string){
	    var a = string.split(""),
	        n = a.length;

	    for(var i = n - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var tmp = a[i];
	        a[i] = a[j];
	        a[j] = tmp;
	    }
	    return a.join("");
    }

    getArrayElement(array){
    	return array[this.getNumber(0,array.length)];
    }

    getArrayElements(array, num){
    	if(num == array.length){
    		return this.shuffle(array);
    	}
    	let arr = cloneDeep(array);
    	let elements = [];
    	for(let i = 0; i < num; i++){
            let x = this.getNumber(0,arr.length);
            elements.push(arr[x]);
            arr.splice(x,1);
        }
        return elements;
    }

    getPassword(){
    	let parts = [];
	    parts.push(this.getString('abcdefghijklmnopqrstuvwxyz', 3));
	    parts.push(this.getString('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 3));
	    parts.push(this.getString('!@#$%^&*()_-+=,<>?/\\"\'{}[]:', 3));
	    parts.push(this.getString('0123456789', 3));
	    return this.shuffleString(parts.join());
    }

    getDate(lastXdays, nextXdays){
    	let d = new Date();
        d.setDate(d.getDate() + this.getNumber(lastXdays,nextXdays));
        return d;
    }

}