import React from "react"

const NoPendingTasks = props => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">
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