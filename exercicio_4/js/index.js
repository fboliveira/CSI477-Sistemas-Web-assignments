const getRepository = async (user) => {
    /* 
        Esta função vai faz um request na API aberta do github
        e retorna um array contendo as seguintes informações do usuário
        login, email, public_repos, followers, following
    */

    try{
        const url = `https://api.github.com/users`;
        const data = await fetch(`${url}/${user}`)
            .then((data) => data.json())
            .catch((err) => err.json());
        const { login, email, public_repos, followers, following } = data;
        return [login, email, public_repos, followers, following] ;
    } catch(e) {
        console.error(e)
    }   
};

const showError = (show) => {
    /*
        Criar uma função que mostre um erro ao usuário
        quando o usuário pesquisado não existir 
    */
}

const insertRow = async () => {
    //Recupere o input digitado
    var nameValue = 

    const userInfos = await getRepository(nameValue)
    
    /*  
        Se o elemento login retornado pela função getRepository 
        for undefined, significa que o usuário não existe, então será
        mostrado ao usuário uma mensagem de erro
    */
    if(!userInfos[0]){
        showError(false)
        return true
    }

    //adicione o usuário digitado na tabela de id "myTable"

}