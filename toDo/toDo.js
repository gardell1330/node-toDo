const fs = require('fs');
const colors = require('colors');

let listadoToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listadoToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const loadDB = () => {
    try {
        listadoToDo = require('../db/data.json');
    } catch (err) {
        listadoToDo = [];
    }
}

const crear = (descripcion) => {

    loadDB();

    let tarea = {
        descripcion,
        status: false
    }

    listadoToDo.push(tarea);
    saveDB();

    return tarea;
}

const getListado = (status) => {
    loadDB();
    if (status !== undefined) {
        listadoToDo = listadoToDo.filter(item => item.status == (String(status) == "true"));
    }
    return listadoToDo;
}

const actualizar = (descripcion, status = true) => {

    loadDB();

    var tarea;

    let id = listadoToDo.findIndex(item => item.descripcion === descripcion);

    if (id >= 0) {

        if (String(status) == "true") {
            listadoToDo[id].status = true;
        } else {
            listadoToDo[id].status = false;
        }

        tarea = listadoToDo[id];

    } else {
        tarea = {
            descripcion,
            status: false
        }

        listadoToDo.push(tarea);
    }

    saveDB();

    return tarea;
}

const borrar = (descripcion) => {
    loadDB();

    let id = listadoToDo.findIndex(item => item.descripcion === descripcion);
    var borrado = false;

    if (id >= 0) {

        listadoToDo = listadoToDo.filter(item => item !== listadoToDo[id]);
        borrado = true;
        saveDB();
    }

    return borrado;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}