import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome <br />
        I'm Peter Kim
      </SectionTitle>
      <SectionText>
        Software Engineer who is passionated exploring new technologies and developing software solutions and quick hacks.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/peter-kim-436782183/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;