import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import withRouter from '../components/withRouter';
import { useNavigate } from 'react-router-dom';

const ItemsList = (props) => {
    const [module,setModule] = useState([]);
    console.log("clicked");

    console.log(module);

    const getData = async () => {
        const modules = await import('../data/Modules.js');
        const currentModule = await modules.getModuleByID(props.router.params.id);
        setModule(currentModule);
    }

    useEffect(() => {
            console.log("clicked2");
            getData();
    }, [])

    return (
        <React.Fragment>
            <Sidebar />
            <div className='content'>
                <h1>{module.modulename}</h1>
            </div>
        </React.Fragment>
    );
}

export default withRouter(ItemsList);