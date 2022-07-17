import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import * as C from './styles';

const getUsersStorage = () => {
  const usersStorage = localStorage.getItem("users_db");
  if(usersStorage) {
    return JSON.parse(usersStorage);
  } else {
    return [];
  }

};

function Home() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [user] = useState(getUsersStorage());
  const [search, setSearch] = useState('');
  
  const filteredUser = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return user.filter(u => u.username.toLowerCase().includes(lowerSearch));
  }, [user, search]);

  return (
      <C.Container>
        <C.Title>Usuários cadastrados</C.Title>
        <input type="text" placeholder="Informe o nome" className="form-control pesquisa" value={search} onChange={e => setSearch(e.target.value)} />
        {user.length > 0 && <>
          <table border="1">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {filteredUser.map(u => (
                <tr key={u.email}>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>}
        <Button Text="Logout" onClick={() => [signout(), navigate("/")]} />
      </C.Container>
  );
};

export default Home;