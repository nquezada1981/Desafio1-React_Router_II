import "./Contact.css"

const Contact = () => {
    return (
        <div className="container-fluid w-75 pt-5 text-center">
            <h2>Cuentanos, ¿en que podemos ayudar?</h2>
            <div className="mb-3 pt-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Correo:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} />
            </div>
            <div className="m-3 text-center">
                <button type="button" className="btn btn-danger">enviar</button>
            </div>
        </div>
    )
}

export default Contact