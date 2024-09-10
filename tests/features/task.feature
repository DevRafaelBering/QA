Feature: Gerenciamento de Tarefas

  Scenario: Adicionar uma nova tarefa
    Given eu estou na página de gerenciamento de tarefas
    When eu adiciono uma nova tarefa "Comprar leite"
    Then a tarefa "Comprar leite" deve aparecer na lista de tarefas
