package br.com.ted.dsa.sistemaa.stepdefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NovoRegistroTest {

	WebDriver driver;

	@Given("^Open firefox and start application$")
	public void open_firefox_and_start_application() throws Throwable {

	}

	@When("^I enter valid username and valid password$")
	public void i_enter_valid_username_and_valid_password() throws Throwable {

	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {

		driver.findElement(By.linkText("Esqueceu a conta?"));
		// driver.findElement(By.id("u_0_o")).click();
	}

	@Then("^application should be close$")
	public void application_should_be_close() throws Throwable {
		driver.quit();
	}

	@Given("^que o usuario esta na tela de cadastro$")
	public void que_o_usuario_esta_na_tela_de_cadastro() throws Throwable {
		// System.setProperty("browser", "phantomjs");
		// System.setProperty("phantomjs.binary.path",
		// "C:/Selenium/phantomjs-2.1.1-windows/bin/phantomjs.exe");
		// driver = new PhantomJSDriver();
		// driver.manage().window();
		// driver.get("http://facebook.com");

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:8080/TedDsa/index.jsf");

	}

	@When("^ele digita corretamente o nome$")
	public void ele_digita_corretamente_o_nome() throws Throwable {

		driver.findElement(By.id("reg:name")).sendKeys("Rubia");

	}

	@When("^ele digita corretamente o email$")
	public void ele_digita_corretamente_o_email() throws Throwable {

		driver.findElement(By.id("reg:email")).sendKeys("rubia@email.com.br");

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

		if (driver.findElement(By.xpath("html/body/div[1]/div[2]/table/tbody/tr[2]/td[1]")).isEnabled()) {
			System.out.println("Test 1 Pass");
		} else {
			System.out.println("Test 1 Fall");
		}
		driver.close();
	}

	@Given("^que ja existe um cliente registrado$")
	public void que_ja_existe_um_cliente_registrado() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:8080/TedDsa/index.jsf");
		driver.findElement(By.id("reg:name")).sendKeys("Maria");
		driver.findElement(By.id("reg:phoneNumber")).sendKeys("659999999998");

	}

	@When("^preenche o email de um cliente ja registrado$")
	public void preenche_o_email_de_um_cliente_ja_registrado() throws Throwable {

		driver.findElement(By.id("reg:email")).sendKeys("rubia@email.com.br");

	}

	@Then("^a mensagem de email ja registrado eh mostrada$")
	public void a_mensagem_de_email_ja_registrado_eh_mostrada() throws Throwable {

		if (!driver.findElement(By.tagName("html")).getText().contains("Falha ao registrar, este email ja existe")) {
			System.out.println("verifyTextPresent failed");
		}

	}
}
