import React, { useState } from "react";

import "./style.css";

const Filme = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    imagemUrl: "",
    filmeUrl: "",
    descricao: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/filmes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: formData.titulo,
          categoria: formData.categoria,
          descricao: formData.descricao,
          imagemUrl: formData.imagemUrl,
          filmeUrl: formData.filmeUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar o filme. Tente novamente!");
      }

      const data = await response.json();
      console.log("Filme criado com sucesso:", data);

      // Reseta o formulário após a submissão
      handleReset();
    } catch (error) {
      console.error("Erro:", error.message);
      alert(error.message);
    }
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      imagemUrl: "",
      filmeUrl: "",
      descricao: "",
    });
  };

  return (
    <div className="form-container">
      <h1>NOVO VÍDEO</h1>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>

      <div className="card">
        <h2>Criar Card</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              placeholder="Insira o título"
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              value={formData.categoria}
              onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Romance">Romance</option>
              <option value="Comédia">Comédia</option>
              <option value="Terror">Terror</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl" className="required">
              Imagem
            </label>
            <input
              type="url"
              id="imageUrl"
              placeholder="Digite o link da capa do filme"
              required
              value={formData.imagemUrl}
              onChange={(e) => setFormData({ ...formData, imagemUrl: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="videoUrl">Vídeo</label>
            <input
              type="url"
              id="videoUrl"
              placeholder="Digite o link do filme"
              value={formData.filmeUrl}
              onChange={(e) => setFormData({ ...formData, filmeUrl: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Sinopse</label>
            <textarea
              id="description"
              placeholder="A sinopse do filme"
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
            />
          </div>

          <div className="button-group">
            <button type="submit" className="save-button">
              GUARDAR
            </button>
            <button type="button" className="clear-button" onClick={handleReset}>
              LIMPIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filme;
