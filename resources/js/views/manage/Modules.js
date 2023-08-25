import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from '../../components/Sidebar';

const ManageModules = () => {

    const [modules,setModules] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/modules", { 
            method: 'GET', 
            headers: new Headers({
                'Authorization': 'bearer' + localStorage.getItem('token'), 
                'Accept': 'application/json',
            })
        })
        .then(response => response.json())
        .then(data => {
            setModules(data);
        })
    }, [])

    return (
        <React.Fragment>
            <Sidebar />
            <div className='content'>
                <h1>Modules</h1>

                <table width="100%">
                    <thead>
                        <tr>
                            <th>Module naam</th>
                            <th>Kleur</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {modules.map((module, i) => {
                            return(
                                <tr key={i}>
                                    <td>{module.modulename}</td>
                                    <td>{module.color}</td>
                                    <td></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default ManageModules;