function Course({ id, title, content, price, removeOneCourse }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price} TL</h4>
      </div>
      <p>{content}</p>
      <button
        className="cardDelete"
        onClick={() => {
          removeOneCourse(id);
        }}
      >
        Sil
      </button>
    </div>
  );
}

export default Course;
