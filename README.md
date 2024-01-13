# FLW2: U2L6, Code Solo
This program should render a random number between 1 and 6 when the button is clicked. 

Follow the steps below to make it work!

Take a look at the starter code:
  - How many components are there?
  - What do you think each one does?
  - How many instances of the and components are called in the component?

---

1. Go to the `handleClick` function inside of the <App /> component. This function is what will generate a random number between 1 and 6 (that's what the variable randomNumber is for!).
   
    - Update the code inside the function so that the value of the state variable roll will be the same as whatever random number is generated.
    - Hint: You will have to use the setter function!

---

2. Now go to the `<Button />` component. Replace "null" with a prop. This will allow us to pass a function to the button tag so that the number will change when the button is clicked.
   
    - Rembember to give the prop a name!

---

3. Finally, go to the component. Pass the `handleClick()` to the instance of the `<Button />` component.
   
    - Now when the user clicks the button, a random number between 1 and 6 should appear above it.