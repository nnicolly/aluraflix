import React, { useState } from "react"
import './style.css';

import EditFilmeModal from "../../components/EditFilmeModal"


const FilmeSection = ({ categoria, filmes}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFilme, setEditingFilme] = useState(null);

  const handleEdit = (filme) => {
    console.log("Editing", filme);
    setEditingFilme(filme);
    setIsModalOpen(true);
  };

  const handleDelete = async (filme) => {
    try {
      const response = await fetch(`http://localhost:3001/filmes/${filme.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar o filme. Tente novamente!");
      }

      console.log("Filme deletado com sucesso:", filme);
      window.location.reload();
    } catch (error) {
      console.error("Erro:", error.message);
      alert(error.message);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingFilme(null);
  };
  // Filtrar filmes por categoria
  const filmesCategoria = filmes.filter((filme) => filme.categoria === categoria);

  return (
    <section className={`filmes-section ${categoria.toLowerCase()}`}>
      <h3 className="categoria-titulo">{categoria.toUpperCase()}</h3>
      <div className="filmes-cards">
        {filmesCategoria.map((filme, index) => (
          <div key={filme.id} className="filme-card">
            <a href={filme.filmeUrl} target="_blank" rel="noreferrer">
              <img src={filme.imagemUrl} alt={filme.titulo} className="filme-thumb" />
            </a>
            <h4 className="filme-titulo">{filme.titulo}</h4>
            <p className="filme-descricao">{filme.descricao}</p>
            <div className="filme-acoes">
              <button className="btn-editar" onClick={() => handleEdit(filme)}>Editar</button>
              <button className="btn-deletar" onClick={() => handleDelete(filme)}>Deletar</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && editingFilme && (
        <EditFilmeModal 
          isOpen={isModalOpen}
          onClose={closeModal} 
          filmeData={editingFilme}
          onSave={(filme) => console.log("Saving", filme)}
        >
        </EditFilmeModal>
      )}
    </section>
  );
};

export default FilmeSection;
