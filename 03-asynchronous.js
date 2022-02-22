const getGitHubUser = (user) => {  
  let dataPertemanan = []

        if (username) {
          let dataPertemananFromLS = localStorage.getItem(username)
          if (dataPertemananFromLS) {
            dataPertemanan = JSON.parse(dataPertemananFromLS)
          }
        }
        let isFollowed = false

        for (let i = 0; i < dataPertemanan.length; i++) {
          if (dataPertemanan[i] === user.login) {
            isFollowed = true
          }
        }
}
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();