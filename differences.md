# Comparison with instructor's solution

## Styling differences

General:  Has media queries and hover effects. Note that classes can be stored in variables and then used with curly braces afterwards.

ProjectsSidebar: <aside> was used as a wrapper component. <ul> was used to list out the projects.

App: <main> wraps the entire app instead of just the panel to the right.

Input: Input component added and pass in a prop that outputs what kind of input component should be used. Cuts down on the repetition as well.

Button: Button component added and reused.

Background colour changed for the active project.

## Functionality differences

Object managed as state instead of 3 different useStates. The keys are currentAction, selectedProjectId, projects.

Conditional rendering can be used with variables instead (Save JSX code as variable and use conditionals to set variable, then use curly braces to output the variable itself, instead of using long ternary statements)

Due to Input being another component, refs need to be forwarded.

Validation is added to the NewProject component. Invalid if any fields are empty. Error modal is shown if any of those inputs are invalid. Portals are used to show the modal component (dialog element) in the div with the id of modal-root. Forward ref is also used. useImperativeHandle is also used to pass an 'open' method that is then used by other components to show the modal.

Date string should be formatted and outputted.