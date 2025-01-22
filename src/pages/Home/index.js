import React, { useState, useEffect } from 'react';

import './style.css'
import FilmeSection from '../../components/FilmeSection'
import Banner from '../../components/Banner'


import thumb from '../../assets/video_thumb_sample.jpg'
import diario from '../../assets/diario.jpeg'
import superbad from '../../assets/superbad.png'
import pearl from '../../assets/pearl.png'

const Home = () => {

  const filmeBanner = {
    titulo: 'Interstellar',
    descricao: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    categoria: 'Ficção científica',
    thumb: thumb,
  }

  const categorias = ['Romance', 'Comédia', 'Terror'];

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Função assíncrona para realizar o request
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/filmes'); // URL da API
        if (!response.ok) {
          throw new Error('Erro na requisição'); // Tratamento de erro
        }
        const result = await response.json(); // Converte a resposta para JSON
        setFilmes(result); // Atualiza o estado com os dados
        console.log(filmes);
      } catch (error) {
        setError(error.message); // Captura o erro
      } finally {
        setLoading(false); // Desativa o carregamento
      }
    };

    fetchData(); // Chamada da função
  }, []); // Executa apenas quando o componente é montado

  return (
    <>
      <Banner filme={filmeBanner} />

      <main>
        {categorias.map((categoria, index) => (
          <FilmeSection key={index} categoria={categoria} filmes={filmes}/>
        ))}
      
      </main>

      
    </>
  )
}

export default Home