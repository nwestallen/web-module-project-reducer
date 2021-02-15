# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The the function stored in the onClick property of the 1 button is called
* This returns dispatch(addOne())
* dispatch(addOne()) = dispatch({ type: "ADD_ONE" }) 
* dispatch references the reducer function in './reducers/index'
* reducer(state, action) receives state as state and { type: "ADD_ONE"} as action
* switch within reducer checks action.type and returns the matching case
* action.type = "ADD_ONE", prompting reducer to return {...state, total: state.total + 1}
* state has now been updated with the only change being that state's total property has had 1 added to it's value
...

* TotalDisplay shows the total plus 1.
