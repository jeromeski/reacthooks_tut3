import React, { useState } from 'react';

const initialState = {
  username: '',
  email: '',
  password: '',
}

const Register = () => {
  const[form, setForm] = useState(initialState)
  const[user, setUser] = useState(null)

  const handleOnChange = evt => {
    setForm({
      ...form, [evt.target.name] : evt.target.value 
    })
    
  }

  const handleOnSubmit = evt => {
    evt.preventDefault();
    setUser(form)
    setForm(initialState)
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleOnSubmit}>
        <label>username</label>
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={handleOnChange}
          value={form.username}

        />
        <label>email</label>
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleOnChange}
          value={form.email}
  
        />
        <label>password</label>
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleOnChange}
          value={form.password}

        />
        <button>submit</button>
      </form>
      {user && JSON.stringify(user,null, 2)}
    </div>
  );
};

export default Register;

/*
When it comes to using use state and function components we have more flexibility than we did in the

past with the state object and class components.

We can create or use individual pieces of state or instead we can create an object for a state similar

to how we had it for class components.

Since we're all coming from class components and writing our state similar to this you might be tempted

to put all of your state in a single object which as we saw is certainly possible but it comes with

some caveats as we saw for handle change function within register when we were updating an individual

piece of state.

We also had to spread in our entire state object.

This is because the behavior of the set of functions that we get back from you state is different than

the set state method that we previously had in class components.

This is because when we update a state variable with Eustache replacing its value.

This is unlike this dataset state and a class component which merges the field or fields that are being

updated into the state object.

So as a result when we use objects for state with use date we have to perform the merge manually by

spreading in the entire object.

It's worth noting however if we head back to our afunction file our original function component that

when we were keeping track of mouse position we had an initial state of an object.

However we didn't have to spread in the initial object when we were calling set mouse position because

both of the properties on the object were being updated at the same time.

So if we head down to where we call set mouse position we see that whenever we're setting state or placing

the entire object.

So there's no need for merging.

So now heading back to our log in component we saw that for the onchange for each of our inputs username

and password inputs we didn't have to create a generic function.

We just had to write an inline function and use the setter directly.

So you might have found handling the change event in this way to be more convenient than setting up

a general function which we attach to the onchange of every input which was the common pattern previously

in react.

And you might have also found when we create and separate our state in individual pieces like this as

individual variables.

Doing things like making a controlled component a lot easier the user name input needs the value user

name the password input needs de-value password and so on.

And when it came to with a controlled component clearing out our form we just had to take both of the

centers set username and set password and provide the initial value for state in order to clear everything

out.

And we found out for our register for them that this was just as easy.

In fact maybe a bit easier when we put our initial form state in its own variable and allowed first

use state to access it and then to clear out our controlled form set state.

With that initial form state to remove everything.

Just imagine that for our log in form or for any form that we are creating with multiple state values

if we wanted to clear it out we would have to call each individual set or function in order to do so.

And that's compared to one said state call if we're managing all of our foreign values within a single

object.

So generally I would say for managing unrelated pieces of state you can use multiple state values and

for related pieces of state like this you can use multiple state values only when there is a couple

of things you have to manage or log in form was manageable when we just had two inputs for username

and password.

But if we were to have more it might make more sense to group all of our forms state within a single

object and create a general handle change function connected to the onchange of each input where when

we said state we just need to make sure that we're merging all of the values and state when we're performing

an update for any one of the input values.

Personally I would recommend trying out both patterns see what works best for you.

What seems to suit you best in your applications and you might even find a pattern that splits the difference

between the two where you use objects in some cases an individual state values and other situations.

At any rate though it's good to know that we have both of these options available to us.

Both of these patterns for making stateful components with the help of the state hook.
*/ 