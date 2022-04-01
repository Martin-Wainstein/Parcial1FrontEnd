import React, { Component } from "react";
import UltimaEleccion from "../ultEleccion/ultEleccion";
import data from "../../DATA/data.json"
import Opciones from "../opciones/opciones";

const component = {
  "textAlign": "center",
  "margin": "7rem 1rem 0rem",

  "color": "white",
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "fontFamily": "Fredericka the Great"
}

const itemsLista = {
  "color": "white",
  "marginTop": "5px"
}

class Page extends Component {
    constructor(props){
        super(props);
        this.state = { parteCount: 0, selectedOptions: [],  ultimaSeleccion: ''}
        this.handlerButtonOption = this.handlerButtonOption.bind(this)
    }

    componentDidUpdate(prevProps, prevState){
      if (prevState.parteCount !== this.state.parteCount) {
        this.setState({selectedOptions: [...this.state.selectedOptions, this.state.ultimaSeleccion]})
      }
    }

    handlerButtonOption = (e) => {
      const id = e.target.id;
      if (this.state.parteCount >= data.length-2){
        alert("Despertate que hay que ir a laburar! jejeje")
        window.location.reload();
      }
      else if(id === "A" && this.state.ultimaSeleccion !== "A"){
        this.setState({
          parteCount: this.state.parteCount + 1, ultimaSeleccion: "A"
        })
      }
      else if (id === "B" && this.state.ultimaSeleccion !== "A"){
        this.setState({
          parteCount: this.state.parteCount + 2, ultimaSeleccion: "B"
        })
      }
      else if (id === "A" && this.state.ultimaSeleccion === "A"){
        this.setState({
          parteCount: this.state.parteCount + 2, ultimaSeleccion: "A"
        })
      }
      else if (id === "B" && this.state.ultimaSeleccion === "A"){
        this.setState({
          parteCount: this.state.parteCount + 3, ultimaSeleccion: "B"
        })
      }
      else if (id === "VolverAEmpezar"){
        this.setState({
          parteCount: 0, ultimaSeleccion: "", selectedOptions: []
        })
      }
    }

    render() {
      return(
        <div style={component}>
          <h1>{data[this.state.parteCount].historia}</h1>

          <Opciones handlerButtonOption={this.handlerButtonOption} 
          A={data[this.state.parteCount].opciones.a} 
          B={data[this.state.parteCount].opciones.b}/>

          <UltimaEleccion ultimaSeleccion={this.state.ultimaSeleccion} 
          selectedOptions={this.state.selectedOptions.map((e, i) => (<li key={i} style={itemsLista}>{e}</li>), data[this.state.parteCount].id)}
          />
        </div>
    )
  }
}

export default Page;