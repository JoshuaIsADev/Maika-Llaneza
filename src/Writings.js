function Writings({ title, publisher, info, url }) {
  return (
    <div className='writings'>
      <div>
        <a href={url} className='writings-title'>
          {title}
        </a>
        <p className='writings-publisher'>{publisher}</p>
      </div>
      <div className='writings-secondary'>
        <p className='writings-info'>{info}</p>
      </div>
    </div>
  );
}

export default Writings;
