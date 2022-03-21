import React from "react"
import { ParsedCurrentDayOfTheWeek, CurrentDate } from "../../../../utils/GetCurrentDay"

const NoPendingTasks = props => {

    return (
        <div className="card">
            <div className="card-content">
                <p className="title">
                    {ParsedCurrentDayOfTheWeek}
                </p>
                <p className="subtitle">
                    {CurrentDate}
                </p>
                <p className="card-subtitle">
                    Sem Tarefas Pendentes
                </p>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item">
                    <span>
                        Adicionar Mais
                    </span>
                </p>
            </footer>
        </div>
    )
}

export default NoPendingTasks