import { instance } from "@/api";
import { useState, useEffect } from "react";

const MainBody = () => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("usertoken");
  console.log(user);

  useEffect(() => {
    instance
      .get("/auths/get-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>MainBody</div>;
};

export default MainBody;