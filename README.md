# climaApp

Este projeto foi construído utilizando o Expo que é uma tecnologia bastante eficiente
para quem trabalha com react native e por esse motivo é necessário baixar o app
Expo Go em um dispositivo mobile para que ao realizar o build da aplicação, o tester 
possa abrir o aplicativo via expo. Segue o link do aplicativo na play store

https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share

ou no caso do dispositivo ser apple

https://apps.apple.com/br/app/expo-go/id982107779 

obs: É possivel utilizar o expo via browser, mas no caso deste app eu realizei 
via dispositivo físico. 

# configurações e execução

Uma vez feito o clone do projeto o tester/dev deverá entrar no diretório raiz 
do projeto e executar o comando npm install ou yarn, para que as dependências
possam ser baixadas no mesmo. Uma vez realizado o download o tester/dev deverá 
rodar o comando: npx expo start

Ao executar este comando, após o starting deverá aparecer um QRCODE da aplicação
e isso deve ser scaneado via Expo Go. Assim o aplicativo será buildado no dispositivo 
físico
![qrcode](https://github.com/igormelo9001/climaApp/assets/23384529/b411033e-d33e-488a-9ac4-a4b3b088b9a8)

obs: O dispositivo deverá estar na mesma rede wifi que a aplicação estiver rodando.

