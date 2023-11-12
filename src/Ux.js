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
            title='UX Researcher'
            paragraph1='Maika conducted research for UX Advisory Groups for Loyola and Xavier Universities. Her experience includes user research and analysis, tests, surverys, and one-on-one interviews to university staff and faculty for data collection.'
            paragraph2='From her research, she has made recommendations to improve website usability, streamlined and simplified information, and made websites more interactive for students and faculty.'
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
              text1='Staff Representative, UX Library for User Research and Website Mock-up Redesign'
              title2='Scope'
              text2='2 years, 9 months'
              title3='Process'
              text3='Comperitive analysis, SWOT analysis, and optimal workshop'
            />
            <Experience
              employer='Loyola Library UX Advisory Group'
              title1='Role'
              text1='Staff Representative, UX Library for User Research and Website Mock-up Redesign'
              title2='Scope'
              text2='2 years, 9 months'
              title3='Process'
              text3='Comperitive analysis, SWOT analysis, and optimal workshop'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ux;
