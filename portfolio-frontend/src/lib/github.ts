export interface GithubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
    created_at: string;
    updated_at: string;
}

interface RepositoryNode {
    id: number;
    name: string;
    description: string | null;
    url: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: {
        name: string;
    } | null;
    repositoryTopics: {
        nodes: TopicNode[];
    };
    createdAt: string;
    updatedAt: string;
}

interface TopicNode {
    topic: {
        name: string;
    }
}

export async function fetchPinnedRepos(): Promise<GithubRepo[]> {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            query: `{
                user(login: "michelmany") {
                  pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                      ... on Repository {
                        id
                        name
                        description
                        url
                        stargazerCount
                        forkCount
                        primaryLanguage {
                          name
                        }
                        repositoryTopics(first: 10) {
                          nodes {
                            topic {
                              name
                            }
                          }
                        }
                        createdAt
                        updatedAt
                      }
                    }
                  }
                }
              }`
        })
    });

    if (!response.ok) {
        throw new Error('Failed to fetch repositories');
    }

    const data = await response.json();

    // Transform GraphQL response to match our interface
    return data.data.user.pinnedItems.nodes.map((repo: RepositoryNode): GithubRepo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        html_url: repo.url,
        stargazers_count: repo.stargazerCount,
        forks_count: repo.forkCount,
        language: repo.primaryLanguage?.name || 'Unknown',
        topics: repo.repositoryTopics.nodes.map((topic: TopicNode) => topic.topic.name),
        created_at: repo.createdAt,
        updated_at: repo.updatedAt
    }));
}
