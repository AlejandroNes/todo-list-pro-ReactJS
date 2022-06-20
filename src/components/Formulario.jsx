import React, {useState} from 'react'

export const Formulario = ({task, setTask}) => {

    const [newTask, setnewTask] = useState({tarea:"", descripcion: "", fecha:""});
    const [sw, setSw] = useState(false)
    //funciones
    const handleChange = (e) => {
        setnewTask({...newTask, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       if(!Object.values(newTask).every( (item) => item !== '' )){
            setSw(true)
            setTimeout( () => {
                setSw(false)
            },1500 )
            return
       }

       const newObj = { id:Date.now(), tarea:newTask.tarea, descripcion: newTask.descripcion, fecha: newTask.fecha, estado: false }

       //add us to the main array
       setTask([...task, newObj]);
       setnewTask({tarea:"", descripcion: "", fecha:""})

    }

    return (
        <div className='shadow p-2 bg-white'>
            <form className='my-2' onSubmit={handleSubmit}>
                <h5 className='my-1 text-center'>AGREGAR TAREA</h5>
                <input
                    className='form-control rounded-0 mt-2'
                    type="text"
                    placeholder='ingrese tarea'
                    name='tarea'
                    value={newTask.tarea}
                    onChange={ handleChange }
                />
                <input
                    className='form-control rounded-0 mt-2'
                    type="date"
                    name='fecha'
                    value={newTask.fecha}
                    onChange={ handleChange }
                />
                <textarea 
                className='form-control  rounded-0 mt-2'
                name="descripcion"
                value={newTask.descripcion}
                onChange={ handleChange }
                />
                <button className='btn btn-primary w-100 rounded-0 mt-2'>AGREGAR</button>
                {sw ? (
                    <div className='text-danger border border-danger mt-2 py-2'>Error..! Complete los campos</div>
                ) : null}
            </form>
          
            <hr className='my-4' />
            {/* ESTADISTICAS DE LA APP */}
            <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Total Tareas</div>
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Tareas Completas</div>
                    </div>
                    <span className="badge bg-success rounded-pill">5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Tareas Incompletas</div>
                    </div>
                    <span className="badge bg-danger rounded-pill">9</span>
                </li>
            </ol>
        </div>
    )
}
