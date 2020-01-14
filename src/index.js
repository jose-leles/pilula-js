const body = document.querySelector('body');

function buscaDeputados() {
    const response = fetch('https://dadosabertos.camara.leg.br/api/v2/deputados');
    response
        .then(data => data.json())
        .then(data => {
            const lista = data.dados.filter((item, index) => index <= 10);
            console.log(lista);
            lista.forEach(deputa => {
                const deputaNome = deputa.nome;
                const deputaFoto = deputa.urlFoto;
                const deputaPartido = deputa.siglaPartido;
                const deputaEmail = deputa.email;

                body.innerHTML += `
                    <div class="deputaLinha">
                        <img class="deputaFoto" src="${deputaFoto}" />
                        <div class="deputaDados">
                            <p class="deputaNome">Nome: <span class="deputaDadosBold">${deputaNome}</span></p>
                            <p class="deputaNome">Sigla Partido: <span class="deputaDadosBold">${deputaPartido}</span></p>
                            <p class="deputaNome">Email: <span class="deputaDadosBold">${deputaEmail}</span></p>
                        </div>
                    </div>
                `;
            });
        })
        .catch(e => {
            body.innerHTML = 'DEU RUIM LADRÃO';
        })
}

// async function buscaReputados() {
//     const response = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados');
//     const json = await response.json();
//     console.log(json);
// }

buscaDeputados();