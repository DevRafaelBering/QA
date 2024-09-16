Requisitos Funcionais (RF)

RF001 - Adicionar nova tarefa
Cenário 1: Adicionar uma tarefa com sucesso
Funcionalidade: Adicionar tarefa
Cenário: O usuário adiciona uma nova tarefa
Dado que o usuário está na página de tarefas
E o campo de entrada da tarefa está vazio
Quando o usuário insere o nome da tarefa e clica no botão "Adicionar"
Então a nova tarefa deve ser exibida na lista de tarefas abaixo da última tarefa

Cenário 2: Tentativa de adicionar uma tarefa sem nome
Funcionalidade: Adicionar tarefa
Cenário: O usuário tenta adicionar uma tarefa sem nome
Dado que o campo de entrada da tarefa está vazio
Quando o usuário tenta clicar no botão "Adicionar"
Então o sistema deve exibir uma mensagem de erro informando que o nome da tarefa é obrigatório

RF002 - Remover tarefa
Cenário 1: Remover uma tarefa existente
Funcionalidade: Remover tarefa
Cenário: O usuário remove uma tarefa existente
Dado que o usuário está visualizando a lista de tarefas
E a lista contém ao menos uma tarefa
Quando o usuário clica no ícone de remoção de uma tarefa específica
Então a tarefa deve ser removida da lista

Cenário 2: Tentativa de remover uma tarefa inexistente
Funcionalidade: Remover tarefa
Cenário: O usuário tenta remover uma tarefa que não existe
Dado que a lista de tarefas está vazia
Quando o usuário tenta clicar no botão de remover
Então o sistema não deve permitir a remoção e deve exibir uma mensagem informando que não há tarefas para remover

RF003 - Editar tarefa
Cenário 1: Editar uma tarefa existente com sucesso
Funcionalidade: Editar tarefa
Cenário: O usuário edita o nome de uma tarefa existente
Dado que o usuário está visualizando a lista de tarefas
E há uma tarefa selecionada para edição
Quando o usuário clica no botão de edição e insere um novo nome
Então o nome da tarefa deve ser atualizado na lista de tarefas

Cenário 2: Tentativa de editar uma tarefa sem alterar o nome
Funcionalidade: Editar tarefa
Cenário: O usuário tenta editar uma tarefa sem alterar o nome
Dado que o nome da tarefa selecionada está visível para edição
Quando o usuário não altera o nome e tenta salvar
Então o sistema deve exibir uma mensagem de erro informando que o nome da tarefa precisa ser alterado

RF004 - Marcar tarefa como concluída
Cenário 1: Marcar uma tarefa como concluída
Funcionalidade: Marcar tarefa como concluída
Cenário: O usuário marca uma tarefa como concluída
Dado que o usuário está visualizando a lista de tarefas
Quando o usuário clica no checkbox ao lado de uma tarefa específica
Então a tarefa deve ser movida para a seção de tarefas concluídas

Cenário 2: Desmarcar uma tarefa concluída
Funcionalidade: Marcar tarefa como concluída
Cenário: O usuário desmarca uma tarefa que já foi concluída
Dado que a tarefa está na seção de tarefas concluídas
Quando o usuário desmarca o checkbox
Então a tarefa deve ser movida de volta para a lista de tarefas ativas

RF005 - Visualizar detalhes da tarefa
Cenário 1: Visualizar os detalhes de uma tarefa existente
Funcionalidade: Visualizar detalhes da tarefa
Cenário: O usuário visualiza os detalhes de uma tarefa
Dado que o usuário está visualizando a lista de tarefas
Quando o usuário clica no nome de uma tarefa específica
Então os detalhes da tarefa devem ser exibidos em uma nova janela ou modal

Cenário 2: Tentativa de visualizar uma tarefa inexistente
Funcionalidade: Visualizar detalhes da tarefa
Cenário: O usuário tenta visualizar os detalhes de uma tarefa que não existe
Dado que a lista de tarefas está vazia
Quando o usuário tenta clicar em uma tarefa
Então o sistema deve exibir uma mensagem informando que não há detalhes para exibir






