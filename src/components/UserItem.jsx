import React, { useContext } from 'react'
import { UsersContext } from '../App'
import { deleteUser } from '../services/users.service';

export const UserItem = ({ user }) => {
    const { loadUsers } = useContext(UsersContext);

    const removeUser = async () => {
        const confirm = window.confirm('¿Esta seguro que desea eliminar este usuario?');
        if (confirm) {
            await deleteUser(user.id);
            loadUsers()
        }
    };

    return (
        <div className='p-2 bg-primary rounded-3 my-2 text-white d-flex justify-content-between'>
            <div className='row row-cols-2 row-cols-lg-3 g-2'>
                <div className='col'><b>Nombres:</b> {user.firstname}</div>
                <div className='col'><b>Apellidos:</b> {user.lastname}</div>
                <div className='col'><b>Telefono:</b> {user.phone}</div>
                <div className='col'><b>Dirección:</b> {user.address}</div>
                <div className='col'><b>Nacimiento:</b> {user.birthday}</div>
            </div>
            <div className='my-auto ms-auto'><button className='btn btn-danger' onClick={() => removeUser()}>X</button></div>
        </div>
    )
}
