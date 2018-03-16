function xoCount (str) {
// initially sets the counts for both x's and o's to zero
   var xcount = 0;
   var ocount = 0;
   //for loop iterates through the entire word regardless of length
   //using the length method  
   for(i=0; i<str.length; i++){
     //tells JS that a 'letter' in a string is represented by a specific index of
     //said string
   var letter = str[i];
   //if there is an x in the word lowercase or capital the xcount will be incresed
   if((letter === 'x') || (letter === 'X')){
   xcount++;
   }
   //if there is an o in the word lowercase or capital the ocount will be increased
   else if((letter ==='o') || (letter === 'O')){
   ocount++;
   }
   }
   //evaluates the expression will return a boolean value
    return xcount === ocount

}
