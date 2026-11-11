import { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { projects } from "../../resources/data/data";
import useLanguage from "../../hooks/useLanguage";
import Slider from "./components/slider";
import Empty from "../../components/empty";
import External from "../../components/button/external";
import Button from "../../components/button/button";
import { slideUp } from "../../resources/animations/animations";
import useWhenInView from "../../hooks/useWhenInView";
import media from "../../resources/stylesheets/media";

const SProject = styled.article`
  display: grid;
  grid-auto-rows: max-content;
`;

const SIntro = styled.section`
  box-sizing: border-box;
  width: min(100% - 64px, 65ch);
  margin: 0 auto;
  padding: 48px 0 24px;
  text-align: left;
  @media (max-width: ${media.phone}) {
    width: calc(100% - 32px);
    padding-top: 32px;
  }
`;
const STitle = styled.h1`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.2;
  letter-spacing: -0.025em;
  overflow-wrap: anywhere;
  margin-bottom: 20px;
`;
const SText = styled.p`
  color: #d1d1d1;
  line-height: 1.6;
  text-align: left;
`;
const SDetail = styled.section`
  margin-top: 24px;
  h2 {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 8px;
  }
`;

const SLinks = styled.div`
  ${slideUp};
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 32px;
  padding: 16px;
  @media (max-width: ${media.phone}) {
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    grid-auto-columns: 1fr;
    grid-gap: 16px;
  }
`;

const SExternal = styled(External)`
  &:hover {
    text-decoration: none;
  }
`;

const Project: FC = () => {
  const { slug: s1 } = useParams<Record<string, string | undefined>>();
  const lang = useLanguage();
  const { ref, visible } = useWhenInView(150);
  const project = projects.find(({ slug: s2 }) => s1 === s2);
  if (!project) return <Empty />;

  const { title, text, images, links } = project;

  return (
    <SProject>
      <SIntro aria-labelledby="project-title">
        <STitle id="project-title">{title[lang]}</STitle>
        <SText>{text.summary[lang]}</SText>
        <SDetail aria-labelledby="contribution-title">
          <h2 id="contribution-title">
            {lang === "sv" ? "Mitt bidrag" : "My contribution"}
          </h2>
          <SText>{text.contribution[lang]}</SText>
        </SDetail>
        <SDetail aria-labelledby="outcome-title">
          <h2 id="outcome-title">{lang === "sv" ? "Resultat" : "Outcome"}</h2>
          <SText>{text.outcome[lang]}</SText>
        </SDetail>
      </SIntro>
      <Slider key={project.slug} images={images} title={title[lang]} />
      <SLinks ref={ref} active={visible}>
        {links.map(({ url, label }) => (
          <SExternal key={url} to={url}>
            <Button label={label[lang]} />
          </SExternal>
        ))}
      </SLinks>
    </SProject>
  );
};

export default Project;
