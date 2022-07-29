import React from 'react';
import datas from '../users.json';
import TableData from '../screens/Table';
const Users = () => {
    console.log("user");
    const columns = [
        { label: "ID", variable: "id", sortable: false },
        { label: "День рождения", variable: "birthday", sortable: true },
        { label: "Имя", variable: "name", sortable: true },
        { label: "Логин", variable: "username", sortable: false },
        { label: "E-mail", variable: "email", sortable: false },
        { label: "Телефон", variable: "phone", sortable: false },
        { label: "Сайт", variable: "website", sortable: false },
    ];

    return (
        <TableData columns={columns} datas={datas} />
    );
};

export default Users;
