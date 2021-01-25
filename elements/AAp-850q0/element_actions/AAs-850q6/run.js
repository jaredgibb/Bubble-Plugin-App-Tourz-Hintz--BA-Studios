function(instance, properties, context) {

instance.data.hints.push({ 
    hint: properties.hint_text, 
    element: document.querySelector('#'+ properties.element_id),
    hintPosition: properties.position
})
    
    


}