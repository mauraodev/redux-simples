import './Intervalo.css'
import React from 'react'
import Card from './Card'

const Intervalo = props => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" />
                </span>
            </div>
        </Card>
    )
}

export default Intervalo