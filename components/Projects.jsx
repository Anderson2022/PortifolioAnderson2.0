import React from 'react';
const propertyImg = { src: '/assets/projects/property.jpg', width: 2000, height: 1391 };
const cryptoImg = { src: '/assets/projects/crypto.jpg', width: 2000, height: 1392 };
const netflixImg = { src: '/assets/projects/netflix.jpg', width: 2000, height: 1390 };
const twitchImg = { src: '/assets/projects/twitch.jpg', width: 2000, height: 1384 };
const rio = { src: '/assets/projects/riopiscinas.png', width: 1330, height: 603 };
import ProjectItem from './ProjectItem';
import { i18n } from '../translate/i18n';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-10 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          {i18n.t('Projects')}
        </p>
        <h2 className='py-4'>   {i18n.t('ProjectsH2')}</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
              <ProjectItem
            title='Rio Piscinas Cacoal'
            backgroundImg={rio}
            projectUrl='https://www.riopiscinascacoal.com/'
            tech='Vue JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
