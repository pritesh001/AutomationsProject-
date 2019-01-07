package com.ctli.it.qa.taskmanager.tools.pages.common;

import com.ctli.it.qa.taskmanager.tools.pages.TaskManagerPage;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;

public class TaskManagerEditPage extends TaskManagerPage

{
	@FindBy(xpath = "html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[2]/tbody/tr[16]/td/select")
	public WebElementFacade ddl_status;	
	
	
	@FindBy(xpath = "html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[2]/tbody/tr[18]/td/select")
	public WebElementFacade ddl_Advisory;	
	
	
	@FindBy(xpath = "html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[2]/tbody/tr[22]/td/select")
	public WebElementFacade ddl_Assignee;	
	
	
	
	@FindBy(xpath = "html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[2]/tbody/tr[16]/td/select")
	public WebElementFacade ddl_Requestid_type;	
	
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[2]/tbody/tr[20]/td/table/tbody/tr[1]/td[4]/table/tbody/tr[1]/td[1]/input")
	public WebElementFacade tbx_from_date;
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[2]/tbody/tr[20]/td/table/tbody/tr[2]/td[4]/table/tbody/tr[1]/td[1]/input")
	public WebElementFacade tbx_to_date;
	
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[2]/tbody/tr[18]/td/table/tbody/tr[1]/td[4]/table/tbody/tr[1]/td[1]/input")
	public WebElementFacade tbx_from_date_complete;
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[2]/tbody/tr[18]/td/table/tbody/tr[2]/td[4]/table/tbody/tr[1]/td[1]/input")
	public WebElementFacade tbx_to_date_complete;
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[3]/tbody/tr/td/div/input[1]")
	public WebElementFacade search;
	
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[3]/tbody/tr/td/div/input[1]")
	public WebElementFacade  search5;
	
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[1]/table/tbody/tr[1]/td[2]/input")
	public WebElementFacade search1;

	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[1]/table/tbody/tr[1]/td[2]/input")
	public WebElementFacade search7;



	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[1]/tbody/tr[2]/td/table/tbody/tr/td[1]/input")
	public WebElementFacade cbx_focn_claim;

	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[1]/tbody/tr[2]/td/table/tbody/tr/td[1]/input")
	public WebElementFacade cbx_socn_claim;

	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[1]/select")
	public WebElementFacade cbx_socn_complete;



	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[1]/select")
	public WebElementFacade ddl_focn_claim;

	

	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[1]/select")
	public WebElementFacade ddl_socn_claim;

	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[1]/select")
	public WebElementFacade ddl_socn_complete;
	
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[5]/input")
	public WebElementFacade btn_focn_go;
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[5]/input")
	public WebElementFacade btn_socn_go;
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[1]/tbody/tr[2]/td/table/tbody/tr/td[1]/input")
	public WebElementFacade cbx_focn_complete;



	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[1]/select")
	public WebElementFacade ddl_focn_complete;

	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[5]/input")
	public WebElementFacade btn_focn_go_complete;
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr/td/table/tbody/tr/td[5]/input")
	public WebElementFacade btn_socn_go_complete;

	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[1]/table/tbody/tr[1]/td[1]/input")
	public WebElementFacade btn_Mytask;
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[1]/table/tbody/tr[1]/td[1]/input")
	public WebElementFacade search2;


	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[3]/tbody/tr/td/div/input[1]")
	public WebElementFacade search3;
	
	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[3]/tbody/tr/td/div/input[1]")
	public WebElementFacade search4;

	@FindBy(xpath ="html/body/table[1]/tbody/tr[1]/td/table/tbody/tr[4]/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td/form[2]/table/tbody/tr[1]/td[1]/table[3]/tbody/tr/td/div/input[1]")
	public WebElementFacade search6;

	
	
	
}
