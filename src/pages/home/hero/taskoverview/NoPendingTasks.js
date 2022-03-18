import React from "react"

const NoPendingTasks = props => {
    return (
        <div class="card">
            <div class="card-content">
                <p class="title">
                    Sem Tarefas Pendentes
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Adicionar Mais
                    </span>
                </p>
            </footer>
        </div>
    )
}

export default NoPendingTasks