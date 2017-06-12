# Coletor de Sentimentos do Twitter

A node.js script for mining and viewing twitter sentiment on your local machine. 

[Video demo](https://www.youtube.com/watch?v=VsPk9lWuktg)
[Fonte](Fonte: https://github.com/kirkins/Twitter-Sentiment-Collector)

## Configuração
1. Vá ao apps.twitter.com e crie uma aplicação em sua conta
2. Resgate os seguintes dados: consumer key, consumer secret, access token, e access secret.
3. Abra '/config/config.js' e atualize os valores com as credenciais do passo 2.

## Como usar
    git clone https://github.com/claranobre/AnaliseEmocional
    cd AnaliseEmocional
    npm install
    node mine.js "procurar termo"
    
abra outra tab (ctrl+shift+t)
    
    node graph.js

You'll now be able to see a list of search data in your browser at localhost:3000

The first script will continue mining 100 tweets a minute. You can also open multiple tabs and run multiple searches simeltaniously. 

You can experiment with increasing the speed at which tweets are requested from Twitter. I don't know at which point twitter restricts api access.
