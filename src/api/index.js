import axios from "axios";

export const authRequest = creds =>
  axios.post(
    "/auth",
    {
      username: creds.username,
      password: creds.password
    },
    { withCredentials: true }
  );
