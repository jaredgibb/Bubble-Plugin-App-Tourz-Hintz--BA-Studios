function(instance, properties, context) {


	var continues;
  var steps = instance.data.steps
  var hints = instance.data.hints
  var stepsIveSeen = [0]
  var datashowProgress = properties.show_progress;
  var interactionAllowed = properties.disable_interaction;
  var showSteps = properties.show_steps;

const continueTheTour = (continues) => {
    
    
    
    setTimeout(() => {
   if (continues == true){
        //let step = instance.data.whatstep -1
        introJs().setOptions({
    steps: steps,
    showProgress: datashowProgress,
    disableInteraction: interactionAllowed,
    showStepNumbers: showSteps
  }).goToStep(0).start(function() {
    console.log(this._currentStep)
  });
    }
    
}, 200);
}


  introJs().setOptions({
    steps: steps,
    showProgress: datashowProgress,
    disableInteraction: interactionAllowed,
    showStepNumbers: showSteps
  }).start(function() {
    console.log(this._currentStep)
  }).onbeforechange(function() {
    console.log(this._currentStep)
    instance.publishState("currentstep", this._currentStep + 1)
    if (!stepsIveSeen.includes(this._currentStep + 1)) {
      stepsIveSeen.push(this._currentStep + 1)
      if (instance.data.whatstep != steps.length) {
        instance.data.whatstep = this._currentStep + 1
      }
    }

  }).onbeforeexit(function() {

/*
    let response = context.async(async callback => {
      try {
        const response = await Swal.fire({
          title: 'Enter your IP address',
          allowOutsideClick: false,
          showCancelButton: true
        })
        
        let result = response.isConfirmed;

        callback(null, result);
      } catch (err) {
          console.log(err)
        callback(err);
      }
    })



 //     continueTheTour(response)
      return response
    */
const request = async () => {
    const response = await Swal.fire({
        title: 'yep',
        showCancelButton: true
    })
    let result = await response.isConfirmed
    console.log(result)
    continueTheTour(result)
    return result
}
 

	return request()



  });
    





}
