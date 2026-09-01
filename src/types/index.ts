export interface Metric {
  label: string;
  value: string;
}

export interface SchemaNode {
  id: string;
  label: string;
  sub: string;
  type: 'client' | 'gateway' | 'service' | 'ai' | 'db' | 'event';
}

export type ProjectTier = 'flagship' | 'production' | 'lab';

export interface Project {
  id: string;
  slug: string;
  title: string;
  badge: string;
  shortSubtitle: string;
  projectTier: ProjectTier;
  category: 'ai-ml' | 'enterprise-architecture' | 'fintech' | 'healthtech' | 'edtech' | 'sportstech' | 'business';
  categoryLabel: string;
  keyTech: string;
  screenshotUrl?: string;
  screenshotAlt: string;
  screenshotPlaceholder?: string;
  metricLine: string;
  isSignature?: boolean;
  isLiveProduction?: boolean;
  liveUrl?: string;
  role?: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  technologies: string[];
  metrics?: Metric[];
  systemSchema?: {
    title: string;
    flow: string;
    nodes: SchemaNode[];
  };
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyOutputs: string[];
  icon: string;
}

export interface PipelineStep {
  step: string;
  title: string;
  tagline: string;
  deliverables: string[];
  focus: string;
}

export interface ArchitectureLabItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  diagramTitle: string;
  flowSteps: {
    number: string;
    label: string;
    description: string;
    tech: string;
  }[];
  keyTakeaways: string[];
  stack: string[];
}

export interface TechItem {
  name: string;
  category: string;
  badge?: string;
}

export interface TechCategory {
  category: string;
  description: string;
  items: string[];
}
