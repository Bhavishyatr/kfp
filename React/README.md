

## Library Usage & Styling Approach

This project primarily uses vanilla React for building UI components and [React Router](https://reactrouter.com/) for client-side routing.

To speed up development, to time box and avoid writing custom CSS for every component, I leveraged utility CSS classes from [Tailwind CSS](https://tailwindcss.com/). .

- **Tailwind Utility Classes:** Used for quick layout, spacing, color, and typography adjustments directly in JSX.
- **No Heavy UI Libraries:** The goal was to keep the React codebase as vanilla as possible, avoiding large component libraries.
- **React Router:** Handles all routing logic in a declarative in a React way.


## If I Had More Time

If I had more time to work on this project, I would have added or improved the following:

- **Error Boundaries:** Implement React error boundaries to gracefully handle unexpected errors in the UI.
- **Better Reuse of Hooks:** Refactor and generalize custom hooks for improved code reuse and maintainability.
- **More Descriptive Error Messages:** Provide users with clearer, more actionable error messages throughout the app.
- **Retry Logic:** Add retry mechanisms for failed network requests to improve resilience.
- **Better Error Pages:** Create custom error pages for 404, 500, and other error states for a more polished user experience.
 - **Add Unit Tests:** Setup and expand test coverage, especially for edge cases and error handling, to ensure reliability.
- **Automated Deployments:** Set up a GitHub Action workflow to automate builds and deployments.
- **GitHub Pages Deployment:** Configure deployment to GitHub Pages for easy project hosting and sharing.
--
