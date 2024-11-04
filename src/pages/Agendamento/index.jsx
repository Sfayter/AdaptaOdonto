import axios from "axios";
import { useState } from "react";
import './index.scss';

export default function Agendamento() {

    async function salvar() {
    }

    return (
        <div className='page-agendamento'>

            <div className='form'>
                <div className="logo">
                    <h3>Novo Agendamento</h3>
                    {/* <img className="limg" alt="logo" src="/assets/images/logo.svg" /> */}
                    <br/>
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
                    <select>
                        <option value={'Confirmado'}>
                            Confirmado
                        </option>
                        <option value={'Cancelado'}>
                            Cancelado
                        </option>
                        <option value={'Concluído'}>
                            Concluído
                        </option>
                    </select>
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
