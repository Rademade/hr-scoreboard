import { useState, useEffect } from "react";
import axios from "axios";

export function useVacancyState() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({ isAuth: false, data: {} });
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // fire only once
  useEffect(() => {
    async function post(url, body) {
      const response = await axios.post(url, body);
      const { data } = response;
      if (data.status === "error") {
        throw new Error(data.message);
      }
      return data;
    }

    async function fetchData() {
      setIsLoading(true);
      try {
        const authData = await post("/hr/person/auth", {
          login: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        });
        setUser({ isAuth: true, data: authData.object });

        const vacancyData = await post("/hr/vacancy/get", {
          page: {
            number: 0,
            count: 15
          }
        });
        setItems(vacancyData.objects);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return [{ isLoading, user, items, error }];
}
