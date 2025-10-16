/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    let number = []
    
    for(i=0;i<sentences.length;i++){
      
        
     
           
             number.push(sentences[i].split(' ').length) 
           
        
    }
    return Math.max(...number)

};