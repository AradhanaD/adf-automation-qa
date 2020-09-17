// spec.js

describe('ADF Demo App', function() {

 it('Login to ADF Application', function() {
	 browser.get("http://qaexercise.envalfresco.com/settings");
	 expect(browser.getTitle()).toEqual("Welcome - Alfresco ADF Application");
	 element(by.id("adf-provider-selector")).click();
	 element(by.cssContainingText("div span.mat-option-text", "ECM")).click();
	 element(by.buttonText("APPLY")).click();
	 expect(browser.getCurrentUrl()).toEqual("http://qaexercise.envalfresco.com/login");
	 element(by.id("username")).sendKeys("guest@example.com");
	 element(by.id("password")).sendKeys("Password");
	 element(by.buttonText("SIGN IN")).click();

  });
  
 it('Creation and Deletion of folders', function() {
	 browser.get("http://qaexercise.envalfresco.com/files");
	 expect(browser.getTitle()).toEqual("Welcome - Alfresco ADF Application");
	 element(by.id("username")).sendKeys("guest@example.com");
	 element(by.id("password")).sendKeys("Password");
	 element(by.buttonText("SIGN IN")).click();
	 element(by.partialButtonText("create_new_folder")).click();
	 element(by.id("adf-folder-name-input")).sendKeys("aradhana");
	 element(by.id("adf-folder-title-input")).sendKeys("aradhana s");
	 element(by.id("adf-folder-description-input")).sendKeys("description");
	 element(by.buttonText("Create")).click();
	 element(by.partialButtonText("create_new_folder")).click();
	 element(by.id("adf-folder-name-input")).sendKeys("aradhana");
	 element(by.id("adf-folder-title-input")).sendKeys("test123 title");
	 element(by.id("adf-folder-description-input")).sendKeys("test1 description");
	 element(by.buttonText("Create")).click();
	 element(by.cssContainingText("div.cdk-global-overlay-wrapper", "There's already a folder with this name. Try a different name.")).isDisplayed(true);
	 element(by.buttonText("Cancel")).click();
		 
	 var els = element.all(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/div/adf-document-list/adf-datatable/div/div[2]//div[2]/div/div'));
   	 
		 els.each(function(ele, index) {
			  els.getText().then(function (text) {
			    console.log(index, text);
			    if(text[index] === "aradhana") {
			     console.log(index +"a");    	
		    	 console.log("ganpati bappa morya");
		    	 element(by.id("action_menu_right_" + index)).click();
		    	 element(by.cssContainingText("button.mat-menu-item", "Delete")).click();
			   } else {
				   console.log("no matching row");
			   }
			  });
			});
	 
 });

});