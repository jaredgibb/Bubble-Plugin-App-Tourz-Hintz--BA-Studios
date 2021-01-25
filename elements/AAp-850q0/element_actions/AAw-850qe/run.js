function(instance, properties, context) {

    var hints = instance.data.hints;    
   
    setTimeout(function(){ 
        
         introJs().setOptions({
    hints: hints
}).showHints();
    
    }, 150)


}