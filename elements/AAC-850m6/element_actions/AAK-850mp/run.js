function(instance, properties, context) {


	

    var steps = instance.data.steps
    var hints = instance.data.hints
  	var stepsIveSeen = [0]
    var datashowProgress = properties.show_progress;
    var interactionAllowed = properties.disable_interaction;
    var showSteps = properties.show_steps;
    
    introJs().setOptions({
  steps: steps,
  showProgress: datashowProgress,
  disableInteraction: interactionAllowed,
  showStepNumbers:showSteps
}).start(function(){
        console.log(this._currentStep)
}).onbeforechange(function(){
    console.log(this._currentStep)
	instance.publishState("currentstep", this._currentStep + 1)
    if (!stepsIveSeen.includes(this._currentStep + 1)){
        stepsIveSeen.push(this._currentStep + 1)
         if (instance.data.whatstep != steps.length){
            instance.data.whatstep = this._currentStep + 1
    	}
    }

}).onbeforeexit(function() {

///i need to use the response from a sweetalert2.js confirm dialogue box instead of this standard confirm dialog box. either true or false. 

        var alertText;

    if (instance.data.whatstep < steps.length){
        alertText = 'Are you sure you want to leave the tour early'
    } else {
        alertText = properties.alert_text
    }
    
    var r = confirm (alertText)
    if (r == true){
        console.log('exit')
        
        console.log()
     
        if ( instance.data.whatstep < steps.length ){
            console.log('leaving early')
            instance.triggerEvent("user_left_tour")

        } else {
            console.log('not leaving early')
            instance.triggerEvent("user_finished_tour")
        }
        
        return r
        
    } else {
        console.log('dont exit')
        return r
    }

});
    






}