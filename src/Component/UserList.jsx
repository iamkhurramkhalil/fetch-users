import React from "react";
import useFetch from "../Hooks/index"; // Import custom hook for fetching users
import "../App.css";

const UserList = () => {
  const { users, loading, error, page, setPage } = useFetch(); // Use custom hook to get users data

  const Loading = () => (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
  // Render loading message if data is loading
  if (loading) return <p>{Loading()}</p>;

  // Render error message if there's an error fetching data
  if (error) return <p>Error: {error.message}</p>;

  // Function to handle next page button click
  const nextPage = () => setPage(page + 1);

  // Function to handle previous page button click
  const prevPage = () => setPage(page - 1);

  return (
    <div className="user-list-container">
      <h1>User List</h1>

      {loading && <p>{Loading()}</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="user-cards">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.large} alt="User Thumbnail" />
            <div className="user-details">
              <p>
                <strong>Name:</strong> {`${user.name.first} ${user.name.last}`}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Nationality:</strong> {user.nat}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default UserList;
