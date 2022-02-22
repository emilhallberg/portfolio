import React from 'react';
import styled from 'styled-components';
import Section from '../../../../components/section';
import { projects } from '../../../../resources/data/data';
import Project from './components/project';
import useLanguage from '../../../../hooks/useLanguage';
import media from '../../../../resources/stylesheets/media';
import { phone } from '../../../../resources/stylesheets/dimensions';
import { portfolio } from '../../../../routes/paths';

const SSection = styled(Section)`
  padding-bottom: 0;
`;

const SProjects = styled.div`
  transform: translateY(calc(-17vh));
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: row dense;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 16px);
  grid-auto-rows: 16px;
  justify-self: center;
  padding-bottom: 32px;
  @media (max-width: ${media.phone}) {
    grid-template-columns: 1fr;
    padding: ${phone.padding};
  }
`;

const Portfolio: React.FC = () => {
  const lang = useLanguage();
  return (
    <SSection>
      <SProjects>
        {projects
          .map(({ id, title, category, images, slug }) => (
            <Project key={id} to={`${portfolio.path}/${slug}`}>
              <Project.Image arr={images} />
              <Project.Category>{category[lang]}</Project.Category>
              <Project.Title>{title[lang]}</Project.Title>
            </Project>
          ))
          .reverse()}
      </SProjects>
    </SSection>
  );
};

export default Portfolio;
