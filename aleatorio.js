const nomes = ["Julia", "Dayana", "Maria Cecilia", "Mathew", "Ana Clara", "Guilhermo", "Gabriela"];

export function aleatorio (lista){
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}

export const nome = aleatorio(nomes)