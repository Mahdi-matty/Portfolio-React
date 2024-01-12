import { Octokit } from "https://esm.sh/@octokit/core";

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
  // console.log('Received response:', repositories);
  return repositories;
  } catch (error) {
  console.error('Error fetching data:', error);
  }
}

const getRepository = async () => {
   return await getuserrepo()
}
;
  
  export default {
    getRepository,
  };