$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CadastrarMembros.feature");
formatter.feature({
  "line": 1,
  "name": "Cadastrar membros participantes do TEDxDSA",
  "description": "",
  "id": "cadastrar-membros-participantes-do-tedxdsa",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Novo registro",
  "description": "",
  "id": "cadastrar-membros-participantes-do-tedxdsa;novo-registro",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esta na tela de cadastro",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "ele digita corretamente o nome",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ele digita corretamente o email",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "ele digita corretamente o numero do telefone",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "ele pressiona o botao de registro",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "o cadastro eh realizado com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "NovoRegistroTest.que_o_usuario_esta_na_tela_de_cadastro()"
});
formatter.result({
  "duration": 19915797012,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_nome()"
});
formatter.result({
  "duration": 448859912,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_email()"
});
formatter.result({
  "duration": 1258048729,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_numero_do_telefone()"
});
formatter.result({
  "duration": 319321663,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_pressiona_o_botao_de_registro()"
});
formatter.result({
  "duration": 1742929122,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.o_cadastro_eh_realizado_com_sucesso()"
});
formatter.result({
  "duration": 309434913,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Nao eh possivel registrar um membro com um email ja cadastrado",
  "description": "",
  "id": "cadastrar-membros-participantes-do-tedxdsa;nao-eh-possivel-registrar-um-membro-com-um-email-ja-cadastrado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "que o usuario esta na tela de cadastro",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "que ja existe um cliente registrado",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "ele digita corretamente o nome",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "preenche o email de um cliente ja registrado",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "ele digita corretamente o numero do telefone",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "ele pressiona o botao de registro",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "a mensagem de email ja registrado eh mostrada",
  "keyword": "Then "
});
formatter.match({
  "location": "NovoRegistroTest.que_o_usuario_esta_na_tela_de_cadastro()"
});
formatter.result({
  "duration": 15464682350,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.que_ja_existe_um_cliente_registrado()"
});
formatter.result({
  "duration": 783658778,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_nome()"
});
formatter.result({
  "duration": 1590284468,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.preenche_o_email_de_um_cliente_ja_registrado()"
});
formatter.result({
  "duration": 349398057,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_numero_do_telefone()"
});
formatter.result({
  "duration": 251657705,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_pressiona_o_botao_de_registro()"
});
formatter.result({
  "duration": 1036482814,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.a_mensagem_de_email_ja_registrado_eh_mostrada()"
});
formatter.result({
  "duration": 169621293,
  "status": "passed"
});
});