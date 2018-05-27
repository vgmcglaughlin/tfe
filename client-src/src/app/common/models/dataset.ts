export interface DatasetItem {
  title: string;
  description: string;
  thumbnail: string;
  externalLink: string;
}

export interface DatasetAttribution {
  text: string;
  logo: string;
}

export interface Dataset {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  attribution: DatasetAttribution;
  items: DatasetItem[];
}
