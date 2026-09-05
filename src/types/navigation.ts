export interface NavItem {
  id: string;
  title: string;
  path: string;
  badge?: string;
  description?: string;
}

export interface NavSection {
  id: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  available: boolean;
  icon?: string;
  items?: NavItem[];
}
