package cucumberFramework.stepDefinitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

@Feature("Login Feature")
public class LoginStepDefinition {

    WebDriver driver;

    @Before
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }

    @Story("User tries to login to the Kaala Application and validate title of the homepage.")
    @Given("^User is present on login Page$")
    public void user_present_on_login_page() {
        driver.get("http://kaala.herokuapp.com/users/sign_in");
    }

    @When("^title of login page is Kaala$")
    public void title_of_login_is_Kaala() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Kaala", title);
    }

    @Then("^User enters UserName and Password$")
    public void user_enters_username_and_password() {
        driver.findElement(By.id("user_email")).sendKeys("ramyak@testvagrant.com");
        driver.findElement(By.id("user_password")).sendKeys("ramya0074");
    }

    @Then("^User clicks on Login Button$")
    public void user_clicks_on_login_button() {
        WebElement loginBtn = driver.findElement(By.name("commit"));
        loginBtn.click();
    }

    @Then("^User should navigate to HomePage$")
    public void user_is_on_home_page() {
        String title = driver.getTitle();
        System.out.println("Home Page title ::" + title);
        Assert.assertEquals("Kaala", title);
    }

    @Then("^Close the browser$")
    public void close_the_browser() {
        driver.quit();
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            // Take a screenshot...
            final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
    }

}
