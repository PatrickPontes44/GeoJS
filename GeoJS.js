
function getPosition(apiResult = false) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess,handleError);
  } else {
    return "Geolocalização não suportada no browser";
  }
}

const handleSuccess = async position => {
    const {latitude, longitude} = position.coords;
    // const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    const response = await fetch(`https://geocode.xyz/-25.3683792,-49.1727187?geoit=json`);
    // SUGIRO QUE VOCÊ DÊ UMA OLHADA NO OBJETO DATA, TEM MUITA INFORMAÇÃO LEGAL NELE.
    const data = await response.json();
    const { postal:cep, staddress:endereco, region:municipio } = data;
    const { name:bairro } = data.osmtags;
    // Resultados como cep, endereço e número da casa serão aproximados.
    console.log(`CEP: ${cep}, rua: ${endereco}, municipio: ${municipio}, bairro: ${bairro}`);
}

const handleError = error => {
    let errorMessage;
    switch(error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "Usuário recusou a solicitação para a Geolocalização";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "A informação sobre a Geolocalização está indisponível"
        break;
      case error.UNKNOWN_ERROR:
        errorMessage = "Ocorreu um erro desconhecido"
        break;
    }
    
    //FAÇA ALGUMA COISA COM A MENSAGEM DE ERRO
    console.log(errorMessage)
}

