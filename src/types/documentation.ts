export interface ApiParameter {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description: string;
}

export interface ApiProperty {
  name: string;
  type: string;
  description: string;
}

export interface ApiMethod {
  name: string;
  signature: string;
  returnType: string;
  description: string;
  parameters?: ApiParameter[];
  example?: string;
}

export interface ApiReference {
  constructorSignature?: string;
  parameters?: ApiParameter[];
  properties?: ApiProperty[];
  methods?: ApiMethod[];
}

export interface DocSectionBlock {
  id: string;
  title: string;
  lead?: string;
  content: string[];
  codeSnippets?: {
    title?: string;
    language: string;
    code: string;
  }[];
  demoId?: string;
  apiReference?: ApiReference;
  tips?: string[];
  warnings?: string[];
}

export interface DocumentationDoc {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  lead: string;
  lastUpdated?: string;
  blocks: DocSectionBlock[];
  nextDoc?: { title: string; path: string };
  prevDoc?: { title: string; path: string };
}
