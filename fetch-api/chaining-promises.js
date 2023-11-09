// Define the base URL for GitHub user API requests.
const URL = "https://api.github.com/users/";

// Define a function to load JSON data from a given URL.
const loadJson = (url) => {
  // Make a fetch request to the given URL.
  return fetch(url)
    // Wait for the response to be received.
    .then(response => response.json())
};

// Define a function to load a GitHub user's data from the API.
const loadGithubUser = (name) => {
  // Return the result of loading JSON data from the following URL:
  // `https://api.github.com/users/<name>`.
  return loadJson(`${URL}${name}`);
};

// Define a function to show a GitHub user's avatar image.
const showAvatar = (githubUser) => {
  // Return a promise that resolves after 3 seconds.
  // The resolved value will be the given GitHub user object.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(githubUser);
    }, 3000);
  });
};

// Load JSON data for the user with the login name `ehsanghaffar`.
loadJson('https://api.github.com/users/ehsanghaffar')
  // Wait for the response to be received and parsed.
  .then(user => {
    // Load JSON data for the user's avatar image.
    return loadGithubUser(user.login);
  })
  // Wait for the avatar image data to be received and parsed.
  .then(data => {
    // Show the avatar image.
    return showAvatar(data);
  })
  // Wait for the avatar image to be shown.
  .then(githubUser => {
    // Log the user's name.
    console.log(githubUser.name);
  });


/**
 * Better Approach
 */

// Define an async function to load JSON data from a given URL.
const loadJson = async (url) => {
  // Make an async fetch request to the given URL.
  const response = await fetch(url);

  // If the response is not successful, throw an error.
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Return the parsed JSON data.
  return response.json();
};

// Define an async function to load a GitHub user's data from the API.
const loadGithubUser = async (name) => {
  // Return the result of loading JSON data from the following URL:
  // `https://api.github.com/users/<name>`.
  const url = `${URL}${name}`;
  const userData = await loadJson(url);
  return userData;
};

// Define a function to show a GitHub user's avatar image.
const showAvatar = (githubUser) => {
  // Return a promise that resolves after 3 seconds.
  // The resolved value will be the given GitHub user object.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(githubUser);
    }, 3000);
  });
};

// Start an async function to load JSON data for the user with the login name `ehsanghaffar`.
(async () => {
  // Try to load the JSON data.
  try {
    const response = await loadJson("https://api.github.com/users/ehsanghaffar");

    // Load the user's avatar image data.
    const user = await loadGithubUser(response.login);

    // Show the avatar image.
    const githubUser = await showAvatar(user);

    // Log the user's name.
    console.log(githubUser.name);
  } catch (error) {
    // Log the error message.
    console.error(`Error: ${error.message}`);
  }
})();