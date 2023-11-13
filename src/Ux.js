import Summary from './Summary';
import diagram from './img/maika_llaneza_diagram01.png';
import Experience from './Experience';

function Ux() {
  return (
    <section id='ux' className='container'>
      <div className='ux-container'>
        <div className='container-70'>
          <Summary
            id='ux'
            title='UX Architect'
            // paragraph1='Maika conducted research for UX Advisory Groups for Loyola and Xavier Universities. Her experience includes user research and analysis, tests, surveys, and one-on-one interviews to university staff and faculty for data collection.'
            // paragraph2='From her research, she has made recommendations to improve website usability, streamlined and simplified information, and made websites more interactive for students and faculty.'
          />
        </div>
        <div className='ux-work-container'>
          <div className='container-70'>
            <img src={diagram} alt='sample work' className='ux-img-container' />
          </div>
          <div className='container-30'>
            <Experience
              employer='XU Library UX Advisory Group'
              title1='Role'
              text1='Staff Representative, UX Library for User Research and Website Mock-Up Redesign'
              title2='Scope'
              text2='2 years, 9 months'
              title3='Methods'
              text3='Comparative Analysis, SWOT Analysis, One-on-One Testing, Qualtrics Survey, Google Forms, Optimal Workshop Digital Card Sort, Circle Mapping'
            />
            <Experience
              employer='Loyola OAE UX Project'
              title1='Role'
              text1='Assistant Director, Office for Accessible Education'
              title2='Method'
              text2='One-on-One Interview'
              title3=''
              text3=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ux;
