Feature: Cadastrar membros participantes do TEDxDSA 

Scenario: Novo registro 
	Given que o usuario esta na tela de cadastro 
	When ele digita corretamente o nome 
	When ele digita corretamente o email 
	When ele digita corretamente o numero do telefone 
	When ele pressiona o botao de registro 
	Then o cadastro eh realizado com sucesso 
	
Scenario: N�o � poss�vel registrar um membro com um e-mail ja cadastrado
	Given que ja existe um cliente registrado
	Given que o usuario esta na tela de cadastro 
	When ele digita corretamente o nome 
	When preenche o email de um cliente ja registrado 
	When ele digita corretamente o numero do telefone 
	When ele pressiona o botao de registro 
	Then a mensagem de email ja registrado eh mostrada
	
	