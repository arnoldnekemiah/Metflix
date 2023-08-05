### This project follows instructions of [JavaScript capstone project - Your API-based webapp](https://github.com/microverseinc/curriculum-javascript/blob/main/group-capstone/js_capstone.md) lesson.

**In the `dev` branch, we have the finalized version of the Metflix project ready for deployment.**

### General requirements

- there are no linter errors;
- correct Gitflow is used (`feature` -> `dev` -> `main`);
- the work is documented in a professional way regarding:
  - branches naming;
  - PR description;
  - commit messages;
  - node_modules (in `.gitignore`);
  - README.md file;
- we tried to follow the list of best practices for JavaScript, HTML and CSS as much as possible.

### Project requirements:

We created a new app using the external Involvement API and saved the returned ID of the app.
Currently, the ID we are using is: ###


**Required features:**

- "Search" button performs a search using external TVmaze API and retrieves the data about matching items (movies);
- `<main>` section of the page is created dynamically using the data retrieved from the TVmaze API;
- each item in the `<main>` contains a Like button (a heart icon):
  - a user can like any item in the `<main>`. This interaction is enabled using external Involvement API;
  - the number of likes is preserved using Involvement API and updated when a new like is given;
- "Comment" button under each item opens the pop-up window which displays:
  - the details of the selected item (using data from TVmaze API);
  - the number of comments left by users for the particular movie (e.g. "Comments(0)", "Comments(4)");
  - the list of comments left by users for the particular movie;
  - the input field where a user can submit a new comment;

**Additional features:**
- basic input validation is performed and error messages are thrown when the input is invalid;
- there are additional links in the navbar that list the movies depending on the genre (but not all of them as TVmaze API doesn't return more than 10 items per query);

