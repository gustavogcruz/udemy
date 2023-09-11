FROM node:alpine 
#imagem a ser utilizada
COPY . /app 
# arquivo a ser copiado de forma simples. origem | destino
WORKDIR /app
#diretório de trabalho
CMD node app.js
#comando a ser executado (imagem já criada)

#RUN (criando imagem) - execute essa aplicação, processo, instala alguma dependência,etc.
#ENV - configurações do ambiente, variavéis, etc.
#EXPOSE - configuração de porta
#USER - usuário responsável pela execução
#ENTRYPOINT - execução de comandos
#ADD - adição de arquivo mais complexo. Exemplo: ZIP, de SITE, etc. origem | destino