import React, { useState } from 'react';

const TableFilter = (proops) => {
    console.log("TableFilter");
    const [checked, setChecked] = useState(false);

    function handleChange() {
        let check = !checked;
        setChecked(!checked); // инвертируем стейт
        proops.handleSorting({ inputFiled: { check } });
    }
    return (
        <form>
            <input type="button" value="сортирка по ФИО" onClick={() => proops.handleSorting({ sortField: 'name', inputFiled: { checked } })} />
            <input type="button" value="сортирка дате" onClick={() => proops.handleSorting({ sortField: 'birthday', inputFiled: { checked } })} />
            <label>
                Cтарше 18 лет:
                <input type="checkbox" name="yo18" checked={checked} onChange={handleChange} />
            </label>
        </form>
    );
};

export default TableFilter;