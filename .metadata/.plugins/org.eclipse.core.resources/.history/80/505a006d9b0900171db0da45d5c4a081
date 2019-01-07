package com.ctli.it.qa.taskmanager.tools.pages.common;

import com.ctl.it.qa.staf.xml.reader.IntDataContainer;
import com.ctli.it.qa.taskmanager.tools.pages.TaskManagerPage;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;

public class TaskManagerLoginPage extends TaskManagerPage 


{


	@FindBy(xpath = "html/body/table/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[1]/td/form/table/tbody/tr[3]/td[2]/font/input")
	public WebElementFacade tbx_taskmanager_username;

	@FindBy(xpath = "html/body/table/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[1]/td/form/table/tbody/tr[4]/td[2]/font/input")
	public WebElementFacade tbx_taskamanegr_password;

	@FindBy(xpath = "html/body/table/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[1]/td/form/table/tbody/tr[6]/td/input")
	public WebElementFacade btn_log_In_taskamanager;
	
	@Override
	public WebElementFacade getUniqueElementInPage() {
		return btn_log_In_taskamanager;
	}

	
	
	public void enterCredentials(String userType) 
	{
		IntDataContainer dataContainer = envData.getContainer(
				this.getClass().getSimpleName()).getContainer(userType);
		tbx_taskmanager_username.type(dataContainer.getFieldValue("tbx_taskmanager_username"));
		tbx_taskamanegr_password.type(dataContainer.getFieldValue("tbx_taskmanager_password"));
	
	
	}
	
	public void clickLogin() {
		btn_log_In_taskamanager.click();
	}
	
	
	
}