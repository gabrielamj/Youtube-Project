# Wizeline Academy - React Bootcamp 
# Introduction

Thank you for participating in React Bootcamp! Here you will find all the instructions to complete your Project.

The purpose of this assignment is for you to demonstrate your React skills. This is your chance to show off everything you've learned during our bootcamp and earn your diploma.

The idea is that you build and deliver an entire React application on your own. We don't want to limit you by providing some "fill-in-the-blanks" exercises, but instead ask you to build it from scratch. We hope you find this project challenging and engaging.

The goal is to create a YouTube client app.

We've created a [demo application](https://react-certification-2020.netlify.app/) .

> NOTE: Use `wizeline` as the username and `Rocks!` as the password to log in.
# Main Functionalities

 These are the main features required for the project:

- Home View
    - Search and display a list of videos using YouTube API.
- Video Details View
    - Display the selected video and its information.
    - Display a list of related videos.
    - Allow users to mark videos as favorites.
- Login
    - Implement a mocked login and store the logged-in user data in a browser, it should be persistent and globally accesible from a Context.
- Favorite Videos List
    - Display the favorite videos on a private route.
- Favorite Video Details View
    - Display the selected favorite video and its information.
    - Display the list of other favorite videos.

> NOTE: You should use the demo application just as a guide and as a trigger for your own ideas. It's not mandatory to reproduce the exact same styling nor to stick only to the main features listed above. Feel free to extend the functionalities if you want some bonus points ;)! This is YOUR project and you can be as creative as you like.
***

## General Requirements

These are the main requirements we will evaluate from your deliverables:

- Apply everything you've learned during our bootcamp:
    - Functional Components
        - React Hooks
        - Custom Hooks
    - Styled Components || CSS || SASS
    - State Management with React Context || Redux
    - React Router V5
    - Public and Private routes
    - Fetch || Axios results from YouTube API
        - Search videos by name
        - Get related videos
    - User Authentication
    - Testing Coverage (~70%)

Try to keep the use of third party libraries to the minimum, especially the ones related to the topics covered in our bootcamp, e.g., you can use a CSS framework (such as Bootstrap) if that makes you feel more comfortable and move faster, but we will still want you to develop and deliver meaningful styled-components.

***

#  Deliverables

## Before to start:

1. Read carefully the instructions for the project, please make sure that you clearly understand all the requirements.
2. Fork this repo. Please make sure that your new repo is publicly accesible.



## First Deliverable

1. Create the UI layout for your app, it should include the following elements:

    - Header: Similar to the one in our demo app. For now, the search field, theme toggle, login button, and other navigation links should be disabled, i.e., you only need to create the corresponding UI elements without the functionality.

    - Content: The content view corresponding to the section that will be renderered (in this case, the Home View).

2. Create the Home View and display the list of items from this mock file. (Folder mocks)

3. Apply css styles to your components using the styled-components approach.

### Acceptance Criteria
- The header is rendered correctly.
- A list of videos obtained from a mock file is displayed in the Home View.
- CSS styles are applied correctly using the styled-components approach.
### Bonus
- No warnings or errors are logged in the browser console.
- The UI is responsive

***

## Before to start:

1. In order to fetch videos from YouTube you need to create a new project using the Google console, and then create an API key for consuming the API.

