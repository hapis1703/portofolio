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

export async function sendDiscordMessage(name, email, message) {
  try {
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK;
    
    const discordPayload = {
      content: `**New Portfolio Contact Message**\n\n**From:** ${name}\n**Email:** ${email}\n**Message:**\n> ${message}`
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordPayload),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending Discord message:', error);
    return false;
  }
}

export async function createQRIS(amount) {
  try {
    const accountId = import.meta.env.VITE_BUATQRIS_ACCOUNT_ID;
    const secretToken = import.meta.env.VITE_BUATQRIS_SECRET_TOKEN;

    const params = new URLSearchParams();
    params.append('action', 'api_create_qris');
    params.append('account_id', accountId);
    params.append('secret_token', secretToken);
    params.append('amount', amount);
    params.append('description', 'Donation from Portfolio');
    params.append('qris_method', 'qris_two');

    const response = await fetch('https://api.buatqris.site', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const result = await response.json();
    
    if (result.success && result.data) {
      return { success: true, data: result.data };
    }
    
    return { success: false, error: 'Failed to generate QRIS' };
  } catch (error) {
    console.error('Error creating QRIS:', error);
    return { success: false, error: error.message };
  }
}

export async function checkQRISStatus(transactionId) {
  try {
    const accountId = import.meta.env.VITE_BUATQRIS_ACCOUNT_ID;
    const secretToken = import.meta.env.VITE_BUATQRIS_SECRET_TOKEN;

    const params = new URLSearchParams();
    params.append('action', 'api_check_status');
    params.append('account_id', accountId);
    params.append('secret_token', secretToken);
    params.append('transaction_id', transactionId);

    const response = await fetch('https://api.buatqris.site', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const result = await response.json();
    
    if (result.success && result.data) {
      return { success: true, status: result.data.status };
    }
    
    return { success: false, error: 'Failed to check status' };
  } catch (error) {
    console.error('Error checking QRIS status:', error);
    return { success: false, error: error.message };
  }
}
