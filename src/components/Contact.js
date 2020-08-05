import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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
                      <label htmlFor="">Nombre</label>
                      <input type="text" name="fname" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Apellido</label>
                      <input type="text" name="lname" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input type="text" name="email" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Teléfono</label>
                      <input type="text" name="phone" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Provincia</label>
                      <input type="text" name="state" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Localidad</label>
                      <input type="text" name="city" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <label htmlFor="">¿Cuál es tu tema de interés?</label>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck1" />
                      <label className="custom-control-label" for="dataCheck1">Tractores</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck2" />
                      <label className="custom-control-label" for="dataCheck2">Pulverizadores</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck3" />
                      <label className="custom-control-label" for="dataCheck3">Cosechadoras</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck4" />
                      <label className="custom-control-label" for="dataCheck4">Servicio Técnico</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck5" />
                      <label className="custom-control-label" for="dataCheck5">Lubricantes y Adhitivos</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck6" />
                      <label className="custom-control-label" for="dataCheck6">Agricultra de Precisión</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="">¿Que tipo de productor eres?</label>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                      <label class="custom-control-label" for="customRadio1">Producto</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                      <label class="custom-control-label" for="customRadio2">Contratista</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
                      <label class="custom-control-label" for="customRadio3">Otro</label>
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