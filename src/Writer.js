import Summary from './Summary';
import Writings from './Writings';

function Writer() {
  return (
    <section id='writer' className='container'>
      <div className='writings-container'>
        <div className='container-70'>
          <Summary
            title='Writer'
            paragraph1='Her work can be found in Sojourners Magazine (January 2020 Cover Feature granted 2nd Place for the 2021 Higher Goals Awards by Evangelical Press Association), Inheritance Magazine, HelloGiggles, Stories with Sapphire Podcast, Stories for Change Podcast, Spooked Podcast, Healing the Unknown, and State of Formation. She was also a 2018-2019 State of Formation Writing Fellow and presented at the 17th Biennial Filipino American National Historical Society Conference. She is a book weirdo and monster fanatic.'
          />
        </div>
        <div>
          <Writings
            title='Uneasy Rider'
            publisher='Inheritance Magazine'
            info='Oct 7, 2021'
            url='https://luminarypodcasts.com/listen/snap-judgment/snap-judgment-presents-spooked/uneasy-rider/5ab95815-861b-4ef8-b880-2f656955db45?country=US/'
          />
          <Writings
            title='Tale of Two Hauntings'
            publisher='Inheritance Magazine'
            info='Oct 7, 2021'
            url='https://www.inheritancemag.com/stories/tale-of-two-hauntings'
          />
          <Writings
            title='Uplifted'
            publisher='Healing The Unknown'
            info='Apr 1, 2020'
            url=''
          />
          <Writings
            title='Comfortable In My Own Skin'
            publisher='Sojourners Magazine'
            info='Jan 1, 2020'
            url='https://sojo.net/magazine/january-2020/comfortable-my-own-skin'
          />
          <Writings
            title='The Soul of Teri Ilasco'
            publisher='Stories with Sapphire Podcast'
            info='Jan 1, 2020'
            url='https://podcasts.apple.com/au/podcast/2-coincidence-featuring-derek-hayes-monsters-among-us/id1495941921?i=1000465357429'
          />
          <Writings
            title='Filipina American Story Theology'
            publisher='17th Biennial Filipino American National Historical Society'
            info='Jul 1, 2019'
            url=''
          />
          <Writings
            title='My Emerging Unapologetic Activism'
            publisher='State of Formation'
            info='Jul 1, 2019'
            url='https://stateofformation.org/2019/07/my-emerging-unapologetic-activism/'
          />
          <Writings
            title='Batok'
            publisher='Inheritance Magazine'
            info='Mar 1, 2019'
            url='https://www.inheritancemag.com/stories/batok'
          />
          <Writings
            title='What Is My Spirituality'
            publisher='State of Formation'
            info='Jan 1, 2019'
            url='https://stateofformation.org/2019/01/what-is-my-spirituality/'
          />
          <Writings
            title='Minimalist Teaching'
            publisher='Inheritance Magazine'
            info='Nov 1, 2018'
            url='https://www.inheritancemag.com/stories/minimalist-teaching'
          />
          <Writings
            title='The Stages of Grief When You Mourn the Loss of Your Filipinx Culture'
            publisher='HelloGiggles'
            info='Oct 1, 2018'
            url='https://hellogiggles.com/stages-of-grief-mourning-loss-filipinx-culture/'
          />
          <Writings
            title='Nurturing the Monsters'
            publisher='Inheritance Magazine'
            info='Aug 1, 2018'
            url='https://www.inheritancemag.com/stories/nurturing-the-monsters'
          />
        </div>
      </div>
    </section>
  );
}

export default Writer;
