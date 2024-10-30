import axios from "axios";
import { useState } from "react";
import './index.scss';

export default function Turma() {

    async function salvar() {
    }

    return (
        <div className='pagina-turma'>
            <div className="header">
                <img alt="logo header" src="src\pages\App\Vector.png" />
                <div className="link">
                    <a href="#">Agendamento</a>
                    <a href="%">Pacientes</a>
                </div>
            </div>
            <div className='form'>
                <div className="logo">
                    <h3>Novo Agendamento</h3>
                    <img className="limg" alt="logo" src="src\pages\App\Vector.png" />
                    </div>
                <div>
                    <input type="text" placeholder="RG do Paciente" />
                </div>
                <div>
                    <input type='text' placeholder="Data da Consulta" />
                </div>
                <div>
                    <input type="text" placeholder="Hora da Colsulta" />
                </div>
                <div>
                    <section className="confirmado">
                        <h1> Confirmado</h1><input type="checkbox" placeholder="Confirmado" />
                    </section>
                </div>
                <div>
                    <textarea placeholder="Tratamento" />
                </div>
                <div>
                    <button className="agendar" onClick={salvar}> Agendar </button>
                </div>
            </div>
        </div>
    );
}
