export class CustomIdentityRequestWrapper {
    accessToken;
    domain;
  
    constructor(API_KEY, domain) {
      // Initialize the class
      this.API_KEY = API_KEY;
      this.domain = domain;
    }
    async request(args) {
      try {
        const user = await this.currentUser();
        const response = await fetch(`${this.domain}/grants/${user.id}/${args.path}`, {
          method: args.method,  
          body: JSON.stringify(args.body),
          headers: {
            ...args.headers,
            'Authorization': `Bearer ${this.API_KEY}`,
            'Content-Type': 'application/json',
          },
        });
  
        // Check if the response is not okay (e.g., 404, 500)
        if (!response.ok) {
          console.error(`Error: ${response.status} ${response.statusText}`);
          return { error: `Error: ${response.status} ${response.statusText}` };
        }
  
        // Parse the response
        const data = await response.json();
        return [data, null];
      } catch (error) {
        console.error('Fetch error:', error);
        return { error: "Error" };
      }
    }
  
    /**
     * This method returns the current user's information.
     */
  
    async currentUser() {
      // IMPLEMENT: Get the logged in user's ID token and return the user information
      return {
        id: 'ID sub',
        email: 'email',
        name: 'name',
        provider: 'provider ex:google, microsoft, etc',
      };
    }
  
    /**
     * This method sets the default authentication arguments to use when authenticating the user.
     */
    async setDefaultAuthArgs(authArgs) {
      // Set the default authentication arguments
      return authArgs;
    }
  
    /**
     * This method returns the URL to redirect the user to for authentication.
     */
    async authenticationUrl() {
      // IMPLEMENT: Return the URL to redirect the user to for authentication
      return 'http://localhost:3000/scheduler-editor';
    }
  }