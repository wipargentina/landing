import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      state: '',
      city: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was send');
    event.preventDefault();
  }

  render () {
    return (
      <div className="contact">
        <div className="container">
          <h3>Completá el formulario y un asesor se pondrá en contacto</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={this.handleSubmit}>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" name="fname" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Apellido</label>
                      <input type="text" name="lname" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" name="email" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Teléfono</label>
                      <input type="text" name="phone" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Provincia</label>
                      <input type="text" name="state" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Localidad</label>
                      <input type="text" name="city" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <label>¿Cuál es tu tema de interés?</label>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck1" />
                      <label className="custom-control-label">Tractores</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck2" />
                      <label className="custom-control-label">Pulverizadores</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck3" />
                      <label className="custom-control-label">Cosechadoras</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck4" />
                      <label className="custom-control-label">Servicio Técnico</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck5" />
                      <label className="custom-control-label">Lubricantes y Adhitivos</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck6" />
                      <label className="custom-control-label">Agricultra de Precisión</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label>¿Que tipo de productor eres?</label>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                      <label className="custom-control-label">Producto</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                      <label className="custom-control-label">Contratista</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                      <label className="custom-control-label">Otro</label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <input type="submit" value="ENVIAR" className="btn btn-light" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;