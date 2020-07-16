package cucumberFramework.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        snippets= SnippetType.CAMELCASE,
        glue = {"cucumberFramework.stepDefinitions"},
        features = "./src/test/resources/features/login.feature",
        monochrome = true,
        plugin = { "pretty", "html:target/cucumber-html-reports",
                "json:target/cucumber-html-reports/cucumber.json",
                "rerun:target/failed_scenarios.txt" })

public class TestRunner { }
