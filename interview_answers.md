# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve? - it allows your state to communicate between multiple components. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? - Actions are your modularized changes that feed into your reducer. Reducers are compact functional logic for handling your data/app. Store is a warehouse for your APP state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`? - Thunk allows you to have multiple dispatches in one action, this allows us the option to have one large action instead of multiple small ones.

4. What is your favorite state management system you've learned and this sprint? Please explain why! - Redux, it has all the functionality I would want in one package. 