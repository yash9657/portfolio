import React from 'react';
import { DiFirebase, DiReact, DiCode, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with various web development technologies, mobile development projects and Data Mining techniques. I am proficient in OOP languages namely C++ and Python.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Next.js, <br />
            Tailwind.css
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Mongo DB, SQL <br /> & Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Mining</ListTitle>
          <ListParagraph>
            Experience with <br />
            MATLAB, Tensorflow <br />
            Keras
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DSA</ListTitle>
          <ListParagraph>
            Experience with <br />
            C++, Python <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
