interface CaseStudy {
  context: string,
  owned: string,
  constraints: string,
  technicalApproach: string,
  outcome: string
}

interface LinkItem {
  label: string,
  url: string
}

interface Experience {
  name: string,
  slug: string,
  featured: boolean,
  tags: Array<string>,
  date: string,
  summary: string,
  impact: string,
  description: string,
  image_path: string,
  links: Array<LinkItem>,
  caseStudy: CaseStudy | null
}

interface Project {
  name: string,
  slug: string,
  featured: boolean,
  tags: Array<string>,
  date: string,
  summary: string,
  impact: string,
  description: string,
  image_path: string,
  links: Array<LinkItem>,
  caseStudy: CaseStudy | null
}

export { Experience, Project };
