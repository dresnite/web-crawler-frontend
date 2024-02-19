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

export async function requestJobs(ownerId: string) {
    const originalJobsByOwnerQuery = `#graphql
        query JobsByOwner($owner: ID!) {
            originalCrawlingJobsByOwner(owner: $owner) {
                seed,
                status
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