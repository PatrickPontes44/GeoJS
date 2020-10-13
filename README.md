# GeoJS

## O que esse script faz?
Ele solicita acesso à API de geolocalização do browser e com os dados retornados por ela faz uma requisição a uma API publica para obtter informções como endereço, cep, bairro, município, etc. (Informações muito precisas como endereço e número da casa serão aproximadas, mas podem ter um resultado melhor caso a API do browser seja optimizada ou o browser uitlizado esteja em um dispositivo com GPS).

## Como usar esse script?
É bem simples, basta adicioná-lo ao seu documento HTML e em seguida chamar a função <i> getPosition() </i>.
Porém, você terá que configurar no próprio script como os dados obtidos serão tratados, pois a essa função não tem retorno para sucesso, apenas para o caso de o browser não suportar a geolocalização.

A função <i> getPosition() </i>. Recebe dois callbacks, <i> handleSuccess </i> e <i> handleError() </i>, é nesses callbacks onde você poderá escolher o que acontecerá com os dados em caso de sucesso e de falha.

A API publica utilizada é a [Geocode.xyz](https://geocode.xyz/api), a requisição dos dados é feita utilizando fetch, mas pode ser alterada para outra biblioteca sem nenhum problema.

## Considerações finais
Caso você tenha gostado desse script deixe uma Estrela para o repositório!
