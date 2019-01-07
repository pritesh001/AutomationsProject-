$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/taskmanager.feature");
formatter.feature({
  "id": "title-of-your-feature",
  "tags": [
    {
      "name": "@tag",
      "line": 2
    }
  ],
  "description": "I want to use this template for my feature file",
  "name": "Title of your feature",
  "keyword": "Feature",
  "line": 3,
  "comments": [
    {
      "value": "#Author: your.email@your.domain.com",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "title-of-your-feature;title-of-your-scenario",
  "tags": [
    {
      "name": "@tag1",
      "line": 6
    }
  ],
  "description": "",
  "name": "Title of your scenario",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in as a \"TaskManageruser\" in the Task Manager Portal",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I click on the Admin under that  fallouts the Fallout page should come",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I complete action for the claim for the third party with request id",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "I complete action for the complete for the third party with request id",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "I complete action for the socn claim  for the third party with request id",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I complete action for the socn complete  for the third party with request id",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I see the final status completed for both socn and focn",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "TaskManageruser",
      "offset": 21
    }
  ],
  "location": "TaskManagerUserStepsDefinition.given_I_am_logged_in_as_a_in_the_Task_Manager_Portal(String)"
});
formatter.result({
  "duration": 15552682067,
  "status": "passed"
});
formatter.match({
  "location": "TaskManagerUserStepsDefinition.i_click_on_the_Admin_under_that_fallouts_the_Fallout_page_should_come()"
});
formatter.result({
  "duration": 74742448287,
  "status": "passed"
});
formatter.match({
  "location": "TaskManagerUserStepsDefinition.i_complete_action_for_the_claim_and_complete_for_the_third_party_with_request_id()"
});
formatter.result({
  "duration": 74873151680,
  "status": "passed"
});
formatter.match({
  "location": "TaskManagerUserStepsDefinition.i_complete_action_for_the_complete_for_the_third_party_with_request_id()"
});
formatter.result({
  "duration": 137851756336,
  "status": "passed"
});
formatter.match({
  "location": "TaskManagerUserStepsDefinition.i_complete_action_for_the_socn_claim_for_the_third_party_with_request_id()"
});
formatter.result({
  "duration": 59806395384,
  "status": "failed",
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027XIN009ODAB56362\u0027, ip: \u002710.140.7.61\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_60\u0027\nDriver info: driver.version: RemoteWebDriver\nSession ID: 9fbf42c1-a2c4-4cc4-be36-4c33a799b0f1\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d45.0.2}]\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:577)\r\n\tat net.thucydides.core.webdriver.javascript.JavascriptExecutorFacade.executeScript(JavascriptExecutorFacade.java:61)\r\n\tat net.thucydides.core.pages.jquery.JQueryEnabledPage.isJQueryAvailable(JQueryEnabledPage.java:45)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.enableHighlightingIfRequired(WebElementFacadeImpl.java:1020)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:984)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.ctl.it.qa.staf.AutoPopulate.populateValueIntoElement(AutoPopulate.java:96)\r\n\tat com.ctl.it.qa.staf.AutoPopulate.populateValues(AutoPopulate.java:46)\r\n\tat com.ctl.it.qa.staf.Steps.fillFields(Steps.java:132)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9.CGLIB$fillFields$46(\u003cgenerated\u003e)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9$$FastClassByCGLIB$$52cf3d05.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:348)\r\n\tat net.thucydides.core.steps.StepInterceptor.runBaseObjectMethod(StepInterceptor.java:235)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:55)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9.fillFields(\u003cgenerated\u003e)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps.i_claim_socn(TaskManagerUserSteps.java:148)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9.CGLIB$i_claim_socn$13(\u003cgenerated\u003e)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9$$FastClassByCGLIB$$52cf3d05.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:248)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:123)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:57)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9.i_claim_socn(\u003cgenerated\u003e)\r\n\tat com.ctli.it.qa.taskmanager.tests.steps.user.TaskManagerUserStepsDefinition.i_complete_action_for_the_socn_claim_for_the_third_party_with_request_id(TaskManagerUserStepsDefinition.java:78)\r\n\tat ✽.Then I complete action for the socn claim  for the third party with request id(features/taskmanager.feature:12)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:158)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:577)\r\n\tat net.thucydides.core.webdriver.javascript.JavascriptExecutorFacade.executeScript(JavascriptExecutorFacade.java:61)\r\n\tat net.thucydides.core.pages.jquery.JQueryEnabledPage.isJQueryAvailable(JQueryEnabledPage.java:45)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.enableHighlightingIfRequired(WebElementFacadeImpl.java:1020)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:984)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.ctl.it.qa.staf.AutoPopulate.populateValueIntoElement(AutoPopulate.java:96)\r\n\tat com.ctl.it.qa.staf.AutoPopulate.populateValues(AutoPopulate.java:46)\r\n\tat com.ctl.it.qa.staf.Steps.fillFields(Steps.java:132)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9.CGLIB$fillFields$46(\u003cgenerated\u003e)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9$$FastClassByCGLIB$$52cf3d05.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:348)\r\n\tat net.thucydides.core.steps.StepInterceptor.runBaseObjectMethod(StepInterceptor.java:235)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:55)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9.fillFields(\u003cgenerated\u003e)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps.i_claim_socn(TaskManagerUserSteps.java:148)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9.CGLIB$i_claim_socn$13(\u003cgenerated\u003e)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9$$FastClassByCGLIB$$52cf3d05.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:248)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:123)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:57)\r\n\tat com.ctli.it.qa.taskmanager.tools.steps.user.TaskManagerUserSteps$$EnhancerByCGLIB$$cc5180e9.i_claim_socn(\u003cgenerated\u003e)\r\n\tat com.ctli.it.qa.taskmanager.tests.steps.user.TaskManagerUserStepsDefinition.i_complete_action_for_the_socn_claim_for_the_third_party_with_request_id(TaskManagerUserStepsDefinition.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:141)\r\n\t... 86 more\r\n"
});
formatter.match({
  "location": "TaskManagerUserStepsDefinition.i_complete_action_for_the_socn_complete_for_the_third_party_with_request_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaskManagerUserStepsDefinition.I_see_the_final_status_completed_for_both_socn_and_focn()"
});
formatter.result({
  "status": "skipped"
});
});