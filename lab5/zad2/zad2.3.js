function getFirstRepository(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
       .then(response => {
          if (!response.ok) {
             throw new Error('Network response was not ok');
          }
          return response.json();
       })
       .then(repositories => {
          if (repositories.length > 0) {
             return repositories[0].name;
          } else {
             throw new Error('User has no repositories');
          }
       });
 }
 
 // Пример использования:
 getFirstRepository('Razvald')
    .then(repositoryName => {
       console.log(`Первый репозиторий пользователя: ${repositoryName}`);
    })
    .catch(error => {
       console.error('Ошибка:', error);
    });