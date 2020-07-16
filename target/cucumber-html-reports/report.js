$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "As an User of Kaala application, I want to verify the login functionality.",
  "description": "",
  "id": "as-an-user-of-kaala-application,-i-want-to-verify-the-login-functionality.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2431488220,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User should be on SignIn page of Kaala.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 5,
  "name": "login to Kaala test Scenario",
  "description": "",
  "id": "as-an-user-of-kaala-application,-i-want-to-verify-the-login-functionality.;login-to-kaala-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User is present on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Kaala",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters UserName and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User navigates to HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_present_on_login_page()"
});
formatter.result({
  "duration": 3840179656,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_is_Kaala()"
});
formatter.result({
  "duration": 67490041,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 182187516,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2662378422,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7537886,
  "error_message": "java.lang.AssertionError: expected [Kaala] but found [Kaala1]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:453)\n\tat org.testng.Assert.assertEquals(Assert.java:463)\n\tat cucumberFramework.stepDefinitions.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:54)\n\tat ✽.Then User navigates to HomePage(./src/test/resources/features/login.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 433460830,
  "status": "passed"
});
});