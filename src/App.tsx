import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  /*
  https://randomuser.me/api
  https://randomuser.me/api/?results=5

  1) Fetch user profile data on first render only.

  2) Show users from fetch in a list.
     { image, first name, last name}

  3) Clicking single user show specific user profile.

  Follow-ups: Routing, Design 
*/

  const [users, setUsers] = useState<any>([]);
  const [selectedUser, setSelectedUser] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const u = await axios.get("https://randomuser.me/api/?results=5");
      setUsers(u.data.results);
    };

    fetchUsers();
  }, []);

  if (!users) {
    return null;
  }

  return (
    <>
      {selectedUser && <div>{selectedUser.email}</div>}
      {users.map((u: any) => (
        <a onClick={() => setSelectedUser(u)}>
          <img src={u.picture.large} />
          <div>{`${u.name.first} ${u.name.last}`}</div>
        </a>
      ))}
    </>
  );
}
