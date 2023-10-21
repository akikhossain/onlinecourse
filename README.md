# COURSE REGISTRATION PROJECT

Welcome to the Course Registration project! This application allows users to select courses, view their selected courses in a sidebar, calculate the total price, and ensure they do not exceed a credit hour limit or select the same course multiple times.

## FEATURES

1. **Course Selection:** Users can easily browse and select courses from a list of available options. The selected courses are displayed in a convenient sidebar for easy reference.

2. **Total Price Calculation:** The system calculates and displays the total price of the selected courses. Users can quickly assess the cost of their chosen courses.

3. **Credit Hour Limit:** To promote a balanced course load, the application enforces a maximum credit hour limit of 20. If a user exceeds this limit, a notification or warning will be displayed, ensuring a manageable course load.

4. **Duplicate Course Check:** The project prevents users from selecting the same course more than once. If a duplicate selection is made, an error message or notification will promptly alert the user.

5. **Interactive User Experience:** Our user interface is designed to provide an interactive and user-friendly experience. Real-time updates of selected courses, total price, and credit hours ensure a seamless and engaging course registration process.

## STATE MANAGEMENT IN THE COURSE REGISTRATION PROJECT

In the Course Registration project, state management plays a crucial role in ensuring a seamless user experience. This README section provides an overview of how state is managed in the project, based on the provided code.

## STATE VARIABLES

The project uses the useState hook from React to manage several state variables. These variables are declared at the beginning of the App component and are used to keep track of various aspects of the user's course selection:

1. **coursenames:** An array that keeps track of the selected courses. This array is initialized as an empty array and is updated when the user selects a course.

2. **totalPrice:** A variable that stores the total cost of the selected courses. It starts at 0 and is updated whenever a new course is selected.

3. **remaining:** This variable stores the remaining credit hours the user can select. It is initially set to 0 and is updated as the user adds or removes courses.

4. **creditHour:** A variable that tracks the total credit hours selected by the user. It is also initially set to 0 and is updated with each course selection.

## COURSE SELECTION

The handleCourseName function is responsible for managing course selection and updating the state variables accordingly. Here's a breakdown of how it works:

1. It checks if the selected course already exists in the coursenames array by comparing the course's title. If it exists, it displays an error message to the user using the react-toastify library.

2. If the course is not a duplicate, the function calculates the new totalPrice and creditHour by iterating through the coursenames array and summing up the prices and credit hours of all selected courses.

3. It calculates the remaining credit hours by subtracting the creditHour from 20 (the maximum allowed credit hours).

4. If the total credit hours exceed the limit (20), it displays an error message using react-toastify.

5. If the credit hours are within the limit, the state variables (remaining, totalPrice, creditHour, and coursenames) are updated to reflect the new course selection.

## COMPONENTS

The project utilizes different components to manage different aspects of the user interface and state. The Courses and Credithour components are responsible for displaying the course options and showing the selected courses, total price, and credit hours, respectively.

## INTERACTION

The user interacts with the application by selecting and deselecting courses in the Courses component. The state is updated in real-time, and the user is provided with feedback through error messages if they attempt to select duplicate courses or exceed the credit hour limit.
