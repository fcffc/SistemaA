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
  "duration": 16405638041,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_nome()"
});
formatter.result({
  "duration": 1806149826,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_email()"
});
formatter.result({
  "duration": 273012281,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_numero_do_telefone()"
});
formatter.result({
  "duration": 222238655,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_pressiona_o_botao_de_registro()"
});
formatter.result({
  "duration": 1438254237,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.o_cadastro_eh_realizado_com_sucesso()"
});
formatter.result({
  "duration": 177717025,
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
  "duration": 12716512206,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.que_ja_existe_um_cliente_registrado()"
});
formatter.result({
  "duration": 991761975,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_nome()"
});
formatter.result({
  "duration": 1014847852,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.preenche_o_email_de_um_cliente_ja_registrado()"
});
formatter.result({
  "duration": 232576540,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_digita_corretamente_o_numero_do_telefone()"
});
formatter.result({
  "duration": 236887297,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.ele_pressiona_o_botao_de_registro()"
});
formatter.result({
  "duration": 859987170,
  "status": "passed"
});
formatter.match({
  "location": "NovoRegistroTest.a_mensagem_de_email_ja_registrado_eh_mostrada()"
});
formatter.result({
  "duration": 94502152,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"invalid\"}\nCommand duration or timeout: 78 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 17:00:58\u0027\nSystem info: host: \u0027Fernanda\u0027, ip: \u002710.127.127.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d39.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9002f6ad-3c14-4f4b-9ecf-e8eefa1da474\n*** Element info: {Using\u003dclass name, value\u003dinvalid}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat br.com.ted.dsa.sistemaa.stepdefination.NovoRegistroTest.a_mensagem_de_email_ja_registrado_eh_mostrada(NovoRegistroTest.java:81)\r\n\tat ✽.Then a mensagem de email ja registrado eh mostrada(CadastrarMembros.feature:18)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"invalid\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 17:00:58\u0027\nSystem info: host: \u0027Fernanda\u0027, ip: \u002710.127.127.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Fernanda/AppData/Local/Temp/anonymous5081727118549363961webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/Fernanda/AppData/Local/Temp/anonymous5081727118549363961webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Fernanda/AppData/Local/Temp/anonymous5081727118549363961webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Fernanda/AppData/Local/Temp/anonymous5081727118549363961webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Fernanda/AppData/Local/Temp/anonymous5081727118549363961webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
});