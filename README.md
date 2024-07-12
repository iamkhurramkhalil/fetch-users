# Random User Generator React App

This project is a React application that fetches user data from the [Random User Generator API](https://randomuser.me/) and displays it with pagination. It allows users to navigate through pages of users and view basic information such as name, gender, email, and nationality.

## Features

- Fetch users from Random User Generator API.
- Display users with their thumbnails and basic information.
- Implement pagination to navigate through user pages.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS (for styling)

## Setup Instructions

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**

git clone <repository-url>
cd fetch-data


2. **Install dependencies:**

npm install

3. **Start the development server:**

npm start

4. **Open your browser:**

Visit `http://localhost:3000` to view the app.

## How to Use

- Upon loading, the app will fetch and display a list of users.
- Use the "Previous" and "Next" buttons at the bottom to navigate through different pages of users.
- Each user card displays the user's thumbnail image, name, gender, email, and nationality.

## Folder Structure
random-user-react-app/
├── public/
├── src/
│ ├── components/
│ │ ├── UserList.js
│ │ └── useRandomUsers.js
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── ...

## Additional Notes

- This project uses a custom React hook `useRandomUsers` (`src/components/useRandomUsers.js`) to manage data fetching and pagination.
- Styling is done using CSS, with basic styling provided in `UserList.css`.
- Make sure you have an active internet connection to fetch data from the Random User Generator API.

## Credits

- This project utilizes the Random User Generator API for fetching user data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.