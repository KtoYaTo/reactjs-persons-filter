import React, { useState } from 'react';
import TableFilter from './TableFilter';
import useFilter from './useFilter';

const Table = (proops) => {
    console.log("table");
    const [datas, handleSorting] = useFilter(proops.datas);
    // const [datas, setData] = useState([...proops.datas]);
    // const setDataTbody = (e) => {
    //     console.log("start");
    //     console.log(e);
    //     console.log("end");
    //     setData(e);
    // }
    //setData(...lines);

    // const [orderBy, setOrderBy] = useState("");
    // const [inputFiled, setInputFiled] = useState(false);

    // const [inputFiled, setInputFiled] = useState(false);
    // const dataNameFilterDESC = [...data].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
    // const dataNameFilterASC = [...data].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
    // дату рождения перевести в число const data1 = [...data].sort((a, b) => (a.birthday.toLowerCase() < b.birthday.toLowerCase() ? -1 : 1));

    // const [sortcolumn, setSortcolumn] = useState(false);

    // const sortColumn = (variable) => {
    //     setSortcolumn(variable);
    //     console.log(variable);
    // }
    return (
        <>
            <div>
                <TableFilter datas={datas} handleSorting={handleSorting} />
            </div>
            <table>
                <thead>
                    <tr>
                        {proops.columns.map((column) =>
                            <th key={column.variable.toString()}>{column.label.toString()}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {datas.map((line) =>
                        <tr key={line.id.toString()}>
                            <td>{line.id}</td>
                            <td>{line.birthday}</td>
                            <td>{line.name}</td>
                            <td>{line.username}</td>
                            <td>{line.email}</td>
                            <td>{line.phone}</td>
                            <td>{line.website}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Table;