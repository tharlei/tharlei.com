
export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  fork: boolean;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export const fetchRepositories = async (): Promise<Repository[]> => {
  try {
    const response = await fetch('https://api.github.com/users/tharlei/repos?sort=updated&per_page=12');
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

export const fetchLanguages = async (repo: string): Promise<Record<string, number>> => {
  try {
    const response = await fetch(`https://api.github.com/repos/tharlei/${repo}/languages`);
    if (!response.ok) {
      throw new Error(`Failed to fetch languages for ${repo}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching languages for ${repo}:`, error);
    return {};
  }
};
