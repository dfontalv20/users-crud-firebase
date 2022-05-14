import { createContext, useEffect, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { getUsers } from "./services/users.service";

export const UsersContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false)

  const loadUsers = async () => {
    setLoadingUsers(true);
    const users = await getUsers();
    setLoadingUsers(false);
    setUsers(users);
  }

  useEffect(() => { loadUsers() }, [])


  return (
    <UsersContext.Provider value={{ users, loadUsers, loadingUsers }}>
      <div className="container">
        <h1 className="text-center my-4">GESTION DE USUARIOS</h1>
        <div className="row">
          <div className="col-md-3">
            <UserForm />
          </div>
          <div className="col-md-9">
            <UsersList />
          </div>

        </div>

      </div>
    </UsersContext.Provider>
  );
}

export default App;
