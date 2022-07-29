import { useState } from "react";

export default function useFilter(data) {
    console.log("useFilter");
    const [datas, setData] = useState([...data]);
    const [sortFields, setSortFields] = useState("");
    const [orderBys, setOrderBys] = useState("");
    const [inputFileds, setInputFileds] = useState(false);

    const getAge = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    const setDataTbody = ({ sortField, orderBy, inputFiled }) => {
        let massiv, dataNameFilter = null;

        if ((inputFiled.check) || (inputFiled.checked)) {
            console.log("фильтрую");
            massiv = [...data].filter(person => getAge(person.birthday) > 18);
        } else
            massiv = [...data];

        if (sortField === "name") {
            if (sortField === sortFields) {
                setSortFields(sortField);
            } else {
                if (orderBys === "desc") {
                    setOrderBys("asc");
                    dataNameFilter = massiv.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
                } else {
                    setOrderBys("desc");
                    dataNameFilter = massiv.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
                }
            }
        }

        if (sortField === "birthday") {
            if (sortField === sortFields) {
                setSortFields(sortField);
            } else {
                if (orderBys === "desc") {
                    setOrderBys("asc");
                    dataNameFilter = massiv.sort((a, b) => (a.birthday > b.birthday ? -1 : 1));
                } else {
                    setOrderBys("desc");
                    dataNameFilter = massiv.sort((a, b) => (a.birthday < b.birthday ? -1 : 1));
                }
            }
        }

        if (dataNameFilter == null) {
            setData(massiv);
            console.log("massiv -отправка массива");
        } else {
            console.log("dataNameFilter -отправка массива");
            setData(dataNameFilter);
        }
    };

    return [datas, setDataTbody];
}