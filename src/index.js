
module.exports = function towelSort (matrix) {
  if (arguments.length>0) {
    if (matrix.length>0) {
      arr = matrix[0]
      for (i=1; i<matrix.length; i++) {
        if (i % 2 != 0) {
          arr = arr.concat(matrix[i].reverse())
        }  
        else {
          arr = arr.concat(matrix[i])
        }
      }
    return arr
    }else {
      return []
    }
  }else {
    return []
  }
}
