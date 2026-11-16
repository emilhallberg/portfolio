import { FC } from "react";
import styled from "styled-components";
import Section from "../../../../components/section";
import { projects } from "../../../../resources/data/data";
import Project from "./components/project";
import useLanguage from "../../../../hooks/useLanguage";
import media from "../../../../resources/stylesheets/media";
import { phone } from "../../../../resources/stylesheets/dimensions";
import { portfolio } from "../../../../routes/paths";
import Colors from "../../../../resources/stylesheets/colors";

const SSection = styled(Section)`
  padding-bottom: 0;
  @media (max-width: ${media.phone}) {
    padding: 0 ${phone.padding};
    background: linear-gradient(transparent, ${Colors.background} 260px);
  }
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
    transform: none;
    width: 100%;
    min-width: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 12px;
    padding: 0 0 32px;
  }
`;

const Portfolio: FC = () => {
  const lang = useLanguage();
  return (
    <SSection>
      <SProjects>
        {projects
          .map(({ title, images, slug }) => (
            <Project key={slug} to={`${portfolio.path}/${slug}`}>
              <Project.Image arr={images} />
              <Project.Title>{title[lang]}</Project.Title>
            </Project>
          ))
          .reverse()}
      </SProjects>
    </SSection>
  );
};

export default Portfolio;
