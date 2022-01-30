import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'
import { alterarNumeroMinimo } from '../store/actions/numeros'
import Card from './Card'

const Intervalo = props => {
    const { min, max } = props

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} readOnly/>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} readOnly/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapActionCreatorsToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, 
    mapActionCreatorsToProps
)(Intervalo)