import { useState, useEffect } from "react";

const useFetch = () => {
  const [users, setUsers] = useState([]); // State to store the list of users
  const [loading, setLoading] = useState(true); // Loading state indicator
  const [error, setError] = useState(null); // State to hold any error that occurs
  const [page, setPage] = useState(1); // State to track current page number
  const resultsPerPage = 10; // Number of results per page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        // Fetch users from the API based on current page and results per page
        const response = await fetch(
          `https://randomuser.me/api/?page=${page}&results=${resultsPerPage}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch"); // Throw an error if fetching fails
        }

        const data = await response.json(); // Parse response JSON data
        setUsers(data.results); // Update users state with fetched data
      } catch (error) {
        setError(error); // Set error state if there's an error during fetching
      } finally {
        setLoading(false); // Set loading to false when fetching completes (whether success or failure)
      }
    };

    fetchData(); // Call fetchUsers function whenever page changes (dependency: page)
  }, [page]); // useEffect dependency on 'page'

  // Return necessary states and functions for component to use
  return { users, loading, error, page, setPage };
};

export default useFetch;
