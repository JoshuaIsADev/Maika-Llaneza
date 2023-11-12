function Experience({ employer, title1, title2, title3, text1, text2, text3 }) {
  return (
    <div className='ux-experience-container'>
      <h4>{employer}</h4>
      <p className='ux-experience-title'>{title1}</p>
      <p className='ux-experience-p'>{text1}</p>
      <p className='ux-experience-title'>{title2}</p>
      <p className='ux-experience-p'>{text2}</p>
      <p className='ux-experience-title'>{title3}</p>
      <p className='ux-experience-p'>{text3}</p>
    </div>
  );
}

export default Experience;
