import CardStyles from "../styles/Card.module.css";

const Card = ({ libro }) => {
  return (
    <div className={CardStyles.libroInfo}>
      <h3>El libro que te gusta se llama:</h3>
      <p>
        <strong>{libro.titulo}</strong>
      </p>
      <h3>y es de:</h3>
      <p>{libro.autor}</p>
    </div>
  );
};

export default Card;
