import { BACKEND_URL } from "../utils/config";

export async function requestLogin(username: string, password: string) {
  const response = await fetch(`${BACKEND_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return response;
}

export async function requestSignup(username: string, password: string) {
    const response = await fetch(`${BACKEND_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });
    
      return response;
}

export async function requestLogout() {
    const response = await fetch(`${BACKEND_URL}/user/logout`, {
        method: "POST",
        credentials: "include"
      });
    
      return response;
}

export async function requestJobsByParentId(parentId: string) {
  const crawlingJobsByParentIdQuery = `#graphql
    query JobsByParentId($parentId: ID!) {
        crawlingJobsByParentId(parentId: $parentId) {
            id,
            seed,
            status,
            linksFound
        }
    }
`;

  const response = await fetch(`${BACKEND_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        query: crawlingJobsByParentIdQuery,
        variables: {
          parentId
        }
      }),
    });
  
    return response;
}

export async function requestOriginalJobs(ownerId: string) {
    const originalJobsByOwnerQuery = `#graphql
        query JobsByOwner($owner: ID!) {
            originalCrawlingJobsByOwner(owner: $owner) {
                id,
                seed,
                status,
                linksFound
            }
        }
    `;

    const response = await fetch(`${BACKEND_URL}/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          query: originalJobsByOwnerQuery,
          variables: {
            owner: ownerId
          }
        }),
      });
    
      return response;
}

export async function createJob(ownerId: string, seed: string) {
  const createJobQuery = `#graphql
      mutation CreateCrawlingJob($owner: ID!, $seed: String!, $parent: ID) {
          createCrawlingJob(owner: $owner, seed: $seed, parent: $parent) {
              seed
          }
      }
  `;

  const response = await fetch(`${BACKEND_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        query: createJobQuery,
        variables: {
          owner: ownerId,
          seed
        }
      }),
    });
  
    return response;
}