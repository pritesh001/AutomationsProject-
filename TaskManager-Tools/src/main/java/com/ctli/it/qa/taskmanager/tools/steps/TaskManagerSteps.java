package com.ctli.it.qa.taskmanager.tools.steps;

import com.ctl.it.qa.staf.Page;
import com.ctl.it.qa.staf.Steps;
import com.ctl.it.qa.staf.xml.reader.IntDataContainer;

@SuppressWarnings("serial")
public abstract class TaskManagerSteps extends Steps
{


	
	public IntDataContainer get_data_for_page(Page page) {
		commonData.getContainer(page.getClass().getSimpleName())
				.setActualValuesForAllContainers();
		return commonData.getContainer(page.getClass().getSimpleName());
	}
}
