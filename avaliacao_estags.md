### Instruções

### Desafio

Um dos serviços mais utilizados pelos usuários de aparelhos celulares são os SMS (Short Message Service), que permite o envio de mensagens curtas (até 255 caracteres em redes GSM e 160 caracteres em redes CDMA).

Para digitar uma mensagem em um aparelho que não possui um teclado QWERTY embutido é necessário fazer algumas combinações das 10 teclas numéricas do aparelho para conseguir digitar. Cada número é associado a um conjunto de letras como a seguir:

| Letras | Número |
| ------ | ------ |
| ABC    | 2      |
| DEF    | 3      |
| GHI    | 4      |
| JKL    | 5      |
| MNO    | 6      |
| PQRS   | 7      |
| TUV    | 8      |
| WXYZ   | 9      |
| Espaço | 0      |

Desenvolva um programa que:

1. Dada uma mensagem de texto limitada a 255 caracteres, retorne a seqüência de números que precisa ser digitada.
2. Dada uma sequencia de números retorne o texto

Caso uma sequencia use a mesma tecla, deve ser usada “\_” para separar.

Por exemplo, para digitar "TESTE DE MESA", você precisa digitar:
833777783303_33063377772

### Requisitos

Desenvolver um programa conforme o desafio detalhado abaixo

- Considere a criação de uma arquivo README.md para descrever como implantar e executar a aplicação.
- Considere utilizar boas práticas de desenvolvimento de software como TDD (https://www.youtube.com/watch?v=2G_mWfG0DZE)
- A aplicação deverá ter o rastreamento do que o usuário realizou no sistema (salve no mongodb e liste o resultado de todas as SMS no front).
- Criar uma API em NodeJS:
  - Endpoint de conversão (texto para numero e vice-versa).
  - Endpoint que liste todos os SMS convertidos para texto, com opções de filtro por data e paginação.

- Utilizar MongoDB (quem usar docker e docker-compose ganha um pontinho no coração - https://www.youtube.com/watch?v=AVNADGzXrrQ     https://www.youtube.com/watch?v=hP77Rua1E0c)
- Colocar o código no GITHUB

### Itens importantes:

- Faça testes unitários (quanto mais cobertura melhor);
- Estrutura do Código (Código Limpo);
- Não se ajudem, não copie do colega, avaliação é individual;

Arquitetura, Frameworks, organização de arquivos e Endpoints da API estão livres para implementar conforme julgar mais adequado.