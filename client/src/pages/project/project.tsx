import { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { projects } from "../../resources/data/data";
import Section from "../../components/section";
import useLanguage from "../../hooks/useLanguage";
import Slider from "./components/slider";
import Empty from "../../components/empty";
import External from "../../components/button/external";
import Button from "../../components/button/button";
import { slideUp } from "../../resources/animations/animations";
import useWhenInView from "../../hooks/useWhenInView";
import media from "../../resources/stylesheets/media";

const SProject = styled.div`
  display: grid;
  grid-auto-rows: max-content;
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

  const { category, title, text, images, links } = project;

  const texts = text[lang]
    .split("\n")
    .map((x) => <Section.Text key={x}>{x}</Section.Text>);

  return (
    <SProject>
      <Section>
        <Section.Category>{category[lang]}</Section.Category>
        <Section.Title>{title[lang]}</Section.Title>
        {texts}
      </Section>
      <Slider>
        {images.map((src) => (
          <Slider.Slide key={src} src={src} alt={title[lang]} />
        ))}
      </Slider>
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
