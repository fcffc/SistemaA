package br.com.ted.dsa.sistemaa.stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NovoRegistroTest {

	WebDriver driver;

	@Given("^que o usuario esta na tela de cadastro$")
	public void que_o_usuario_esta_na_tela_de_cadastro() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:8080/TedDsa/index.jsf");

	}

	@When("^ele digita corretamente o nome$")
	public void ele_digita_corretamente_o_nome() throws Throwable {

		driver.findElement(By.id("reg:name")).sendKeys("Joao Paulo");

	}

	@When("^ele digita corretamente o email$")
	public void ele_digita_corretamente_o_email() throws Throwable {

		driver.findElement(By.id("reg:email")).sendKeys("joao@email.com.br");

	}

	@When("^ele digita corretamente o numero do telefone$")
	public void ele_digita_corretamente_o_numero_do_telefone() throws Throwable {

		driver.findElement(By.id("reg:phoneNumber")).sendKeys("659999999999");

	}

	@When("^ele pressiona o botao de registro$")
	public void ele_pressiona_o_botao_de_registro() throws Throwable {

		driver.findElement(By.id("reg:register")).click();

	}

	@Then("^o cadastro eh realizado com sucesso$")
	public void o_cadastro_eh_realizado_com_sucesso() throws Throwable {
		
		WebElement element = driver.findElement(By.className("valid"));		
		Assert.assertTrue(element.getText().equals("Registrado com sucesso."));
		//driver.findElement(By.tagName("html")).getText().contains("Registrado com sucesso.");
		// driver.quit();

	}

	// Cenário 2

	@Given("^que ja existe um cliente registrado$")
	public void que_ja_existe_um_cliente_registrado() throws Throwable {

		driver.findElement(By.tagName("html")).getText().contains("joao@email.com.br");

	}

	@When("^preenche o email de um cliente ja registrado$")
	public void preenche_o_email_de_um_cliente_ja_registrado() throws Throwable {

		driver.findElement(By.id("reg:email")).sendKeys("joao@email.com.br");

	}

	@Then("^a mensagem de email ja registrado eh mostrada$")
	public void a_mensagem_de_email_ja_registrado_eh_mostrada() throws Throwable {

//	Boolean msg= driver.findElement(By.tagName("html")).getText().contains("Falha ao registrar, este email ja existe");
//	Assert.assertEquals("Falha ao registrar, este email ja existe",msg);
		// driver.quit();
		WebElement element = driver.findElement(By.className("invalid"));		
		Assert.assertTrue(element.getText().equals("Falha ao registrar, este email ja existe"));


	}
}