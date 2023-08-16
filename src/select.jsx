
import { useState } from "react"
export default function select(){
   
    const [resposta, setResposta] = useState ("")
   
   return(
        <div className="container">
            <label htmlFor="">Selecione a Técnologia:</label><br />
            <br /><select value = {resposta} onChange={(e) =>{setResposta(e.target.value)}} >
                <option value="">Técnologias</option>
                <option value="JavaScript -  surgiu como uma tecnologia do lado do navegador para tornar as aplicações Web mais dinâmicas.">JavaScript</option>
                <option value="React.js - é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web.">React.js</option>
                <option value="Angular -  é um framework de código aberto usado para construir aplicativos para web baseados em uma única página dinâmica. ">Angular</option>
                <option value="HTML 5 - é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos.">Html 5</option>
                <option value="Css 3 - tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.">Css 3</option>
                <option value="Git - é o sistema de controle de versão open source mais usado no mundo atualmente! Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software.">Git</option>
            </select><br />
            <h2>{resposta}</h2>
        </div>
    )

}