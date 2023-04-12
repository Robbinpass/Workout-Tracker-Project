const newWorkoutFormHandler = async (event) => {
  event.preventDefault();

  const workoutName = document.querySelector('#workout-name').value.trim();

  const upperBodyPushName = document.querySelector('#ubpushName').value.trim();
  const upperBodyPushWeight = document.querySelector('#ubpushWeight').value.trim();
  const upperBodyPushSets = document.querySelector('#ubpushSets').value.trim();
  const upperBodyPushReps = document.querySelector('#ubpushReps').value.trim();

  const upperBodyPullName = document.querySelector('#ubpullName').value.trim();
  const upperBodyPullWeight = document.querySelector('#ubpullWeight').value.trim();
  const upperBodyPullSets = document.querySelector('#ubpullSets').value.trim();
  const upperBodyPullReps = document.querySelector('#ubpullReps').value.trim();

  const lowerBodyName = document.querySelector('#lbName').value.trim();
  const lowerBodyWeight = document.querySelector('#lbWeight').value.trim();
  const lowerBodySets = document.querySelector('#lbSets').value.trim();
  const lowerBodyReps = document.querySelector('#lbReps').value.trim();


  if (workoutName && upperBodyPushName && upperBodyPushWeight && upperBodyPullSets && upperBodyPullReps && upperBodyPullName && upperBodyPullWeight && upperBodyPullSets && upperBodyPullReps && lowerBodyName && lowerBodyWeight && lowerBodySets && lowerBodyReps) {
      const response = await fetch('/exercise/create', {
          method: 'POST',
          body: JSON.stringify({workoutName, upperBodyPushName, upperBodyPushWeight, upperBodyPushSets, upperBodyPushReps, upperBodyPullName, upperBodyPullWeight, upperBodyPullSets, upperBodyPullReps, lowerBodyName, lowerBodyWeight, lowerBodySets, lowerBodyReps }),
          headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);

      if (response.ok) {
          //pretty sure this is the route we'll be using, but double check
          document.location.replace('/profile');
      } else {
          console.log(response.statusText);
      }
  }
};

document.querySelector('#workout-form').addEventListener('click', newWorkoutFormHandler);