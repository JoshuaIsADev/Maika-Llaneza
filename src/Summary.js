function Summary({ title, paragraph1, paragraph2 }) {
  return (
    <div>
      <h3 className='summary-title'>{title}</h3>
      <p>{paragraph1}</p>
      <br></br>
      <p>{paragraph2}</p>
    </div>
  );
}

export default Summary;