- *Step 1*: Follow the [YouTube API v3 getting-started guide](https://developers.google.com/youtube/v3/getting-started) to get your API credentials.

> Note: You only need to complete the steps 1, 2 and 3 in the guide to get your API_KEY.

- *Step 2*: After configuring the API key, you can read the [YouTube JavaScript client getting-started documentation](https://github.com/google/google-api-javascript-client/blob/master/docs/start.md) to get examples about how to consume the API.

2. Identify the API calls that you need in order to get all the information for each section in your app.

3. Identify which hooks will allow you to fetch information from the API.

> Pro Tip: Use environment variables to store sensitive data like your API credentials.

***
## Second Deliverable

1. Fetch videos using the YouTube API and display them in the Home View

> Note: now you can remove the logic that you implemented in the first mini-challenge to display videos from the mock file.

2. Implement the logic to search videos using the YouTube API (it's time to enable the search field functionality).

3. Create the Video Details View (this section will be displayed when the user clicks on a specific video in the list).
-  Display the video player.
-  Display the information for the selected video.
-  Display a list of related videos.

> Hint: You can use conditional rendering to display or hide the Video Details View according to user interactions.

4. Apply styles to the new components you create.
5. If you're duplicating code for your API calls inside your components, try creating a custom hook to reuse this logic more easily.

### Acceptance Criteria
- Videos in the Home View are fetched from the YouTube API and displayed correctly.
- Users can search for YouTube videos using the search field on the header.
- A video can be played from the Video Details View after clicking on it.
- The video information and related videos list are displayed correctly on the Video Details View.
- When a user clicks on a related video the video player, information and related videos list are updated.
### Bonus
- Custom Hooks for API calls are implemented 
-  Testing coverage is above 60%. (Please include a screenshot of the code coverage report in your PR description).

***

## Third Deliverable

1. Create the Provider for the Global Context.
2. Consume the Global Context inside the components that require it: Remember the hook useContext? It's time to make use of it!
3. Create test cases for your Global Context and for the components that consume it.

### Acceptance Criteria
- The search term is stored and retrieved from the Global Context correctly.
- The appearance theme is stored on the Global Context and applied correctly to the App UI.
- useReducer hook is implemented correctly to manage the Global State.

### Bonus
- Testing coverage is above 70%. (Please include a screenshot of the code coverage report in your PR description).


## Final Deliverable

1. Implement React Router on your project.
2. Refactor your code to navigate across your sections.
3. Create the Login View
- It should display a form with a username and password fields.
- Implement the "Mocked Authentication" functionality (keep reading for more details).
- Update your Global Context and Provider to store and retrieve "session data".
- Implement the "Logout" functionality and update your Global State when the user signs out.
4. Implement the "Add to Favorites" button in the Video Details View: When a user clicks on this button, the selected video should be added to the favorites list using localStorage.
5. Create the Favorite Videos View
- Display the favorite videos list on a private route.
6. Create the Favorite Video Details View
- Display the selected favorite video and its information.
- Display the list of other favorite videos.
- This view should be rendered through a private route.
7. Apply styles using styled components
8. Create new test cases or modify existing ones for your components and utils if necessary.

# Authentication with Mocked Login

Authentication is not directly covered on this Bootcamp, that's why we are not asking you to integrate with a real authentication provider (such as Auth0, OAuth, Firebase, etc.).

Instead, we want you to explore how to configure your application to handle this kind of requirements, e.g., sharing the logged-in user state, define public and private routes, display content based on the authenticated user, etc.

You can use this mocked-login function from your Login View.

```js
// login.api.js

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export default async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
```
### Acceptance Criteria
 - All the sections have their own route.
 - Navigation across the sections is implemented correctly.
 - The Global State is persistent across all the sections.
 - The "Mocked Authentication" mechanism works correctly.
 - The "session data" is stored in the Global Context correctly.
 - Videos can be added to the Favorites list.
 - Videos can be removed from the Favorites list.
 - Navigation to Favorite Videos View using a private route is implemented correctly (only authenticated users should access this section).
 - Navigation to the Favorite Video Details View using a private route is implemented correctly (only authenticated users should access this section).
 - Information for the selected favorite video is displayed correctly
 - The list of other favorite videos in the Favorite Video Details View is displayed.
 - Testing coverage is above 70%. (Please include a screenshot of the code coverage report in your PR description).

### Bonus
- The Add/remove from favorites button should appear when the user passes the mouse over the video card in the list.
- Integrate with a real authentication provider (such as Auth0, OAuth or Firebase).
- A 404 section is shown when a route is not found.
- The Login View is implemented as a modal using React Portals.

Remember to always use your creativity!

