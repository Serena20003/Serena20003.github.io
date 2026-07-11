import experiences from './Components/Assets/experiences.json';
import projects from './Components/Assets/projects.json';

const withKind = (items, kind) => items.map((item) => ({ ...item, kind }));

const experienceItems = withKind(experiences, 'experience');
const projectItems = withKind(projects, 'project');
const allWork = [...experienceItems, ...projectItems];
const featuredWork = allWork.filter((item) => item.featured);

const workBySlug = allWork.reduce((acc, item) => {
  if (item.slug) {
    acc[item.slug] = item;
  }
  return acc;
}, {});

export { allWork, experienceItems, featuredWork, projectItems, workBySlug };
