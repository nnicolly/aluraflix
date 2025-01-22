import React from 'react'


import './style.css'

const Banner = ({ categoria, filme }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${filme.thumb})` }}>
      <div className='banner-left'>
        <h1 className='banner-filme-categoria'>{filme.categoria.toUpperCase()}</h1>
        <h2 className='banner-filme-titulo'>{filme.titulo}</h2>
        <p className='banner-filme-descricao'>{filme.descricao}</p>
      </div>
      <div className='banner-right'>
        <img className='banner-img' src={filme.thumb} alt='Capa Filme em Destaque.'/>
      </div>
    </div>
  )
}

export default Banner