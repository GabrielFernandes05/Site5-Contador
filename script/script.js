function Calcular(){
    let texto = document.getElementById('texto')
    let caracteres = texto.value.replace(/\s+/g, '').length
    let palavras = texto.value.trim().split(/\s+/).length
    let linhas = texto.value.split('\n').length
    let caracteres_html = window.document.getElementById('caracteres1')
    let palavras_html = window.document.getElementById('palavras1')
    let linhas_html = window.document.getElementById('linhas1')
    caracteres_html.innerHTML = caracteres
    palavras_html.innerHTML = palavras
    linhas_html.innerHTML = linhas
}