import Summary from './Summary';
import maika from './img/maika_llaneza.jpg';

function About() {
  return (
    <section id='about' className='container'>
      <div className='container-70'>
        <h3 className='summary-title'>Maika Llaneza</h3>
        <h1 className='headline'>Kidlit Author of Monster and Mischief</h1>
      </div>
      <Summary
        title='About'
        paragraph1='Maika Llaneza is a 1.5 generation Filipina American whose interests include the weird and obscure plus all things spooky and campy. She has worked with students with disabilities for 20 years and is currently an Assistant Director of the Office for Accessible Education at Loyola University, New Orleans. She is passionate about diversity and inclusion and supporting works created by underrepresented communities.'
        paragraph2='Maika earned her BA in Global Studies, MS in Special Education, and is one Capstone Seminar from an MA in English and an MA in Theology - Institute for Spirituality and Social Justice Program at Xavier University in Cincinnati. These days she is working on her third graphic novel manuscript, a UX Design Certificate, and edits on her MG monster GN.'
      />
    </section>
  );
}

export default About;
