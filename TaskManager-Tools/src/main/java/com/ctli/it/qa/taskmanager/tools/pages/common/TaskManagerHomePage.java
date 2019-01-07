package com.ctli.it.qa.taskmanager.tools.pages.common;

import org.openqa.selenium.WebElement;

import com.ctli.it.qa.taskmanager.tools.pages.TaskManagerPage;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;

public class TaskManagerHomePage extends TaskManagerPage

{
	@FindBy(xpath="html/body/div[59]/div") 
	public WebElementFacade lnk_admin;

	
	@FindBy(xpath="html/body/div[92]/div[10]") 
	public WebElementFacade  lnk_fallout;
	
	

	
	
}
