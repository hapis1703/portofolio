const GITHUB_USERNAME = 'hapis1703';
const GITHUB_API = 'https://api.github.com';
const PINNED_API = 'https://gh-pinned-repos.egoist.dev';

export async function fetchGitHubProfile() {
  try {
    const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch profile');
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
}

export async function fetchPinnedRepos() {
  try {
    const response = await fetch(`${PINNED_API}/?username=${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch pinned repos');
    return await response.json();
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return [];
  }
}

export async function fetchRecentRepos() {
  try {
    const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
    if (!response.ok) throw new Error('Failed to fetch repos');
    return await response.json();
  } catch (error) {
    console.error('Error fetching recent repos:', error);
    return [];
  }
}

export const FALLBACK_PROFILE = {
  avatar_url: 'https://github.com/hapis1703.png',
  name: 'Hapis',
  bio: 'Creative Developer | Tech Enthusiast',
  html_url: 'https://github.com/hapis1703',
  public_repos: 0,
  followers: 0,
  location: 'Indonesia',
};
