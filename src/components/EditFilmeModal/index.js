import React, { useState, useEffect } from "react";
import "./style.css";

const EditFilmeModal = ({ isOpen, onClose, filmeData }) => {
  const [formData, setFormData] = useState({
    id: "",
    titulo: "",
    categoria: "",
    imagemUrl: "",
    filmeUrl: "",
    descricao: "",
  });

  useEffect(() => {
    if (filmeData) {
      setFormData(filmeData); // Preenche o formulário com os dados do filme atual
    }
  }, [filmeData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/filmes/${filmeData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar o filme. Tente novamente!");
      }

      const updatedFilme = await response.json();
      console.log("Filme atualizado com sucesso:", updatedFilme);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro:", error.message);
      alert(error.message);
    }
  };

  const handleClear = () => {
    setFormData({
      id: "",
      titulo: "",
      categoria: "",
      imagemUrl: "",
      filmeUrl: "",
      descricao: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">EDITAR CARD:</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Digite o título"
            />
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Romance">Romance</option>
              <option value="Comédia">Comédia</option>
              <option value="Terror">Terror</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="imagem">Imagem</label>
            <input
              type="url"
              id="imagem"
              name="imagemUrl"
              value={formData.imagemUrl}
              onChange={handleChange}
              placeholder="https://www.google.com/url?sa=i&url=https%3A%2F..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="video">Vídeo</label>
            <input
              type="url"
              id="video"
              name="filmeUrl"
              value={formData.filmeUrl}
              onChange={handleChange}
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Digite a descrição"
              rows={4}
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn-guardar">
              GUARDAR
            </button>
            <button type="button" className="btn-limpar" onClick={handleClear}>
              LIMPAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFilmeModal;
