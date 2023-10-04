import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { render } from 'react-dom';

const Hero = (props) => {
  return (
    <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there ! <br />
          I am Yash Bhalgat
        </SectionTitle>
        <SectionText>
          I am a software developer with a Bachelor's degree in Computer Science and am currently pursuing my Masters at University of California Riverside.
        </SectionText>
        <Button onClick={() => window.open('https://drive.google.com/file/d/1QCDJlpsdin2MrcJL_8lyuoGLAIhUhjYo/view?usp=sharing')}>Current Resume</Button>
      </LeftSection>
    </Section>
  </>
  )
};

export default Hero;