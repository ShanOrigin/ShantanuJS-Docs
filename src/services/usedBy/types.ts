export interface UsedByProject {
  id: string;
  name: string;
  usage: string;
  projectUrl: string;
  createdAt: string;
}

export interface NewUsedByProjectInput {
  name: string;
  usage: string;
  projectUrl: string;
}
