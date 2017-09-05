# Project Overview

RSS feeds project. This project was validated according to the Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

# How to run the application

- Download this repository;
- Open the **index.html** file;

# Tests in this project

1. Loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Ensures the menu element is hidden by default.
4. Ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
5. Ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. Ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
7. No test should be dependent on the results of another.
8. Implement error handling for undefined variables and out-of-bound array access.
9. When complete - all of your tests should pass.