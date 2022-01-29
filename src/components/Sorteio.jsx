import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Sorteio = props => {
    const { min, max } = props
    const resultado = (Math.random() * max) - min

    return (
        <Card title="Sorteio de Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{resultado}</strong>
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

export default connect(mapStateToProps)(Sorteio)