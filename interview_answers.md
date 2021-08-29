# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
It is a way for a child component to access a value in a parent component 
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions: hold the action item, and what state to transition to.
reducers: send data through and see which action matches, leading to which state will be used
store: where all state is stored. It's known as such because it holds all possible states, but only allows one to be used at a time.
3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
It allows you to return a function from a function. It changes action-creators by allowing multiple functions to be passed if necessary.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
redux seems to be the most straight forward and simpliest to use.