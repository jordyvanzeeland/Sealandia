export const getModuleByID = (id) => {
    return fetch("http://localhost:8000/api/modules/" + id, { 
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'bearer' + localStorage.getItem('token'), 
            'Accept': 'application/json',
        })
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
}