import "./plains.css"
import {IoCheckbox} from "react-icons/io5";

export function Plains() {
    const professional = false;
    return (
        <div className="Plains">
            {professional === true ?
            <>
            <div className="plain">
                <h3>Inicial</h3>
                <div className="title">
                <h1>Grátis</h1>
                {/* <h4>/ mês</h4> */}
                </div>
                <div className="text">
                    <p><IoCheckbox /> Recebe propostas ilimitadas</p>
                    <p><IoCheckbox /> Não envia propostas</p>
                    <p><IoCheckbox /> Sem fotos no perfil</p>
                </div>
                <button>Seu plano atual</button>
            </div>
            <div className="plain2">
                <h3>Básico</h3>
                <div className="title">
                <h1>R$ 14,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Recebe propostas ilimitadas</p>
                    <p><IoCheckbox /> Envia até 5 Propostas</p>
                    <p><IoCheckbox /> Até 5 fotos no perfil</p>
                </div>
                <button>Selecionar plano</button>
                <p>Mais procurado</p>
            </div>
            <div className="plain3">
                <h3>Pro</h3>
                <div className="title">
                <h1>R$ 19,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Recebe propostas ilimitadas</p>
                    <p><IoCheckbox /> Envia até 10 Propostas</p>
                    <p><IoCheckbox /> Até 5 fotos no perfil</p>
                </div>
                <button>Selecionar plano</button>
            </div>
            </>
            :
            <>
            <div className="plain">
                <h3>Inicial</h3>
                <div className="title">
                <h1>Grátis</h1>
                {/* <h4>/ mês</h4> */}
                </div>
                <div className="text">
                    <p><IoCheckbox /> Propostas abertas ilimitadas</p>
                    <p><IoCheckbox /> Não envia propostas individuais</p>
                    <p><IoCheckbox /> Não põe foto na avaliação</p>
                </div>
                <button>Seu plano atual</button>
            </div>
            <div className="plain2">
                <h3>Básico</h3>
                <div className="title">
                <h1>R$ 9,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Propostas abertas ilimitadas</p>
                    <p><IoCheckbox /> Envia até 5 Propostas individuais</p>
                    <p><IoCheckbox /> Até 3 fotos na avaliação</p>
                </div>
                <button>Selecionar plano</button>
                <p>Mais procurado</p>
            </div>
            <div className="plain3">
                <h3>Pro</h3>
                <div className="title">
                <h1>R$ 14,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Propostas abertas ilimitadas</p>
                    <p><IoCheckbox /> Envia até 10 Propostas individuais</p>
                    <p><IoCheckbox /> Até 5 fotos na avaliação</p>
                </div>
                <button>Selecionar plano</button>
            </div>
            </>
            } 

        </div>
    )
}