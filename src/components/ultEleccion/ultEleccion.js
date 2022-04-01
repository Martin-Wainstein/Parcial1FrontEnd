import React, { Component } from "react";

const lista = {
    "listStyle": "none"
}

const historial = {
    "marginTop": "20px",
    "marginBottom": "0"
}

class UltimaEleccion extends Component{
    render(){
        return(
            <div>
                <h4>Ultima opcion elegida ➡ {this.props.ultimaSeleccion}</h4>
                <p style={historial}>Historial: </p>
                <ul style={lista}>{this.props.selectedOptions}</ul>
            </div>
        )
    }
}

export default UltimaEleccion