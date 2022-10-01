import "./home.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProposalHome } from "../../components/ProposalHome/ProposalHome";
import { MostWanted } from "../../components/MostWanted/MostWanted";
import { MostRated } from "../../components/MostRated/MostRated";
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import { useState } from "react";
import buscaDistrito from '../../services/api-buscaDistrito';
import { toast } from 'react-toastify';

export function Home() {
    const uf2 = "RJ";
    const city2 = "Rio Bonito"
    const [city, setCity] = useState(city2);
    const [districtAll, setDistrictAll] = useState([]);
    const [uf, setUf] = useState(uf2);
    const [professional, setProfessional] = useState("");

    async function handleSearchDistrict(ufSelect) {
        console.log(ufSelect)
        try {
          const res = await buscaDistrito.get(`${ufSelect}/distritos`) 
            console.log(res.data)
            setDistrictAll(res.data)
            console.log(res.data[0].municipio.nome);
            return;
          }catch{
            console.log("error")
            toast.error("Escolha um estado e clica em buscar cidades")
        }
        return
    }

    if(districtAll) {
        districtAll.sort(function(a,b) {
            if(a.nome < b.nome ) {
                return -1
            } else {
                return true
            }
        })
        }

        
    function handleSetectCity(e) {
        setCity(e.target.value)
        console.log(e.target.value)
      }
      function handleSetectUf(e) {
        setUf(e.target.value)
        console.log(e.target.value)
        handleSearchDistrict(e.target.value)
      }
      function handleSearchProfessional(e) {
        setUf(e.target.value)
        console.log(e.target.value)
        toast.info(`Você escolheu: ${professional}, na cidade ${city} - ${uf}`)
      }
    return (
        <div className="Home">
            <Navbar2 />
            <div className="imageTop">
                <div className="block">
                <h3>BUSQUE UM PROFISSIONAL</h3> 
                <div className="search">
                <h3>BUSQUE UM PROFISSIONAL</h3>
                    {/* <input className="primary" type="text" placeholder="Digite o profissional ou" value={professional} onChange={(e) => setProfessional(e.target.value)} /> */}
                    <select className="primary"> 
                                      <option value="">Escolha o profissional</option>   
                                      <option value="">Pedreiro</option>   
                                      <option value="">Servente de Obras</option>   
                                      <option value="">Marceneiro</option>   
                                      <option value="">Motorista</option>   
                                      <option value="">Enfermeira</option>   
                                      <option value="">Confeiteira/o</option>   
                                      <option value="">Padeiro/a</option>   
                                      <option value="">Serranheiro</option>   
                                      <option value="">Programador</option>   
                                      <option value="">Designer</option>   
                                      <option value="">Designer de Interiores</option>   
                                      <option value="">Encanador</option>   
                                      <option value="">Pintor</option>   
                                      <option value="">Chapeiro/a</option>   
                                      <option value="">Cozinhairo/a</option>   
                                      <option value="">Porteiro</option>   
                                      <option value="">Zelador</option>   
                                      <option value="">Projetista</option>   
                                      <option value="">Engenheiro/a</option>   
                                      <option value="">Mestre de Obras</option>   
                                      <option value="">Corretor</option>   
                                      <option value="">Contador</option>   
                                      <option value="">Cuidador/a de Idosos</option>   
                                      <option value="">Faxineira/Diarista</option>  
                                      <option value="">Atendente</option>    
                                      <option value="">Vendedor</option>    
                                      <option value="">Vendedor Externo</option>    
                                      <option value="">Eletricista</option>    
                                      <option value="">Mecânico</option>    
                                      <option value="">Bombeiro Hidráulico</option>    
                                      <option value="">Professor/ra Particular</option>    
                                      <option value="">Personal Trainner</option>    
                                      <option value="">Jornalista</option>    
                                      <option value="">Pesquisador</option>    
                                      <option value="">Digitador</option>    
                                      <option value="">Caixa</option>    
                                      <option value="">Frentista</option>    
                                      <option value="">Garçom</option>    
                                      <option value="">Cerimonialista</option>    
                                      <option value="">Fotógrafo</option>    
                                      <option value="">Web Designer</option>    
                                      <option value="">Panfletista</option>    
                                      <option value="">Banda Músical</option>    
                                      <option value="">Cantor</option>    
                                      <option value="">Adestrador</option>    
                                      <option value="">Limpador de Piscina</option>    
                                      <option value="">Professor de Música</option>    
                                      <option value="">Lenhador</option>    
                                      <option value="">Técnico em Informática</option>    
                                      <option value="">Recepcionista</option>    
                                      <option value="">Estoquista</option>    
                                      <option value="">Repositor</option>    
                                      <option value="">Churrasqueiro</option>    
                                      <option value="">Costureira</option>    
                                      <option value="">Motoboy</option>    
                                      <option value="">Officeboy</option>    
                                      <option value="">Pescador</option>    
                                      <option value="">Trader</option>    
                                      <option value="">Caminhoneiro</option>    
                                      <option value="">Chaveiro</option>    
                                      <option value="">Segurança</option>    
                                      <option value="">Lavador de Carros</option>    
                                      <option value="">Lavador de Estofados</option>    
                                      <option value="">Estofador</option>    
                                      <option value="">Lanterneiro</option>    
                              </select>
                    <select value={uf} onChange={handleSetectUf}> 
                                      <option value="">Escolha seu estado</option>
                                      <option value="AC">Acre</option>
                                      <option value="AL">Alagoas</option>
                                      <option value="AP">Amapá</option>
                                      <option value="AM">Amazonas</option>
                                      <option value="BA">Bahia</option>
                                      <option value="CE">Ceará</option>
                                      <option value="DF">Distrito Federal</option>
                                      <option value="ES">Espírito Santo</option>
                                      <option value="GO">Goiás</option>
                                      <option value="MA">Maranhão</option>
                                      <option value="MT">Mato Grosso</option>
                                      <option value="MS">Mato Grosso do Sul</option>
                                      <option value="MG">Minas Gerais</option>
                                      <option value="PA">Pará</option>
                                      <option value="PB">Paraíba</option>
                                      <option value="PR">Paraná</option>
                                      <option value="PE">Pernambuco</option>
                                      <option value="PI">Piauí</option>
                                      <option value="RJ">Rio de Janeiro</option>
                                      <option value="RN">Rio Grande do Norte</option>
                                      <option value="RS">Rio Grande do Sul</option>
                                      <option value="RO">Rondônia</option>
                                      <option value="RR">Roraima</option>
                                      <option value="SC">Santa Catarina</option>
                                      <option value="SP">São Paulo</option>
                                      <option value="SE">Sergipe</option>
                                      <option value="TO">Tocantins</option>
                                      <option value="EX">Estrangeiro</option>     
                              </select>
                              <select value={city} onChange={handleSetectCity}> 
                              {districtAll.length === 0 ?
                              <option value={city}>{city}</option>
                              :
                              <>
                              <option value="">Escolha sua cidade</option>
                              {districtAll?.map((district) => {
                                      return (
                                          <option autocomplete="off" key={district.id} value={district.nome}>{district.nome}</option>
                                      )
                                  })}
                              </>
                              }     
                              </select>
                    <button onClick={handleSearchProfessional}>Buscar</button>
                </div>
                </div>
            </div>
            <ProposalHome />
            <MostWanted />
            <MostRated />
            <Footer />
        </div>
    )
}