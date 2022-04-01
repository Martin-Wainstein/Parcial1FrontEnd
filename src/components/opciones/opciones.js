import React, { Component } from "react";

const container = {
    "marginTop": "10%",
    "marginBottom": "5%",
}

const option = {
    "display": "flex",
    "marginTop": "20px",
    "height": "50px"
}

const h3 = {
    "marginLeft": "30px",
    "fontSize": "40px"
}

const btn = {
    "color": "white",
    "backgroundColor": "red",
    "borderRadius": "15px",
    "height": "100%",
    "borderColor": "transparent",
    "width": "100px"
}

const btnCero = {
    "marginTop": "2rem",
    "color": "white",
    "backgroundColor": "red",
    "borderRadius": "15px",
    "height": "25px",
    "borderColor": "transparent",
    "width": "100px"
}

const h3Cero = {
    "marginLeft": "30px",
    "marginTop": "1.8rem",
    "fontSize": "25px"
}


class Opciones extends Component{
    render(){
        return(
            <div style={container}>
                <div style={option}>
                    <button style={btn} id="A" onClick={this.props.handlerButtonOption}>OPCION A</button><h3 style={h3}>{this.props.A}</h3>
                </div>
                <div style={option}>
                    <button style={btn} id="B" onClick={this.props.handlerButtonOption}>OPCION B</button><h3 style={h3}>{this.props.B}</h3>
                </div>
                <div style={option}>
                    <button style={btnCero} id="VolverAEmpezar" onClick={this.props.handlerButtonOption}>Empezar de 0</button><h3 style={h3Cero}>Me arrepentí, quiero empezar de cero</h3>
                </div>
            </div>
        )
    }
}

export default Opciones