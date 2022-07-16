# fitness-api

[User Profile]
  - ID
  - Name
  - Email
  - Password?
  
[Workout]
  - ID
  - Name
  - User_ID
  - Planning_ID
 
 [Workout_Line]
  - ID
  - Workout_ID
  - Excercise_ID
  - Order
  
[Excercise]
  - ID
  - Name
  - Sets
  - Reps (Seperated by , or ; to compile in only 1 field?)
  - Movement_ID
  
[Movement]
  - ID
  - Name
  - Muscle_IDs (Seperated by , or ; to compile in 1 field?)
  - Intensity

[Muscle]
  - ID
  - Name

[Planning]
  - ID
  - Preset (Every 2nd day, every 3d day, or using weekday booleans)
  - Mon
  - Tue
  - Wed
  - Thu
  - Fri
  - Sat
  - Sun
