let workoutMain = document.querySelector('#workout-main');

let addAnotherWorkout = function() {

    

    let workoutForm = document.createElement('div');

    workoutForm.innerHTML = 
    `<div class="d-flex flex-column" id="exercise-form">
    <form class="d-flex justify-content-around flex-row p-4">
        <label for="exercise">Exercise Name</label>
        <input type="text" name="exercise" id="exercise">
        <label for="weight">Weight</label>
        <input type="text" name="weight" id="weight"> 
        <label for="sets">Sets</label>
        <input type="text" name="sets" id="sets">
        <label for="reps">Reps</label>
        <input type="text" name="reps" id="reps">
    </form>
    <div class="d-flex flex-row justify-content-around">
      <button class="btn btn-primary" id="new-exercise-button">Add Another Exercise</button>
      <button class="btn btn-danger" id="delete-exercise-button">Delete Exercise</button>
    </div>
  </div>`

    workoutMain.append(workoutForm);
}

let newWorkoutButton = document.querySelector('#new-exercise-button');

// newWorkoutButton.addEventListener('click', addAnotherWorkout);

document.body.addEventListener('click', function(event) {
    if(event.target.id == 'new-exercise-button') {
      addAnotherWorkout();
    };
});

document.body.addEventListener('click', function(event) {
    if(event.target.id == 'delete-exercise-button') {
        event.target.parentNode.parentNode.remove();
        };
});