Requisitos Não Funcionais (RNF)

RNF001 - Desempenho do sistema de login
Cenário 1: Tempo de resposta aceitável
Funcionalidade: Sistema de Login
Cenário: Tempo de resposta do sistema de login
Dado que o usuário insere credenciais de login válidas
Quando o usuário clica no botão "Entrar"
Então o sistema deve autenticar o usuário e conceder acesso em menos de 2 segundos

Cenário 2: Tempo de resposta fora do aceitável
Funcionalidade: Sistema de Login
Cenário: Tempo de resposta lento no login
Dado que o usuário insere credenciais válidas
Quando o sistema demora mais de 2 segundos para autenticar
Então o sistema deve exibir uma mensagem de erro ou aviso sobre o tempo de resposta excedido

RNF002 - Responsividade do sistema
Cenário 1: Interface ajustada para dispositivos móveis
Funcionalidade: Interface responsiva
Cenário: O sistema é acessado em um dispositivo móvel
Dado que o usuário está acessando o sistema de um dispositivo móvel
Quando o usuário visualiza a interface
Então a interface deve se ajustar automaticamente para uma exibição otimizada em telas menores

Cenário 2: Interface não otimizada para dispositivos móveis
Funcionalidade: Interface responsiva
Cenário: O sistema não se ajusta corretamente
Dado que o usuário está acessando o sistema de um dispositivo móvel
Quando o usuário visualiza a interface
Então o sistema deve exibir uma mensagem de erro ou comportamento inadequado ao renderizar em telas pequenas

RNF003 - Disponibilidade do sistema
Cenário 1: Sistema disponível durante horários de pico
Funcionalidade: Alta disponibilidade do sistema
Cenário: O sistema é acessado durante horários de pico
Dado que o sistema está em operação durante o horário de pico
Quando um grande número de usuários tenta acessar simultaneamente
Então o sistema deve continuar operando sem interrupções

Cenário 2: Sistema indisponível durante horários de pico
Funcionalidade: Alta disponibilidade do sistema
Cenário: O sistema fica indisponível
Dado que o sistema está em operação durante o horário de pico
Quando um grande número de usuários tenta acessar simultaneamente
Então o sistema deve exibir uma mensagem informando que está fora do ar

RNF004 - Segurança dos dados
Cenário 1: Dados criptografados durante a transmissão
Funcionalidade: Criptografia de dados
Cenário: O sistema processa dados sensíveis do usuário
Dado que o usuário está inserindo dados confidenciais, como senhas
Quando os dados são transmitidos para o servidor
Então os dados devem ser criptografados durante o processo de transmissão

Cenário 2: Falha na criptografia dos dados
Funcionalidade: Criptografia de dados
Cenário: Falha na proteção dos dados do usuário
Dado que o usuário está inserindo dados confidenciais
Quando o sistema não criptografa os dados corretamente
Então o sistema deve exibir um alerta de falha de segurança

RNF005 - Escalabilidade
Cenário 1: Suporte a 1.000 usuários simultâneos
Funcionalidade: Suporte a múltiplos usuários simultâneos
Cenário: O sistema suporta um grande número de usuários simultaneamente
Dado que o sistema está sendo acessado por 1.000 usuários ao mesmo tempo
Quando todos os usuários tentam utilizar o sistema
Então o sistema deve suportar a carga sem perda significativa de desempenho

Cenário 2: Falha ao suportar múltiplos usuários
Funcionalidade: Suporte a múltiplos usuários simultâneos
Cenário: O sistema não suporta um grande número de usuários simultâneos
Dado que o sistema está sendo acessado por mais de 1.000 usuários ao mesmo tempo
Quando muitos usuários tentam utilizar o sistema
Então o sistema deve apresentar lentidão ou erros de carregamento



FIM



