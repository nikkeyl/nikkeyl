import { projects } from '@/mocks/projects';
import { ProjectCard } from '@/widgets/project-card/project-card';
import { Slider } from '@/widgets/slider/slider';

const Projects = () => (
  <Slider title='projects'>
    {projects.map(
      ({ alt, href, isCommerce, isGitHub, isVercel, key, src, title }) => (
        <li key={key}>
          <ProjectCard
            alt={alt}
            href={href}
            index={key}
            isCommerce={isCommerce}
            isGitHub={isGitHub ?? false}
            isVercel={isVercel ?? false}
            src={src}
            title={title}
          />
        </li>
      ),
    )}
  </Slider>
);

export { Projects };
