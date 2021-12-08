import { useEffect, useState } from "react";

const higherOrderComponent = (Component) => {
  const NewComponent = (props) => {
    const [user, setUser] = useState({});
    useEffect(() => {
      fetchUser();
    }, []);
    const fetchUser = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await resp.json();
      console.log(user);
      setUser(data);
    };
    return <Component {...props} users={user} />;
  };
  return NewComponent;
};
export default higherOrderComponent;
