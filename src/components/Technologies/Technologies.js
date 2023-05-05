import React from 'react';
import { DiBackbone, DiBitbucket, DiCode, DiComposer, DiDatabase, DiDjango, DiDocker, DiFirebase, DiMootools, DiMootoolsBadge, DiReact, DiTerminal, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <br />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web and API development world.
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Python | 
            JavaScript <br />
            Java | 
            GoLang
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBackbone size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Django | 
            Node.js | 
            Flask 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js | 
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            PostgreSQL | 
            MySQL <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>DevOp</ListTitle>
          <ListParagraph>
            Docker | 
            Kubernetes <br />
            AWS | CI/CD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size="3rem" />
        <ListContainer>
          <ListTitle>Related Skills</ListTitle>
          <ListParagraph>
            RESTful API | 
            GraphQL <br />       
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
