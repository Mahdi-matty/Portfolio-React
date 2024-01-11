import { Octokit } from "https://esm.sh/@octokit/core";

const getRepository = () => {

const octokit = new Octokit({
  auth: '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'
})
    async function getuserrepo(){
         try {
      const response = await octokit.request('GET /users/:username/repos', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
        username: 'Mahdi-matty',
      });
      const repositories = response.data;
      console.log('Received response:', repositories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }
    getuserrepo()
}
;
  
  export default {
    getRepository,
  };