import { useState, useEffect } from "react";

const api = 'C:\Users\Administrador\Documents\Cursos\React\acercademi\json\data.json'

const useGetData = () => {
    const [mydata, setData] = useState([]);

    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setData(data))
    },[]);

    console.log(mydata);

    return mydata;
}

export default useGetData;