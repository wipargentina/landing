import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      isSending: false,
      send: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.state);
    this.setState({ isSending: true })
    
    axios.post('https://simonassi.wipargentina.com/backend/test.php', this.state)
      .then(response => {
        //console.log(response);
        if(response.status === 200) {
          this.setState({ isSending: false, send: true })
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  render () {

    if(this.state.send) {
      return <Redirect to="/gracias" />
    }

    const isSending = this.state.isSending;

    return (
      <div className="contact" id="contact">
        <div className="container">
          <h3>Completá el formulario y un asesor se pondrá en contacto contigo</h3>
          <div className="row justify-content-center">
          <div className="col-md-8">
              <p>{this.state.message}</p>
              <form onSubmit={this.handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nombre*</label>
                      <input 
                        type="text" 
                        name="fname" 
                        className="form-control form-control-lg" 
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Apellido*</label>
                      <input 
                        type="text" 
                        name="lname" 
                        className="form-control form-control-lg" 
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email*</label>
                      <input 
                        type="text" 
                        name="email" 
                        className="form-control form-control-lg" 
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Teléfono*</label>
                      <input 
                        type="text" 
                        name="phone" 
                        className="form-control form-control-lg" 
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Provincia</label>
                      <input 
                        type="text" 
                        name="state" 
                        className="form-control form-control-lg" 
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Localidad</label>
                      <input 
                        type="text" 
                        name="city" 
                        className="form-control form-control-lg" 
                        onChange={this.handleChange}
                      />
                    </div>                  
                  </div>
                  <div className="col-md-6 mb-2">
                    <label>¿Cuál es tu tema de interés?</label>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck0" name="Repuestos" onChange={this.handleChange}/>
                      <label className="custom-control-label" htmlFor="dataCheck0">Repuestos</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck1" name="tractores" onChange={this.handleChange}/>
                      <label className="custom-control-label" htmlFor="dataCheck1">Tractores</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck2" name="pulverizadores" onChange={this.handleChange}/>
                      <label className="custom-control-label" htmlFor="dataCheck2">Pulverizadores</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck3" name="cosechadoras" onChange={this.handleChange}/>
                      <label className="custom-control-label" htmlFor="dataCheck3">Cosechadoras</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck4" name="servicio-tecnico" onChange={this.handleChange}/>
                      <label className="custom-control-label" htmlFor="dataCheck4">Servicio Técnico</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck5" name="lubricante-adhitivos" onChange={this.handleChange}/>
                      <label className="custom-control-label" htmlFor="dataCheck5">Lubricantes y Adhitivos</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="dataCheck6" name="agricultura-precision" onChange={this.handleChange}/>
                      <label className="custom-control-label" htmlFor="dataCheck6">Agricultra de Precisión</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label>¿Que tipo de productor eres?</label>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio1" name="tipo" value="productor" className="custom-control-input" onChange={this.handleChange} />
                      <label className="custom-control-label" htmlFor="customRadio1">Productor</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio2" name="tipo" value="contratista" className="custom-control-input" onChange={this.handleChange} />
                      <label className="custom-control-label" htmlFor="customRadio2">Contratista</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio3" name="tipo" value="otro" className="custom-control-input" onChange={this.handleChange} />
                      <label className="custom-control-label" htmlFor="customRadio3">Otro</label>
                    </div>
                  </div>
                  <div className="col">
                  <small>* campos obligatorios</small>
                  </div>
                </div>
                <div className="button">
                  <input 
                    type="submit" 
                    value="ENVIAR" 
                    className="btn btn-lg btn-primary text-white"
                    disabled={isSending}
                  />
                  { isSending ? <Spinner /> : '' }
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