function Shuffle(arr, n) {
    // Returns a randomized array of n length

    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
  
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
  
    return result;
  
  }

export default Shuffle;