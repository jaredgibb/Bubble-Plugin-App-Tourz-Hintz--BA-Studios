function(instance, properties, context) {
   
    if (instance.data.steps == null){
        instance.data.steps = []
    }

    instance.data.steps.push({
    	title: properties.title,
    	element: document.querySelector('#'+properties.element),
        intro: properties.intro,
  })
}