		/**********************************************************************
		|																	  |
		|				 				VARIABLES							  |
		|																	  |
		**********************************************************************/

var customized = false;
var male = false;
var female = false;
var afterApptTypeLocked = false;
var visionQLocked = false;
var afterVisionQLocked = false;
var postOpDropsLocked = false;
var postOpInstructionsLocked = false;
var genderNeeded = true;
var apptTypeNeeded = true;
var treatmentNeeded = true;
var laterality1Needed = true;
var laterality2ANeeded = true;
var laterality2BNeeded = true;
var laterality3ANeeded = true;
var laterality3BNeeded = true;
var laterality4Needed = true;
var visionSeverityNeeded = true;
var visionContextNeeded = true;
var visionDurationNeeded = true;
var diagnosisNeeded = true;
var surgeryReasonNeeded = true;
var surgeryComfortNeeded = true;
var surgeryTitleNeeded = true;
var qualityBool1R = false;
var qualityBool2R = false;
var qualityBool3R = false;
var qualityBool4R = false;
var qualityBool5R = false;
var qualityBool6R = false;
var qualityBool7R = false;
var qualityBool8R = false;
var qualityBool1L = false;
var qualityBool2L = false;
var qualityBool3L = false;
var qualityBool4L = false;
var qualityBool5L = false;
var qualityBool6L = false;
var qualityBool7L = false;
var qualityBool8L = false;
var qualityCountR = 0;
var qualityCountL = 0;
var severityPositiveBoolR = false; //'stable' counts as positive, and no particular reason for defaulting to false
var severityPositiveBoolL = false;
var qualityPositiveBoolR = false; //'fair' counts as positive, and no particular reason for defaulting to false
var qualityPositiveBoolL = false;
var qualityNegativeBoolR = false;
var qualityNegativeBoolL = false;
var qualSameOUBool = true;
var quality1SameOUBool = true;
var quality2SameOUBool = true;
var quality3SameOUBool = true;
var quality4SameOUBool = true;
var quality5SameOUBool = true;
var quality6SameOUBool = true;
var quality7SameOUBool = true;
var quality8SameOUBool = true;
var remainingQualRBool = false;
var remainingQualLBool = false;
var visionSeveritySameOUBool = true;
var visionDurationSameOUBool = true;
var visionContextSameOUBool = true;
var visionChiefComplaintR = true; //not used?
var withCorrectionOD = false;
var withCorrectionOS = false;
var withCorrectionOU = false;
var withoutCorrectionOD = false;
var withoutCorrectionOS = false;
var withoutCorrectionOU = false;
var ODBetterSeeingBool = false;
var OSBetterSeeingBool = false;
var noVisualDifficultyBool = false;
var confirmedNoNewFFBool = false; //default to false, because not yet confirmed by clicking the button
var acWashoutBool = false;
var acIOLBool = false;
var ceftVancoBool = false;
var chorDrainBool = false;
var cryoBool = false;
var decadronBool = false;
var extraCapBool = false;
var fluidGasBool = false;
var fluidAirBool = false;
var iolImplantationBool = false;
var iolExchangeBool = false;
var iolRepositionBool = false;
var laserBool = false;
var lensectomyBool = false;
var memPeelBool = false;
var panretLaserBool = false;
var phacoBool = false;
var pcIOLBool = false;
var pneumaticBool = false;
var buckleBool = false;
var oilExchangeBool = false;
var oilInsertionBool = false;
var oilRemovalBool = false;
var capsulotomyBool = false;
var ozurdexBool = false;
var tPABool = false;
var triesenceBool = false;
var trypanBlueBool = false;
var vitrectomyBool = false;
var surgeryCounter = 0; // counts number of surgery components to determine where 'and' goes
var posRequired;
var posCompliantBool;
var glareBool;
var aredsBool;
var treatmentBool = false;
var treatedLastVisitRight = false;
var treatedHistoricallyRight = false
var treatedLastVisitLeft = false;
var treatedHistoricallyLeft = false;
var bilateralTreatment = false;
var bilateralDiagnosis = false;
var customVisionBool = false;
var msPerDay = 24 * 60 * 60 * 1000;
var timeZoneOffset = 8 * 60 * 60 * 1000;  // offset to compensate system shifting calendar date by 8 hours for Pacific timezone
var HPI = '';
var ptName = 'The patient';
var ptAge = '';
var refProv = '';
var refProvStr = '';
var visitReasonStr = '';
var newPtLateralityStr = '';
var A1cText = '';
var BSLText = '';
var dropsNotInstilledCustomStr = 'The postoperative drops were not instilled because ...';
var pronoun1 = ''; // He/She/They
var pronoun2 = ''; // he/she/they
var pronoun3 = ''; // Him/Her/Them
var pronoun4 = ''; // him/her/them
var pronoun5 = ''; // His/Her/Their
var pronoun6 = ''; // his/her/their
var qualStrR1 = ' good';
var qualStrR2 = ' fair';
var qualStrR3 = ' poor';
var qualStrR4 = ' clear';
var qualStrR5 = ' blurred';
var qualStrR6 = ' cloudy';
var qualStrR7 = ' hazy';
var qualStrR8 = ' distorted';
var qualStrRFull = ''; // used to build a string of qualities 1-8
var qualStrL1 = ' good';
var qualStrL2 = ' fair';
var qualStrL3 = ' poor';
var qualStrL4 = ' clear';
var qualStrL5 = ' blurred';
var qualStrL6 = ' cloudy';
var qualStrL7 = ' hazy';
var qualStrL8 = ' distorted';
var qualStrLFull = ''; // used to build a string of qualities 1-8
var apptType = '';
var lastVisitDate = new Date();
var lastTreatmentDateRight = new Date();
var lastTreatmentDateLeft = new Date();
var lastTreatmentDate = new Date();
var surgeryDate = new Date();
var todaysDate = new Date();
var numDays = -1; // initializing to 0 could cause it to erroneously say ' being seen earlier today'
var daysSinceLastVisit = 0;
var daysSinceTreatmentRight = 0;
var daysSinceTreatmentLeft = 0;
var daysSinceTreatment = 0;
var daysSinceSurgery = 0;
var intervalStr = '';
var visitIntervalStr = '';
var treatmentIntervalStrRight = '';
var treatmentIntervalStrLeft = '';
var treatmentIntervalStr = '';
var surgeryIntervalStr = '';
var procedureSwitch = 0;  //1 for most recent procedure, 2 for planned procedure
var surgerySwitch = 0;  //1 for 1 Day P/O, 2 for Other P/O
var diagnosisSwitch = 0; //1 for Estabished Patient, 2 for Estab Pt s/p Proc
	var addInfoSwitch = 0; //delete once obsolete---------------------------------------------------------------------
var diagnosisRight = '';
var diagnosisLeft = '';
var diagnosisStrRight = 'n/a';
var diagnosisStrLeft = 'n/a';
var diagnosisStrBilateral = 'n/a';
var customDiagnosisStrRight = 'n/a';
var customDiagnosisStrLeft = 'n/a';
var treatmentRight = '';
var treatmentLeft = '';
var surgery = '';
var surgeryStr = '';
var treatmentStrRight = 'n/a';
var treatmentStrLeft = 'n/a';
var treatmentStrFull = '[procedure placeholder]';
var customProcedureStrRight = '[procedure, custom, right eye]';
var customProcedureStrLeft = '[procedure, custom, left eye]';
var surgeryReason = '';
var surgeryReasonStr = '';
var customSurgeryStr = '[surgery placeholder, custom]';
var surgeryComfort = '';
var surgeryComfortStr = '';
var positioningStr = '';
var posOrientationStr = ' overnight';
var dropsInstilled = '';
var dropsInstilledStr = '';
var dropsNotInstilledReason = '';
var POInstructionsReviewed = '';
var POInstructionsReviewedStr = '';
var POSteroid = 'prednisolone';
var POSteroidStr = ' Prednisolone';
var POAntibiotic = 'ofloxacin';
var POAntibioticStr = ' Ofloxacin';
var surgeryDateStr = '';
var readyToProc = '';
var readyToProcStr = '';
var lateralitySwitch = 0;
/* Laterality Switch Legend-----
	1 is for vision compliant
	2 is for procedure history
	3 is for surgery history
	4 is for planned procedure
Then can use 2.1 and 2.2 (and 2A/2B if syntax error) etc as necessary
*/					
var laterality = '';
var laterality1 = '';  //for vision sentence
var laterality1Str1 = '';
var laterality1Str2 = '';
var laterality1Str3 = '';
var laterality2A = '';  //for most recent surgery (1 Day P/O scenario)
var laterality2AStr1 = '';
var laterality2AStr2 = '';
var laterality2AStr3 = '';
var laterality2B = '';  //for most recent surgury (Other P/O scenario)
var laterality2BStr1 = '';
var laterality2BStr2 = '';
var laterality2BStr3 = '';
var laterality3A = '';  //for Estab Pt scenario
var laterality3AStr1 = '';
var laterality3AStr2 = '';
var laterality3AStr3 = '';
var laterality3B = '';  //for Estab Pt s/p Proc scenario
var laterality3BStr1 = '';
var laterality3BStr2 = '';
var laterality3BStr3 = '';
var laterality4 = '';  //for Planned Procedure scenario
var laterality4Str1 = '';
var laterality4Str2 = '';
var laterality4Str3 = '';
var visionSeverityR = '';
var visionSeverityL = '';
var visionSeverityRStr = '';
var visionSeverityLStr = '';
var visionSeverityStr = ''; //try deleting after HPI is working for vision complaint
var visionDurationR = '';
var visionDurationL = '';
var visionDurationStr = '';
var visionContextR = '';
var visionContextRefR = ''; //to keep track of the context in case Better Seeing OD toggled back and forth
var visionContextL = '';
var visionContextRefL = ''; //to keep track of the context in case Better Seeing OS toggled back and forth
var visionContextStr = '';
var visionQStr = '[vision complaint]';
var customVisionStr = '[vision complaint, custom]';
var complaint1 = ' ( ..... first complaint will go here ..... )';
var addInfoStr = '';


		/**********************************************************************
		|																	  |
		|				 			INITIALIZATION							  |
		|																	  |
		**********************************************************************/

function browserCheck() {
//borrowed code from https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
	// please note, 
	// that IE11 now returns undefined again for window.chrome
	// and new Opera 30 outputs true for window.chrome
	// but needs to check if window.opr is not undefined
	// and new IE Edge outputs to true now for window.chrome
	// and if not iOS Chrome check
	// so use the below updated condition
	var isChromium = window.chrome;
	var winNav = window.navigator;
	var vendorName = winNav.vendor;
	var isOpera = typeof window.opr !== "undefined";
	var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
	var isIOSChrome = winNav.userAgent.match("CriOS");

	if(isIOSChrome) {
	   // is Google Chrome on IOS
	}
	else if(
	  isChromium !== null &&
	  typeof isChromium !== "undefined" &&
	  vendorName === "Google Inc." &&
	  isOpera === false &&
	  isIEedge === false
	) {
	   // is Google Chrome
	} else { 
	   showContent('notChrome');
	}
}

function initializeTextAreas() {
	document.getElementById("ptNameText").value = ptName;
	document.getElementById("customDiagnosisTextRight").value = diagnosisStrRight;
	document.getElementById("customDiagnosisTextLeft").value = diagnosisStrLeft;
	document.getElementById("customProcedureTextRight").value = treatmentStrRight;
	document.getElementById("customProcedureTextLeft").value = treatmentStrLeft;
	document.getElementById("customSurgeryText1").value = customSurgeryStr;
	document.getElementById("customSurgeryText2").value = customSurgeryStr;
	document.getElementById("customVisionQText").value = visionQStr;
}

function initializeGender() {
	element = document.getElementById("unspecifiedGenderBtn");
	element.click();
}

function initializeDropsNotInstilledCustomStr() {
	document.getElementById("dropsNotInstilledCustom").value = dropsNotInstilledCustomStr;
}


		/**********************************************************************
		|																	  |
		|				  GENERAL DIV/BUTTON/FIELD MANAGEMENT				  |
		|																	  |
		**********************************************************************/

function showTarget(target) {
	document.getElementById(target).style.display = "inline-block";
}

function hideTarget(target) {
	document.getElementById(target).style.display = "none";
}

function activateFld(target) {
  	var element = document.getElementById(target);
    if(target == 'visionSeverityR' || target == 'visionDurationR' || target == 'visionContextR') {
    	element.classList.add("selectedODFld");
    }
    else if(target == 'visionSeverityL' || target == 'visionDurationL' || target == 'visionContextL') {
    	element.classList.add("selectedOSFld");
    }
    else {element.classList.add("selectedFld");}
	element.classList.remove("notSelectedFld"); //is this line necessary???
}

function deactivateFld(target) {
  	var element = document.getElementById(target);
    element.classList.remove("selectedFld");
    element.classList.remove("selectedODFld");
    element.classList.remove("selectedOSFld");
    element.classList.remove("notSelectedFld");
}

function ignoreFld(target) {
	var element = document.getElementById(target);
	element.classList.add("notSelectedFld");
	element.selectedIndex = 0; // reset field to blank (first option)
}

function activateBtn(target) {
  	var element = document.getElementById(target);
    element.classList.add("selected");
	element.classList.remove("notSelected");
}

function deactivateBtn(target) {
  	var element = document.getElementById(target);
    element.classList.remove("selected");
	element.classList.remove("notSelected");
}

function ignoreBtn(target) {
	var element = document.getElementById(target);
	element.classList.add("notSelected");
}

function disableBtn(target) {
	var element = document.getElementById(target);
	element.disabled = true;
	ignoreBtn(target);
}


		/**********************************************************************
		|																	  |
		|				 	   	PATIENT NAME MANAGEMENT						  |
		|																	  |
		**********************************************************************/

function setPtName() {
	var tempStr = '';
	var element;
	ptName = document.getElementById("ptNameText").value;
	if(ptName.length > 0) {
		tempStr += ptName.charAt(0);
		if(ptName.length > 1) {
			tempStr += ptName.charAt(1);
			if(ptName.length > 2) {
				tempStr += ptName.charAt(2);
				if(tempStr == 'Mr.' || tempStr == 'Mr ') {
					element = document.getElementById("malePtBtn");
					element.click();
				}
				if(tempStr == 'Ms.' || tempStr == 'Ms ') {
					element = document.getElementById("femalePtBtn");
					element.click();
				}
				if(ptName.length > 3) {
					tempStr += ptName.charAt(3);
					if(tempStr == 'Mrs.' || tempStr == 'Mrs ') {
						element = document.getElementById("femalePtBtn");
						element.click();
					}
				}
			}
		}
	}
}


		/**********************************************************************
		|																	  |
		|				 	   	PATIENT GENDER MANAGEMENT					  |
		|																	  |
		**********************************************************************/

function setGender(target) {
	if(target == 'unspecified') {
		male = false;
		female = false;
	}
	else if(target == 'male') {
		male = true;
		female = false;
	}
	else if(target == 'female') {
		male = false;
		female = true;
	}
	if(female == false && male == false) {
		pronoun1 = ' They';
		pronoun2 = ' they';
		pronoun3 = ' Them';
		pronoun4 = ' them';
		pronoun5 = ' Their';
		pronoun6 = ' their';
	}
	else if(female == true) {
		pronoun1 = ' She';
		pronoun2 = ' she';
		pronoun3 = ' Her';  //corresponds with ' Him'
		pronoun4 = ' her';
		pronoun5 = ' Her';  //corresponds with ' His'
		pronoun6 = ' her';		
	}
	else if(male == true) {
		pronoun1 = ' He';
		pronoun2 = ' he';
		pronoun3 = ' Him';
		pronoun4 = ' him';
		pronoun5 = ' His';
		pronoun6 = ' his';
	}
}

function setMale() {
	female = false;
	pronoun1 = ' He';
	pronoun2 = ' he';
	pronoun3 = ' Him';
	pronoun4 = ' him';
	pronoun5 = ' His';
	pronoun6 = ' his';
}

function setFemale() {
	female = true;
	pronoun1 = ' She';
	pronoun2 = ' she';
	pronoun3 = ' Her';  //corresponds with ' Him'
	pronoun4 = ' her';
	pronoun5 = ' Her';  //corresponds with ' His'
	pronoun6 = ' her';
}

function markGenderBtns(target) {
	if(target == 'unspecifiedGenderBtn') {activateBtn('unspecifiedGenderBtn');} else {ignoreBtn('unspecifiedGenderBtn');}
	if(target == 'malePtBtn') {activateBtn('malePtBtn');} else {ignoreBtn('malePtBtn');}
	if(target == 'femalePtBtn') {activateBtn('femalePtBtn');} else {ignoreBtn('femalePtBtn');}

}

		/**********************************************************************
		|																	  |
		|				 	   APPOINTMENT TYPE MANAGEMENT					  |
		|																	  |
		**********************************************************************/

function setApptType(target) {
	apptType = target;
}

function markApptTypeBtns(target) {
	deactivateBtn('newPtBtn');
	deactivateBtn('estabPtBtn');
	deactivateBtn('estabPtspProcBtn');
	deactivateBtn('1DayPOBtn');
	deactivateBtn('otherPOBtn');
	deactivateBtn('plannedProcBtn');
	if(target == 'newPtBtn') {activateBtn('newPtBtn');}
	if(target == 'estabPtBtn') {activateBtn('estabPtBtn');}
	if(target == 'estabPtspProcBtn') {activateBtn('estabPtspProcBtn');}
	if(target == '1DayPOBtn') {activateBtn('1DayPOBtn');}
	if(target == 'otherPOBtn') {activateBtn('otherPOBtn');}
	if(target == 'plannedProcBtn') {activateBtn('plannedProcBtn');}
}


		/**********************************************************************
		|																	  |
		|				 	   	TIME INTERVAL MANAGEMENT					  |
		|																	  |
		**********************************************************************/

function processCalendar(target) {
	lastVisitDate = new Date(document.getElementById("lastVisitCal").value);
	//lastTreatmentDateRight = new Date(document.getElementById("lastProcCalRight").value);
	//lastTreatmentDateLeft = new Date(document.getElementById("lastProcCalLeft").value);
	todaysDate = new Date();
	if (target == 'lastVisitCal') {
		uncheckBox('unspecLastApptCheck');
		markTimeIntervalBtns('calendarInput');
		daysSinceLastVisit = (todaysDate.getTime() - lastVisitDate.getTime() - (timeZoneOffset) + 1) / msPerDay;
		daysSinceLastVisit = daysSinceLastVisit / 1;
		setIntervalStr('visitInterval');
	}
	if (target == 'lastProcCalRight') {
		uncheckBox('unspecProcDateCheckRight');
		daysSinceTreatmentRight = (todaysDate.getTime() - lastTreatmentDateRight.getTime() - (timeZoneOffset) + 1) / msPerDay;
		daysSinceTreatmentRight = daysSinceTreatmentRight / 1;
		setIntervalStr('treatmentIntervalRight');
	}
	if (target == 'lastProcCalLeft') {
		uncheckBox('unspecProcDateCheckLeft');
		daysSinceTreatmentLeft = (todaysDate.getTime() - lastTreatmentDateLeft.getTime() - (timeZoneOffset) + 1) / msPerDay;
		daysSinceTreatmentLeft = daysSinceTreatmentLeft / 1;
		setIntervalStr('treatmentIntervalLeft');
	}
}

function resetCalendar(target) {
	document.getElementById(target).value = new Date();
	if (target == 'lastVisitCal') {
		checkBox('unspecLastApptCheck');
		visitIntervalStr = '';
		markTimeIntervalBtns('resetBtns');
	}
	if (target == 'lastProcCalRight') {
		checkBox('unspecProcDateCheckRight');
		treatmentIntervalStrRight = '';
	}
	if (target == 'lastProcCalLeft') {
		checkBox('unspecProcDateCheckLeft');
		treatmentIntervalStrLeft = '';
	}
}

function setIntervalStr(target) {
	if(target == 'visitInterval') {numDays = daysSinceLastVisit;}
	if(target == 'treatmentIntervalRight') {numDays = daysSinceTreatmentRight;}
	if(target == 'treatmentIntervalLeft') {numDays = daysSinceTreatmentLeft;}
	if(target == 'surgeryInterval') {numDays = daysSinceSurgery;}

	if(numDays < 1) {intervalStr = ' being seen earlier today';}
	else if(numDays < 2) {intervalStr = ' 1 day';}
	else if(numDays < 3) {intervalStr = ' 2 days';}
	else if(numDays < 4) {intervalStr = ' 3 days';}
	else if(numDays < 5) {intervalStr = ' 4 days';}
	else if(numDays < 6) {intervalStr = ' 5 days';}
	else if(numDays < 7) {intervalStr = ' 6 days';}
	else if(numDays < 8) {intervalStr = ' 1 week';}
	else if(numDays < 9) {intervalStr = ' 8 days';}
	else if(numDays < 10) {intervalStr = ' 9 days';}
	else if(numDays < 11) {intervalStr = ' 10 days';}
	else if(numDays < 12) {intervalStr = ' 11 days';}
	else if(numDays < 13) {intervalStr = ' 12 days';}
	else if(numDays < 14) {intervalStr = ' 13 days';}
	else if(numDays < 17) {intervalStr = ' 2 weeks';}
	else if(numDays < 19) {intervalStr = ' 2 ½ weeks';}
	else if(numDays < 21) {intervalStr = ' nearly 3 weeks';}
	else if(numDays < 24) {intervalStr = ' 3 weeks';}
	else if(numDays < 26) {intervalStr = ' 3 ½ weeks';}
	else if(numDays < 28) {intervalStr = ' nearly 4 weeks';}
	else if(numDays < 31) {intervalStr = ' 4 weeks';}
	else if(numDays < 33) {intervalStr = ' 4 ½ weeks';}
	else if(numDays < 35) {intervalStr = ' nearly 5 weeks';}
	else if(numDays < 38) {intervalStr = ' 5 weeks';}
	else if(numDays < 40) {intervalStr = ' 5 ½ weeks';}
	else if(numDays < 42) {intervalStr = ' nearly 6 weeks';}
	else if(numDays < 47) {intervalStr = ' 6 weeks';}
	else if(numDays < 49) {intervalStr = ' nearly 7 weeks';}
	else if(numDays < 54) {intervalStr = ' 7 weeks';}
	else if(numDays < 56) {intervalStr = ' nearly 8 weeks';}
	else if(numDays < 61) {intervalStr = ' 8 weeks';}
	else if(numDays < 63) {intervalStr = ' nearly 9 weeks';}
	else if(numDays < 68) {intervalStr = ' 9 weeks';}
	else if(numDays < 70) {intervalStr = ' nearly 10 weeks';}
	else if(numDays < 75) {intervalStr = ' 10 weeks';}
	else if(numDays < 77) {intervalStr = ' nearly 11 weeks';}
	else if(numDays < 82) {intervalStr = ' 11 weeks';}
	else if(numDays < 84) {intervalStr = ' nearly 12 weeks';}
	else if(numDays < 89) {intervalStr = ' 12 weeks';}
	else if(numDays < 91) {intervalStr = ' nearly 13 weeks';}
	else if(numDays < 96) {intervalStr = ' 13 weeks';}
	else if(numDays < 98) {intervalStr = ' nearly 14 weeks';}
	else if(numDays < 105) {intervalStr = ' 3 months';}
	else if(numDays < 113) {intervalStr = ' 3 ½ months';}
	else if(numDays < 120) {intervalStr = ' nearly 4 months';}
	else if(numDays < 150) {intervalStr = ' 4 months';}
	else if(numDays < 180) {intervalStr = ' 5 months';}
	else if(numDays < 210) {intervalStr = ' 6 months';}
	else if(numDays < 240) {intervalStr = ' 7 months';}
	else if(numDays < 270) {intervalStr = ' 8 months';}
	else if(numDays < 300) {intervalStr = ' 9 months';}
	else if(numDays < 330) {intervalStr = ' 10 months';}
	else if(numDays < 365) {intervalStr = ' nearly 1 year';}
	else if(numDays < 455) {intervalStr = ' 1 year';}
	else if(numDays < 485) {intervalStr = ' 1 year and 3 months';}
	else if(numDays < 515) {intervalStr = ' 1 year and 4 months';}
	else if(numDays < 545) {intervalStr = ' 1 year and 5 months';}
	else if(numDays < 635) {intervalStr = ' 1 ½ years';}
	else if(numDays < 730) {intervalStr = ' nearly 2 years';}
	else if(numDays < 910) {intervalStr = ' 2 years';}
	else if(numDays < 1000) {intervalStr = ' 2 ½ years';}
	else if(numDays < 1095) {intervalStr = ' nearly 3 years';}
	else if(numDays < 1275) {intervalStr = ' 3 years';}
	else if(numDays < 1365) {intervalStr = ' 3 ½ years';}
	else if(numDays < 1460) {intervalStr = ' nearly 4 years';}
	else if(numDays < 1640) {intervalStr = ' 4 years';}
	else if(numDays < 1730) {intervalStr = ' 4 ½ years';}
	else if(numDays < 1825) {intervalStr = ' nearly 5 years';}
	else if(numDays < 2005) {intervalStr = ' 5 years';}
	else if(numDays < 2095) {intervalStr = ' 5 ½ years';}
	else if(numDays < 2190) {intervalStr = ' nearly 6 years';}
	else if(numDays < 2370) {intervalStr = ' 6 years';}
	else if(numDays < 2460) {intervalStr = ' 6 ½ years';}
	else if(numDays < 2555) {intervalStr = ' nearly 7 years';}
	else if(numDays < 2735) {intervalStr = ' 7 years';}
	else if(numDays < 2825) {intervalStr = ' 7 ½ years';}
	else if(numDays < 2920) {intervalStr = ' nearly 8 years';}
	else if(numDays < 3100) {intervalStr = ' 8 years';}
	else if(numDays < 3190) {intervalStr = ' 8 ½ years';}
	else if(numDays < 3285) {intervalStr = ' nearly 9 years';}
	else if(numDays < 3465) {intervalStr = ' 9 years';}
	else if(numDays < 3555) {intervalStr = ' 9 ½ years';}
	else if(numDays < 3650) {intervalStr = ' nearly 10 years';}
	else if(numDays != -1 && numDays != -2) {intervalStr = ' more than 10 years';}

	if(target == 'visitInterval') {visitIntervalStr = intervalStr;}
	else if(target == 'treatmentIntervalRight') {treatmentIntervalStrRight = intervalStr;}
	else if(target == 'treatmentIntervalLeft') {treatmentIntervalStrLeft = intervalStr;}
	else if(target == 'treatmentInterval') {treatmentIntervalStr = intervalStr;}
	else if(target == 'surgeryInterval') {surgeryIntervalStr = intervalStr;}
	
	if (target == 'blank') {resetCalendar('lastVisitCal');}
	else if(target == '1Day') {visitIntervalStr = ' 1 day'; numDays = -2;} // set numDays = -2 so displayInterval() works
	else if(target == '2Days') {visitIntervalStr = ' 2 days'; numDays = -2;}
	else if(target == '3Days') {visitIntervalStr = ' 3 days'; numDays = -2;}
	else if(target == '4Days') {visitIntervalStr = ' 4 days'; numDays = -2;}
	else if(target == '5Days') {visitIntervalStr = ' 5 days'; numDays = -2;}
	else if(target == '6Days') {visitIntervalStr = ' 6 days'; numDays = -2;}
	else if(target == '7Days') {visitIntervalStr = ' 7 days'; numDays = -2;}
	else if(target == '8Days') {visitIntervalStr = ' 8 days'; numDays = -2;}
	else if(target == '9Days') {visitIntervalStr = ' 9 days'; numDays = -2;}
	else if(target == '10Days') {visitIntervalStr = ' 10 days'; numDays = -2;}
	else if(target == '11Days') {visitIntervalStr = ' 11 days'; numDays = -2;}
	else if(target == '12Days') {visitIntervalStr = ' 12 days'; numDays = -2;}
	else if(target == '13Days') {visitIntervalStr = ' 13 days'; numDays = -2;}
	else if(target == '14Days') {visitIntervalStr = ' 14 days'; numDays = -2;}
	else if(target == '15Days') {visitIntervalStr = ' 15 days'; numDays = -2;}
	else if(target == '16Days') {visitIntervalStr = ' 16 days'; numDays = -2;}
	else if(target == '17Days') {visitIntervalStr = ' 17 days'; numDays = -2;}
	else if(target == '18Days') {visitIntervalStr = ' 18 days'; numDays = -2;}
	else if(target == '19Days') {visitIntervalStr = ' 19 days'; numDays = -2;}
	else if(target == '20Days') {visitIntervalStr = ' 20 days'; numDays = -2;}
	else if(target == '21Days') {visitIntervalStr = ' 21 days'; numDays = -2;}
	else if(target == '22Days') {visitIntervalStr = ' 22 days'; numDays = -2;}
	else if(target == '23Days') {visitIntervalStr = ' 23 days'; numDays = -2;}
	else if(target == '24Days') {visitIntervalStr = ' 24 days'; numDays = -2;}
	else if(target == '25Days') {visitIntervalStr = ' 25 days'; numDays = -2;}
	else if(target == '26Days') {visitIntervalStr = ' 26 days'; numDays = -2;}
	else if(target == '27Days') {visitIntervalStr = ' 27 days'; numDays = -2;}
	else if(target == '28Days') {visitIntervalStr = ' 28 days'; numDays = -2;}
	else if(target == '1Week') {visitIntervalStr = ' 1 week'; numDays = -2;}
	else if(target == '2Weeks') {visitIntervalStr = ' 2 weeks'; numDays = -2;}
	else if(target == '3Weeks') {visitIntervalStr = ' 3 weeks'; numDays = -2;}
	else if(target == '4Weeks') {visitIntervalStr = ' 4 weeks'; numDays = -2;}
	else if(target == '5Weeks') {visitIntervalStr = ' 5 weeks'; numDays = -2;}
	else if(target == '6Weeks') {visitIntervalStr = ' 6 weeks'; numDays = -2;}
	else if(target == '7Weeks') {visitIntervalStr = ' 7 weeks'; numDays = -2;}
	else if(target == '8Weeks') {visitIntervalStr = ' 8 weeks'; numDays = -2;}
	else if(target == '9Weeks') {visitIntervalStr = ' 9 weeks'; numDays = -2;}
	else if(target == '10Weeks') {visitIntervalStr = ' 10 weeks'; numDays = -2;}
	else if(target == '11Weeks') {visitIntervalStr = ' 11 weeks'; numDays = -2;}
	else if(target == '12Weeks') {visitIntervalStr = ' 12 weeks'; numDays = -2;}
	else if(target == '13Weeks') {visitIntervalStr = ' 13 weeks'; numDays = -2;}
	else if(target == '14Weeks') {visitIntervalStr = ' 14 weeks'; numDays = -2;}
	else if(target == '15Weeks') {visitIntervalStr = ' 15 weeks'; numDays = -2;}
	else if(target == '16Weeks') {visitIntervalStr = ' 16 weeks'; numDays = -2;}
	else if(target == '17Weeks') {visitIntervalStr = ' 17 weeks'; numDays = -2;}
	else if(target == '18Weeks') {visitIntervalStr = ' 18 weeks'; numDays = -2;}
	else if(target == '19Weeks') {visitIntervalStr = ' 19 weeks'; numDays = -2;}
	else if(target == '20Weeks') {visitIntervalStr = ' 20 weeks'; numDays = -2;}
	else if(target == '21Weeks') {visitIntervalStr = ' 21 weeks'; numDays = -2;}
	else if(target == '22Weeks') {visitIntervalStr = ' 22 weeks'; numDays = -2;}
	else if(target == '23Weeks') {visitIntervalStr = ' 23 weeks'; numDays = -2;}
	else if(target == '24Weeks') {visitIntervalStr = ' 24 weeks'; numDays = -2;}
	else if(target == '25Weeks') {visitIntervalStr = ' 25 weeks'; numDays = -2;}
	else if(target == '26Weeks') {visitIntervalStr = ' 26 weeks'; numDays = -2;}
	else if(target == '27Weeks') {visitIntervalStr = ' 27 weeks'; numDays = -2;}
	else if(target == '28Weeks') {visitIntervalStr = ' 28 weeks'; numDays = -2;}
	else if(target == '29Weeks') {visitIntervalStr = ' 29 weeks'; numDays = -2;}
	else if(target == '30Weeks') {visitIntervalStr = ' 30 weeks'; numDays = -2;}
	else if(target == '31Weeks') {visitIntervalStr = ' 31 weeks'; numDays = -2;}
	else if(target == '32Weeks') {visitIntervalStr = ' 32 weeks'; numDays = -2;}
	else if(target == '33Weeks') {visitIntervalStr = ' 33 weeks'; numDays = -2;}
	else if(target == '34Weeks') {visitIntervalStr = ' 34 weeks'; numDays = -2;}
	else if(target == '35Weeks') {visitIntervalStr = ' 35 weeks'; numDays = -2;}
	else if(target == '36Weeks') {visitIntervalStr = ' 36 weeks'; numDays = -2;}
	else if(target == '37Weeks') {visitIntervalStr = ' 37 weeks'; numDays = -2;}
	else if(target == '38Weeks') {visitIntervalStr = ' 38 weeks'; numDays = -2;}
	else if(target == '39Weeks') {visitIntervalStr = ' 39 weeks'; numDays = -2;}
	else if(target == '40Weeks') {visitIntervalStr = ' 40 weeks'; numDays = -2;}
	else if(target == '41Weeks') {visitIntervalStr = ' 41 weeks'; numDays = -2;}
	else if(target == '42Weeks') {visitIntervalStr = ' 42 weeks'; numDays = -2;}
	else if(target == '43Weeks') {visitIntervalStr = ' 43 weeks'; numDays = -2;}
	else if(target == '44Weeks') {visitIntervalStr = ' 44 weeks'; numDays = -2;}
	else if(target == '45Weeks') {visitIntervalStr = ' 45 weeks'; numDays = -2;}
	else if(target == '46Weeks') {visitIntervalStr = ' 46 weeks'; numDays = -2;}
	else if(target == '47Weeks') {visitIntervalStr = ' 47 weeks'; numDays = -2;}
	else if(target == '48Weeks') {visitIntervalStr = ' 48 weeks'; numDays = -2;}
	else if(target == '49Weeks') {visitIntervalStr = ' 49 weeks'; numDays = -2;}
	else if(target == '50Weeks') {visitIntervalStr = ' 50 weeks'; numDays = -2;}
	else if(target == '51Weeks') {visitIntervalStr = ' 51 weeks'; numDays = -2;}
	else if(target == '52Weeks') {visitIntervalStr = ' 52 weeks'; numDays = -2;}
	else if(target == '1Month') {visitIntervalStr = ' 1 month'; numDays = -2;}
	else if(target == '2Months') {visitIntervalStr = ' 2 months'; numDays = -2;}
	else if(target == '3Months') {visitIntervalStr = ' 3 months'; numDays = -2;}
	else if(target == '4Months') {visitIntervalStr = ' 4 months'; numDays = -2;}
	else if(target == '5Months') {visitIntervalStr = ' 5 months'; numDays = -2;}
	else if(target == '6Months') {visitIntervalStr = ' 6 months'; numDays = -2;}
	else if(target == '7Months') {visitIntervalStr = ' 7 months'; numDays = -2;}
	else if(target == '8Months') {visitIntervalStr = ' 8 months'; numDays = -2;}
	else if(target == '9Months') {visitIntervalStr = ' 9 months'; numDays = -2;}
	else if(target == '10Months') {visitIntervalStr = ' 10 months'; numDays = -2;}
	else if(target == '11Months') {visitIntervalStr = ' 11 months'; numDays = -2;}
	else if(target == '12Months') {visitIntervalStr = ' 12 months'; numDays = -2;}
	else if(target == '13Months') {visitIntervalStr = ' 13 months'; numDays = -2;}
	else if(target == '14Months') {visitIntervalStr = ' 14 months'; numDays = -2;}
	else if(target == '15Months') {visitIntervalStr = ' 15 months'; numDays = -2;}
	else if(target == '16Months') {visitIntervalStr = ' 16 months'; numDays = -2;}
	else if(target == '17Months') {visitIntervalStr = ' 17 months'; numDays = -2;}
	else if(target == '18Months') {visitIntervalStr = ' 18 months'; numDays = -2;}
	else if(target == '19Months') {visitIntervalStr = ' 19 months'; numDays = -2;}
	else if(target == '20Months') {visitIntervalStr = ' 20 months'; numDays = -2;}
	else if(target == '21Months') {visitIntervalStr = ' 21 months'; numDays = -2;}
	else if(target == '22Months') {visitIntervalStr = ' 22 months'; numDays = -2;}
	else if(target == '23Months') {visitIntervalStr = ' 23 months'; numDays = -2;}
	else if(target == '24Months') {visitIntervalStr = ' 24 months'; numDays = -2;}
	else if(target == '1Year') {visitIntervalStr = ' 1 year'; numDays = -2;}
	else if(target == '2Years') {visitIntervalStr = ' 2 years'; numDays = -2;}
	else if(target == '3Years') {visitIntervalStr = ' 3 years'; numDays = -2;}
	else if(target == '4Years') {visitIntervalStr = ' 4 years'; numDays = -2;}
	else if(target == '5Years') {visitIntervalStr = ' 5 years'; numDays = -2;}
	else if(target == '6Years') {visitIntervalStr = ' 6 years'; numDays = -2;}
	else if(target == '7Years') {visitIntervalStr = ' 7 years'; numDays = -2;}
	else if(target == '8Years') {visitIntervalStr = ' 8 years'; numDays = -2;}
	else if(target == '9Years') {visitIntervalStr = ' 9 years'; numDays = -2;}
	else if(target == '10Years') {visitIntervalStr = ' 10 years'; numDays = -2;}
	else if(target == '11Years') {visitIntervalStr = ' 11 years'; numDays = -2;}
	else if(target == '12Years') {visitIntervalStr = ' 12 years'; numDays = -2;}
	else if(target == '13Years') {visitIntervalStr = ' 13 years'; numDays = -2;}
	else if(target == '14Years') {visitIntervalStr = ' 14 years'; numDays = -2;}
	else if(target == '15Years') {visitIntervalStr = ' 15 years'; numDays = -2;}
	else if(target == '16Years') {visitIntervalStr = ' 16 years'; numDays = -2;}
	else if(target == '17Years') {visitIntervalStr = ' 17 years'; numDays = -2;}
	else if(target == '18Years') {visitIntervalStr = ' 18 years'; numDays = -2;}
	else if(target == '19Years') {visitIntervalStr = ' 19 years'; numDays = -2;}
	else if(target == '20Years') {visitIntervalStr = ' 20 years'; numDays = -2;}
	else if(target == '21Years') {visitIntervalStr = ' 21 years'; numDays = -2;}
	else if(target == '22Years') {visitIntervalStr = ' 22 years'; numDays = -2;}
	else if(target == '23Years') {visitIntervalStr = ' 23 years'; numDays = -2;}
	else if(target == '24Years') {visitIntervalStr = ' 24 years'; numDays = -2;}
	else if(target == '25Years') {visitIntervalStr = ' 25 years'; numDays = -2;}
	else if(target == '26Years') {visitIntervalStr = ' 26 years'; numDays = -2;}
	else if(target == '27Years') {visitIntervalStr = ' 27 years'; numDays = -2;}
	else if(target == '28Years') {visitIntervalStr = ' 28 years'; numDays = -2;}
	else if(target == '29Years') {visitIntervalStr = ' 29 years'; numDays = -2;}
	else if(target == '30Years') {visitIntervalStr = ' 30 years'; numDays = -2;}
}

function processLastVisitCal() {
	calcInterval();
	markTimeIntervalBtns('calendarInput');
	uncheckBox('unspecLastApptCheck');
}

function processSurgeryCal() {
	calcSurgeryInterval('specified');
	uncheckBox('unspecSurgeryDateCheck');
}


function calcSurgeryInterval(target) {
	if(target == 'unspecified') {
		resetCalendar('surgeryDate');
		surgeryIntervalStr = '';
		checkBox('unspecSurgeryDateCheck');
	} else {
		surgeryDate = new Date(document.getElementById("surgeryDate").value);
		todaysDate = new Date();
		daysSinceSurgery = (todaysDate.getTime() - surgeryDate.getTime() - (timeZoneOffset) + 1) / msPerDay;
		daysSinceSurgery = daysSinceSurgery / 1;
		setIntervalStr('surgeryInterval');
	}
}

/*function setPriorTreatmentStr() {
	lastTreatmentDate = new Date (document.getElementById("lastTreatmentCal").value);
	todaysDate = new Date();
	daysSinceTreatment = (todaysDate.getTime() - lastTreatmentDate.getTime() - (timeZoneOffset) + 1) / msPerDay;
	daysSinceTreatment = daysSinceTreatment / 1;
	setIntervalStr('treatmentInterval');

} probably obsolete*/

function setSurgeryDateStr() {
	var date = new Date (document.getElementById("surgeryDate").value);
	date.setHours(date.getHours() + 8); // add 8 hours to compensate system shifting calendar time for Pacific timezone

	//borrowed code to format date as month/day/year from https://stackoverflow.com/questions/32540044/html-display-current-date/32540196
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	surgeryDateStr = " " + m + "/" + d + "/" + y;
}

function markTimeIntervalBtns(target) {
	if (target != 'numDaysList') {ignoreFld('numDaysList');}
	if (target != 'numWeeksList') {ignoreFld('numWeeksList')};
	if (target != 'numMonthsList') {ignoreFld('numMonthsList')};
	if (target != 'numYearsList') {ignoreFld('numYearsList')};
	ignoreBtn('1Day');
	ignoreBtn('2Days');
	ignoreBtn('3Days');
	ignoreBtn('4Days');
	ignoreBtn('5Days');
	ignoreBtn('6Days');
	ignoreBtn('7Days');
	ignoreBtn('8Days');
	ignoreBtn('9Days');
	ignoreBtn('10Days');
	ignoreBtn('11Days');
	ignoreBtn('12Days');
	ignoreBtn('13Days');
	ignoreBtn('14Days');
	ignoreBtn('15Days');
	ignoreBtn('1Week');
	ignoreBtn('2Weeks');
	ignoreBtn('3Weeks');
	ignoreBtn('4Weeks');
	ignoreBtn('5Weeks');
	ignoreBtn('6Weeks');
	ignoreBtn('7Weeks');
	ignoreBtn('8Weeks');
	ignoreBtn('9Weeks');
	ignoreBtn('10Weeks');
	ignoreBtn('11Weeks');
	ignoreBtn('12Weeks');
	ignoreBtn('13Weeks');
	ignoreBtn('14Weeks');
	ignoreBtn('15Weeks');
	ignoreBtn('1Month');
	ignoreBtn('2Months');
	ignoreBtn('3Months');
	ignoreBtn('4Months');
	ignoreBtn('5Months');
	ignoreBtn('6Months');
	ignoreBtn('7Months');
	ignoreBtn('8Months');
	ignoreBtn('9Months');
	ignoreBtn('10Months');
	ignoreBtn('11Months');
	ignoreBtn('12Months');
	ignoreBtn('13Months');
	ignoreBtn('14Months');
	ignoreBtn('15Months');
	ignoreBtn('1Year');
	ignoreBtn('2Years');
	ignoreBtn('3Years');
	ignoreBtn('4Years');
	ignoreBtn('5Years');
	ignoreBtn('6Years');
	ignoreBtn('7Years');
	ignoreBtn('8Years');
	ignoreBtn('9Years');
	ignoreBtn('10Years');
	ignoreBtn('11Years');
	ignoreBtn('12Years');
	ignoreBtn('13Years');
	ignoreBtn('14Years');
	ignoreBtn('15Years');
	if (target == 'numDaysList' && visitIntervalStr != '') {activateFld('numDaysList');}
	else if (target == 'numWeeksList' && visitIntervalStr != '') {activateFld('numWeeksList');}
	else if (target == 'numMonthsList' && visitIntervalStr != '') {activateFld('numMonthsList');}
	else if (target == 'numYearsList' && visitIntervalStr != '') {activateFld('numYearsList');}
	else if(target != 'calendarInput' && target != 'resetBtns' && target != 'blank') {
		activateBtn(target);
	}
	else if(target == 'resetBtns') {
		deactivateBtn('1Day');
		deactivateBtn('2Days');
		deactivateBtn('3Days');
		deactivateBtn('4Days');
		deactivateBtn('5Days');
		deactivateBtn('6Days');
		deactivateBtn('7Days');
		deactivateBtn('8Days');
		deactivateBtn('9Days');
		deactivateBtn('10Days');
		deactivateBtn('11Days');
		deactivateBtn('12Days');
		deactivateBtn('13Days');
		deactivateBtn('14Days');
		deactivateBtn('15Days');
		deactivateBtn('1Week');
		deactivateBtn('2Weeks');
		deactivateBtn('3Weeks');
		deactivateBtn('4Weeks');
		deactivateBtn('5Weeks');
		deactivateBtn('6Weeks');
		deactivateBtn('7Weeks');
		deactivateBtn('8Weeks');
		deactivateBtn('9Weeks');
		deactivateBtn('10Weeks');
		deactivateBtn('11Weeks');
		deactivateBtn('12Weeks');
		deactivateBtn('13Weeks');
		deactivateBtn('14Weeks');
		deactivateBtn('15Weeks');
		deactivateBtn('1Month');
		deactivateBtn('2Months');
		deactivateBtn('3Months');
		deactivateBtn('4Months');
		deactivateBtn('5Months');
		deactivateBtn('6Months');
		deactivateBtn('7Months');
		deactivateBtn('8Months');
		deactivateBtn('9Months');
		deactivateBtn('10Months');
		deactivateBtn('11Months');
		deactivateBtn('12Months');
		deactivateBtn('13Months');
		deactivateBtn('14Months');
		deactivateBtn('15Months');
		deactivateBtn('1Year');
		deactivateBtn('2Years');
		deactivateBtn('3Years');
		deactivateBtn('4Years');
		deactivateBtn('5Years');
		deactivateBtn('6Years');
		deactivateBtn('7Years');
		deactivateBtn('8Years');
		deactivateBtn('9Years');
		deactivateBtn('10Years');
		deactivateBtn('11Years');
		deactivateBtn('12Years');
		deactivateBtn('13Years');
		deactivateBtn('14Years');
		deactivateBtn('15Years');
		deactivateFld('numDaysList');
		deactivateFld('numWeeksList');
		deactivateFld('numMonthsList');
		deactivateFld('numYearsList');
	}

	if (target == 'numDaysList' && visitIntervalStr == '') {ignoreFld('numDaysList');} //without these lines, clicking blank on the list will display the field as deactivated instead of ignored
	if (target == 'numWeeksList' && visitIntervalStr == '') {ignoreFld('numWeeksList');}
	if (target == 'numMonthsList' && visitIntervalStr == '') {ignoreFld('numMonthsList');}
	if (target == 'numYearsList' && visitIntervalStr == '') {ignoreFld('numYearsList');}


}


		/**********************************************************************
		|																	  |
		|							DIAGNOSIS MANAGEMENT					  |
		|																	  |
		**********************************************************************/

/* is this function necessary? */ function setDiagnosisSwitch(value) {diagnosisSwitch = value;}

/*PROBABLY OBSOLETE
function setDiagnosis(value) {
	diagnosis = value;
	setDiagnosisStr(); 
	setDiagnosisNeededFalse();
	unlockVisionQ();
}*/




function hideExtraDiagnosisBtns() {
//Right Eye Buttons
	hideTarget('BRVOBtnRight'); hideTarget('BRVOBtnRightBreak');
	hideTarget('CRVOBtnRight'); hideTarget('CRVOBtnRightBreak');
	hideTarget('CSRBtnRight'); hideTarget('CSRBtnRightBreak');
	hideTarget('ERMBtnRight'); hideTarget('ERMBtnRightBreak');
	hideTarget('floatersBtnRight'); hideTarget('floatersBtnRightBreak');
	hideTarget('latticeBtnRight'); hideTarget('latticeBtnRightBreak');
	hideTarget('macularEdemaBtnRight'); hideTarget('macularEdemaBtnRightBreak');
	hideTarget('dryAMDBtnRight'); hideTarget('dryAMDBtnRightBreak');
	hideTarget('NPDRBtnRight'); hideTarget('NPDRBtnRightBreak');
	hideTarget('PDRBtnRight'); hideTarget('PDRBtnRightBreak');
	hideTarget('PVDBtnRight'); hideTarget('PVDBtnRightBreak');
	hideTarget('RDBtnRight'); hideTarget('RDBtnRightBreak');
//Left Eye Buttons
	hideTarget('BRVOBtnLeft'); hideTarget('BRVOBtnLeftBreak');
	hideTarget('CRVOBtnLeft'); hideTarget('CRVOBtnLeftBreak');
	hideTarget('CSRBtnLeft'); hideTarget('CSRBtnLeftBreak');
	hideTarget('ERMBtnLeft'); hideTarget('ERMBtnLeftBreak');
	hideTarget('floatersBtnLeft'); hideTarget('floatersBtnLeftBreak');
	hideTarget('latticeBtnLeft'); hideTarget('latticeBtnLeftBreak');
	hideTarget('macularEdemaBtnLeft'); hideTarget('macularEdemaBtnLeftBreak');
	hideTarget('dryAMDBtnLeft'); hideTarget('dryAMDBtnLeftBreak');
	hideTarget('NPDRBtnLeft'); hideTarget('NPDRBtnLeftBreak');
	hideTarget('PDRBtnLeft'); hideTarget('PDRBtnLeftBreak');
	hideTarget('PVDBtnLeft'); hideTarget('PVDBtnLeftBreak');
	hideTarget('RDBtnRLeft'); hideTarget('RDBtnLeftBreak');

}



function showExtraDiagnosisBtns() {
//Right Eye Buttons
	showTarget('BRVOBtnRight'); showTarget('BRVOBtnRightBreak');
	showTarget('CRVOBtnRight'); showTarget('CRVOBtnRightBreak');
	showTarget('CSRBtnRight'); showTarget('CSRBtnRightBreak');
	showTarget('ERMBtnRight'); showTarget('ERMBtnRightBreak');
	showTarget('floatersBtnRight'); showTarget('floatersBtnRightBreak');
	showTarget('latticeBtnRight'); showTarget('latticeBtnRightBreak');
	showTarget('macularEdemaBtnRight'); showTarget('macularEdemaBtnRightBreak');
	showTarget('dryAMDBtnRight'); showTarget('dryAMDBtnRightBreak');
	showTarget('NPDRBtnRight'); showTarget('NPDRBtnRightBreak');
	showTarget('PDRBtnRight'); showTarget('PDRBtnRightBreak');
	showTarget('PVDBtnRight'); showTarget('PVDBtnRightBreak');
	showTarget('RDBtnRight'); showTarget('RDBtnRightBreak');
//Left Eye Buttons
	showTarget('BRVOBtnLeft'); showTarget('BRVOBtnLeftBreak');
	showTarget('CRVOBtnLeft'); showTarget('CRVOBtnLeftBreak');
	showTarget('CSRBtnLeft'); showTarget('CSRBtnLeftBreak');
	showTarget('ERMBtnLeft'); showTarget('ERMBtnLeftBreak');
	showTarget('floatersBtnLeft'); showTarget('floatersBtnLeftBreak');
	showTarget('latticeBtnLeft'); showTarget('latticeBtnLeftBreak');
	showTarget('macularEdemaBtnLeft'); showTarget('macularEdemaBtnLeftBreak');
	showTarget('dryAMDBtnLeft'); showTarget('dryAMDBtnLeftBreak');
	showTarget('NPDRBtnLeft'); showTarget('NPDRBtnLeftBreak');
	showTarget('PDRBtnLeft'); showTarget('PDRBtnLeftBreak');
	showTarget('PVDBtnLeft'); showTarget('PVDBtnLeftBreak');
	showTarget('RDBtnLeft'); showTarget('RDBtnLeftBreak');
}






function setDiagnosisRight(value) {
	diagnosisRight = value;
	setDiagnosisStr();
}

function setDiagnosisLeft(value) {
	diagnosisLeft = value;
	setDiagnosisStr();
}

function setDiagnosisStr() {
	diagnosisStrBilateral = 'n/a' //re-initialize variable, needed when deleting all text from customizable textareas 
//Diagnoses Right Eye
	if (diagnosisRight == 'custom') {diagnosisStrRight = document.getElementById("customDiagnosisTextRight").value;}	
	else if(diagnosisRight == 'atrophicHole') {diagnosisStrRight = ' an atrophic hole';}
	else if(diagnosisRight == 'BRAO') {diagnosisStrRight = ' a branch retinal artery occlusion';}
	else if(diagnosisRight == 'BRVO') {diagnosisStrRight = ' a branch retinal vein occlusion';}
	else if(diagnosisRight == 'BRVOwME') {diagnosisStrRight = ' a branch retinal vein occlusion with macular edema';}
	else if(diagnosisRight == 'BRVOwNV') {diagnosisStrRight = ' a branch retinal vein occlusion with neovascularization';}
	else if(diagnosisRight == 'CSR') {diagnosisStrRight = ' central serous retinopathy';}
	else if(diagnosisRight == 'CRVO') {diagnosisStrRight = ' a central retinal vein occlusion';}
	else if(diagnosisRight == 'CRVOwME') {diagnosisStrRight = ' a central retinal vein occlusion with macular edema';}
	else if(diagnosisRight == 'CRVOwNV') {diagnosisStrRight = ' a central retinal vein occlusion with neovascularization';}
	else if(diagnosisRight == 'CNVM') {diagnosisStrRight = ' a choroidal neovascular membrane';}
	else if(diagnosisRight == 'CME') {diagnosisStrRight = ' cystoid macular edema';}
	else if(diagnosisRight == 'DR') {diagnosisStrRight = ' diabetic retinopathy';}
	else if(diagnosisRight == 'DRwME') {diagnosisStrRight = ' diabetic retinopathy with macular edema';}
	else if(diagnosisRight == 'DRwNV') {diagnosisStrRight = ' diabetic retinopathy with neovascularization';}
	else if(diagnosisRight == 'endophth') {diagnosisStrRight = ' endophthalmitis';}
	else if(diagnosisRight == 'ERM') {diagnosisStrRight = ' an epiretinal membrane';}
	else if(diagnosisRight == 'wetAMD') {diagnosisStrRight = ' exudative macular degeneration';}
	else if(diagnosisRight == 'floater') {diagnosisStrRight = ' a floater';}
	else if(diagnosisRight == 'floaters') {diagnosisStrRight = ' floaters';}
	else if(diagnosisRight == 'HRVO') {diagnosisStrRight = ' a hemispheric retinal vein occlusion';}
	else if(diagnosisRight == 'HRVOwME') {diagnosisStrRight = ' a hemispheric retinal vein occlusion with macular edema';}
	else if(diagnosisRight == 'HRVOwNV') {diagnosisStrRight = ' a hemispheric retinal vein occlusion with neovascularization';}
	else if(diagnosisRight == 'hydroxy') {diagnosisStrRight = ' hydroxychloroquine use';}
	else if(diagnosisRight == 'Irvine') {diagnosisStrRight = ' Irvine-Gass syndome';}
	else if(diagnosisRight == 'iritis') {diagnosisStrRight = ' iritis';}
	else if(diagnosisRight == 'lattice') {diagnosisStrRight = ' lattice degeneration';}
	else if(diagnosisRight == 'latticeHole') {diagnosisStrRight = ' lattice degeneration with a retinal hole';}
	else if(diagnosisRight == 'AMD') {diagnosisStrRight = ' macular degeneration';}
	else if(diagnosisRight == 'macHole') {diagnosisStrRight = ' a macular hole';}
	else if(diagnosisRight == 'macPseudohole') {diagnosisStrRight = ' a macular pseudohole';}
	else if(diagnosisRight == 'ME') {diagnosisStrRight = ' macular edema';}
	else if(diagnosisRight == 'MERadiation') {diagnosisStrRight = ' macular edema secondary to radiation retinopathy';}
	else if(diagnosisRight == 'MEUveitis') {diagnosisStrRight = ' macular edema secondary to uveitis';}
	else if(diagnosisRight == 'multiDefects') {diagnosisStrRight = ' multiple retinal defects';}
	else if(diagnosisRight == 'MyopDegen') {diagnosisStrRight = ' myopic degeneration';}
	else if(diagnosisRight == 'MyopDegenCNV') {diagnosisStrRight = ' myopic degeneration with choroidal neovascularization';}
	else if(diagnosisRight == 'dryAMD') {diagnosisStrRight = ' nonexudative macular degeneration';}
	else if(diagnosisRight == 'dryAMDwAtrophy') {diagnosisStrRight = ' nonexudative macular degeneration with atrophy';}
	else if(diagnosisRight == 'NPDR') {diagnosisStrRight = ' nonproliferative diabetic retinopathy';}
	else if(diagnosisRight == 'NPDRwME') {diagnosisStrRight = ' nonproliferative diabetic retinopathy with macular edema';}
	else if(diagnosisRight == 'photopsia') {diagnosisStrRight = ' photopsia';}
	else if(diagnosisRight == 'plaq') {diagnosisStrRight = ' Plaquenil use';}
	else if(diagnosisRight == 'PVD') {diagnosisStrRight = ' a posterior vitreous detachment';}
	else if(diagnosisRight == 'PDR') {diagnosisStrRight = ' proliferative diabetic retinopathy';}
	else if(diagnosisRight == 'PDRwME') {diagnosisStrRight = ' proliferative diabetic retinopathy with macular edema';}
	else if(diagnosisRight == 'PDRwINV') {diagnosisStrRight = ' proliferative diabetic retinopathy with iris neovascularization';}
	else if(diagnosisRight == 'retEdema') {diagnosisStrRight = ' retinal edema';}
	else if(diagnosisRight == 'retSchisis') {diagnosisStrRight = ' retinoschisis';}
	else if(diagnosisRight == 'retSchisisHole') {diagnosisStrRight = ' retinoschisis with a retinal hole';}
	else if(diagnosisRight == 'RD') {diagnosisStrRight = ' a retinal detachment';}
	else if(diagnosisRight == 'RDLocalized') {diagnosisStrRight = ' a localized retinal detachment';}
	else if(diagnosisRight == 'retHole') {diagnosisStrRight = ' a retinal hole';}
	else if(diagnosisRight == 'retHoleWithFluid') {diagnosisStrRight = ' a retinal hole with associated fluid';}
	else if(diagnosisRight == 'retTear') {diagnosisStrRight = ' a retinal tear';}
	else if(diagnosisRight == 'retTearWithFluid') {diagnosisStrRight = ' a retinal tear with associated fluid';}
	else if(diagnosisRight == 'telang') {diagnosisStrRight = ' retinal telangiectasia';}
	else if(diagnosisRight == 'uveitis') {diagnosisStrRight = ' uveitis';}
	else if(diagnosisRight == 'vitreitis') {diagnosisStrRight = ' vitreitis';}
	else if(diagnosisRight == 'VMA') {diagnosisStrRight = ' vitreomacular adhesion';}
	else if(diagnosisRight == 'VMT') {diagnosisStrRight = ' vitreomacular traction';}
	else if(diagnosisRight == 'vitHeme') {diagnosisStrRight = ' a vitreous hemorrhage';}
	else {diagnosisStrRight = 'n/a';}
	if (diagnosisStrRight.charAt(0) != ' ') {diagnosisStrRight = ' ' + diagnosisStrRight;}
	document.getElementById("customDiagnosisTextRight").value = diagnosisStrRight.substring(1);
//Diagnoses Left Eye
	if (diagnosisLeft== 'custom') {diagnosisStrLeft = document.getElementById("customDiagnosisTextLeft").value;}		
	else if(diagnosisLeft == 'atrophicHole') {diagnosisStrLeft = ' an atrophic hole';}
	else if(diagnosisLeft == 'BRAO') {diagnosisStrLeft = ' a branch retinal artery occlusion';}
	else if(diagnosisLeft == 'BRVO') {diagnosisStrLeft = ' a branch retinal vein occlusion';}
	else if(diagnosisLeft == 'BRVOwME') {diagnosisStrLeft = ' a branch retinal vein occlusion with macular edema';}
	else if(diagnosisLeft == 'BRVOwNV') {diagnosisStrLeft = ' a branch retinal vein occlusion with neovascularization';}
	else if(diagnosisLeft == 'CSR') {diagnosisStrLeft = ' central serous retinopathy';}
	else if(diagnosisLeft == 'CRVO') {diagnosisStrLeft = ' a central retinal vein occlusion';}
	else if(diagnosisLeft == 'CRVOwME') {diagnosisStrLeft = ' a central retinal vein occlusion with macular edema';}
	else if(diagnosisLeft == 'CRVOwNV') {diagnosisStrLeft = ' a central retinal vein occlusion with neovascularization';}
	else if(diagnosisLeft == 'CNVM') {diagnosisStrLeft = ' a choroidal neovascular membrane';}
	else if(diagnosisLeft == 'CME') {diagnosisStrLeft = ' cystoid macular edema';}
	else if(diagnosisLeft == 'DR') {diagnosisStrLeft = ' diabetic retinopathy';}
	else if(diagnosisLeft == 'DRwME') {diagnosisStrLeft = ' diabetic retinopathy with macular edema';}
	else if(diagnosisLeft == 'DRwNV') {diagnosisStrLeft = ' diabetic retinopathy with neovascularization';}
	else if(diagnosisLeft == 'endophth') {diagnosisStrLeft = ' endophthalmitis';}
	else if(diagnosisLeft == 'ERM') {diagnosisStrLeft = ' an epiretinal membrane';}
	else if(diagnosisLeft == 'wetAMD') {diagnosisStrLeft = ' exudative macular degeneration';}
	else if(diagnosisLeft == 'floater') {diagnosisStrLeft = ' a floater';}
	else if(diagnosisLeft == 'floaters') {diagnosisStrLeft = ' floaters';}
	else if(diagnosisLeft == 'HRVO') {diagnosisStrLeft = ' a hemispheric retinal vein occlusion';}
	else if(diagnosisLeft == 'HRVOwME') {diagnosisStrLeft = ' a hemispheric retinal vein occlusion with macular edema';}
	else if(diagnosisLeft == 'HRVOwNV') {diagnosisStrLeft = ' a hemispheric retinal vein occlusion with neovascularization';}
	else if(diagnosisLeft == 'hydroxy') {diagnosisStrLeft = ' hydroxychloroquine use';}
	else if(diagnosisLeft == 'Irvine') {diagnosisStrLeft = ' Irvine-Gass syndome';}
	else if(diagnosisLeft == 'iritis') {diagnosisStrLeft = ' iritis';}
	else if(diagnosisLeft == 'lattice') {diagnosisStrLeft = ' lattice degeneration';}
	else if(diagnosisLeft == 'latticeHole') {diagnosisStrLeft = ' lattice degeneration with a retinal hole';}
	else if(diagnosisLeft == 'AMD') {diagnosisStrLeft = ' macular degeneration';}
	else if(diagnosisLeft == 'macHole') {diagnosisStrLeft = ' a macular hole';}
	else if(diagnosisLeft == 'macPseudohole') {diagnosisStrLeft = ' a macular pseudohole';}
	else if(diagnosisLeft == 'ME') {diagnosisStrLeft = ' macular edema';}
	else if(diagnosisLeft == 'MERadiation') {diagnosisStrLeft = ' macular edema secondary to radiation retinopathy';}
	else if(diagnosisLeft == 'MEUveitis') {diagnosisStrLeft = ' macular edema secondary to uveitis';}
	else if(diagnosisLeft == 'multiDefects') {diagnosisStrLeft = ' multiple retinal defects';}
	else if(diagnosisLeft == 'MyopDegen') {diagnosisStrLeft = ' myopic degeneration';}
	else if(diagnosisLeft == 'MyopDegenCNV') {diagnosisStrLeft = ' myopic degeneration with choroidal neovascularization';}
	else if(diagnosisLeft == 'dryAMD') {diagnosisStrLeft = ' nonexudative macular degeneration';}
	else if(diagnosisLeft == 'dryAMDwAtrophy') {diagnosisStrLeft = ' nonexudative macular degeneration with atrophy';}
	else if(diagnosisLeft == 'NPDR') {diagnosisStrLeft = ' nonproliferative diabetic retinopathy';}
	else if(diagnosisLeft == 'NPDRwME') {diagnosisStrLeft = ' nonproliferative diabetic retinopathy with macular edema';}
	else if(diagnosisLeft == 'photopsia') {diagnosisStrLeft = ' photopsia';}
	else if(diagnosisLeft == 'plaq') {diagnosisStrLeft = ' Plaquenil use';}
	else if(diagnosisLeft == 'PVD') {diagnosisStrLeft = ' a posterior vitreous detachment';}
	else if(diagnosisLeft == 'PDR') {diagnosisStrLeft = ' proliferative diabetic retinopathy';}
	else if(diagnosisLeft == 'PDRwME') {diagnosisStrLeft = ' proliferative diabetic retinopathy with macular edema';}
	else if(diagnosisLeft == 'PDRwINV') {diagnosisStrLeft = ' proliferative diabetic retinopathy with iris neovascularization';}
	else if(diagnosisLeft == 'retEdema') {diagnosisStrLeft = ' retinal edema';}
	else if(diagnosisLeft == 'retSchisis') {diagnosisStrLeft = ' retinoschisis';}
	else if(diagnosisLeft == 'retSchisisHole') {diagnosisStrLeft = ' retinoschisis with a retinal hole';}
	else if(diagnosisLeft == 'RD') {diagnosisStrLeft = ' a retinal detachment';}
	else if(diagnosisLeft == 'RDLocalized') {diagnosisStrLeft = ' a localized retinal detachment';}
	else if(diagnosisLeft == 'retHole') {diagnosisStrLeft = ' a retinal hole';}
	else if(diagnosisLeft == 'retHoleWithFluid') {diagnosisStrLeft = ' a retinal hole with associated fluid';}
	else if(diagnosisLeft == 'retTear') {diagnosisStrLeft = ' a retinal tear';}
	else if(diagnosisLeft == 'retTearWithFluid') {diagnosisStrLeft = ' a retinal tear with associated fluid';}
	else if(diagnosisLeft == 'telang') {diagnosisStrLeft = ' retinal telangiectasia';}
	else if(diagnosisLeft == 'uveitis') {diagnosisStrLeft = ' uveitis';}
	else if(diagnosisLeft == 'vitreitis') {diagnosisStrLeft = ' vitreitis';}
	else if(diagnosisLeft == 'VMA') {diagnosisStrLeft = ' vitreomacular adhesion';}
	else if(diagnosisLeft == 'VMT') {diagnosisStrLeft = ' vitreomacular traction';}
	else if(diagnosisLeft == 'vitHeme') {diagnosisStrLeft = ' a vitreous hemorrhage';}
	else {diagnosisStrLeft = 'n/a';}
	if (diagnosisStrLeft.charAt(0) != ' ') {diagnosisStrLeft = ' ' + diagnosisStrLeft;}
	document.getElementById("customDiagnosisTextLeft").value = diagnosisStrLeft.substring(1);
//Diagnoses Bilateral	
	if(diagnosisStrRight == diagnosisStrLeft) {
		// these used to all start with the word bilateral, but had to remove because procedure strings say bilaterally
		// but kept this variable for the dianoses like atrophic holes that need a plural form
		if(diagnosisRight == 'atrophicHole') {diagnosisStrBilateral = ' atrophic holes';}
		else if(diagnosisRight == 'BRAO') {diagnosisStrBilateral = ' branch retinal artery occlusions';}
		else if(diagnosisRight == 'BRVO') {diagnosisStrBilateral = ' branch retinal vein occlusions';}
		else if(diagnosisRight == 'BRVOwME') {diagnosisStrBilateral = ' branch retinal vein occlusions with macular edema';}
		else if(diagnosisRight == 'BRVOwNV') {diagnosisStrBilateral = ' branch retinal vein occlusions with neovascularization';}
		else if(diagnosisRight == 'CSR') {diagnosisStrBilateral = ' central serous retinopathy';}
		else if(diagnosisRight == 'CRVO') {diagnosisStrBilateral = ' central retinal vein occlusions';}
		else if(diagnosisRight == 'CRVOwME') {diagnosisStrBilateral = ' central retinal vein occlusions with macular edema';}
		else if(diagnosisRight == 'CRVOwNV') {diagnosisStrBilateral = ' central retinal vein occlusions with neovascularization';}
		else if(diagnosisRight == 'CNVM') {diagnosisStrBilateral = ' choroidal neovascular membranes';}
		else if(diagnosisRight == 'CME') {diagnosisStrBilateral = ' cystoid macular edema';}
		else if(diagnosisRight == 'DR') {diagnosisStrBilateral = ' diabetic retinopathy';}
		else if(diagnosisRight == 'DRwME') {diagnosisStrBilateral = ' diabetic retinopathy with macular edema';}
		else if(diagnosisRight == 'DRwNV') {diagnosisStrBilateral = ' diabetic retinopathy with neovascularization';}
		else if(diagnosisRight == 'endophth') {diagnosisStrBilateral = ' endophthalmitis';}
		else if(diagnosisRight == 'ERM') {diagnosisStrBilateral = ' epiretinal membranes';}
		else if(diagnosisRight == 'wetAMD') {diagnosisStrBilateral = ' exudative macular degeneration';}
		else if(diagnosisRight == 'floater') {diagnosisStrBilateral = ' floaters';}
		else if(diagnosisRight == 'floaters') {diagnosisStrBilateral = ' floaters';}
		else if(diagnosisRight == 'HRVO') {diagnosisStrBilateral = ' hemispheric retinal vein occlusions';}
		else if(diagnosisRight == 'HRVOwME') {diagnosisStrBilateral = ' hemispheric retinal vein occlusions with macular edema';}
		else if(diagnosisRight == 'HRVOwNV') {diagnosisStrBilateral = ' hemispheric retinal vein occlusions with neovascularization';}
		else if(diagnosisRight == 'hydroxy') {diagnosisStrBilateral = ' hydroxychloroquine use';}
		else if(diagnosisRight == 'Irvine') {diagnosisStrBilateral = ' Irvine-Gass syndome';}
		else if(diagnosisRight == 'iritis') {diagnosisStrBilateral = ' iritis';}
		else if(diagnosisRight == 'lattice') {diagnosisStrBilateral = ' lattice degeneration';}
		else if(diagnosisRight == 'latticeHole') {diagnosisStrBilateral = ' lattice degeneration with retinal holes';}
		else if(diagnosisRight == 'AMD') {diagnosisStrBilateral = ' macular degeneration';}
		else if(diagnosisRight == 'macHole') {diagnosisStrBilateral = ' macular holes';}
		else if(diagnosisRight == 'macPseudohole') {diagnosisStrBilateral = ' macular pseudoholes';}
		else if(diagnosisRight == 'ME') {diagnosisStrBilateral = ' macular edema';}
		else if(diagnosisRight == 'MERadiation') {diagnosisStrBilateral = ' macular edema secondary to radiation retinopathy';}
		else if(diagnosisRight == 'MEUveitis') {diagnosisStrBilateral = ' macular edema secondary to uveitis';}
		else if(diagnosisRight == 'multiDefects') {diagnosisStrBilateral = ' retinal defects';}
		else if(diagnosisRight == 'MyopDegen') {diagnosisStrBilateral = ' myopic degeneration';}
		else if(diagnosisRight == 'MyopDegenCNV') {diagnosisStrBilateral = ' myopic degeneration with choroidal neovascularization';}
		else if(diagnosisRight == 'dryAMD') {diagnosisStrBilateral = ' nonexudative macular degeneration';}
		else if(diagnosisRight == 'dryAMDwAtrophy') {diagnosisStrBilateral = ' nonexudative macular degeneration with atrophy';}
		else if(diagnosisRight == 'NPDR') {diagnosisStrBilateral = ' nonproliferative diabetic retinopathy';}
		else if(diagnosisRight == 'NPDRwME') {diagnosisStrBilateral = ' nonproliferative diabetic retinopathy with macular edema';}
		else if(diagnosisRight == 'photopsia') {diagnosisStrBilateral = ' photopsia';}
		else if(diagnosisRight == 'plaq') {diagnosisStrBilateral = ' Plaquenil use';}
		else if(diagnosisRight == 'PVD') {diagnosisStrBilateral = ' posterior vitreous detachments';}
		else if(diagnosisRight == 'PDR') {diagnosisStrBilateral = ' proliferative diabetic retinopathy';}
		else if(diagnosisRight == 'PDRwME') {diagnosisStrBilateral = ' proliferative diabetic retinopathy with macular edema';}
		else if(diagnosisRight == 'PDRwINV') {diagnosisStrBilateral = ' proliferative diabetic retinopathy with iris neovascularization';}
		else if(diagnosisRight == 'retEdema') {diagnosisStrBilateral = ' retinal edema';}
		else if(diagnosisRight == 'retSchisis') {diagnosisStrBilateral = ' retinoschisis';}
		else if(diagnosisRight == 'retSchisisHole') {diagnosisStrBilateral = ' retinoschisis with a retinal holes';}
		else if(diagnosisRight == 'RD') {diagnosisStrBilateral = ' retinal detachments';}
		else if(diagnosisRight == 'RDLocalized') {diagnosisStrBilateral = ' localized retinal detachments';}
		else if(diagnosisRight == 'retHole') {diagnosisStrBilateral = ' retinal holes';}
		else if(diagnosisRight == 'retHoleWithFluid') {diagnosisStrBilateral = ' retinal holes with associated fluid';}
		else if(diagnosisRight == 'retTear') {diagnosisStrBilateral = ' retinal tears';}
		else if(diagnosisRight == 'retTearWithFluid') {diagnosisStrBilateral = ' bilateral retinal tears with associated fluid';}
		else if(diagnosisRight == 'telang') {diagnosisStrBilateral = ' retinal telangiectasia';}
		else if(diagnosisRight == 'uveitis') {diagnosisStrBilateral = ' uveitis';}
		else if(diagnosisRight == 'vitreitis') {diagnosisStrBilateral = ' vitreitis';}
		else if(diagnosisRight == 'VMA') {diagnosisStrBilateral = ' vitreomacular adhesion';}
		else if(diagnosisRight == 'VMT') {diagnosisStrBilateral = ' vitreomacular traction';}
		else if(diagnosisRight == 'vitHeme') {diagnosisStrBilateral = ' vitreous hemorrhages';}
		else if(diagnosisStrRight != ' n/a'
			 && diagnosisStrRight != ' ') {
			 	diagnosisStrBilateral = diagnosisStrRight;
			 } //for custom bilateral diagnoses, NEED TO MAKE SURE diagnosisStrRight DOES NOT START WITH ' a ' or ' an '
		bilateralDiagnosis = true;
	}
	else {
		bilateralDiagnosis = false;
	}
}

/* THIS IS OBSOLETE BUT!!!!!!!!!!!!!!!! CHECK OUT THE CODE FOR ELIMINATING SPACES AT START OF STRING
function setCustomDiagnosisStr() {
	if(apptType == 'estabPt') {customDiagnosisStr = document.getElementById("customDiagnosisText1").value;}
	if(apptType == 'estabPtspProc') {customDiagnosisStr = document.getElementById("customDiagnosisTextLeft").value;}
	diagnosisStr = customDiagnosisStr;
	setDiagnosisNeededFalse();
	showContent('visionQ');
	if(diagnosisStr.length > 0) {
		if(diagnosisStr.charAt(0) != ' ') {
			diagnosisStr = ' ' + diagnosisStr;
		}
	}
}*/

function markDiagnosisBtnsRight(target) {
	if(target == 'diagnosisListRight') {activateFld('diagnosisListRight');} else {ignoreFld('diagnosisListRight');}
	if(target == 'BRVOBtnRight') {activateBtn('BRVOBtnRight');} else {ignoreBtn('BRVOBtnRight');}
	if(target == 'BRVOwMEBtnRight') {activateBtn('BRVOwMEBtnRight');} else {ignoreBtn('BRVOwMEBtnRight');}
	if(target == 'CSRBtnRight') {activateBtn('CSRBtnRight');} else {ignoreBtn('CSRBtnRight');}
	if(target == 'CRVOBtnRight') {activateBtn('CRVOBtnRight');} else {ignoreBtn('CRVOBtnRight');}
	if(target == 'CRVOwMEBtnRight') {activateBtn('CRVOwMEBtnRight');} else {ignoreBtn('CRVOwMEBtnRight');}
	if(target == 'ERMBtnRight') {activateBtn('ERMBtnRight');} else {ignoreBtn('ERMBtnRight');}
	if(target == 'wetAMDBtnRight') {activateBtn('wetAMDBtnRight');} else {ignoreBtn('wetAMDBtnRight');}
	if(target == 'floatersBtnRight') {activateBtn('floatersBtnRight');} else {ignoreBtn('floatersBtnRight');}
	if(target == 'latticeBtnRight') {activateBtn('latticeBtnRight');} else {ignoreBtn('latticeBtnRight');}
	if(target == 'macularEdemaBtnRight') {activateBtn('macularEdemaBtnRight');} else {ignoreBtn('macularEdemaBtnRight');}
	if(target == 'dryAMDBtnRight') {activateBtn('dryAMDBtnRight');} else {ignoreBtn('dryAMDBtnRight');}
	if(target == 'NPDRBtnRight') {activateBtn('NPDRBtnRight');} else {ignoreBtn('NPDRBtnRight');}
	if(target == 'NPDRwMEBtnRight') {activateBtn('NPDRwMEBtnRight');} else {ignoreBtn('NPDRwMEBtnRight');}
	if(target == 'PDRBtnRight') {activateBtn('PDRBtnRight');} else {ignoreBtn('PDRBtnRight');}
	if(target == 'PDRwMEBtnRight') {activateBtn('PDRwMEBtnRight');} else {ignoreBtn('PDRwMEBtnRight');}
	if(target == 'PVDBtnRight') {activateBtn('PVDBtnRight');} else {ignoreBtn('PVDBtnRight');}
	if(target == 'retTearBtnRight') {activateBtn('retTearBtnRight');} else {ignoreBtn('retTearBtnRight');}
	if(target == 'RDBtnRight') {activateBtn('RDBtnRight');} else {ignoreBtn('RDBtnRight');}
	if(target == 'UnspecifiedDxBtnRight') {activateBtn('UnspecifiedDxBtnRight');} else {ignoreBtn('UnspecifiedDxBtnRight');}
	if(target == 'reset') {
		deactivateFld('diagnosisListRight');
		deactivateBtn('BRVOBtnRight');
		deactivateBtn('BRVOwMEBtnRight');
		deactivateBtn('CRVOBtnRight');
		deactivateBtn('CRVOwMEBtnRight');
		deactivateBtn('CSRBtnRight');
		deactivateBtn('ERMBtnRight');
		deactivateBtn('wetAMDBtnRight');
		deactivateBtn('floatersBtnRight');
		deactivateBtn('latticeBtnRight');
		deactivateBtn('macularEdemaBtnRight');
		deactivateBtn('dryAMDBtnRight');
		deactivateBtn('NPDRBtnRight');
		deactivateBtn('NPDRwMEBtnRight');
		deactivateBtn('PDRBtnRight');
		deactivateBtn('PDRwMEBtnRight');
		deactivateBtn('PVDBtnRight');
		deactivateBtn('retTearBtnRight');
		deactivateBtn('RDBtnRight');
		deactivateBtn('UnspecifiedDxBtnRight');
		diagnosisRight = ''; //reset diagnosisRight to initialization value
		diagnosisStrRight = 'n/a'; //reset diagnosisStrRight to initialization value
		document.getElementById("customDiagnosisTextRight").value = diagnosisStrRight; //reset preview text to "n/a"
	}
}

function markDiagnosisBtnsLeft(target) {
	if(target == 'diagnosisListLeft') {activateFld('diagnosisListLeft');} else {ignoreFld('diagnosisListLeft');}
	if(target == 'BRVOBtnLeft') {activateBtn('BRVOBtnLeft');} else {ignoreBtn('BRVOBtnLeft');}
	if(target == 'BRVOwMEBtnLeft') {activateBtn('BRVOwMEBtnLeft');} else {ignoreBtn('BRVOwMEBtnLeft');}
	if(target == 'CSRBtnLeft') {activateBtn('CSRBtnLeft');} else {ignoreBtn('CSRBtnLeft');}
	if(target == 'CRVOBtnLeft') {activateBtn('CRVOBtnLeft');} else {ignoreBtn('CRVOBtnLeft');}
	if(target == 'CRVOwMEBtnLeft') {activateBtn('CRVOwMEBtnLeft');} else {ignoreBtn('CRVOwMEBtnLeft');}
	if(target == 'ERMBtnLeft') {activateBtn('ERMBtnLeft');} else {ignoreBtn('ERMBtnLeft');}
	if(target == 'wetAMDBtnLeft') {activateBtn('wetAMDBtnLeft');} else {ignoreBtn('wetAMDBtnLeft');}
	if(target == 'floatersBtnLeft') {activateBtn('floatersBtnLeft');} else {ignoreBtn('floatersBtnLeft');}
	if(target == 'latticeBtnLeft') {activateBtn('latticeBtnLeft');} else {ignoreBtn('latticeBtnLeft');}
	if(target == 'macularEdemaBtnLeft') {activateBtn('macularEdemaBtnLeft');} else {ignoreBtn('macularEdemaBtnLeft');}
	if(target == 'dryAMDBtnLeft') {activateBtn('dryAMDBtnLeft');} else {ignoreBtn('dryAMDBtnLeft');}
	if(target == 'NPDRBtnLeft') {activateBtn('NPDRBtnLeft');} else {ignoreBtn('NPDRBtnLeft');}
	if(target == 'NPDRwMEBtnLeft') {activateBtn('NPDRwMEBtnLeft');} else {ignoreBtn('NPDRwMEBtnLeft');}
	if(target == 'PDRBtnLeft') {activateBtn('PDRBtnLeft');} else {ignoreBtn('PDRBtnLeft');}
	if(target == 'PDRwMEBtnLeft') {activateBtn('PDRwMEBtnLeft');} else {ignoreBtn('PDRwMEBtnLeft');}
	if(target == 'PVDBtnLeft') {activateBtn('PVDBtnLeft');} else {ignoreBtn('PVDBtnLeft');}
	if(target == 'retTearBtnLeft') {activateBtn('retTearBtnLeft');} else {ignoreBtn('retTearBtnLeft');}
	if(target == 'RDBtnLeft') {activateBtn('RDBtnLeft');} else {ignoreBtn('RDBtnLeft');}
	if(target == 'UnspecifiedDxBtnLeft') {activateBtn('UnspecifiedDxBtnLeft');} else {ignoreBtn('UnspecifiedDxBtnLeft');}
	if(target == 'reset') {
		deactivateFld('diagnosisListLeft');
		deactivateBtn('BRVOBtnLeft');
		deactivateBtn('BRVOwMEBtnLeft');
		deactivateBtn('CRVOBtnLeft');
		deactivateBtn('CRVOwMEBtnLeft');
		deactivateBtn('CSRBtnLeft');
		deactivateBtn('ERMBtnLeft');
		deactivateBtn('wetAMDBtnLeft');
		deactivateBtn('floatersBtnLeft');
		deactivateBtn('latticeBtnLeft');
		deactivateBtn('macularEdemaBtnLeft');
		deactivateBtn('dryAMDBtnLeft');
		deactivateBtn('NPDRBtnLeft');
		deactivateBtn('NPDRwMEBtnLeft');
		deactivateBtn('PDRBtnLeft');
		deactivateBtn('PDRwMEBtnLeft');
		deactivateBtn('PVDBtnLeft');
		deactivateBtn('retTearBtnLeft');
		deactivateBtn('RDBtnLeft');
		deactivateBtn('UnspecifiedDxBtnLeft');
		diagnosisLeft = ''; //reset diagnosisLeft to initialization value
		diagnosisStrLeft = 'n/a'; //reset diagnosisStrLeft to initialization value
		document.getElementById("customDiagnosisTextLeft").value = diagnosisStrLeft; //reset preview text to "n/a"
	}
}






		/**********************************************************************
		|																	  |
		|							TREATMENT MANAGEMENT					  |
		|																	  |
		**********************************************************************/

function setProcedureRight(value) {
	if (value == 'custom') {setCustomProcedureStrRight();}
	else {treatmentRight = value;}
	treatedLastVisitRight = true;
	setLaterality3B('right');
	setTreatmentStr();
}

function setProcedureLeft(value) {
	if (value == 'custom') {setCustomProcedureStrLeft();}
	else {treatmentLeft = value;}
	treatedLastVisitLeft = true;
	setLaterality3B('left');
	setTreatmentStr();
}

function setSurgery(value) {
	var commaNeeded = false;
	var counter = 0; // to compare to surgeryCounter to determine where 'and' goes
	var commaNeeded = false; //reset flag variable
	surgeryStr = '';
	if(value == 'custSelect') {
		if(vitrectomyBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' vitrectomy'; commaNeeded = true;}
		if(oilRemovalBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' silicone oil removal'; commaNeeded = true;}
		if(capsulotomyBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' capsulotomy'; commaNeeded = true;}
		if(acWashoutBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' anterior chamber washout'; commaNeeded = true;}
		if(lensectomyBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' lensectomy'; commaNeeded = true;}
		if(chorDrainBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' choroidal drainage'; commaNeeded = true;}
		if(memPeelBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' membrane peeling'; commaNeeded = true;}
		if(cryoBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' cryopexy'; commaNeeded = true;}
		if(laserBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' laser'; commaNeeded = true;}
		if(panretLaserBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' panretinal laser'; commaNeeded = true;}
		if(fluidAirBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' fluid/air exchange'; commaNeeded = true;}
		if(fluidGasBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' fluid/gas exchange'; commaNeeded = true;}
		if(oilExchangeBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' silicone oil exchange'; commaNeeded = true;}
		if(oilInsertionBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' silicone oil insertion'; commaNeeded = true;}
		if(buckleBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' scleral buckling'; commaNeeded = true;}
		if(tPABool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' subretinal tPA injection'; commaNeeded = true;}
		if(ceftVancoBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' intravitreal Ceftazidime and Vancomycin'; commaNeeded = true;}
		if(decadronBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' intravitreal Decadron'; commaNeeded = true;}
		if(triesenceBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' intravitreal Triesence'; commaNeeded = true;}
		if(trypanBlueBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' trypan blue'; commaNeeded = true;}
		if(extraCapBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' extracapsular cataract extraction'; commaNeeded = true;}
		if(iolExchangeBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' intraocular lens exchange'; commaNeeded = true;}
		if(iolRepositionBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' intraocular lens repositioning'; commaNeeded = true;}
		if(phacoBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' phacoemulsification'; commaNeeded = true;}
		if(acIOLBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' anterior chamber IOL implantation'; commaNeeded = true;}
		if(pcIOLBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' posterior chamber IOL implantation'; commaNeeded = true;}
		if(iolImplantationBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' intraocular lens implantation'; commaNeeded = true;}
		if(pneumaticBool) {counter++; if(commaNeeded) {if(surgeryCounter > 2) {surgeryStr += ",";} if(counter == surgeryCounter) {surgeryStr += " and";}} surgeryStr += ' pneumatic retinopexy'; commaNeeded = true;}

		if(apptType == '1DayPO') {document.getElementById("customSurgeryText1").value = surgeryStr;}
		if(apptType == 'otherPO') {document.getElementById("customSurgeryText2").value = surgeryStr;}

		setTreatmentNeededFalse();
		unlockVisionQ();
		unlockPostOpDrops();
		unlockPostOpInstructions();
	}
	else {
		var element;
		setAllSurgeriesFalse()
		if(value == 'vit') {
			surgery = value;
			vitrectomyBool = true;
			element = document.getElementById("floaters1DayPOBtn");
			element.click();
			element = document.getElementById("floatersOtherPOBtn");
			element.click();
		}
		if(value == 'vitPeel') {
			surgery = value;
			vitrectomyBool = true;
			memPeelBool = true;
			element = document.getElementById("erm1DayPOBtn");
			element.click();
			element = document.getElementById("ermOtherPOBtn");
			element.click();
		}
		if(value == 'vitPeelFGE') {
			surgery = value;
			vitrectomyBool = true;
			memPeelBool = true;
			fluidGasBool = true;
			element = document.getElementById("mhRepair1DayPOBtn");
			element.click();
			element = document.getElementById("mhRepairOtherPOBtn");
			element.click();
		}
		if(value == 'vitLaserFGE') {
			surgery = value;
			vitrectomyBool = true;
			laserBool = true;
			fluidGasBool = true;
			element = document.getElementById("rdRepair1DayPOBtn");
			element.click();
			element = document.getElementById("rdRepairOtherPOBtn");
			element.click();
		}
		if(value == 'phacoIOL') {
			surgery = value;
			phacoBool = true;
			iolImplantationBool = true;
			element = document.getElementById("unspecSxReason1DayPOBtn");
			element.click();
			element = document.getElementById("unspecSxReasonOtherPOBtn");
			element.click();
		}

		treatment = value;
		setTreatmentStr();
		setTreatmentNeededFalse();
		unlockVisionQ();
		unlockPostOpDrops();
		unlockPostOpInstructions();
		refreshSurgeryBtns();
	}
}

function setTreatmentStr() {
//In Office Procedures Right Eye
	if(treatmentRight == 'avastin') {treatmentStrRight = ' Avastin treatment';}
	else if(treatmentRight == 'byooviz') {treatmentStrRight = ' Byooviz treatment';}
	else if(treatmentRight == 'ceftAndVanc') {treatmentStrRight = ' Ceftazidime and Vancomycin treatment';}
	else if(treatmentRight == 'cimerli') {treatmentStrRight = ' Cimerli treatment';}
	else if(treatmentRight == 'eylea') {treatmentStrRight = ' Eylea treatment';}
	else if(treatmentRight == 'iluvien') {treatmentStrRight = ' Iluvien treatment';}
	else if(treatmentRight == 'lucentis') {treatmentStrRight = ' Lucentis treatment';}
	else if(treatmentRight == 'ozurdex') {treatmentStrRight = ' Ozurdex treatment';}
	else if(treatmentRight == 'subTenonsTriam') {treatmentStrRight = ' sub-Tenon\'s Triamcinolone treatment';}
	else if(treatmentRight == 'syfovre') {treatmentStrRight = ' Syfovre treatment';}
	else if(treatmentRight == 'triesence') {treatmentStrRight = ' Triesence treatment';}
	else if(treatmentRight == 'vabysmo') {treatmentStrRight = ' Vabysmo treatment';}
	else if(treatmentRight == 'xipere') {treatmentStrRight = ' Xipere treatment';}
	else if(treatmentRight == 'yutiq') {treatmentStrRight = ' Yutiq treatment';}
	else if(treatmentRight == 'focal') {treatmentStrRight = ' focal laser treatment';}
	else if(treatmentRight == 'demarcation') {treatmentStrRight = ' laser demarcation';}
	else if(treatmentRight == 'retinopexy') {treatmentStrRight = ' laser retinopexy';}
	else if(treatmentRight == 'PRP') {treatmentStrRight = ' panretinal photocoagulation';}
	else if(treatmentRight == 'PDT') {treatmentStrRight = ' photodynamic therapy';}
	else if(treatmentRight == 'pneum') {treatmentStrRight = ' pneumatic retinopexy';}
//In Office Procedures Left Eye
	if(treatmentLeft == 'avastin') {treatmentStrLeft = ' Avastin treatment';}
	else if(treatmentLeft == 'byooviz') {treatmentStrLeft = ' Byooviz treatment';}
	else if(treatmentLeft == 'ceftAndVanc') {treatmentStrLeft = ' Ceftazidime and Vancomycin treatment';}
	else if(treatmentLeft == 'cimerli') {treatmentStrLeft = ' Cimerli treatment';}
	else if(treatmentLeft == 'eylea') {treatmentStrLeft = ' Eylea treatment';}
	else if(treatmentLeft == 'iluvien') {treatmentStrLeft = ' Iluvien treatment';}
	else if(treatmentLeft == 'lucentis') {treatmentStrLeft = ' Lucentis treatment';}
	else if(treatmentLeft == 'subTenonsTriam') {treatmentStrLeft = ' sub-Tenon\'s Triamcinolone treatment';}
	else if(treatmentLeft == 'ozurdex') {treatmentStrLeft = ' Ozurdex treatment';}
	else if(treatmentLeft == 'syfovre') {treatmentStrLeft = ' Syfovre treatment';}
	else if(treatmentLeft == 'triesence') {treatmentStrLeft = ' Triesence treatment';}
	else if(treatmentLeft == 'vabysmo') {treatmentStrLeft = ' Vabysmo treatment';}
	else if(treatmentLeft == 'xipere') {treatmentStrLeft = ' Xipere treatment';}
	else if(treatmentLeft == 'yutiq') {treatmentStrLeft = ' Yutiq treatment';}
	else if(treatmentLeft == 'focal') {treatmentStrLeft = ' focal laser treatment';}
	else if(treatmentLeft == 'demarcation') {treatmentStrLeft = ' laser demarcation';}
	else if(treatmentLeft == 'retinopexy') {treatmentStrLeft = ' laser retinopexy';}
	else if(treatmentLeft == 'PRP') {treatmentStrLeft = ' panretinal photocoagulation';}
	else if(treatmentLeft == 'PDT') {treatmentStrLeft = ' photodynamic therapy';}
	else if(treatmentLeft == 'pneum') {treatmentStrLeft = ' pneumatic retinopexy';}
//In Office Procedures Bilateral
	if(treatmentStrRight == treatmentStrLeft) {
		bilateralTreatment = true;
		if(treatmentRight == 'avastin') {treatmentStrFull = ' Avastin treatment bilaterally';}
		else if(treatmentRight == 'byooviz') {treatmentStrFull = ' Byooviz treatment bilaterally';}
		else if(treatmentRight == 'ceftAndVanc') {treatmentStrFull = ' Ceftazidime and Vancomycin treatment bilaterally';}
		else if(treatmentRight == 'cimerli') {treatmentStrFull = ' Cimerli treatment bilaterally';}
		else if(treatmentRight == 'eylea') {treatmentStrFull = ' Eylea treatment bilaterally';}
		else if(treatmentRight == 'iluvien') {treatmentStrFull = ' Iluvien treatment bilaterally';}
		else if(treatmentRight == 'lucentis') {treatmentStrFull = ' Lucentis treatment bilaterally';}
		else if(treatmentRight == 'subTenonsTriam') {treatmentStrFull = ' sub-Tenon\'s Triamcinolone treatment bilaterally';}
		else if(treatmentRight == 'ozurdex') {treatmentStrFull = ' Ozurdex treatment bilaterally';}
		else if(treatmentRight == 'syfovre') {treatmentStrFull = ' Syfovre treatment bilaterally';}
		else if(treatmentRight == 'triesence') {treatmentStrFull = ' Triesence treatment bilaterally';}
		else if(treatmentRight == 'vabysmo') {treatmentStrFull = ' Vabysmo treatment bilaterally';}
		else if(treatmentRight == 'xipere') {treatmentStrFull = ' Xipere treatment bilaterally';}
		else if(treatmentRight == 'yutiq') {treatmentStrFull = ' Yutiq treatment bilaterally';}
		else if(treatmentRight == 'focal') {treatmentStrFull = ' focal laser treatment bilaterally';}
		else if(treatmentRight == 'demarcation') {treatmentStrFull = ' laser demarcation bilaterally';}
		else if(treatmentRight == 'retinopexy') {treatmentStrFull = ' laser retinopexy bilaterally';}
		else if(treatmentRight == 'PRP') {treatmentStrFull = ' panretinal photocoagulation bilaterally';}
		else if(treatmentRight == 'PDT') {treatmentStrFull = ' photodynamic therapy bilaterally';}
		else if(treatmentRight == 'pneum') {treatmentStrFull = ' pneumatic retinopexy bilaterally';}
		else {treatmentStrFull = treatmentStrRight + ' bilaterally';} //for custom treatents that are same bilaterally
												//NEED TO MAKE SURE treatmentStrRight DOES NOT START WITH ' a ' or ' an '	
	}
	else {
		bilateralTreatment = false;
		if(laterality3B == 'right') {treatmentStrFull = treatmentStrRight;}
		else if(laterality3B == 'left') {treatmentStrFull = treatmentStrLeft;}
	}
//Surgeries
	if(surgery == 'complexCat') {surgeryStr = ' complex cataract surgery';}
	else if(surgery == 'extraCapCat') {surgeryStr = ' extracapsular cataract extraction and intraocular lens implantation';}
	else if(surgery == 'phacoIOL') {surgeryStr = ' phacoemulsification and intraocular lens implantation';}
	else if(surgery == 'buckle') {surgeryStr = ' scleral buckling';}
	else if(surgery == 'oilRemoval') {surgeryStr = ' silicone oil removal';}
	else if(surgery == 'tantalum') {surgeryStr = ' tantalum clip placement';}
	else if(surgery == 'vit') {surgeryStr = ' vitrectomy';}
	else if(surgery == 'vitIOLChange') {surgeryStr = ' vitrectomy and intraocular lens exchange';}
	else if(surgery == 'vitLaser') {surgeryStr = ' vitrectomy and laser';}
	else if(surgery == 'vitLaserFGE') {surgeryStr = ' vitrectomy, laser and fluid/gas exchange';}
	else if(surgery == 'vitLaserOil') {surgeryStr = ' vitrectomy, laser and silicone oil insertion';}
	else if(surgery == 'vitLensectomyIOL') {surgeryStr = ' vitrectomy, lensectomy and intraocular lens implantation';}
	else if(surgery == 'vitPeel') {surgeryStr = ' vitrectomy and membrane peeling';}
	else if(surgery == 'vitPeelFGE') {surgeryStr = ' vitrectomy, membrane peeling and fluid/gas exchange';}
	else if(surgery == 'vitPeelLaser') {surgeryStr = ' vitrectomy, membrane peeling and laser';}
	else if(surgery == 'vitPeelLaserFGE') {surgeryStr = ' vitrectomy, membrane peeling, laser and fluid/gas exchange';}
	else if(surgery == 'vitPeelLaserOil') {surgeryStr = ' vitrectomy, membrane peeling, laser and silicone oil insertion';}
	else if(surgery == 'vitPeelPRP') {surgeryStr = ' vitrectomy, membrane peeling and panretinal photocoagulation';}
	else if(surgery == 'vitPRP') {surgeryStr = ' vitrectomy and panretinal photocoagulation';}
	else if(surgery == 'vitOilRemoval') {surgeryStr = ' vitrectomy and silicone oil removal';}
//Placeholder
	else {surgeryStr = ' ( ..... surgery placeholder ..... )';}
	//set custom procedure & surgery strings (i.e. the placeholder value) to current selection
	customProcedureStrRight = treatmentStrRight;
	customProcedureStrLeft = treatmentStrLeft;		
	if(apptType == 'estabPtspProc') {
		document.getElementById("customProcedureTextRight").value = customProcedureStrRight;
		document.getElementById("customProcedureTextLeft").value = customProcedureStrLeft;
	}
	if(apptType == '1DayPO') {document.getElementById("customSurgeryText1").value = surgeryStr;}
	if(apptType == 'otherPO') {document.getElementById("customSurgeryText2").value = surgeryStr;}
}

function markProcedureBtnsRight(target) {
	if(target == 'procedureListRight') {activateFld('procedureListRight');} else {ignoreFld('procedureListRight');}
	if(target == 'avastinBtnRight') {activateBtn('avastinBtnRight');} else {ignoreBtn('avastinBtnRight');}
	if(target == 'eyleaBtnRight') {activateBtn('eyleaBtnRight');} else {ignoreBtn('eyleaBtnRight');}
	if(target == 'lucentisBtnRight') {activateBtn('lucentisBtnRight');} else {ignoreBtn('lucentisBtnRight');}
	if(target == 'retinopexyBtnRight') {activateBtn('retinopexyBtnRight');} else {ignoreBtn('retinopexyBtnRight');}
	if(target == 'reset') {
		deactivateFld('procedureListRight');
		deactivateBtn('avastinBtnRight');
		deactivateBtn('eyleaBtnRight');
		deactivateBtn('lucentisBtnRight');
		deactivateBtn('retinopexyBtnRight');
		treatmentRight = ''; //reset treatmentRight to initializing value
		treatmentStrRight = ' [procedure placeholder]'; //reset treatmentStrRight to initializing value
		document.getElementsByTagName('customProcedureTextRight').value = treatmentStrRight; //reset preview text to "[procedure placeholder]"
	}
}

function markProcedureBtnsLeft(target) {
	if(target == 'procedureListLeft') {activateFld('procedureListLeft');} else {ignoreFld('procedureListLeft');}
	if(target == 'avastinBtnLeft') {activateBtn('avastinBtnLeft');} else {ignoreBtn('avastinBtnLeft');}
	if(target == 'eyleaBtnLeft') {activateBtn('eyleaBtnLeft');} else {ignoreBtn('eyleaBtnLeft');}
	if(target == 'lucentisBtnLeft') {activateBtn('lucentisBtnLeft');} else {ignoreBtn('lucentisBtnLeft');}
	if(target == 'retinopexyBtnLeft') {activateBtn('retinopexyBtnLeft');} else {ignoreBtn('retinopexyBtnLeft');}
	if(target == 'reset') {
		deactivateFld('procedureListLeft');
		deactivateBtn('avastinBtnLeft');
		deactivateBtn('eyleaBtnLeft');
		deactivateBtn('lucentisBtnLeft');
		deactivateBtn('retinopexyBtnLeft');
		treatmentLeft = ''; //reset treatmentRight to initializing value
		treatmentStrLeft = ' [procedure placeholder]'; //reset treatmentStrRight to initializing value
		document.getElementsByTagName('customProcedureTextRight').value = treatmentStrRight; //reset preview text to "[procedure placeholder]"
	}
}


		/**********************************************************************
		|																	  |
		|				    GENERIC VISION COMPLAINT MANAGEMENT				  |
		|																	  |
		**********************************************************************/

function setVisionSeverityRight(value) {
	visionSeverityR = value;
	setVisionSeverityStrRight();
}

function setVisionSeverityStrRight() {
	if(visionSeverityR == '') {visionSeverityRStr = '';}
	else if(visionSeverityR == 'signifWorse') {visionSeverityRStr = ' significantly worsened';}
	else if(visionSeverityR == 'worse') {visionSeverityRStr = ' worsened';}
	else if(visionSeverityR == 'slightWorse') {visionSeverityRStr = ' slightly worsened';}
	else if(visionSeverityR == 'gradWorse') {visionSeverityRStr = ' gradually worsening';}
	else if(visionSeverityR == 'stable') {visionSeverityRStr = ' stable';}
	else if(visionSeverityR == 'fluctuating') {visionSeverityRStr = ' fluctuating';}
	else if(visionSeverityR == 'gradImproved') {visionSeverityRStr = ' gradually improving';}
	else if(visionSeverityR == 'slightImproved') {visionSeverityRStr = ' slightly improved';}
	else if(visionSeverityR == 'improved') {visionSeverityRStr = ' improved';}
	else if(visionSeverityR == 'signifImproved') {visionSeverityRStr = ' significantly improved';}
}

function setVisionSeverityLeft(value) {
	visionSeverityL = value;
	setVisionSeverityStrLeft();
}

function setVisionSeverityStrLeft() {
	if(visionSeverityL == '') {visionSeverityLStr = '';}
	else if(visionSeverityL == 'signifWorse') {visionSeverityLStr = ' significantly worsened';}
	else if(visionSeverityL == 'worse') {visionSeverityLStr = ' worsened';}
	else if(visionSeverityL == 'slightWorse') {visionSeverityLStr = ' slightly worsened';}
	else if(visionSeverityL == 'gradWorse') {visionSeverityLStr = ' gradually worsening';}
	else if(visionSeverityL == 'stable') {visionSeverityLStr = ' stable';}
	else if(visionSeverityL == 'fluctuating') {visionSeverityLStr = ' fluctuating';}
	else if(visionSeverityL == 'gradImproved') {visionSeverityLStr = ' gradually improving';}
	else if(visionSeverityL == 'slightImproved') {visionSeverityLStr = ' slightly improved';}
	else if(visionSeverityL == 'improved') {visionSeverityLStr = ' improved';}
	else if(visionSeverityL == 'signifImproved') {visionSeverityLStr = ' significantly improved';}
}

function setVisionDurationRight(value) {
	visionDurationR = value;
	setVisionDurationStrRight();
}

function setVisionDurationStrRight() {
	if(visionDurationR == '') {visionDurationRStr = '';}
	else if(visionDurationR == 'pastHour') {visionDurationRStr = ' over the past hour';}
	else if(visionDurationR == 'pastCoupleHours') {visionDurationRStr = ' over the past couple hours';}
	else if(visionDurationR == 'pastFewHours') {visionDurationRStr = ' over the past few hours';}
	else if(visionDurationR == 'pastSeveralHours') {visionDurationRStr = ' over the past several hours';}
	else if(visionDurationR == 'pastDay') {visionDurationRStr = ' over the past day';}
	else if(visionDurationR == 'pastCoupleDays') {visionDurationRStr = ' over the past couple days';}
	else if(visionDurationR == 'pastFewDays') {visionDurationRStr = ' over the past few days';}
	else if(visionDurationR == 'pastSeveralDays') {visionDurationRStr = ' over the past several days';}
	else if(visionDurationR == 'pastWeek') {visionDurationRStr = ' over the past week';}
	else if(visionDurationR == 'pastCoupleWeeks') {visionDurationRStr = ' over the past couple weeks';}
	else if(visionDurationR == 'pastFewWeeks') {visionDurationRStr = ' over the past few weeks';}
	else if(visionDurationR == 'pastMonth') {visionDurationRStr = ' over the past month';}
	else if(visionDurationR == 'pastCoupleMonths') {visionDurationRStr = ' over the past couple months';}
	else if(visionDurationR == 'pastFewMonths') {visionDurationRStr = ' over the past few months';}
	else if(visionDurationR == 'pastSeveralMonths') {visionDurationRStr = ' over the past several months';}
	else if(visionDurationR == 'pastHalfYear') {visionDurationRStr = ' over the past half year';}
	else if(visionDurationR == 'pastYear') {visionDurationRStr = ' over the past year';}
	else if(visionDurationR == 'pastCoupleYears') {visionDurationRStr = ' over the past couple years';}
	else if(visionDurationR == 'sinceLastSeen') {visionDurationRStr = ' since the last visit';}
}

function setVisionDurationLeft(value) {
	visionDurationL = value;
	setVisionDurationStrLeft();
}

function setVisionDurationStrLeft() {
	if(visionDurationL == '') {visionDurationLStr = '';}
	else if(visionDurationL == 'pastHour') {visionDurationLStr = ' over the past hour';}
	else if(visionDurationL == 'pastCoupleHours') {visionDurationLStr = ' over the past couple hours';}
	else if(visionDurationL == 'pastFewHours') {visionDurationLStr = ' over the past few hours';}
	else if(visionDurationL == 'pastSeveralHours') {visionDurationLStr = ' over the past several hours';}
	else if(visionDurationL == 'pastDay') {visionDurationLStr = ' over the past day';}
	else if(visionDurationL == 'pastCoupleDays') {visionDurationLStr = ' over the past couple days';}
	else if(visionDurationL == 'pastFewDays') {visionDurationLStr = ' over the past few days';}
	else if(visionDurationL == 'pastSeveralDays') {visionDurationLStr = ' over the past several days';}
	else if(visionDurationL == 'pastWeek') {visionDurationLStr = ' over the past week';}
	else if(visionDurationL == 'pastCoupleWeeks') {visionDurationLStr = ' over the past couple weeks';}
	else if(visionDurationL == 'pastFewWeeks') {visionDurationLStr = ' over the past few weeks';}
	else if(visionDurationL == 'pastMonth') {visionDurationLStr = ' over the past month';}
	else if(visionDurationL == 'pastCoupleMonths') {visionDurationLStr = ' over the past couple months';}
	else if(visionDurationL == 'pastFewMonths') {visionDurationLStr = ' over the past few months';}
	else if(visionDurationL == 'pastSeveralMonths') {visionDurationLStr = ' over the past several months';}
	else if(visionDurationL == 'pastHalfYear') {visionDurationLStr = ' over the past half year';}
	else if(visionDurationL == 'pastYear') {visionDurationLStr = ' over the past year';}
	else if(visionDurationL == 'pastCoupleYears') {visionDurationLStr = ' over the past couple years';}
	else if(visionDurationL == 'sinceLastSeen') {visionDurationLStr = ' since the last visit';}
}

function setVisionContextRight(value) {
	visionContextR = value;
	visionContextRefR = value;
	setVisionContextStrRight();
}

function setVisionContextStrRight() {
	if(visionContextR == '') {visionContextRStr = '';}
	else if(visionContextR == 'dailyActivities') {visionContextRStr = ' while performing daily activities';}
	else if(visionContextR == 'allDistances') {visionContextRStr = ' at all distances';}
	else if(visionContextR == 'computer') {visionContextRStr = ' while using the computer';}
	else if(visionContextR == 'driving') {visionContextRStr = ' while driving';}
	else if(visionContextR == 'drivingAndReading') {visionContextRStr = ' while driving and reading';}
	else if(visionContextR == 'phone') {visionContextRStr = ' while using the phone';}
	else if(visionContextR == 'reading') {visionContextRStr = ' while reading';}
	else if(visionContextR == 'readingFP') {visionContextRStr = ' while reading fine print';}
	else if(visionContextR == 'faces') {visionContextRStr = ' when recognizing faces';}
	else if(visionContextR == 'streetSigns') {visionContextRStr = ' when looking at street signs';}
	else if(visionContextR == 'tablet') {visionContextRStr = ' while using a tablet';}
	else if(visionContextR == 'withCorrection') {setWithCorrectionODTrue();}
	else if(visionContextR == 'withoutCorrection') {setWithoutCorrectionODTrue();}
}

function setWithCorrectionODTrue() {
	withCorrectionOD = true;
	if(withCorrectionOS == true) {withCorrectionOU = true;}
	withoutCorrectionOD = false;
	withoutCorrectionOU = false;
}

function setWithCorrectionODFalse() {
	withCorrectionOD = false;
	withCorrectionOU = false;
}

function setWithoutCorrectionODTrue() {
	withoutCorrectionOD = true;
	if(withoutCorrectionOS == true) {withoutCorrectionOU = true;}
	withCorrectionOD = false;
	withCorrectionOU = false;
}

function setWithoutCorrectionODFalse() {
	withoutCorrectionOD = false;
	withoutCorrectionOU = false;
}

function setVisionContextLeft(value) {
	visionContextL = value;
	visionContextRefL = value;
	setVisionContextStrLeft();
}

function setVisionContextStrLeft() {
	if(visionContextL == '') {visionContextLStr = '';}
	else if(visionContextL == 'dailyActivities') {visionContextLStr = ' while performing daily activities';}
	else if(visionContextL == 'allDistances') {visionContextLStr = ' at all distances';}
	else if(visionContextL == 'computer') {visionContextLStr = ' while using the computer';}
	else if(visionContextL == 'driving') {visionContextLStr = ' while driving';}
	else if(visionContextL == 'drivingAndReading') {visionContextLStr = ' while driving and reading';}
	else if(visionContextL == 'phone') {visionContextLStr = ' while using the phone';}
	else if(visionContextL == 'reading') {visionContextLStr = ' while reading';}
	else if(visionContextL == 'readingFP') {visionContextLStr = ' while reading fine print';}
	else if(visionContextL == 'faces') {visionContextLStr = ' when recognizing faces';}
	else if(visionContextL == 'streetSigns') {visionContextLStr = ' when looking at street signs';}
	else if(visionContextL == 'tablet') {visionContextLStr = ' while using a tablet';}
	else if(visionContextL == 'withCorrection') {setWithCorrectionOSTrue();}
	else if(visionContextL == 'withoutCorrection') {setWithoutCorrectionOSTrue();}
}

function setWithCorrectionOSTrue() {
	withCorrectionOS = true;
	if(withCorrectionOD == true) {withCorrectionOU = true;}
	withoutCorrectionOS = false;
	withoutCorrectionOU = false;
}

function setWithCorrectionOSFalse() {
	withCorrectionOS = false;
	withCorrectionOU = false;
}

function setWithoutCorrectionOSTrue() {
	withoutCorrectionOS = true;
	if(withoutCorrectionOD == true) {withoutCorrectionOU = true;}
	withCorrectionOS = false;
	withCorrectionOU = false;
}

function setWithoutCorrectionOSFalse() {
	withoutCorrectionOS = false;
	withoutCorrectionOU = false;
}

function toggleQualityBool(target) {
	if(target == 'quality1R') { //Good
		if(qualityBool1R == true) {qualityBool1R = false;} else {qualityBool1R = true; qualityBool2R = false; qualityBool3R = false;}
	}
	if(target == 'quality2R') { //Fair
		if(qualityBool2R == true) {qualityBool2R = false;} else {qualityBool2R = true; qualityBool1R = false; qualityBool3R = false; qualityBool4R = false;}
	}
	if(target == 'quality3R') { //Poor
		if(qualityBool3R == true) {qualityBool3R = false;} else {qualityBool3R = true; qualityBool1R = false; qualityBool2R = false; qualityBool4R = false;}
	}
	if(target == 'quality4R') { //Clear
		if(qualityBool4R == true) {qualityBool4R = false;} else {qualityBool4R = true; qualityBool2R = false; qualityBool3R = false; qualityBool5R = false; qualityBool6R = false; qualityBool7R = false; qualityBool8R = false;}
	}
	if(target == 'quality5R') { //Blurred
		if(qualityBool5R == true) {qualityBool5R = false;} else {qualityBool5R = true; qualityBool4R = false;}
	}
	if(target == 'quality6R') { //Cloudy
		if(qualityBool6R == true) {qualityBool6R = false;} else {qualityBool6R = true; qualityBool4R = false;}
	}
	if(target == 'quality7R') { //Hazy
		if(qualityBool7R == true) {qualityBool7R = false;} else {qualityBool7R = true; qualityBool4R = false;}
	}
	if(target == 'quality8R') { //Distorted
		if(qualityBool8R == true) {qualityBool8R = false;} else {qualityBool8R = true; qualityBool4R = false;}
	}
	if(target == 'quality1L') { //Good
		if(qualityBool1L == true) {qualityBool1L = false;} else {qualityBool1L = true; qualityBool2L = false; qualityBool3L = false;}
	}
	if(target == 'quality2L') { //Fair
		if(qualityBool2L == true) {qualityBool2L = false;} else {qualityBool2L = true; qualityBool1L = false; qualityBool3L = false; qualityBool4L = false;}
	}
	if(target == 'quality3L') { //Poor
		if(qualityBool3L == true) {qualityBool3L = false;} else {qualityBool3L = true; qualityBool1L = false; qualityBool2L = false; qualityBool4L = false;}
	}
	if(target == 'quality4L') { //Clear
		if(qualityBool4L == true) {qualityBool4L = false;} else {qualityBool4L = true; qualityBool2L = false; qualityBool3L = false; qualityBool5L = false; qualityBool6L = false; qualityBool7L = false; qualityBool8L = false;}
	}
	if(target == 'quality5L') { //Blurred
		if(qualityBool5L == true) {qualityBool5L = false;} else {qualityBool5L = true; qualityBool4L = false;}
	}
	if(target == 'quality6L') { //Cloudy
		if(qualityBool6L == true) {qualityBool6L = false;} else {qualityBool6L = true; qualityBool4L = false;}
	}
	if(target == 'quality7L') { //Hazy
		if(qualityBool7L == true) {qualityBool7L = false;} else {qualityBool7L = true; qualityBool4L = false;}
	}
	if(target == 'quality8L') { //Distorted
		if(qualityBool8L == true) {qualityBool8L = false;} else {qualityBool8L = true; qualityBool4L = false;}
	}
}

function toggleBetterSeeingBool(target) {
	if(target == 'ODBetterSeeing') {
		if(ODBetterSeeingBool == false) {
			ODBetterSeeingBool = true; OSBetterSeeingBool = false;
		} else {ODBetterSeeingBool = false;}
	}
	if(target == 'OSBetterSeeing') {
		if(OSBetterSeeingBool == false) {
			OSBetterSeeingBool = true; ODBetterSeeingBool = false;
		} else {OSBetterSeeingBool = false;}
	}
}

function toggleNoVisualDifficulty() {
	if(noVisualDifficultyBool == false) {noVisualDifficultyBool = true;}
	else {noVisualDifficultyBool = false;}
	if(noVisualDifficultyBool == false) {ignoreBtn('NoVisualDifficulty')}
	else {activateBtn('NoVisualDifficulty');}
}

function toggleNoNewFloatersPhotopsia() {
	if(confirmedNoNewFFBool == false) {confirmedNoNewFFBool = true;}
	else {confirmedNoNewFFBool = false;}
	if(confirmedNoNewFFBool == false) {ignoreBtn('NoNewFloatersPhotopsiaBtn');}
	else {activateBtn('NoNewFloatersPhotopsiaBtn');}
}

function analyzeVisionComplaint() {
	//var i = 1; //start at 1 to match counter to the qualAndTrigR
	//var j = 1; //start at 1 to match counter to the qualAndTrigL
	//var numChoices = 8; //(PROBABLY DELETE, NO LOOP) total number of qualities to choose from
	//var qualAndTrigR = 0; //(PROBABLY DELETE, NO LOOP) used to trigger where the 'and' should go in qualStrRFull
	//var qualAndTrigL = 0; //(PROBABLY DELETE, NO LOOP) used to trigger where the 'and' should go in qualStrLFull
	var singleQualityR = '';
	var singleQualityL = '';
	qualityCountR = 0;
	qualityCountL = 0;
	remainingQualRBool = false;
	remainingQualLBool = false;
	qualStrRFull = '';
	qualStrLFull = '';

//Check if one eye better for daily activities,
//and if context is "daily activites" make unspecified since will mention "daily activites" at end of HPI
	if(ODBetterSeeingBool == true || OSBetterSeeingBool == true || noVisualDifficultyBool == true) {
		if(visionContextR == 'dailyActivities') {visionContextR = '';}
		if(visionContextL == 'dailyActivities') {visionContextL = '';}
	}

//Check if vision severity/duration/context is the same for both eyes
	if(visionSeverityR == visionSeverityL) {visionSeveritySameOUBool = true;} else {visionSeveritySameOUBool = false;}
	if(visionDurationR == visionDurationL) {visionDurationSameOUBool = true;} else {visionDurationSameOUBool = false;}
	if(visionContextR == visionContextL) {visionContextSameOUBool = true;} else {visionContextSameOUBool = false;}

//Check if each eye has the same vision qualities
	if(qualityBool1R != qualityBool1L) {qualSameOUBool = false; quality1SameOUBool = false;} else {quality1SameOUBool = true;}
	if(qualityBool2R != qualityBool2L) {qualSameOUBool = false; quality2SameOUBool = false;} else {quality2SameOUBool = true;}
	if(qualityBool3R != qualityBool3L) {qualSameOUBool = false; quality3SameOUBool = false;} else {quality3SameOUBool = true;}
	if(qualityBool4R != qualityBool4L) {qualSameOUBool = false; quality4SameOUBool = false;} else {quality4SameOUBool = true;}
	if(qualityBool5R != qualityBool5L) {qualSameOUBool = false; quality5SameOUBool = false;} else {quality5SameOUBool = true;}
	if(qualityBool6R != qualityBool6L) {qualSameOUBool = false; quality6SameOUBool = false;} else {quality6SameOUBool = true;}
	if(qualityBool7R != qualityBool7L) {qualSameOUBool = false; quality7SameOUBool = false;} else {quality7SameOUBool = true;}
	if(qualityBool8R != qualityBool8L) {qualSameOUBool = false; quality8SameOUBool = false;} else {quality8SameOUBool = true;}
	if(quality1SameOUBool == true && quality2SameOUBool == true && quality3SameOUBool == true && quality4SameOUBool == true 
	&& quality5SameOUBool == true && quality6SameOUBool == true && quality7SameOUBool == true && quality8SameOUBool == true) {
		qualSameOUBool = true;
	}

//Check if there are unilateral qualities for each eye
	if(qualityBool1R == true && qualityBool1L == false) {remainingQualRBool = true;}
	if(qualityBool2R == true && qualityBool2L == false) {remainingQualRBool = true;}
	if(qualityBool3R == true && qualityBool3L == false) {remainingQualRBool = true;}
	if(qualityBool4R == true && qualityBool4L == false) {remainingQualRBool = true;}
	if(qualityBool5R == true && qualityBool5L == false) {remainingQualRBool = true;}
	if(qualityBool6R == true && qualityBool6L == false) {remainingQualRBool = true;}
	if(qualityBool7R == true && qualityBool7L == false) {remainingQualRBool = true;}
	if(qualityBool8R == true && qualityBool8L == false) {remainingQualRBool = true;}
	if(qualityBool1L == true && qualityBool1R == false) {remainingQualLBool = true;}
	if(qualityBool2L == true && qualityBool2R == false) {remainingQualLBool = true;}
	if(qualityBool3L == true && qualityBool3R == false) {remainingQualLBool = true;}
	if(qualityBool4L == true && qualityBool4R == false) {remainingQualLBool = true;}
	if(qualityBool5L == true && qualityBool5R == false) {remainingQualLBool = true;}
	if(qualityBool6L == true && qualityBool6R == false) {remainingQualLBool = true;}
	if(qualityBool7L == true && qualityBool7R == false) {remainingQualLBool = true;}
	if(qualityBool8L == true && qualityBool8R == false) {remainingQualLBool = true;}

//Count number of vision qualities for each eye, and save to single quality along the way in case just 1 total
	if(qualityBool1R == true) {qualityCountR = qualityCountR + 1; if(qualityCountR == 1) {singleQualityR = qualStrR1;}}
	if(qualityBool2R == true) {qualityCountR = qualityCountR + 1; if(qualityCountR == 1) {singleQualityR = qualStrR2;}}
	if(qualityBool3R == true) {qualityCountR = qualityCountR + 1; if(qualityCountR == 1) {singleQualityR = qualStrR3;}}
	if(qualityBool4R == true) {qualityCountR = qualityCountR + 1; if(qualityCountR == 1) {singleQualityR = qualStrR4;}}
	if(qualityBool5R == true) {qualityCountR = qualityCountR + 1; if(qualityCountR == 1) {singleQualityR = qualStrR5;}}
	if(qualityBool6R == true) {qualityCountR = qualityCountR + 1; if(qualityCountR == 1) {singleQualityR = qualStrR6;}}
	if(qualityBool7R == true) {qualityCountR = qualityCountR + 1; if(qualityCountR == 1) {singleQualityR = qualStrR7;}}
	if(qualityBool8R == true) {qualityCountR = qualityCountR + 1; if(qualityCountR == 1) {singleQualityR = qualStrR8;}}
	if(qualityBool1L == true) {qualityCountL = qualityCountL + 1; if(qualityCountL == 1) {singleQualityL = qualStrL1;}}
	if(qualityBool2L == true) {qualityCountL = qualityCountL + 1; if(qualityCountL == 1) {singleQualityL = qualStrL2;}}
	if(qualityBool3L == true) {qualityCountL = qualityCountL + 1; if(qualityCountL == 1) {singleQualityL = qualStrL3;}}
	if(qualityBool4L == true) {qualityCountL = qualityCountL + 1; if(qualityCountL == 1) {singleQualityL = qualStrL4;}}
	if(qualityBool5L == true) {qualityCountL = qualityCountL + 1; if(qualityCountL == 1) {singleQualityL = qualStrL5;}}
	if(qualityBool6L == true) {qualityCountL = qualityCountL + 1; if(qualityCountL == 1) {singleQualityL = qualStrL6;}}
	if(qualityBool7L == true) {qualityCountL = qualityCountL + 1; if(qualityCountL == 1) {singleQualityL = qualStrL7;}}
	if(qualityBool8L == true) {qualityCountL = qualityCountL + 1; if(qualityCountL == 1) {singleQualityL = qualStrL8;}}

//if just one quality, copy to the "full" string
	if(qualityCountR == 1) {qualStrRFull += singleQualityR;}
	if(qualityCountL == 1) {qualStrLFull += singleQualityL;}

//Check postive/negative connotation of Vision Severity
	if(visionSeverityR == 'stable' || visionSeverityR == 'gradImproved' || visionSeverityR == 'slightImproved' || visionSeverityR == 'improved' || visionSeverityR == 'signifImproved') {
		severityPositiveBoolR = true;
	}
	else {severityPositiveBoolR = false;}
	if(visionSeverityL == 'stable' || visionSeverityL == 'gradImproved' || visionSeverityL == 'slightImproved' || visionSeverityL == 'improved' || visionSeverityL == 'signifImproved') {
		severityPositiveBoolL = true;
	}
	else {severityPositiveBoolL = false;}

//Check positive/negative connotation of Vision Quality
	//check postive for right
	if(qualityBool1R == true || qualityBool2R == true || qualityBool4R == true) {
		qualityPositiveBoolR = true;
	}
	else {qualityPositiveBoolR = false;}
	//check negative for right
	if(qualityBool3R == true || qualityBool5R == true || qualityBool6R == true || qualityBool7R == true || qualityBool8R == true) {
		qualityNegativeBoolR = true;
	}
	else {qualityNegativeBoolR = false;}
	//check postive for left
	if(qualityBool1L == true || qualityBool2L == true || qualityBool4L == true) {
		qualityPositiveBoolL = true;
	}
	else {qualityPositiveBoolL = false;}
	//check negative for left
	if(qualityBool3L == true || qualityBool5L == true || qualityBool6L == true || qualityBool7L == true || qualityBool8L == true) {
		qualityNegativeBoolL = true;
	}
	else {qualityNegativeBoolL = false;}
}

function setGenericVisionComplaint() {
	var yetBoolR = false; //if true, then the next quality doesn't need a common in front
	var yetBoolL = false; //if true, then the next quality doesn't need a common in front
	var commaNeededQualSameOU = false; //used when Severity is unspecified OU
	var commaNeededR = false; //used for unilateral qualities
	var commaNeededL = false; //used for unilateral qualities

//reset visionQStr
	visionQStr = '';

	if(customVisionBool == true){
		if (customVisionStr.charAt(0) != ' ') {customVisionStr = ' ' + customVisionStr;}
		HPI += customVisionStr;
	}
//Severity and Qualities are all unspecified OU
	else if(visionSeverityR == '' && visionSeverityL == '' && qualityCountR < 1  && qualityCountL < 1) {
		//do nothing
	}
//Severity and/or Qualities specified OD and/or OS
	else {
		visionQStr += pronoun1;
		if(male == false && female == false) {
			visionQStr += " report";
		}
		else{
			visionQStr += " reports";
		}

	//Severity unspecified OU and qualities exactly the same OU
		if(visionSeverityR == '' && visionSeverityL == '' && qualSameOUBool == true) {
			if(qualityCountR > 0) {
				commaNeededR = false; //reset flag variable
				if(qualityPositiveBoolR == true) {
					if(qualityBool1R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR1; commaNeededR = true;} //Good
					if(qualityBool2R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR2; commaNeededR = true;} //Fair
					if(qualityBool4R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR4; commaNeededR = true;} //Clear
				}
				if(qualityNegativeBoolR == true) {
					if(qualityPositiveBoolR == true) {
						visionQStr += ", yet";
						commaNeededR = false; //reset flag variable
					}						
					if(qualityBool3R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR3; commaNeededR = true;} //Poor
					if(qualityBool5R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR5; commaNeededR = true;} //Blurred
					if(qualityBool6R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR6; commaNeededR = true;} //Cloudy
					if(qualityBool7R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR7; commaNeededR = true;} //Hazy
					if(qualityBool8R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR8; commaNeededR = true;} //Distorted
				}
				visionQStr += " vision of both eyes";
				checkCorrectionOU();
				if(visionDurationSameOUBool == true && visionDurationR != '') {
					visionQStr += visionDurationRStr; //duration is the same for OU
				}
				if(visionContextR != '' || visionContextL != '' || visionDurationSameOUBool == false) {
					visionQStr += ", as noted";
					if(visionDurationR != '' || visionContextR != '') {
						if(visionContextR != '') {
							visionQStr += " with the right eye";
							checkCorrectionOD();
							if(visionDurationR != '' && visionDurationSameOUBool == false) {
								visionQStr += visionDurationRStr;
							}
							if(visionContextR != '' && visionContextSameOUBool == false) {
								visionQStr += visionContextRStr;
							}
						}
					}
					if(visionContextL != '') {
						if(visionDurationR != '' || visionContextR != '') {
							visionQStr += " and";
						}
						visionQStr += " with the left eye";
						checkCorrectionOS();
						if(visionDurationL != '' && visionDurationSameOUBool == false) {
							visionQStr += visionDurationLStr;
						}
						if(visionContextL != '') {
							visionQStr += visionContextLStr;
						}
					}

				}
				visionQStr += ".";
			}
		}				
	//Severity unspecified OU and qualities not exactly the same OU
		else if(visionSeverityR == '' && visionSeverityL == '' && qualSameOUBool == false) {
			if(qualityCountR > 0) {
				commaNeededR = false; //reset flag variable
				if(qualityPositiveBoolR == true) {
					if(qualityBool1R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR1; commaNeededR = true;} //Good
					if(qualityBool2R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR2; commaNeededR = true;} //Fair
					if(qualityBool4R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR4; commaNeededR = true;} //Clear
				}
				if(qualityNegativeBoolR == true) {
					if(qualityPositiveBoolR == true) {
						visionQStr += ", yet";
						commaNeededR = false; //reset flag variable
					}						
					if(qualityBool3R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR3; commaNeededR = true;} //Poor
					if(qualityBool5R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR5; commaNeededR = true;} //Blurred
					if(qualityBool6R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR6; commaNeededR = true;} //Cloudy
					if(qualityBool7R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR7; commaNeededR = true;} //Hazy
					if(qualityBool8R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR8; commaNeededR = true;} //Distorted
				}
				visionQStr += " right eye vision";
				checkCorrectionOD();
				if(visionDurationR != '' && visionDurationSameOUBool == false) {
					visionQStr += visionDurationRStr;
				}
				if(visionContextR != '' && visionContextSameOUBool == false) {
					visionQStr += ", as noted";
					visionQStr += visionContextRStr;
				} else if(visionContextR != '' && visionContextSameOUBool == true && visionSeverityL == '' && qualityCountL <= 0) {
					visionQStr += ", as noted";
					visionQStr += visionContextRStr;
				}
			}
			if(qualityCountL > 0) {
				commaNeededL = false; //reset flag variable
				if(qualityCountR > 0) {
					visionQStr += ", and";
				}
				if(qualityPositiveBoolL == true) {
					if(qualityBool1L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL1; commaNeededL = true;} //Good
					if(qualityBool2L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL2; commaNeededL = true;} //Fair
					if(qualityBool4L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL4; commaNeededL = true;} //Clear
				}
				if(qualityNegativeBoolL == true) {
					if(qualityPositiveBoolL == true) {
						visionQStr += ", yet";
						commaNeededL = false; //reset flag variable
					}						
					if(qualityBool3L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL3; commaNeededL = true;} //Poor
					if(qualityBool5L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL5; commaNeededL = true;} //Blurred
					if(qualityBool6L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL6; commaNeededL = true;} //Cloudy
					if(qualityBool7L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL7; commaNeededL = true;} //Hazy
					if(qualityBool8L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL8; commaNeededL = true;} //Distorted
				}
				visionQStr += " left eye vision";
				checkCorrectionOS();
				if(visionDurationL != '') {
					visionQStr += visionDurationLStr;
				}
				if(visionContextL != '') {
					visionQStr += ", as noted";
					visionQStr += visionContextLStr;
				}
			}	
			visionQStr += ".";			
		}

	//Severity specified OU and the same OU 	
		else if(visionSeveritySameOUBool == true && visionSeverityR != '') {
			visionQStr += visionSeverityRStr; //severity is the same for OU
		//Qualities specified OD and/or OS
			commaNeededQualSameOU = false; //reset flag variable
			if(visionSeverityR != '') {commaNeededQualSameOU = true;}
			if(qualityCountR > 0 && severityPositiveBoolR == true) { //severity is the same for OU
				if(qualityPositiveBoolR == true) {
					if(qualityBool1R == true && qualityBool1L == true) {if(commaNeededQualSameOU == true) {visionQStr += ",";} else {commaNeededQualSameOU = true;} visionQStr += qualStrR1;} //Good
					if(qualityBool2R == true && qualityBool2L == true) {if(commaNeededQualSameOU == true) {visionQStr += ",";} else {commaNeededQualSameOU = true;} visionQStr += qualStrR2;} //Fair
					if(qualityBool4R == true && qualityBool4L == true) {if(commaNeededQualSameOU == true) {visionQStr += ",";} else {commaNeededQualSameOU = true;} visionQStr += qualStrR4;} //Clear
				}
				if(qualityNegativeBoolR == true) {
					yetBoolR = true;
					if(qualityBool3R == true && qualityBool3L == true && yetBoolR == false) {if(commaNeededQualSameOU == true) {visionQStr += ",";} else {commaNeededQualSameOU = true;} visionQStr += qualStrR3;} //Poor
					else if(qualityBool3R == true  && qualityBool3L == true && yetBoolR == true ) {visionQStr = visionQStr + ", yet" + qualStrR3; yetBoolR = false;} 
					if(qualityBool5R == true && qualityBool5L == true && yetBoolR == false) {if(commaNeededQualSameOU == true) {visionQStr += ",";} else {commaNeededQualSameOU = true;} visionQStr += qualStrR5;} //Blurred
					else if(qualityBool5R == true  && qualityBool5L == true && yetBoolR == true ) {visionQStr = visionQStr + ", yet" + qualStrR5; yetBoolR = false;} 
					if(qualityBool6R == true && qualityBool6L == true && yetBoolR == false) {if(commaNeededQualSameOU == true) {visionQStr += ",";} else {commaNeededQualSameOU = true;} visionQStr += qualStrR6;} //Cloudy
					else if(qualityBool6R == true  && qualityBool6L == true && yetBoolR == true ) {visionQStr = visionQStr + ", yet" + qualStrR6; yetBoolR = false;} 
					if(qualityBool7R == true && qualityBool7L == true && yetBoolR == false) {if(commaNeededQualSameOU == true) {visionQStr += ",";} else {commaNeededQualSameOU = true;} visionQStr += qualStrR7;} //Hazy
					else if(qualityBool7R == true  && qualityBool7L == true && yetBoolR == true ) {visionQStr = visionQStr + ", yet" + qualStrR7; yetBoolR = false;} 
					if(qualityBool8R == true && qualityBool8L == true && yetBoolR == false) {if(commaNeededQualSameOU == true) {visionQStr += ",";} else {commaNeededQualSameOU = true;} visionQStr += qualStrR8;} //Distorted
					else if(qualityBool8R == true  && qualityBool8L == true && yetBoolR == true ) {visionQStr = visionQStr + ", yet" + qualStrR8; yetBoolR = false;} 
				}
			}
			else if(qualityCountR > 0 && severityPositiveBoolR == false) { //severity is the same for OU
				if(qualityNegativeBoolR == true) {
					if(qualityBool3R == true && qualityBool3L == true) {visionQStr = visionQStr + "," + qualStrR3;} //Poor
					if(qualityBool5R == true && qualityBool5L == true) {visionQStr = visionQStr + "," + qualStrR5;} //Blurred
					if(qualityBool6R == true && qualityBool6L == true) {visionQStr = visionQStr + "," + qualStrR6;} //Cloudy
					if(qualityBool7R == true && qualityBool7L == true) {visionQStr = visionQStr + "," + qualStrR7;} //Hazy
					if(qualityBool8R == true && qualityBool8L == true) {visionQStr = visionQStr + "," + qualStrR8;} //Distorted
				}
				if(qualityPositiveBoolR == true) {
					yetBoolR = true;
					if(qualityBool1R == true && qualityBool1L == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR1;} //Good
					else if(qualityBool1R == true && qualityBool1L == true && yetBoolR == true) {visionQStr = visionQStr + ", yet" + qualStrR1; yetBoolR = false;}
					if(qualityBool2R == true && qualityBool2L == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR2;} //Fair
					else if(qualityBool2R == true && qualityBool2L == true && yetBoolR == true) {visionQStr = visionQStr + ", yet" + qualStrR2; yetBoolR = false;}
					if(qualityBool4R == true && qualityBool4L == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR4;} //Clear
					else if(qualityBool4R == true && qualityBool4L == true && yetBoolR == true) {visionQStr = visionQStr + ", yet" + qualStrR4; yetBoolR = false;}
				}
			}
			visionQStr += " vision of both eyes"; 
			checkCorrectionOU();
		//Context the same OU
			if(visionContextSameOUBool == true) {
			//Duration the same OU
				if(visionDurationSameOUBool == true) {
					if(visionDurationR != '') {
						visionQStr += visionDurationRStr; //duration is same for OU
					}
				} else {
			//Duration different OU and specified OU
					if(visionDurationR != '' && visionDurationL != '') {
						visionQStr += ",";
						visionQStr += visionDurationRStr;
						visionQStr += " with the right eye and";
						visionQStr += visionDurationLStr;
						visionQStr += " with the left eye";
					}
			//Duration different OU, specified OD, unspecified OS
					if(visionDurationR != '' && visionDurationL == '') {
						visionQStr += ",";
						visionQStr += visionDurationRStr;
						visionQStr += " with the right eye and in general with the left eye";
					}
			//Duration different OU, specified OD, unspecified OS
					if(visionDurationR == '' && visionDurationL != '') {
						visionQStr += ", in general with the right eye and";
						visionQStr += visionDurationLStr;
						visionQStr += " with the left eye";
					}
				}
				if(visionContextR != '') {
					visionQStr += ", as noted";
					visionQStr += visionContextRStr; //context is the same for OU
				}
				visionQStr += ".";
			}
		//Context different OU, specified OD, unspecified OS
			else if(visionContextR != '' && visionContextL == '') {
			//Duration the same OU
				if(visionDurationSameOUBool == true) {
					if(visionDurationR != '') {
						visionQStr += visionDurationRStr; //duration is the same for OU
					}
					visionQStr += ", as noted with the right eye";
					visionQStr += visionContextRStr;
					visionQStr += " and with the left eye generally.";
				}
			//Duration different OU
				else {
					visionQStr += ", as noted with the right eye";
					visionQStr += visionContextRStr;
					if(visionDurationR != '') {
						visionQStr += visionDurationRStr;
					}
					visionQStr += " and with the left eye generally";
					if(visionDurationL != '') {
						visionQStr += visionDurationLStr;
					}
					visionQStr += ".";
				}
			}
		//Context different OU, unspecified OD, specified OS
			else if(visionContextR == '' && visionContextL != '') {
			//Duration the same OU
				if(visionDurationSameOUBool == true) {
					visionQStr += visionDurationLStr; //duration is the same for OU
					visionQStr += ", as noted with the left eye";
					visionQStr += visionContextLStr;
					visionQStr += " and with the right eye generally.";
				}
			//Duration different OU
				else {
					visionQStr += ", as noted with the left eye";
					visionQStr += visionContextLStr;
					visionQStr += visionDurationLStr;
					visionQStr += " and with the right eye generally";
					visionQStr += visionDurationRStr;
					visionQStr += ".";
				}
			}
		//Context different OU (specified OU)
			else if(visionContextR != '' && visionContextL != '') {
			//Duration the same OU
				if(visionDurationSameOUBool == true) {
					visionQStr += visionDurationRStr //duration is the same for OU
					visionQStr += ", as noted with the right eye";
					visionQStr += visionContextRStr;
					visionQStr += " and with the left eye";
					visionQStr += visionContextLStr;
					visionQStr += ".";
				}
			//Duration different OU
				else {
					visionQStr += ", as noted with the right eye";
					visionQStr += visionContextRStr;
					visionQStr += visionDurationRStr;
					visionQStr += " and with the left eye";
					visionQStr += visionContextLStr;
					visionQStr += visionDurationLStr;
					visionQStr += ".";
				}
			}
		//Mention remaining unilateral qualities
			commaNeededR = false; //reset flag variable
			commaNeededL = false; //reset flag variable
			if(qualSameOUBool == false){
				visionQStr += pronoun1;
				if(male == false && female == false) {
					visionQStr += " describe";
				}
				else{
					visionQStr += " describes";
				}
				visionQStr += pronoun6;
				if(remainingQualRBool == true && remainingQualLBool == true){
					visionQStr += " right eye vision as"
					if(qualityBool1R == true && quality1SameOUBool == false) {visionQStr += qualStrR1; commaNeededR = true;}
					if(qualityBool2R == true && quality2SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR2; commaNeededR = true;}
					if(qualityBool3R == true && quality3SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR3; commaNeededR = true;}
					if(qualityBool4R == true && quality4SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR4; commaNeededR = true;}
					if(qualityBool5R == true && quality5SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR5; commaNeededR = true;}
					if(qualityBool6R == true && quality6SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR6; commaNeededR = true;}
					if(qualityBool7R == true && quality7SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR7; commaNeededR = true;}
					if(qualityBool8R == true && quality8SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR8; commaNeededR = true;}
					visionQStr += ", and"
					visionQStr += pronoun6;
					visionQStr += " left eye vision as"
					if(qualityBool1L == true && quality1SameOUBool == false) {visionQStr += qualStrL1; commaNeededL = true;}
					if(qualityBool2L == true && quality2SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL2; commaNeededL = true;}
					if(qualityBool3L == true && quality3SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL3; commaNeededL = true;}
					if(qualityBool4L == true && quality4SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL4; commaNeededL = true;}
					if(qualityBool5L == true && quality5SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL5; commaNeededL = true;}
					if(qualityBool6L == true && quality6SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL6; commaNeededL = true;}
					if(qualityBool7L == true && quality7SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL7; commaNeededL = true;}
					if(qualityBool8L == true && quality8SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL8; commaNeededL = true;}
					visionQStr += "."
				}
				if(remainingQualRBool == true && remainingQualLBool == false){	
					visionQStr += " right eye vision as"
					if(qualityBool1R == true && quality1SameOUBool == false) {visionQStr += qualStrR1; commaNeededR = true;}
					if(qualityBool2R == true && quality2SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR2; commaNeeded = true;}
					if(qualityBool3R == true && quality3SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR3; commaNeeded = true;}
					if(qualityBool4R == true && quality4SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR4; commaNeeded = true;}
					if(qualityBool5R == true && quality5SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR5; commaNeeded = true;}
					if(qualityBool6R == true && quality6SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR6; commaNeeded = true;}
					if(qualityBool7R == true && quality7SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR7; commaNeeded = true;}
					if(qualityBool8R == true && quality8SameOUBool == false) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR8; commaNeeded = true;}
					visionQStr += '.';
				}
				if(remainingQualRBool == false && remainingQualLBool == true){	
					visionQStr += " left eye vision as"
					if(qualityBool1L == true && quality1SameOUBool == false) {visionQStr += qualStrL1; commaNeededL = true;}
					if(qualityBool2L == true && quality2SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL2; commaNeeded = true;}
					if(qualityBool3L == true && quality3SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL3; commaNeeded = true;}
					if(qualityBool4L == true && quality4SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL4; commaNeeded = true;}
					if(qualityBool5L == true && quality5SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL5; commaNeeded = true;}
					if(qualityBool6L == true && quality6SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL6; commaNeeded = true;}
					if(qualityBool7L == true && quality7SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL7; commaNeeded = true;}
					if(qualityBool8L == true && quality8SameOUBool == false) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL8; commaNeeded = true;}
					visionQStr += '.';
				}
			}
		}
	//Severity different OU (specified OD, unspecified OS)
		else if(visionSeverityR != '' && visionSeverityL == '') {
			visionQStr += visionSeverityRStr;
		//Severity OD positive connotation
			if(qualityCountR > 0 && severityPositiveBoolR == true) {
				if(qualityPositiveBoolR == true) {
					if(qualityBool1R == true) {visionQStr = visionQStr + "," + qualStrR1;} //Good
					if(qualityBool2R == true) {visionQStr = visionQStr + "," + qualStrR2;} //Fair
					if(qualityBool4R == true) {visionQStr = visionQStr + "," + qualStrR4;} //Clear
				}
				if(qualityNegativeBoolR == true) {
					visionQStr += ", yet";
					yetBoolR = true;
					if(qualityBool3R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR3;} //Poor
					else if(qualityBool3R == true && yetBoolR == true ) {visionQStr += qualStrR3; yetBoolR = false;} 
					if(qualityBool5R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR5;} //Blurred
					else if(qualityBool5R == true && yetBoolR == true ) {visionQStr += qualStrR5; yetBoolR = false;} 
					if(qualityBool6R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR6;} //Cloudy
					else if(qualityBool6R == true && yetBoolR == true ) {visionQStr += qualStrR6; yetBoolR = false;} 
					if(qualityBool7R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR7;} //Hazy
					else if(qualityBool7R == true && yetBoolR == true ) {visionQStr += qualStrR7; yetBoolR = false;} 
					if(qualityBool8R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR8;} //Distorted
					else if(qualityBool8R == true && yetBoolR == true ) {visionQStr += qualStrR8; yetBoolR = false;} 
				}
			}
		//Severity OD negative connotation
			else if(qualityCountR > 0 && severityPositiveBoolR == false) {
				if(qualityNegativeBoolR == true) {
					if(qualityBool3R == true) {visionQStr = visionQStr + "," + qualStrR3;} //Poor
					if(qualityBool5R == true) {visionQStr = visionQStr + "," + qualStrR5;} //Blurred
					if(qualityBool6R == true) {visionQStr = visionQStr + "," + qualStrR6;} //Cloudy
					if(qualityBool7R == true) {visionQStr = visionQStr + "," + qualStrR7;} //Hazy
					if(qualityBool8R == true) {visionQStr = visionQStr + "," + qualStrR8;} //Distorted
				}
				if(qualityPositiveBoolR == true) {
					visionQStr += ", yet";
					yetBoolR = true;
					if(qualityBool1R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR1;} //Good
					else if(qualityBool1R == true && yetBoolR == true) {visionQStr += qualStrR1; yetBoolR = false;}
					if(qualityBool2R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR2;} //Fair
					else if(qualityBool2R == true && yetBoolR == true) {visionQStr += qualStrR2; yetBoolR = false;}
					if(qualityBool4R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR4;} //Clear
					else if(qualityBool4R == true && yetBoolR == true) {visionQStr += qualStrR4; yetBoolR = false;}
				}
			}
			visionQStr += " right eye vision";
			checkCorrectionOD();
			if(visionDurationSameOUBool == false || qualityCountL < 1 ) {
				if(visionDurationR != '') {
					visionQStr += visionDurationRStr;
				}
			}
			if(visionContextSameOUBool == false || qualityCountL < 1 ) {
				if(visionContextR != '') {
					visionQStr += ", as noted";
					visionQStr += visionContextRStr;
				}
			}
			if(qualityCountL > 0) {
				commaNeededL = false; //reset flag variable
				visionQStr += ", and";
				if(qualityPositiveBoolL == true) {
					if(qualityBool1L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL1; commaNeededL = true;} //Good
					if(qualityBool2L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL2; commaNeededL = true;} //Fair
					if(qualityBool4L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL4; commaNeededL = true;} //Clear
				}
				if(qualityNegativeBoolL == true) {
					if(qualityPositiveBoolL == true) {
						visionQStr += ", yet";
						commaNeededL = false; //reset flag variable
					}						
					if(qualityBool3L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL3; commaNeededL = true;} //Poor
					if(qualityBool5L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL5; commaNeededL = true;} //Blurred
					if(qualityBool6L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL6; commaNeededL = true;} //Cloudy
					if(qualityBool7L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL7; commaNeededL = true;} //Hazy
					if(qualityBool8L == true) {if(commaNeededL == true) {visionQStr += ",";} visionQStr += qualStrL8; commaNeededL = true;} //Distorted
				}
				visionQStr += " left eye vision";
				checkCorrectionOS();
				if(visionDurationL != '') {
					visionQStr += visionDurationLStr;
				}
				if(visionContextL != '') {
					visionQStr += ", as noted";
					visionQStr += visionContextLStr;
				}
			}
			visionQStr += '.';
		}
	//Severity different OU (unspecified OD, specified OS)
		else if(visionSeverityR == '' && visionSeverityL != '') {
			visionQStr += visionSeverityLStr;
		//Severity OS positive connotation
			if(qualityCountL > 0 && severityPositiveBoolL == true) {
				if(qualityPositiveBoolL == true) {
					if(qualityBool1L == true) {visionQStr = visionQStr + "," + qualStrL1;} //Good
					if(qualityBool2L == true) {visionQStr = visionQStr + "," + qualStrL2;} //Fair
					if(qualityBool4L == true) {visionQStr = visionQStr + "," + qualStrL4;} //Clear
				}
				if(qualityNegativeBoolL == true) {
					visionQStr += ", yet";
					yetBoolL = true;
					if(qualityBool3L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL3;} //Poor
					else if(qualityBool3L == true && yetBoolL == true ) {visionQStr += qualStrL3; yetBoolL = false;} 
					if(qualityBool5L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL5;} //Blurred
					else if(qualityBool5L == true && yetBoolL == true ) {visionQStr += qualStrL5; yetBoolL = false;} 
					if(qualityBool6L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL6;} //Cloudy
					else if(qualityBool6L == true && yetBoolL == true ) {visionQStr += qualStrL6; yetBoolL = false;} 
					if(qualityBool7L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL7;} //Hazy
					else if(qualityBool7L == true && yetBoolL == true ) {visionQStr += qualStrL7; yetBoolL = false;} 
					if(qualityBool8L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL8;} //Distorted
					else if(qualityBool8L == true && yetBoolL == true ) {visionQStr += qualStrL8; yetBoolL = false;} 
				}
			}
		//Severity OS negative connotation
			else if(qualityCountL > 0 && severityPositiveBoolL == false) {
				if(qualityNegativeBoolL == true) {
					if(qualityBool3L == true) {visionQStr = visionQStr + "," + qualStrL3;} //Poor
					if(qualityBool5L == true) {visionQStr = visionQStr + "," + qualStrL5;} //Blurred
					if(qualityBool6L == true) {visionQStr = visionQStr + "," + qualStrL6;} //Cloudy
					if(qualityBool7L == true) {visionQStr = visionQStr + "," + qualStrL7;} //Hazy
					if(qualityBool8L == true) {visionQStr = visionQStr + "," + qualStrL8;} //Distorted
				}
				if(qualityPositiveBoolL == true) {
					visionQStr += ", yet";
					yetBoolL = true;
					if(qualityBool1L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL1;} //Good
					else if(qualityBool1L == true && yetBoolL == true) {visionQStr += qualStrL1; yetBoolL = false;}
					if(qualityBool2L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL2;} //Fair
					else if(qualityBool2L == true && yetBoolL == true) {visionQStr += qualStrL2; yetBoolL = false;}
					if(qualityBool4L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL4;} //Clear
					else if(qualityBool4L == true && yetBoolL == true) {visionQStr += qualStrL4; yetBoolL = false;}
				}
			}
			visionQStr += " left eye vision";
			checkCorrectionOS();
			if(visionDurationSameOUBool == false || qualityCountR < 1 ) {
				if(visionDurationL != '') {
					visionQStr += visionDurationLStr;
				}
			}
			if(visionContextSameOUBool == false || qualityCountR < 1 ) {
				if(visionContextL != '') {
					visionQStr += ", as noted";
					visionQStr += visionContextLStr;
				}
			}
			if(qualityCountR > 0) {
				commaNeededR = false; //reset flag variable
				visionQStr += ", and";
				if(qualityPositiveBoolR == true) {
					if(qualityBool1R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR1; commaNeededR = true;} //Good
					if(qualityBool2R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR2; commaNeededR = true;} //Fair
					if(qualityBool4R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR4; commaNeededR = true;} //Clear
				}
				if(qualityNegativeBoolR == true) {
					if(qualityPositiveBoolR == true) {
						visionQStr += ", yet";
						commaNeededR = false; //reset flag variable
					}						
					if(qualityBool3R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR3; commaNeededR = true;} //Poor
					if(qualityBool5R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR5; commaNeededR = true;} //Blurred
					if(qualityBool6R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR6; commaNeededR = true;} //Cloudy
					if(qualityBool7R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR7; commaNeededR = true;} //Hazy
					if(qualityBool8R == true) {if(commaNeededR == true) {visionQStr += ",";} visionQStr += qualStrR8; commaNeededR = true;} //Distorted
				}
				visionQStr += " right eye vision";
				checkCorrectionOD();
				if(visionDurationR != '') {
					visionQStr += visionDurationRStr;
				}
				if(visionContextR != '') {
					visionQStr += ", as noted";
					visionQStr += visionContextRStr;
				}
			}
			visionQStr += '.';
		}
	//Severity different OU (specified OD and specified OS)
	//HPI focus is primarily on OD (or neither eye is the primary focus)
		else { // will probably need this here: if(visionChiefComplaintR = true)
			if(visionSeverityR != '') {
				visionQStr += visionSeverityRStr;
			//Severity OD positive connotation
				if(qualityCountR > 0 && severityPositiveBoolR == true) {
					if(qualityPositiveBoolR == true) {
						if(qualityBool1R == true) {visionQStr = visionQStr + "," + qualStrR1;} //Good
						if(qualityBool2R == true) {visionQStr = visionQStr + "," + qualStrR2;} //Fair
						if(qualityBool4R == true) {visionQStr = visionQStr + "," + qualStrR4;} //Clear
					}
					if(qualityNegativeBoolR == true) {
						visionQStr += ", yet";
						yetBoolR = true;
						if(qualityBool3R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR3;} //Poor
						else if(qualityBool3R == true && yetBoolR == true ) {visionQStr += qualStrR3; yetBoolR = false;} 
						if(qualityBool5R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR5;} //Blurred
						else if(qualityBool5R == true && yetBoolR == true ) {visionQStr += qualStrR5; yetBoolR = false;} 
						if(qualityBool6R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR6;} //Cloudy
						else if(qualityBool6R == true && yetBoolR == true ) {visionQStr += qualStrR6; yetBoolR = false;} 
						if(qualityBool7R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR7;} //Hazy
						else if(qualityBool7R == true && yetBoolR == true ) {visionQStr += qualStrR7; yetBoolR = false;} 
						if(qualityBool8R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR8;} //Distorted
						else if(qualityBool8R == true && yetBoolR == true ) {visionQStr += qualStrR8; yetBoolR = false;} 
					}
			//Severity OD negative connotation
				} else if(qualityCountR > 0 && severityPositiveBoolR == false) {
					if(qualityNegativeBoolR == true) {
						if(qualityBool3R == true) {visionQStr = visionQStr + "," + qualStrR3;} //Poor
						if(qualityBool5R == true) {visionQStr = visionQStr + "," + qualStrR5;} //Blurred
						if(qualityBool6R == true) {visionQStr = visionQStr + "," + qualStrR6;} //Cloudy
						if(qualityBool7R == true) {visionQStr = visionQStr + "," + qualStrR7;} //Hazy
						if(qualityBool8R == true) {visionQStr = visionQStr + "," + qualStrR8;} //Distorted
					}
					if(qualityPositiveBoolR == true) {
						visionQStr += ", yet";
						yetBoolR = true;
						if(qualityBool1R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR1;} //Good
						else if(qualityBool1R == true && yetBoolR == true) {visionQStr += qualStrR1; yetBoolR = false;}
						if(qualityBool2R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR2;} //Fair
						else if(qualityBool2R == true && yetBoolR == true) {visionQStr += qualStrR2; yetBoolR = false;}
						if(qualityBool4R == true && yetBoolR == false) {visionQStr = visionQStr + "," + qualStrR4;} //Clear
						else if(qualityBool4R == true && yetBoolR == true) {visionQStr += qualStrR4; yetBoolR = false;}
					}
				}
				visionQStr += " right eye vision";
				checkCorrectionOD();
				if(visionDurationR != '' && visionDurationSameOUBool == false) {
					visionQStr += visionDurationRStr;
				}	
				if(visionContextR != '' && visionContextSameOUBool == false) {
					visionQStr += " as noted";
					visionQStr += visionContextRStr;
				}
			}
			if(visionSeverityL == '') { //this statement should be false
				visionQStr += ".";
			}
			else { //this statement should always execute, because the above if statement should always be false
				visionQStr = visionQStr + ", and" + visionSeverityLStr;
			//Severity OS positive connotation	
				if(qualityCountL > 0 && severityPositiveBoolL == true) {
					if(qualityPositiveBoolL == true) {
						if(qualityBool1L == true) {visionQStr = visionQStr + "," + qualStrL1;} //Good
						if(qualityBool2L == true) {visionQStr = visionQStr + "," + qualStrL2;} //Fair
						if(qualityBool4L == true) {visionQStr = visionQStr + "," + qualStrL4;} //Clear
					}
					if(qualityNegativeBoolL == true) {
						visionQStr += ", yet";
						yetBoolL = true;
						if(qualityBool3L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL3;} //Poor
						else if(qualityBool3L == true && yetBoolL == true ) {visionQStr += qualStrL3; yetBoolL = false;} 
						if(qualityBool5L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL5;} //Blurred
						else if(qualityBool5L == true && yetBoolL == true ) {visionQStr += qualStrL5; yetBoolL = false;} 
						if(qualityBool6L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL6;} //Cloudy
						else if(qualityBool6L == true && yetBoolL == true ) {visionQStr += qualStrL6; yetBoolL = false;} 
						if(qualityBool7L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL7;} //Hazy
						else if(qualityBool7L == true && yetBoolL == true ) {visionQStr += qualStrL7; yetBoolL = false;} 
						if(qualityBool8L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL8;} //Distorted
						else if(qualityBool8L == true && yetBoolL == true ) {visionQStr += qualStrL8; yetBoolL = false;} 
					}
			//Severity OS negative connotation
				} else if(qualityCountL > 0 && severityPositiveBoolL == false) {
					if(qualityNegativeBoolL == true) {
						if(qualityBool3L == true) {visionQStr = visionQStr + "," + qualStrL3;} //Poor
						if(qualityBool5L == true) {visionQStr = visionQStr + "," + qualStrL5;} //Blurred
						if(qualityBool6L == true) {visionQStr = visionQStr + "," + qualStrL6;} //Cloudy
						if(qualityBool7L == true) {visionQStr = visionQStr + "," + qualStrL7;} //Hazy
						if(qualityBool8L == true) {visionQStr = visionQStr + "," + qualStrL8;} //Distorted
					}
					if(qualityPositiveBoolL == true) {
						visionQStr += ", yet";
						yetBoolL = true;
						if(qualityBool1L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL1;} //Good
						else if(qualityBool1L == true && yetBoolL == true) {visionQStr += qualStrL1; yetBoolL = false;}
						if(qualityBool2L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL2;} //Fair
						else if(qualityBool2L == true && yetBoolL == true) {visionQStr += qualStrL2; yetBoolL = false;}
						if(qualityBool4L == true && yetBoolL == false) {visionQStr = visionQStr + "," + qualStrL4;} //Clear
						else if(qualityBool4L == true && yetBoolL == true) {visionQStr += qualStr4L; yetBoolL = false;}
					}
				}
				visionQStr += " left eye vision";
				checkCorrectionOS();
				if(visionDurationL != '') {
					visionQStr += visionDurationLStr;
				}
				if(visionContextL != '') {
					visionQStr += " as noted";
					visionQStr += visionContextLStr;
				}
				visionQStr += ".";
			}
		}
	}
	if(customVisionBool == false) { //could combine with if(customVisionBool == false) statement below,
									//but kept seperate for organizational purposes for now
		if(ODBetterSeeingBool == true) {
			visionQStr += " The right eye is the better seeing eye for daily activities";
			if(noVisualDifficultyBool == true) {
				visionQStr += ", which are performed without significant visual difficulty per report";
			}
			visionQStr += ".";
		}
		if(OSBetterSeeingBool == true) {
			visionQStr += " The left eye is the better seeing eye for daily activities";
			if(noVisualDifficultyBool == true) {
				visionQStr += ", which are performed without significant visual difficulty per report";
			}
			visionQStr += ".";
		}
		if(noVisualDifficultyBool == true && ODBetterSeeingBool == false && OSBetterSeeingBool == false) {
			visionQStr += " Daily activities are performed without significant visual difficulty per report.";
		}
		if(confirmedNoNewFFBool == true) {
			visionQStr += pronoun1;
			if(male == false && female == false) {
				visionQStr += " deny";
			}
			else{
				visionQStr += " denies";
			}
			visionQStr += " any new floaters or photopsia."
		}

		if(visionQStr != '[vision complaint]' && visionQStr != ' [vision complaint]') {
			HPI += visionQStr;
		}
	}

	//set custom vision string (i.e. the placeholder value) to current selection
	if(customVisionBool == false) {
		if (visionQStr == '') {visionQStr = '[vision complaint]';}
		customVisionStr = visionQStr;
		if (customVisionStr.charAt(0) == ' ') {customVisionStr = customVisionStr.substring(1);}
		document.getElementById("customVisionQText").value = customVisionStr;
	}
	else {
		customVisionBool = false;
	}
}

function checkCorrectionOD() {
	if(withCorrectionOD == true) {
	     visionQStr += " with correction";
	}
	if(withoutCorrectionOD == true) {
	     visionQStr += " without correction";
	}
}

function checkCorrectionOS() {
	if(withCorrectionOS == true) {
	     visionQStr += " with correction";
	}
	if(withoutCorrectionOS == true) {
	     visionQStr += " without correction";
	}
}

function checkCorrectionOU() {
	if(withCorrectionOU == true) {
	     visionQStr += " with correction";
	}
	if(withoutCorrectionOU == true) {
	     visionQStr += " without correction";
	}
}

function markVisionSeverityButtonsRight(target) {
	if(target == 'visionSeverityListRight') {activateFld('visionSeverityListRight');} else {ignoreFld('visionSeverityListRight');}
	if(target == 'stableBtnRight') {activateBtn('stableBtnRight');} else {ignoreBtn('stableBtnRight');}
	if(target == 'gradWorseBtnRight') {activateBtn('gradWorseBtnRight');} else {ignoreBtn('gradWorseBtnRight');}
	if(target == 'slightWorseBtnRight') {activateBtn('slightWorseBtnRight');} else {ignoreBtn('slightWorseBtnRight');}
	if(target == 'WorseBtnRight') {activateBtn('WorseBtnRight');} else {ignoreBtn('WorseBtnRight');}
	if(target == 'gradImprovedBtnRight') {activateBtn('gradImprovedBtnRight');} else {ignoreBtn('gradImprovedBtnRight');}
	if(target == 'slightImprovedBtnRight') {activateBtn('slightImprovedBtnRight');} else {ignoreBtn('slightImprovedBtnRight');}
	if(target == 'improvedBtnRight') {activateBtn('improvedBtnRight');} else {ignoreBtn('improvedBtnRight');}
}

function markVisionSeverityButtonsLeft(target) {
	if(target == 'visionSeverityListLeft') {activateFld('visionSeverityListLeft');} else {ignoreFld('visionSeverityListLeft');}
	if(target == 'stableBtnLeft') {activateBtn('stableBtnLeft');} else {ignoreBtn('stableBtnLeft');}
	if(target == 'gradWorseBtnLeft') {activateBtn('gradWorseBtnLeft');} else {ignoreBtn('gradWorseBtnLeft');}
	if(target == 'slightWorseBtnLeft') {activateBtn('slightWorseBtnLeft');} else {ignoreBtn('slightWorseBtnLeft');}
	if(target == 'WorseBtnLeft') {activateBtn('WorseBtnLeft');} else {ignoreBtn('WorseBtnLeft');}
	if(target == 'gradImprovedBtnLeft') {activateBtn('gradImprovedBtnLeft');} else {ignoreBtn('gradImprovedBtnLeft');}
	if(target == 'slightImprovedBtnLeft') {activateBtn('slightImprovedBtnLeft');} else {ignoreBtn('slightImprovedBtnLeft');}
	if(target == 'improvedBtnLeft') {activateBtn('improvedBtnLeft');} else {ignoreBtn('improvedBtnLeft');}
}

function markVisionDurationButtonsRight(target) {
	if(target == 'visionDurationListRight') {activateFld('visionDurationListRight');} else {ignoreFld('visionDurationListRight');}
	if(target == 'sinceLastSeenBtnRight') {activateBtn('sinceLastSeenBtnRight');} else {ignoreBtn('sinceLastSeenBtnRight');}
	if(target == 'pastFewDaysBtnRight') {activateBtn('pastFewDaysBtnRight');} else {ignoreBtn('pastFewDaysBtnRight');}
	if(target == 'pastWeekBtnRight') {activateBtn('pastWeekBtnRight');} else {ignoreBtn('pastWeekBtnRight');}
	if(target == 'pastMonthBtnRight') {activateBtn('pastMonthBtnRight');} else {ignoreBtn('pastMonthBtnRight');}
	if(target == 'pastYearBtnRight') {activateBtn('pastYearBtnRight');} else {ignoreBtn('pastYearBtnRight');}
}

function markVisionDurationButtonsLeft(target) {
	if(target == 'visionDurationListLeft') {activateFld('visionDurationListLeft');} else {ignoreFld('visionDurationListLeft');}
	if(target == 'sinceLastSeenBtnLeft') {activateBtn('sinceLastSeenBtnLeft');} else {ignoreBtn('sinceLastSeenBtnLeft');}
	if(target == 'pastFewDaysBtnLeft') {activateBtn('pastFewDaysBtnLeft');} else {ignoreBtn('pastFewDaysBtnLeft');}
	if(target == 'pastWeekBtnLeft') {activateBtn('pastWeekBtnLeft');} else {ignoreBtn('pastWeekBtnLeft');}
	if(target == 'pastMonthBtnLeft') {activateBtn('pastMonthBtnLeft');} else {ignoreBtn('pastMonthBtnLeft');}
	if(target == 'pastYearBtnLeft') {activateBtn('pastYearBtnLeft');} else {ignoreBtn('pastYearBtnLeft');}
}

function markVisionContextButtonsRight(target) {
	if(target == 'visionContextListRight') {activateFld('visionContextListRight');} else {ignoreFld('visionContextListRight');}
	if(target == 'drivingBtnRight') {activateBtn('drivingBtnRight');} else {ignoreBtn('drivingBtnRight');}
	if(target == 'readingBtnRight') {activateBtn('readingBtnRight');} else {ignoreBtn('readingBtnRight');}
	if(target == 'computerBtnRight') {activateBtn('computerBtnRight');} else {ignoreBtn('computerBtnRight');}
	if(target == 'allDistancesBtnRight') {activateBtn('allDistancesBtnRight');} else {ignoreBtn('allDistancesBtnRight');}
	if(target == 'dailyActivitiesBtnRight') {activateBtn('dailyActivitiesBtnRight');} else {ignoreBtn('dailyActivitiesBtnRight');}
}

function markVisionContextButtonsLeft(target) {
	if(target == 'visionContextListLeft') {activateFld('visionContextListLeft');} else {ignoreFld('visionContextListLeft');}
	if(target == 'drivingBtnLeft') {activateBtn('drivingBtnLeft');} else {ignoreBtn('drivingBtnLeft');}
	if(target == 'readingBtnLeft') {activateBtn('readingBtnLeft');} else {ignoreBtn('readingBtnLeft');}
	if(target == 'computerBtnLeft') {activateBtn('computerBtnLeft');} else {ignoreBtn('computerBtnLeft');}
	if(target == 'allDistancesBtnLeft') {activateBtn('allDistancesBtnLeft');} else {ignoreBtn('allDistancesBtnLeft');}
	if(target == 'dailyActivitiesBtnLeft') {activateBtn('dailyActivitiesBtnLeft');} else {ignoreBtn('dailyActivitiesBtnLeft');}
}

function refreshQualityBtns() {
	if(qualityBool1R) {activateBtn('quality1R');} else {deactivateBtn('quality1R');}
	if(qualityBool2R) {activateBtn('quality2R');} else {deactivateBtn('quality2R');}
	if(qualityBool3R) {activateBtn('quality3R');} else {deactivateBtn('quality3R');}
	if(qualityBool4R) {activateBtn('quality4R');} else {deactivateBtn('quality4R');}
	if(qualityBool5R) {activateBtn('quality5R');} else {deactivateBtn('quality5R');}
	if(qualityBool6R) {activateBtn('quality6R');} else {deactivateBtn('quality6R');}
	if(qualityBool7R) {activateBtn('quality7R');} else {deactivateBtn('quality7R');}
	if(qualityBool8R) {activateBtn('quality8R');} else {deactivateBtn('quality8R');}
	if(qualityBool1L) {activateBtn('quality1L');} else {deactivateBtn('quality1L');}
	if(qualityBool2L) {activateBtn('quality2L');} else {deactivateBtn('quality2L');}
	if(qualityBool3L) {activateBtn('quality3L');} else {deactivateBtn('quality3L');}
	if(qualityBool4L) {activateBtn('quality4L');} else {deactivateBtn('quality4L');}
	if(qualityBool5L) {activateBtn('quality5L');} else {deactivateBtn('quality5L');}
	if(qualityBool6L) {activateBtn('quality6L');} else {deactivateBtn('quality6L');}
	if(qualityBool7L) {activateBtn('quality7L');} else {deactivateBtn('quality7L');}
	if(qualityBool8L) {activateBtn('quality8L');} else {deactivateBtn('quality8L');}
}

function refreshBetterSeeingBtns() {
	if(ODBetterSeeingBool) {activateBtn('ODBetter');} else {ignoreBtn('ODBetter');}
	if(OSBetterSeeingBool) {activateBtn('OSBetter');} else {ignoreBtn('OSBetter');}
	if(ODBetterSeeingBool == false && OSBetterSeeingBool == false) {deactivateBtn('ODBetter'); deactivateBtn('OSBetter');}
}


		/**********************************************************************
		|																	  |
		|				    		FINAL HPI MANAGEMENT					  |
		|																	  |
		**********************************************************************/

function generateHPI() {
	setPOInstructionsReviewedStr() //called so the pronoun updates accordingly for the post-op instructions sentence
	setSurgeryComfortStr(); //needs to run when updating HPI so 'reports' VS 'report' corresponds with gender selection
	if(customized == false) {
		displayHPI();
	}
	else {
		if(confirm("WARNING! You will lose the text you typed into the Final HPI (blue box) if you click any of the buttons above it.\n\nClick ok to proceed (and lose what you typed in the Final HPI).\n\nClick cancel to keep what you typed in the Final HPI.")) {
			setCustomizedFalse();
			var element = document.getElementById("mainContent");
			element.classList.remove("frostLight");
			displayHPI();
		}
		else {
			var element = document.getElementById("mainContent");
			element.classList.remove("frostLight");
			element.classList.add("frost");
		}
	}
}

function displayHPI() {
	HPI = ptName;
//New Patient------------------------------------------------------------------
	if(apptType == 'newPt') {
		HPI += ' is a';
		if(ptAge != '') {
			HPI += ' '; //almost every string variable starts with a space, but ptAge currently does not
			HPI += ptAge;
			HPI += ' year old';
		}
		if(female == true) {
			HPI += ' female';
		}
		else {
			HPI += ' male';
		}		
		if(refProvStr != '') {
			if(refProvStr != ' self-referred') {
				HPI += " referred by";
			}
			else {
				HPI += ',' //comma for before " self-referred"
			}
			HPI += refProvStr;
		}
		else {
			HPI += " here today";
		}
		if(visitReasonStr != '') {
			HPI += ' for';
			HPI += visitReasonStr;
			if(newPtLateralityStr != '' ) {
				HPI += newPtLateralityStr;
			}
		}
		HPI += '.';
		if(visitReasonStr == ' a cataract evaluation' && glareBool == true) {
			HPI += pronoun1;
			HPI += " complains of glare which is making driving more difficult."
		}
		displayVisionComplaint();
		if(visitReasonStr == ' evaluation of macular degeneration' && aredsBool == true) {
			HPI += pronoun1;
			HPI += " is taking AREDS-2 vitamins."
		}
		else if(visitReasonStr == ' evaluation of macular degeneration' && aredsBool == false) {
			HPI += pronoun1;
			HPI += " is not taking AREDS-2 vitamins."			
		}
	}
//Established Patient & Established Patient s/p Procedure----------------------------------------------------------
	else if(apptType == 'estabPt' || apptType == 'estabPtspProc') {
		HPI += ' returns';
		if (treatedLastVisitRight == false && treatedLastVisitLeft == false) {
			if (visitIntervalStr != '') {
				HPI += ' after';
			}
			HPI += visitIntervalStr;
			HPI += ' for reevaluation';
			if (bilateralDiagnosis == true) {
				if (diagnosisStrBilateral != 'n/a'
				 && diagnosisStrBilateral != ' n/a'
				 && diagnosisStrBilateral != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					HPI += ' of bilateral';
					HPI += diagnosisStrBilateral;
				}
			}
			else {
				if(diagnosisStrRight != 'n/a' 
				&& diagnosisStrRight != ' n/a'
				&& diagnosisStrRight != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					HPI += ' of';
					HPI += diagnosisStrRight;
					HPI += ' in the right eye';
				}
				if(diagnosisStrLeft != 'n/a' 
				&& diagnosisStrLeft != ' n/a'
				&& diagnosisStrLeft != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					if(diagnosisStrRight == 'n/a' 
					|| diagnosisStrRight == ' n/a'
					|| diagnosisStrRight == ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
						HPI += ' of';
					}
					else {
						HPI += ' and';
					}
					HPI += diagnosisStrLeft;
					HPI += ' in the left eye';
				}			
			}
			HPI += '.';
		}
		else { //treatedLastVisitRight == true and/or treatedLastVisitLeft == true
			HPI += visitIntervalStr;
			HPI += ' after';
			if (bilateralTreatment == true) {
				HPI += treatmentStrFull;
				if (bilateralDiagnosis == true) {
					if (diagnosisStrBilateral != 'n/a'
					&& diagnosisStrBilateral != ' n/a'
					&& diagnosisStrBilateral != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''					
						HPI += ' for';
						HPI += diagnosisStrBilateral;
					}
				}
				else {
					if(diagnosisStrRight != 'n/a' 
					&& diagnosisStrRight != ' n/a'
					&& diagnosisStrRight != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
						HPI += ' for';
						HPI += diagnosisStrRight;
						HPI += ' in the right eye';
					}
					if(diagnosisStrLeft != 'n/a' 
					&& diagnosisStrLeft != ' n/a'
					&& diagnosisStrLeft != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
						if(diagnosisStrRight == 'n/a' 
						|| diagnosisStrRight == ' n/a'
						|| diagnosisStrRight == ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
							HPI += ' for';
						}
						else {
							HPI += ' and';
						}
						HPI += diagnosisStrLeft;
						HPI += ' in the left eye';
					}			
				}
			}
			else { //bilateralTreatment == false
				if(treatmentStrRight != 'n/a' 
				&& treatmentStrRight != ' n/a'
				&& treatmentStrRight != ' ') { //setTreatmentStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					HPI += treatmentStrRight;
					HPI += ' in the right eye';
					if(bilateralDiagnosis == false
					&& diagnosisStrRight != 'n/a' 
					&& diagnosisStrRight != ' n/a'
					&& diagnosisStrRight != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
						HPI += ' for';
						HPI += diagnosisStrRight;
					}
				}
				if(treatmentStrLeft != 'n/a' 
				&& treatmentStrLeft != ' n/a'
				&& treatmentStrLeft != ' ') { //setTreatmentStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					if(treatmentStrRight != 'n/a' 
					&& treatmentStrRight != ' n/a'
					&& treatmentStrRight != ' ') { //setTreatmentStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
						HPI += ' and';
					}
					HPI += treatmentStrLeft;
					HPI += ' in the left eye';
					if(bilateralDiagnosis == false
					&& diagnosisStrLeft != 'n/a' 
					&& diagnosisStrLeft != ' n/a'
					&& diagnosisStrLeft != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
						HPI += ' for';
						HPI += diagnosisStrLeft;
					}
				}
				if(bilateralDiagnosis == true) {
					HPI += ' for';
					HPI += diagnosisStrBilateral;
				}
			}
			HPI += '.';
		}
		displayVisionComplaint();
	}
//1 Day P/O--------------------------------------------------------------------
	else if(apptType == '1DayPO') {
		HPI += " returns one day status post";
		HPI += surgeryStr;
		if(surgeryReason != '') {
			HPI += ' for';
			HPI += surgeryReasonStr;
		}
		if(laterality2A != '') {
			HPI += ' in';
			HPI += laterality2AStr1;
		}
		HPI += ".";
		if(surgeryComfortStr != '') {
			HPI += pronoun1;
			HPI += surgeryComfortStr;
			if(surgeryComfort != 'positioningSore') {
				HPI += ".";
			} else {
				if(posCompliantBool == true || posCompliantBool == false) {
					if(posRequired == true) {
						HPI += ",";
					}
					else {
						HPI += ".";
					}
				}
				else { // to avoid stray comma at end of sentence as HPI is building
					HPI += ".";
				}
			}
		}
		if(posRequired == true && posCompliantBool == true) {
			if(surgeryComfort == 'positioningSore') {
				HPI += " but good compliance despite the discomfort."
			} else {
				HPI += pronoun1;
				if(male == false && female == false) {
					HPI += " report";
				}
				else{
					HPI += " reports";
				}
				HPI += " good compliance with the";
				HPI += posOrientationStr;
				HPI += " positioning.";
			}
		}
		if(posRequired == true && posCompliantBool == false) {
			if(surgeryComfort == 'positioningSore') {
				HPI += " as well as difficulty with compliance."
			} else {
				HPI += pronoun1;
				HPI += " had difficulty being compliant with the";
				HPI += posOrientationStr;
				HPI += " positioning.";
			}
		}

		if(dropsInstilled != '' && dropsInstilled != '') {
			setDropsInstilledStr();  //called so the function updates the laterality of the eye getting the drops
			HPI += dropsInstilledStr;
		}
		if(POInstructionsReviewed != '' && POInstructionsReviewed != '') {
			HPI += POInstructionsReviewedStr;
		}

	}
//Other P/O--------------------------------------------------------------------
	else if(apptType == 'otherPO') {
		HPI += " returns";
		if (visitIntervalStr != '') {
			HPI += ' after';
		}
		HPI += visitIntervalStr; 
		HPI += " for reevaluation";
		if(surgeryIntervalStr == '') {
			HPI += " status post";
			HPI += surgeryStr;
			if(surgeryReason != '' && surgeryReason != '') {
				HPI += ' for';
				HPI += surgeryReasonStr;
			}
			if(laterality2B != '' && laterality2B != '') {
				HPI += ' in';
				HPI += laterality2BStr1;
			}
			HPI += ".";
		}
		else { //if surgery date is indicated
			if(visitIntervalStr != '') {
				HPI += '.'
				HPI += pronoun1;
				if (female == true || male == true) {
					HPI += ' is';
				}
				else {
					HPI += ' are';
				}
			}
			HPI += surgeryIntervalStr;
			HPI += " status post";
			HPI += surgeryStr;
			if(surgeryReason != '' && surgeryReason != '') {
				HPI += ' for';
				HPI += surgeryReasonStr;
			}
			if(laterality2B != '' && laterality2B != '') {
				HPI += ' in';
				HPI += laterality2BStr1;
			}
			HPI += ', performed on';
			HPI += surgeryDateStr;
			HPI += ".";			
		}
		displayVisionComplaint();
	}
//IOP Check--------------------------------------------------------------------
	else if(apptType == 'IOPCheck') {
		HPI += " returns";
		if (visitIntervalStr != '') {
			HPI += ' after';
		}
		HPI += visitIntervalStr;
		HPI += " for an intraocular pressure check.";

		var dropsODStr = '';
		var dropsOSStr = '';
		var elementOD;
		var elementOS;
		var elementOU;

	//Alphagan
		elementOD = document.getElementById('alphaganFreqOD').value;
		elementOS = document.getElementById('alphaganFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Alphagan "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Alphagan "; dropsOSStr += elementOS;}
	//Azopt
		elementOD = document.getElementById('azoptFreqOD').value;
		elementOS = document.getElementById('azoptFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Azopt "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Azopt "; dropsOSStr += elementOS;}
	//betimol
		elementOD = document.getElementById('betimolFreqOD').value;
		elementOS = document.getElementById('betimolFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  betimol "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  betimol "; dropsOSStr += elementOS;}
	//brimonidine
		elementOD = document.getElementById('brimonidineFreqOD').value;
		elementOS = document.getElementById('brimonidineFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  brimonidine "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  brimonidine "; dropsOSStr += elementOS;}
	//Combigan
		elementOD = document.getElementById('combiganFreqOD').value;
		elementOS = document.getElementById('combiganFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Combigan "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Combigan "; dropsOSStr += elementOS;}
	//Cosopt
		elementOD = document.getElementById('cosoptFreqOD').value;
		elementOS = document.getElementById('cosoptFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Cosopt "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Cosopt "; dropsOSStr += elementOS;}
	//dorzolamide
		elementOD = document.getElementById('dorzolamideFreqOD').value;
		elementOS = document.getElementById('dorzolamideFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  dorzolamide "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  dorzolamide "; dropsOSStr += elementOS;}
	//dorzolamide-timolol
		elementOD = document.getElementById('dorzolamide-timololFreqOD').value;
		elementOS = document.getElementById('dorzolamide-timololFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  dorzolamide-timolol "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  dorzolamide-timolol "; dropsOSStr += elementOS;}
	//latanoprost
		elementOD = document.getElementById('latanoprostFreqOD').value;
		elementOS = document.getElementById('latanoprostFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  latanoprost "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  latanoprost "; dropsOSStr += elementOS;}
	//Lumigan
		elementOD = document.getElementById('lumiganFreqOD').value;
		elementOS = document.getElementById('lumiganFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Lumigan "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Lumigan "; dropsOSStr += elementOS;}
	//Rhopressa
		elementOD = document.getElementById('rhopressaFreqOD').value;
		elementOS = document.getElementById('rhopressaFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Rhopressa "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Rhopressa "; dropsOSStr += elementOS;}
	//Rocklatan
		elementOD = document.getElementById('rocklatanFreqOD').value;
		elementOS = document.getElementById('rocklatanFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Rocklatan "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Rocklatan "; dropsOSStr += elementOS;}
	//Simbrinza
		elementOD = document.getElementById('simbrinzaFreqOD').value;
		elementOS = document.getElementById('simbrinzaFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Simbrinza "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Simbrinza "; dropsOSStr += elementOS;}
	//timolol
		elementOD = document.getElementById('timololFreqOD').value;
		elementOS = document.getElementById('timololFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  timolol "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  timolol "; dropsOSStr += elementOS;}
	//Travatan Z
		elementOD = document.getElementById('travatanFreqOD').value;
		elementOS = document.getElementById('travatanFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Travatan Z "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Travatan Z "; dropsOSStr += elementOS;}
	//Vyzulta
		elementOD = document.getElementById('vyzultaFreqOD').value;
		elementOS = document.getElementById('vyzultaFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Vyzulta "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Vyzulta "; dropsOSStr += elementOS;}
	//Zioptan
		elementOD = document.getElementById('zioptanFreqOD').value;
		elementOS = document.getElementById('zioptanFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Zioptan "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Zioptan "; dropsOSStr += elementOS;}
	//Durezol
		elementOD = document.getElementById('durezolFreqOD').value;
		elementOS = document.getElementById('durezolFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Durezol "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Durezol "; dropsOSStr += elementOS;}
	//Maxitrol
		elementOD = document.getElementById('maxitrolFreqOD').value;
		elementOS = document.getElementById('maxitrolFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Maxitrol "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Maxitrol "; dropsOSStr += elementOS;}
	//prednisolone
		elementOD = document.getElementById('prednisoloneFreqOD').value;
		elementOS = document.getElementById('prednisoloneFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  prednisolone "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  prednisolone "; dropsOSStr += elementOS;}
	//bromfenac
		elementOD = document.getElementById('bromfenacFreqOD').value;
		elementOS = document.getElementById('bromfenacFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  bromfenac "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  bromfenac "; dropsOSStr += elementOS;}
	//diclofenac
		elementOD = document.getElementById('diclofenacFreqOD').value;
		elementOS = document.getElementById('diclofenacFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  diclofenac "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  diclofenac "; dropsOSStr += elementOS;}
	//Ilevro
		elementOD = document.getElementById('ilevroFreqOD').value;
		elementOS = document.getElementById('ilevroFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Ilevro "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Ilevro "; dropsOSStr += elementOS;}
	//Prolensa
		elementOD = document.getElementById('prolensaFreqOD').value;
		elementOS = document.getElementById('prolensaFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Prolensa "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Prolensa "; dropsOSStr += elementOS;}
	//ofloxacin
		elementOD = document.getElementById('ofloxacinFreqOD').value;
		elementOS = document.getElementById('ofloxacinFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  ofloxacin "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  ofloxacin "; dropsOSStr += elementOS;}
	//moxifloxacin
		elementOD = document.getElementById('moxifloxacinFreqOD').value;
		elementOS = document.getElementById('moxifloxacinFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  moxifloxacin "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  moxifloxacin "; dropsOSStr += elementOS;}
	//polymyxin
		elementOD = document.getElementById('polymyxinFreqOD').value;
		elementOS = document.getElementById('polymyxinFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  polymyxin "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  polymyxin "; dropsOSStr += elementOS;}
	//Vigamox
		elementOD = document.getElementById('vigamoxFreqOD').value;
		elementOS = document.getElementById('vigamoxFreqOS').value;
		if(elementOD != 'blank'){dropsODStr += "  Vigamox "; dropsODStr += elementOD;}
		if(elementOS != 'blank'){dropsOSStr += "  Vigamox "; dropsOSStr += elementOS;}
		
		displayVisionComplaint();

		if(dropsODStr != '' || dropsOSStr != '') {
			HPI += '\n\n';
		}

		if(dropsODStr == dropsOSStr && dropsODStr != '') {
			HPI += "Drops OU:";
			HPI += dropsODStr;			
		}else {
			if(dropsODStr != '') {
				HPI += "Drops OD:";
				HPI += dropsODStr;
			}
			if(dropsODStr != '' &&  dropsOSStr != '') {
				HPI += '\n';
			}
			if(dropsOSStr != '') {
				HPI += "Drops OS:";
				HPI += dropsOSStr;
			}
		}
	}
//Planned Procedure------------------------------------------------------------
	else if(apptType == 'plannedProc') {
		HPI += " returns";


		if (visitIntervalStr != '') {
			HPI += ' after';
		}
		HPI += visitIntervalStr;
		HPI += ' for planned';



		if (bilateralTreatment == true) {
			HPI += treatmentStrFull;
			if (bilateralDiagnosis == true) {
				if (diagnosisStrBilateral != 'n/a'
				&& diagnosisStrBilateral != ' n/a'
				&& diagnosisStrBilateral != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''					
					HPI += ' for';
					HPI += diagnosisStrBilateral;
				}
			}
			else {
				if(diagnosisStrRight != 'n/a' 
				&& diagnosisStrRight != ' n/a'
				&& diagnosisStrRight != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					HPI += ' for';
					HPI += diagnosisStrRight;
					HPI += ' in the right eye';
				}
				if(diagnosisStrLeft != 'n/a' 
				&& diagnosisStrLeft != ' n/a'
				&& diagnosisStrLeft != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					if(diagnosisStrRight == 'n/a' 
					|| diagnosisStrRight == ' n/a'
					|| diagnosisStrRight == ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
						HPI += ' for';
					}
					else {
						HPI += ' and';
					}
					HPI += diagnosisStrLeft;
					HPI += ' in the left eye';
				}			
			}
		}
		else { //bilateralTreatment == false
			if(treatmentStrRight != 'n/a' 
			&& treatmentStrRight != ' n/a'
			&& treatmentStrRight != ' ') { //setTreatmentStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
				HPI += treatmentStrRight;
				HPI += ' in the right eye';
				if(bilateralDiagnosis == false
				&& diagnosisStrRight != 'n/a' 
				&& diagnosisStrRight != ' n/a'
				&& diagnosisStrRight != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					HPI += ' for';
					HPI += diagnosisStrRight;
				}
			}
			if(treatmentStrLeft != 'n/a' 
			&& treatmentStrLeft != ' n/a'
			&& treatmentStrLeft != ' ') { //setTreatmentStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
				if(treatmentStrRight != 'n/a' 
				&& treatmentStrRight != ' n/a'
				&& treatmentStrRight != ' ') { //setTreatmentStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					HPI += ' and';
				}
				HPI += treatmentStrLeft;
				HPI += ' in the left eye';
				if(bilateralDiagnosis == false
				&& diagnosisStrLeft != 'n/a' 
				&& diagnosisStrLeft != ' n/a'
				&& diagnosisStrLeft != ' ') { //setDiagnosisStr() makes every diagnosis string start with a blank space ' ', otherwise would check for ''
					HPI += ' for';
					HPI += diagnosisStrLeft;
				}
			}
			if(bilateralDiagnosis == true) {
				HPI += ' for';
				HPI += diagnosisStrBilateral;
			}
		}
		HPI += '.';



		if(readyToProc != '' && readyToProc != '') {
			HPI += pronoun1;
			if(readyToProc == 'yes') {
				if(male == false && female == false) {
					HPI += " are";
				}
				else{
					HPI += " is";
				}
				HPI += ' ready to proceed with treatment today as planned.';
			}
			else if(readyToProc == 'no') {
				HPI += ' would like to discuss the treatment with the doctor before proceeding.';
			}
		}
	}

//Additional Information-------------------------------------------------------
	HPI += addInfoStr;

//A1c & BLS------------------------------------------------------------------
	if(A1cText != '' || BSLText != '') {
		HPI += '\n\n';
	}
	if(A1cText != '') {
		HPI += 'A1c: '
		HPI += A1cText;
		HPI += '\n';
	}
	if(BSLText != '') {
		HPI += 'BSL: '
		HPI += BSLText;
	}

	document.getElementById("HPIText").value = HPI;
}



function displayVisionComplaint() {
	analyzeVisionComplaint();
	setGenericVisionComplaint();
}








function setReadyToProc(value) {
	readyToProc = value;
	setReadyToProcStr();
}

function setReadyToProcStr() {
	if(readyToProc == '' || readyToProc == '') {readyToProcStr = '';}
	else if(readyToProc == 'yes') {
		readyToProcStr = ' ready to proceed with treatment today as planned.';
	}

}
























function setCustomizedTrue() {customized = true;}

function setCustomizedFalse() {customized = false;}

function addFrostLight() {
	var element = document.getElementById("mainContent");
	element.classList.add("frostLight");
}





function removeHighlight(target) {
	var element = document.getElementById(target);
	element.classList.remove("highlight");
}






function activateDropODFld(target) {
  	var element1 = document.getElementById(target);
  	var element2 = element1.value;
  	if(element2 != 'blank') {
 		element1.classList.remove("notSelectedODFld");
		element1.classList.add("selectedODFld"); 		
  	} else {
 		element1.classList.remove("selectedODFld");
		element1.classList.add("notSelectedODFld");   		
  	}
}

function activateDropOSFld(target) {
  	var element1 = document.getElementById(target);
  	var element2 = element1.value;
  	if(element2 != 'blank') {
 		element1.classList.remove("notSelectedOSFld");
		element1.classList.add("selectedOSFld"); 		
  	} else {
 		element1.classList.remove("selectedOSFld");
		element1.classList.add("notSelectedOSFld");   		
  	}
}





function refreshSurgeryBtns() {
	surgeryCounter = 0; // reset counter
	if(acWashoutBool) {activateBtn('acWashout'); surgeryCounter++;} else {deactivateBtn('acWashout');}
	if(acIOLBool) {activateBtn('acIOL'); surgeryCounter++;} else {deactivateBtn('acIOL');}
	if(ceftVancoBool) {activateBtn('ceftVanco'); surgeryCounter++;} else {deactivateBtn('ceftVanco');}
	if(chorDrainBool) {activateBtn('chorDrain'); surgeryCounter++;} else {deactivateBtn('chorDrain');}
	if(cryoBool) {activateBtn('cryo'); surgeryCounter++;} else {deactivateBtn('cryo');}
	if(decadronBool) {activateBtn('decadron'); surgeryCounter++;} else {deactivateBtn('decadron');}
	if(extraCapBool) {activateBtn('extraCap'); surgeryCounter++;} else {deactivateBtn('extraCap');}
	if(fluidAirBool) {activateBtn('fluidAir'); surgeryCounter++;} else {deactivateBtn('fluidAir');}
	if(fluidGasBool) {activateBtn('fluidGas'); surgeryCounter++;} else {deactivateBtn('fluidGas');}
	if(iolImplantationBool) {activateBtn('iolImplantation'); surgeryCounter++;} else {deactivateBtn('iolImplantation');}
	if(iolExchangeBool) {activateBtn('iolExchange'); surgeryCounter++;} else {deactivateBtn('iolExchange');}
	if(iolRepositionBool) {activateBtn('iolReposition'); surgeryCounter++;} else {deactivateBtn('iolReposition');}
	if(laserBool) {activateBtn('laser'); surgeryCounter++;} else {deactivateBtn('laser');}
	if(lensectomyBool) {activateBtn('lensectomy'); surgeryCounter++;} else {deactivateBtn('lensectomy');}
	if(memPeelBool) {activateBtn('memPeel'); surgeryCounter++;} else {deactivateBtn('memPeel');}
	if(panretLaserBool) {activateBtn('panretLaser'); surgeryCounter++;} else {deactivateBtn('panretLaser');}
	if(phacoBool) {activateBtn('phaco'); surgeryCounter++;} else {deactivateBtn('phaco');}
	if(pcIOLBool) {activateBtn('pcIOL'); surgeryCounter++;} else {deactivateBtn('pcIOL');}
	if(pneumaticBool) {activateBtn('pneumatic'); surgeryCounter++;} else {deactivateBtn('pneumatic');}
	if(buckleBool) {activateBtn('buckle'); surgeryCounter++;} else {deactivateBtn('buckle');}
	if(oilExchangeBool) {activateBtn('oilExchange'); surgeryCounter++;} else {deactivateBtn('oilExchange');}
	if(oilInsertionBool) {activateBtn('oilInsertion'); surgeryCounter++;} else {deactivateBtn('oilInsertion');}
	if(oilRemovalBool) {activateBtn('oilRemoval'); surgeryCounter++;} else {deactivateBtn('oilRemoval');}
	if(capsulotomyBool) {activateBtn('capsulotomy'); surgeryCounter++;} else {deactivateBtn('capsulotomy');}
	if(tPABool) {activateBtn('tPA'); surgeryCounter++;} else {deactivateBtn('tPA');}
	if(triesenceBool) {activateBtn('triesence'); surgeryCounter++;} else {deactivateBtn('triesence');}
	if(trypanBlueBool) {activateBtn('trypanBlue'); surgeryCounter++;} else {deactivateBtn('trypanBlue');}
	if(vitrectomyBool) {activateBtn('vitrectomy'); surgeryCounter++;} else {deactivateBtn('vitrectomy');}

//CONSOLIDATE WITH ABOVE STATEMENTS, USE ONES AND TWOS!!!!!!!!!!!(and use 1s for 1 days p/o, 2s for other p/o)
//AND DELETE STATEMENT BELOW!! (COUNTING EVERYING TWICE.....)
surgeryCounter = 0;

	if(acWashoutBool) {activateBtn('acWashout1'); surgeryCounter++;} else {deactivateBtn('acWashout1');}
	if(acIOLBool) {activateBtn('acIOL1'); surgeryCounter++;} else {deactivateBtn('acIOL1');}
	if(ceftVancoBool) {activateBtn('ceftVanco1'); surgeryCounter++;} else {deactivateBtn('ceftVanco1');}
	if(chorDrainBool) {activateBtn('chorDrain1'); surgeryCounter++;} else {deactivateBtn('chorDrain1');}
	if(cryoBool) {activateBtn('cryo1'); surgeryCounter++;} else {deactivateBtn('cryo1');}
	if(decadronBool) {activateBtn('decadron1'); surgeryCounter++;} else {deactivateBtn('decadron1');}
	if(extraCapBool) {activateBtn('extraCap1'); surgeryCounter++;} else {deactivateBtn('extraCap1');}
	if(fluidAirBool) {activateBtn('fluidAir1'); surgeryCounter++;} else {deactivateBtn('fluidAir1');}
	if(fluidGasBool) {activateBtn('fluidGas1'); surgeryCounter++;} else {deactivateBtn('fluidGas1');}
	if(iolImplantationBool) {activateBtn('iolImplantation1'); surgeryCounter++;} else {deactivateBtn('iolImplantation1');}
	if(iolExchangeBool) {activateBtn('iolExchange1'); surgeryCounter++;} else {deactivateBtn('iolExchange1');}
	if(iolRepositionBool) {activateBtn('iolReposition1'); surgeryCounter++;} else {deactivateBtn('iolReposition1');}
	if(laserBool) {activateBtn('laser1'); surgeryCounter++;} else {deactivateBtn('laser1');}
	if(lensectomyBool) {activateBtn('lensectomy1'); surgeryCounter++;} else {deactivateBtn('lensectomy1');}
	if(memPeelBool) {activateBtn('memPeel1'); surgeryCounter++;} else {deactivateBtn('memPeel1');}
	if(panretLaserBool) {activateBtn('panretLaser1'); surgeryCounter++;} else {deactivateBtn('panretLaser1');}
	if(phacoBool) {activateBtn('phaco1'); surgeryCounter++;} else {deactivateBtn('phaco1');}
	if(pcIOLBool) {activateBtn('pcIOL1'); surgeryCounter++;} else {deactivateBtn('pcIOL1');}
	if(pneumaticBool) {activateBtn('pneumatic1'); surgeryCounter++;} else {deactivateBtn('pneumatic1');}
	if(buckleBool) {activateBtn('buckle1'); surgeryCounter++;} else {deactivateBtn('buckle1');}
	if(oilExchangeBool) {activateBtn('oilExchange1'); surgeryCounter++;} else {deactivateBtn('oilExchange1');}
	if(oilInsertionBool) {activateBtn('oilInsertion1'); surgeryCounter++;} else {deactivateBtn('oilInsertion1');}
	if(oilRemovalBool) {activateBtn('oilRemoval1'); surgeryCounter++;} else {deactivateBtn('oilRemoval1');}
	if(capsulotomyBool) {activateBtn('capsulotomy1'); surgeryCounter++;} else {deactivateBtn('capsulotomy1');}
	if(tPABool) {activateBtn('tPA1'); surgeryCounter++;} else {deactivateBtn('tPA1');}
	if(triesenceBool) {activateBtn('triesence1'); surgeryCounter++;} else {deactivateBtn('triesence1');}
	if(trypanBlueBool) {activateBtn('trypanBlue1'); surgeryCounter++;} else {deactivateBtn('trypanBlue1');}
	if(vitrectomyBool) {activateBtn('vitrectomy1'); surgeryCounter++;} else {deactivateBtn('vitrectomy1');}
}

function showContent(target) {
	var element = document.getElementById(target);
    element.classList.add("show");
}

function hideContent(target) {
	var element = document.getElementById(target);
    element.classList.remove("show");
}

function toggleCustomVisionBool() {
	if(customVisionBool == false) {customVisionBool = true;}
	else {customVisionBool = true;}
}

function toggleShowHide(target) {
	var element = document.querySelector("#" + target);
	if(!element.classList.contains("collapse")) {
		element.classList.add("collapse");
		element.classList.remove("show");
	}
	else {
		element.classList.add("show");
		element.classList.remove("collapse");
	}
}









function toggleSurgeryBool(target) {
//Anterior Chamber Washout	
	if(target == 'acWashout') {
		if(acWashoutBool == true) {acWashoutBool = false;} else {acWashoutBool = true;}
	}
//Anterior Chamber IOL Implantation
	if(target == 'acIOL') { //contradictions are iolImplantation, iolReposition and pcIOL
		if(acIOLBool == true) {acIOLBool = false;} else {acIOLBool = true; iolImplantationBool = false; iolRepositionBool = false; pcIOLBool = false;}
	}
//Ceftazidime and Vancomycin
	if(target == 'ceftVanco') {	
		if(ceftVancoBool == true) {ceftVancoBool = false;} else {ceftVancoBool = true;}
	}
//Choroidal Drainage
	if(target == 'chorDrain') {	
		if(chorDrainBool == true) {chorDrainBool = false;} else {chorDrainBool = true;}
	}
//Cryopexy
	if(target == 'cryo') {	
		if(cryoBool == true) {cryoBool = false;} else {cryoBool = true;}
	}
//Decadron
	if(target == 'decadron') {	//contradictions are ozurdex and triesence
		if(decadronBool == true) {decadronBool = false;} else {decadronBool = true; ozurdexBool = false; triesenceBool = false;}
	}
//Extracapsular Cataract Extraction
	if(target == 'extraCap') {	//contradiction is phaco
		if(extraCapBool == true) {extraCapBool = false;} else {extraCapBool = true; phacoBool = false;}
	}
//Fluid/Air Exchange
	if(target == 'fluidAir') {	//contradictions are fluidGas, oilInsertion and oilExchange
		if(fluidAirBool == true) {fluidAirBool = false;} else {fluidAirBool = true; fluidGasBool = false; oilInsertionBool = false; oilExchangeBool = false;}
	}
//Fluid/Gas Exchange
	if(target == 'fluidGas') {	//contradictions are fluidAir, oilInsertion and oilExchange
		if(fluidGasBool == true) {fluidGasBool = false;} else {fluidGasBool = true; fluidAirBool = false; oilInsertionBool = false; oilExchangeBool = false;}
	}
//IOL Exchange
	if(target == 'iolExchange') { //contradictions are iolImplantation, iolReposition and phaco
		if(iolExchangeBool == true) {iolExchangeBool = false;} else {iolExchangeBool = true; iolImplantationBool = false; iolRepositionBool = false; phacoBool = false;}
	}
//IOL Implantion
	if(target == 'iolImplantation') { // contradictions are acIOL, iolExchange, iolReposition and pcIOL
		if(iolImplantationBool == true) {iolImplantationBool = false;} else {iolImplantationBool = true; acIOLBool = false; iolExchangeBool = false; iolRepositionBool = false; pcIOLBool = false;}
	}
//IOL Reposition
	if(target == 'iolReposition') { // contradictions are acIOL, iolExchange, iolImplantation, pcIOL and phaco
		if(iolRepositionBool == true) {iolRepositionBool = false;} else {iolRepositionBool = true; acIOLBool = false; iolExchangeBool = false; iolImplantationBool = false; pcIOLBool = false; phacoBool = false;}
	}
//Laser
	if(target == 'laser') { //contradiction is panretLaser
		if(laserBool == true) {laserBool = false;} else {laserBool = true; panretLaserBool = false;}
	}
//Lensectomy
	if(target == 'lensectomy') {	
		if(lensectomyBool == true) {lensectomyBool = false;} else {lensectomyBool = true;}
	}
//Membrane Peeling
	if(target == 'memPeel') {	
		if(memPeelBool == true) {memPeelBool = false;} else {memPeelBool = true;}
	}
//Ozurdex
	if(target == 'ozurdex') { //contradictions are decadron and triesence
		if(ozurdexBool == true) {ozurdexBool = false;} else {ozurdexBool = true; decadronBool = false; triesenceBool = false;}
	}
//Panretinal Laser
	if(target == 'panretLaser') { //contradiction is laser
		if(panretLaserBool == true) {panretLaserBool = false;} else {panretLaserBool = true; laserBool = false;}
	}
//Phacoemulsification
	if(target == 'phaco') { //contradictions are extraCap, iolExchange and iolReposition
		if(phacoBool == true) {phacoBool = false;} else {phacoBool = true; extraCapBool = false; iolExchangeBool = false; iolRepositionBool = false;}
	}
//Posterior Chamber IOL Implantation
	if(target == 'pcIOL') { //contradictions are acIOL, iolImplantation and iolReposition
		if(pcIOLBool == true) {pcIOLBool = false;} else {pcIOLBool = true; acIOLBool = false; iolImplantationBool = false; iolRepositionBool = false;}
	}
//Pneumatic Retinopexy
	if(target == 'pneumatic') { //contradictions include everything else
		if(pneumaticBool == true) {pneumaticBool = false;} else {pneumaticBool = true; acWashoutBool = false; acIOLBool = false; ceftVancoBool = false;
																						chorDrainBool = false; cryoBool = false; decadronBool = false;
																						extraCapBool = false; fluidAirBool = false; fluidGasBool = false;
																						iolImplantationBool = false; iolExchangeBool = false; laserBool = false;
																						lensectomyBool = false; memPeelBool = false; ozurdexBool = false;
																						panretLaserBool = false; phacoBool = false; pcIOLBool = false;
																						buckleBool = false; oilExchangeBool = false; oilInsertionBool = false;
																						oilRemovalBool = false; capsulotomyBool = false; tPABool = false;
																						triesenceBool = false; trypanBlueBool = false; vitrectomyBool = false;}
	}
//Scleral Buckle
	if(target == 'buckle') {	
		if(buckleBool == true) {buckleBool = false;} else {buckleBool = true;}
	}
//Silicone Oil Exchange
	if(target == 'oilExchange') { //contradictions are fluidAir, fluidGas, oilInsertion and oilRemoval
		if(oilExchangeBool == true) {oilExchangeBool = false;} else {oilExchangeBool = true; fluidAirBool = false; fluidGasBool = false; oilInsertionBool = false; oilRemovalBool = false;}
	}
//Silicone Oil Insertion
	if(target == 'oilInsertion') { //contradictons are fluidAir, fluidGas, oilExchange, oilRemoval
		if(oilInsertionBool == true) {oilInsertionBool = false;} else {oilInsertionBool = true;  fluidAirBool = false; fluidGasBool = false; oilExchangeBool = false; oilRemovalBool = false;}
	}
//Silicone Oil Removal
	if(target == 'oilRemoval') { //contradictions are oilInsertion and oilExchange
		if(oilRemovalBool == true) {oilRemovalBool = false;} else {oilRemovalBool = true; oilExchangeBool = false; oilInsertionBool = false;}
	}
//Surgical Capsulotomy
	if(target == 'capsulotomy') {	
		if(capsulotomyBool == true) {capsulotomyBool = false;} else {capsulotomyBool = true;}
	}
//Tissue Plasminogen Activator
	if(target == 'tPA') {	
		if(tPABool == true) {tPABool = false;} else {tPABool = true;}
	}
//Triesence
	if(target == 'triesence') { //contradictions are decadron and ozurdex
		if(triesenceBool == true) {triesenceBool = false;} else {triesenceBool = true; decadronBool = false; ozurdexBool = false;}
	}
//Trypan Blue
	if(target == 'trypanBlue') {	
		if(trypanBlueBool == true) {trypanBlueBool = false;} else {trypanBlueBool = true;}
	}
//Vitrectomy
	if(target == 'vitrectomy') {	
		if(vitrectomyBool == true) {vitrectomyBool = false;} else {vitrectomyBool = true;}
	}
}

function setAllSurgeriesFalse() {
	acWashoutBool = false;
	acIOLBool = false;
	ceftVancoBool = false;
	chorDrainBool = false;
	cryoBool = false;
	decadronBool = false;
	extraCapBool = false;
	fluidGasBool = false;
	fluidAirBool = false;
	iolImplantationBool = false;
	iolExchangeBool = false;
	laserBool = false;
	lensectomyBool = false;
	memPeelBool = false;
	panretLaserBool = false;
	phacoBool = false;
	pcIOLBool = false;
	pneumaticBool = false;
	buckleBool = false;
	oilExchangeBool = false;
	oilInsertionBool = false;
	oilRemovalBool = false;
	capsulotomyBool = false;
	ozurdexBool = false;
	tPABool = false;
	triesenceBool = false;
	trypanBlueBool = false;
	vitrectomyBool = false;
}

function unlockAfterApptType() {
	if(genderNeeded == false & apptTypeNeeded == false) {afterApptTypeLocked = false;}
}

function unlockVisionQ() {
//For Established Patient s/p Procedure Scenario
	if(apptType == 'estabPt' && laterality3ANeeded == false && diagnosisNeeded == false) {visionQLocked = false;}
//For Established Patient s/p Procedure Scenario
	if(apptType == 'estabPtspProc' && treatmentNeeded == false && laterality3BNeeded == false && diagnosisNeeded == false) {visionQLocked = false;}
//For Planned Procedure Scenario
	if(apptType == 'plannedProc' && treatmentNeeded == false && laterality4Needed == false) {visionQLocked = false;}
//For Other P/O Scenario
	if(apptType == 'otherPO' && treatmentNeeded == false && laterality2BNeeded == false && surgeryReasonNeeded == false) {visionQLocked = false;}
//For IOP Check Scenario
	if(apptType == 'IOPCheck') {visionQLocked = false;}
}

function unlockAfterVisionQ() {
	if(visionSeverityNeeded == false && laterality1Needed == false && visionContextNeeded == false && visionDurationNeeded == false) {afterVisionQLocked = false;}
}

function unlockPostOpDrops() {
	if(treatmentNeeded == false & laterality2ANeeded == false && surgeryReasonNeeded == false && surgeryComfortNeeded == false) {
		postOpDropsLocked = false;}
}

function unlockPostOpInstructions() {
	if(treatmentNeeded == false & laterality2ANeeded == false) {postOpInstructionsLocked = false;}
}






function setPtAge() {ptAge = document.getElementById("ptAgeText").value;}

function setRefProv(target) {
	if(target != 'customRefProv') {
		if(target == 'self') {refProvStr = ' self-referred';}
		else if(target == 'barnebey') {refProvStr = ' Dr. Howard Barnebey';}
		else if(target == 'bassett') {refProvStr = ' Dr. Kent Bassett';}
		else if(target == 'batson') {refProvStr = ' Dr. Sean Batson';}
		else if(target == 'chenB') {refProvStr = ' Dr. Benson Chen';}
		else if(target == 'chenC') {refProvStr = ' Dr. Connie Chen';}
		else if(target == 'chieh') {refProvStr = ' Dr. Janet Chieh';}
		else if(target == 'davis') {refProvStr = ' Dr. Andrew Davis';}
		else if(target == 'drucker') {refProvStr = ' Dr. David Drucker';}
		else if(target == 'ehlers') {refProvStr = ' Dr. Richard Ehlers';}
		else if(target == 'fung') {refProvStr = ' Dr. Kenneth Fung';}
		else if(target == 'gilbert') {refProvStr = ' Dr. Michael Gilbert';}
		else if(target == 'gillette') {refProvStr = ' Dr. Thomas Gillette';}
		else if(target == 'jamil') {refProvStr = ' Dr. Jamil';}
		else if(target == 'johnston') {refProvStr = ' Dr. W. Todd Johnston';}
		else if(target == 'kenny') {refProvStr = ' Dr. Richard Kenny';}
		else if(target == 'laukaitis') {refProvStr = ' Dr. Steven Laukaitis';}
		else if(target == 'leavitt') {refProvStr = ' Dr. Kent Leavitt';}
		else if(target == 'lenart') {refProvStr = ' Dr. Thomas Lenart';}
		else if(target == 'lightfoot') {refProvStr = ' Dr. Bradley Lightfoot';}
		else if(target == 'lueth') {refProvStr = ' Dr. Brian Lueth';}
		else if(target == 'mcmanus') {refProvStr = ' Dr. Rick McManus';}
		else if(target == 'miller') {refProvStr = ' Dr. Ruth Miller';}
		else if(target == 'morton') {refProvStr = ' Dr. Kenneth Morton';}
		else if(target == 'phan') {refProvStr = ' Dr. Stephanie Phan';}
		else if(target == 'rizen') {refProvStr = ' Dr. Michael Rizen';}
		else if(target == 'sharpe') {refProvStr = ' Dr. Matthew Sharpe';}
		else if(target == 'stroh') {refProvStr = ' Dr. James Stroh';}

		document.getElementById("refProvText").value = refProvStr;
		document.getElementById("refProvList").value = 'default';
	}
	refProvStr = document.getElementById("refProvText").value;
}

function setVisitReason(target) {
	if(target != 'customVisitReason') {
		if(target == 'catClearance') {visitReasonStr = ' retinal clearance prior to potential cataract surgery';}
		else if(target == 'catEval') {visitReasonStr = ' a cataract evaluation';}
		else if(target == 'ermEval') {visitReasonStr = ' an epiretinal membrane evaluation';}
		else if(target == 'floatersAcute') {visitReasonStr = ' evaluation of recent floaters';}
		else if(target == 'floatersChronic') {visitReasonStr = ' evaluation of chronic floaters';}
		else if(target == 'floatersPhotopsia') {visitReasonStr = ' evaluation of floaters and photopsia';}
		else if(target == 'macDegen') {visitReasonStr = ' evaluation of macular degeneration';}
		else if(target == 'photopsia') {visitReasonStr = ' evaluation of photopsia';}
		else if(target == 'PVD') {visitReasonStr = ' evaluation of a posterior vitreous detachment';}
		else if(target == 'RD') {visitReasonStr = ' evaluation of a retinal detachment';}
		else if(target == 'possRD') {visitReasonStr = ' evaluation of a possible retinal detachment';}
		else if(target == 'RT') {visitReasonStr = ' evaluation of a retinal tear';}
		else if(target == 'possRT') {visitReasonStr = ' evaluation of a possible retinal tear';}
		document.getElementById("visitReasonText").value = visitReasonStr;
		document.getElementById("visitReasonList").value = 'default';
	}
	if(target == 'customVisitReason') {
		visitReasonStr = ' ';
		visitReasonStr += document.getElementById("visitReasonText").value;
	} else {
	visitReasonStr = document.getElementById("visitReasonText").value;
	}


	if(target == 'catEval') {
		var element = document.getElementById('cataractQ');
    	element.classList.add("show");
    	element.classList.remove("collapse");
	} else {
		var element = document.getElementById('cataractQ');
    	element.classList.remove("show");
    	element.classList.add("collapse");
	}

	if(target == 'macDegen') {
		var element = document.getElementById('dryAMDQ');
    	element.classList.add("show");
    	element.classList.remove("collapse");
	} else {
		var element = document.getElementById('dryAMDQ');
    	element.classList.remove("show");
    	element.classList.add("collapse");
	}

}

function setNewPtLaterality(target) {
	if(target == 'right') {newPtLateralityStr = ' in the right eye';}
	else if(target == 'left') {newPtLateralityStr = ' in the left eye';}
	else if(target == 'both') {newPtLateralityStr = ' in both eyes';}
	else if(target == 'unspecified' || target == 'default') {newPtLateralityStr = '';}
}

function setA1c() {A1cText = document.getElementById("A1cText").value;}

function setBSL() {BSLText = document.getElementById("BSLText").value;}

function setCustomVisionStr() {
	customVisionBool = true;
	customVisionStr = document.getElementById("customVisionQText").value;
	visionQStr = customVisionStr;
	if(visionQStr.length > 0) {
		if(visionQStr.charAt(0) != ' ') {
			visionQStr = ' ' + visionQStr;
		}
	}
}

function setCustomProcedureStrRight() { alert ("in setCustomProcedureStrRight");
	customProcedureStrRight = document.getElementById("customProcedureTextRight").value;
	treatmentStrRight = customProcedureStrRight;

	if(treatmentStrRight.length > 0) {
		if(treatmentStrRight.charAt(0) != ' ') {
			treatmentStrRight = ' ' + treatmentStrRight;
		}
	}
}

function setCustomProcedureStrLeft() {
	customProcedureStrLeft = document.getElementById("customProcedureTextLeft").value;
	treatmentStrLeft = customProcedureStrLeft;

	if(treatmentStrLeft.length > 0) {
		if(treatmentStrLeft.charAt(0) != ' ') {
			treatmentStrLeft = ' ' + treatmentStrLeft;
		}
	}
}

function setCustomSurgeryStr() {
	if(apptType == '1DayPO') {customSurgeryStr = document.getElementById("customSurgeryText1").value;}
	if(apptType == 'otherPO') {customSurgeryStr = document.getElementById("customSurgeryText2").value;}
	surgeryStr = customSurgeryStr;

	if(surgeryStr.length > 0) {
		if(surgeryStr.charAt(0) != ' ') {
			surgeryStr = ' ' + surgeryStr;
		}
	}
}





function setDropsNotInstilledCustomStr() {
	dropsNotInstilledCustomStr = document.getElementById("dropsNotInstilledCustom").value;
	dropsInstilledStr = ' ' + dropsNotInstilledCustomStr;
}

function setAddInfoStr() {
	var addInfoText1 = document.getElementById("addInfoText1").value;
	var addInfoText2 = document.getElementById("addInfoText2").value;

	if(addInfoSwitch == 1) {
		addInfoStr = ' ' + document.getElementById("addInfoText1").value;
		document.getElementById("addInfoText2").value = addInfoText1;
	}
	if(addInfoSwitch == 2) {
		addInfoStr = ' ' + document.getElementById("addInfoText2").value;
		document.getElementById("addInfoText1").value = addInfoText2;
	}
}








function setGenderNeededFalse() {genderNeeded = false;}

function setApptTypeNeededFalse() {apptTypeNeeded = false;}

function setTreatmentNeededFalse() {treatmentNeeded = false;}

function setLaterality1NeededFalse() {laterality1Needed = false;}

function setLaterality2ANeededFalse() {laterality2ANeeded = false;}

function setLaterality2BNeededFalse() {laterality2BNeeded = false;}

function setLaterality3ANeededFalse() {laterality3ANeeded = false;}

function setLaterality3BNeededFalse() {laterality3BNeeded = false;}

function setLaterality4NeededFalse() {laterality4Needed = false;}

function setVisionSeverityNeededFalse() {visionSeverityNeeded = false;}

function setVisionContextNeededFalse() {visionContextNeeded = false;}

function setVisionDurationNeededFalse() {visionDurationNeeded = false;}

function setDiagnosisNeededFalse() {diagnosisNeeded = false;}

function setSurgeryReasonNeededFalse() {surgeryReasonNeeded = false;}

function setSurgeryComfortNeededFalse() {surgeryComfortNeeded = false;}

function uncheckBox(target) {document.getElementById(target).checked = false;}

function checkBox(target) {document.getElementById(target).checked = true;}


/* PROBABLY OBSOLETE
function markDiagnosisEstabPtBtns(target){
	if(target == 'diagnosisEstabPtList') {activateFld('diagnosisEstabPtList');} else {ignoreFld('diagnosisEstabPtList');}
	if(target == 'BRVOEstabPtBtn') {activateBtn('BRVOEstabPtBtn');} else {ignoreBtn('BRVOEstabPtBtn');}
	if(target == 'BRVOwMEEstabPtBtn') {activateBtn('BRVOwMEEstabPtBtn');} else {ignoreBtn('BRVOwMEEstabPtBtn');}
	if(target == 'CSREstabPtBtn') {activateBtn('CSREstabPtBtn');} else {ignoreBtn('CSREstabPtBtn');}
	if(target == 'CRVOEstabPtBtn') {activateBtn('CRVOEstabPtBtn');} else {ignoreBtn('CRVOEstabPtBtn');}
	if(target == 'CRVOwMEEstabPtBtn') {activateBtn('CRVOwMEEstabPtBtn');} else {ignoreBtn('CRVOwMEEstabPtBtn');}
	if(target == 'CMEEstabPtBtn') {activateBtn('CMEEstabPtBtn');} else {ignoreBtn('CMEEstabPtBtn');}
	if(target == 'ERMEstabPtBtn') {activateBtn('ERMEstabPtBtn');} else {ignoreBtn('ERMEstabPtBtn');}
	if(target == 'wetAMDEstabPtBtn') {activateBtn('wetAMDEstabPtBtn');} else {ignoreBtn('wetAMDEstabPtBtn');}
	if(target == 'floatersEstabPtBtn') {activateBtn('floatersEstabPtBtn');} else {ignoreBtn('floatersEstabPtBtn');}
	if(target == 'latticeEstabPtBtn') {activateBtn('latticeEstabPtBtn');} else {ignoreBtn('latticeEstabPtBtn');}
	if(target == 'macularEdemaEstabPtBtn') {activateBtn('macularEdemaEstabPtBtn');} else {ignoreBtn('macularEdemaEstabPtBtn');}
	if(target == 'dryAMDEstabPtBtn') {activateBtn('dryAMDEstabPtBtn');} else {ignoreBtn('dryAMDEstabPtBtn');}
	if(target == 'NPDREstabPtBtn') {activateBtn('NPDREstabPtBtn');} else {ignoreBtn('NPDREstabPtBtn');}
	if(target == 'NPDRwMEEstabPtBtn') {activateBtn('NPDRwMEEstabPtBtn');} else {ignoreBtn('NPDRwMEEstabPtBtn');}
	if(target == 'PDREstabPtBtn') {activateBtn('PDREstabPtBtn');} else {ignoreBtn('PDREstabPtBtn');}
	if(target == 'PDRwMEEstabPtBtn') {activateBtn('PDRwMEEstabPtBtn');} else {ignoreBtn('PDRwMEEstabPtBtn');}
	if(target == 'PVDEstabPtBtn') {activateBtn('PVDEstabPtBtn');} else {ignoreBtn('PVDEstabPtBtn');}
	if(target == 'retTearEstabPtBtn') {activateBtn('retTearEstabPtBtn');} else {ignoreBtn('retTearEstabPtBtn');}
	if(target == 'RDLocalizedEstabPtBtn') {activateBtn('RDLocalizedEstabPtBtn');} else {ignoreBtn('RDLocalizedEstabPtBtn');}
	if(target == 'UnspecifiedDxEstabPtBtn') {activateBtn('UnspecifiedDxEstabPtBtn');} else {ignoreBtn('UnspecifiedDxEstabPtBtn');}
} */




function markSurgeryReason1DayPOBtns(target) {
	if(target == 'surgeryReason1DayPOList') {activateFld('surgeryReason1DayPOList');} else {ignoreFld('surgeryReason1DayPOList');}
	if(target == 'floaters1DayPOBtn') {activateBtn('floaters1DayPOBtn');} else {ignoreBtn('floaters1DayPOBtn');}
	if(target == 'erm1DayPOBtn') {activateBtn('erm1DayPOBtn');} else {ignoreBtn('erm1DayPOBtn');}
	if(target == 'mhRepair1DayPOBtn') {activateBtn('mhRepair1DayPOBtn');} else {ignoreBtn('mhRepair1DayPOBtn');}
	if(target == 'rdRepair1DayPOBtn') {activateBtn('rdRepair1DayPOBtn');} else {ignoreBtn('rdRepair1DayPOBtn');}
	if(target == 'vitHeme1DayPOBtn') {activateBtn('vitHeme1DayPOBtn');} else {ignoreBtn('vitHeme1DayPOBtn');}
	if(target == 'unspecSxReason1DayPOBtn') {activateBtn('unspecSxReason1DayPOBtn');} else {ignoreBtn('unspecSxReason1DayPOBtn');}
}

function markSurgeryReasonOtherPOBtns(target) {
if(target == 'surgeryReasonOtherPOList') {activateFld('surgeryReasonOtherPOList');} else {ignoreFld('surgeryReasonOtherPOList');}
	if(target == 'floatersOtherPOBtn') {activateBtn('floatersOtherPOBtn');} else {ignoreBtn('floatersOtherPOBtn');}
	if(target == 'ermOtherPOBtn') {activateBtn('ermOtherPOBtn');} else {ignoreBtn('ermOtherPOBtn');}
	if(target == 'mhRepairOtherPOBtn') {activateBtn('mhRepairOtherPOBtn');} else {ignoreBtn('mhRepairOtherPOBtn');}
	if(target == 'rdRepairOtherPOBtn') {activateBtn('rdRepairOtherPOBtn');} else {ignoreBtn('rdRepairOtherPOBtn');}
	if(target == 'vitHemeOtherPOBtn') {activateBtn('vitHemeOtherPOBtn');} else {ignoreBtn('vitHemeOtherPOBtn');}
	if(target == 'unspecSxReasonOtherPOBtn') {activateBtn('unspecSxReasonOtherPOBtn');} else {ignoreBtn('unspecSxReasonOtherPOBtn');}
}



function setLateralitySwitch(value) {lateralitySwitch = value;}

function setLaterality1(value) {
	laterality1 = value;
	setLaterality1Strs();
	setLaterality1NeededFalse();
	unlockAfterVisionQ();
	showContent('afterVisionQ');
}

function setLaterality1Strs() {
	if(laterality1 == 'right') {laterality1Str1 = ' the right eye'; laterality1Str2 = ' Right eye'; laterality1Str3 = ' right eye';}
	else if(laterality1 == 'left') {laterality1Str1 = ' the left eye'; laterality1Str2 = ' Left eye'; laterality1Str3 = ' left eye';}
	else if(laterality1 == 'both') {laterality1Str1 = ' both eyes'; laterality1Str2 = ' Both eyes'; laterality1Str3 = ' both eyes';}
	else if(laterality1 == '' || laterality1 == '') {laterality1Str1 = ''; laterality1Str2 = ''; laterality1Str3 = '';}
}

/*function setLaterality2(value) {
	laterality2 = value;
	setLaterality2Strs();
}

function setLaterality2Strs() {
	if(laterality2 == 'right') {laterality2Str1 = ' the right eye'; laterality2Str2 = ' Right eye'; laterality2Str3 = ' right eye';}
	else if(laterality2 == 'left') {laterality2Str1 = ' the left eye'; laterality2Str2 = ' Left eye'; laterality2Str3 = ' left eye';}
	else if(laterality2 == 'both') {laterality2Str1 = ' both eyes'; laterality2Str2 = ' Both eyes'; laterality2Str3 = ' both eyes';}
	else if(laterality2 == '' || laterality2 == '') {laterality2Str1 = ''; laterality2Str2 = ''; laterality2Str3 = '';}	
}*/


function setLaterality2A(value) {
	laterality2A = value;
	setLaterality2ANeededFalse();
	unlockPostOpDrops();
	setLaterality2AStrs();
}

function setLaterality2AStrs() {
	if(laterality2A == 'right') {laterality2AStr1 = ' the right eye'; laterality2AStr2 = ' Right eye'; laterality2AStr3 = ' right eye';}
	else if(laterality2A == 'left') {laterality2AStr1 = ' the left eye'; laterality2AStr2 = ' Left eye'; laterality2AStr3 = ' left eye';}
	else if(laterality2A == 'both') {laterality2AStr1 = ' both eyes'; laterality2AStr2 = ' Both eyes'; laterality2AStr3 = ' both eyes';}
	else if(laterality2A == '' || laterality2A == '') {laterality2AStr1 = ''; laterality2AStr2 = ''; laterality2AStr3 = '';}
}

function setLaterality2B(value) {
	laterality2B = value;
	setLaterality2BStrs();
	setLaterality2BNeededFalse();
	unlockVisionQ();
}

function setLaterality2BStrs() {
	if(laterality2B == 'right') {laterality2BStr1 = ' the right eye'; laterality2BStr2 = ' Right eye'; laterality2BStr3 = ' right eye';}
	else if(laterality2B == 'left') {laterality2BStr1 = ' the left eye'; laterality2BStr2 = ' Left eye'; laterality2BStr3 = ' left eye';}
	else if(laterality2B == 'both') {laterality2BStr1 = ' both eyes'; laterality2BStr2 = ' Both eyes'; laterality2BStr3 = ' both eyes';}
	else if(laterality2B == '' || laterality2B == '') {laterality2BStr1 = ''; laterality2BStr2 = ''; laterality2BStr3 = '';}
}

function setLaterality3A(value) {
	laterality3A = value;
	setLaterality3AStrs();
}

function setLaterality3AStrs() {
	if(laterality3A == 'right') {laterality3AStr1 = ' the right eye'; laterality3AStr2 = ' Right eye'; laterality3AStr3 = ' right eye';}
	else if(laterality3A == 'left') {laterality3AStr1 = ' the left eye'; laterality3AStr2 = ' Left eye'; laterality3AStr3 = ' left eye';}
	else if(laterality3A == 'both') {laterality3AStr1 = ' both eyes'; laterality3AStr2 = ' Both eyes'; laterality3AStr3 = ' both eyes';}
	else if(laterality3A == '' || laterality3A == '') {laterality3AStr1 = ''; laterality3AStr2 = ''; laterality3AStr3 = '';}
}

function setLaterality3B(value) {
	laterality3B = value;
	setLaterality3BStrs();
}

function setLaterality3BStrs() {
	if(laterality3B == 'right') {laterality3BStr1 = ' the right eye'; laterality3BStr2 = ' Right eye'; laterality3BStr3 = ' right eye';}
	else if(laterality3B == 'left') {laterality3BStr1 = ' the left eye'; laterality3BStr2 = ' Left eye'; laterality3BStr3 = ' left eye';}
	else if(laterality3B == 'both') {laterality3BStr1 = ' both eyes'; laterality3BStr2 = ' Both eyes'; laterality3BStr3 = ' both eyes';}
	else if(laterality3B == '' || laterality3B == '') {laterality3BStr1 = ''; laterality3BStr2 = ''; laterality3BStr3 = '';}
}

function setLaterality4(value) {
	laterality4 = value;
	setLaterality4NeededFalse();
	unlockVisionQ();
	setLaterality4Strs();
}

function setLaterality4Strs() {
	if(laterality4 == 'right') {laterality4Str1 = ' the right eye'; laterality4Str2 = ' Right eye'; laterality4Str3 = ' right eye';}
	else if(laterality4 == 'left') {laterality4Str1 = ' the left eye'; laterality4Str2 = ' Left eye'; laterality4Str3 = ' left eye';}
	else if(laterality4 == 'both') {laterality4Str1 = ' both eyes'; laterality4Str2 = ' Both eyes'; laterality4Str3 = ' both eyes';}
	else if(laterality4 == '' || laterality4 == '') {laterality4Str1 = ''; laterality4Str2 = ''; laterality4Str3 = '';}
}

function setProcedureSwitch(value) {procedureSwitch = value;}

function setSurgerySwitch(value) {surgerySwitch = value;}

/*is this obsolete??*/ function setAddInfoSwitch(value) {addInfoSwitch = value;}










function markNoChangeDefaults(target) {
//Severity
	if(target == "OU" || target == "OD") {document.getElementById('stableBtnRight').click();}	
	if(target == "OU" || target == "OS") {document.getElementById('stableBtnLeft').click();}

//Duration
	if(target == "OU" || target == "OD") {document.getElementById('sinceLastSeenBtnRight').click();}	
	if(target == "OU" || target == "OS") {document.getElementById('sinceLastSeenBtnLeft').click();}

//activate/deactivate shortcut buttons
	var noChangesOD = false;
	var noChangesOS = false;

if(target == "buttonDefaults") {
	//removed activate/deactivateBtn functions after adding pushButton class, so this section is maybe unnecessary?
	//leaving section here for now incase boolean changes are important
		if(visionSeverityR == 'stable' && visionDurationR == 'sinceLastSeen' && visionContextR == 'dailyActivities') {
			noChangesOD = true;
		}
		if(visionSeverityR == '' && visionDurationR == '' && visionContextR == '') { //works with reset OD/OU button
			noChangesOD = false;
		}
		if(visionSeverityL == 'stable' && visionDurationL == 'sinceLastSeen' && visionContextL == 'dailyActivities') {
			noChangesOS = true;
		}
		if(visionSeverityL == '' && visionDurationL == '' && visionContextL == '') { //works with reset OS/OU button
			noChangesOS = false;
		}
		if(noChangesOD == true & noChangesOS == true) {
		}
	}
}

function resetVisionBtns(target) {
	if(target == 'OU' || target == 'OD') {
		visionSeverityR = '';
		visionDurationR = '';
		visionContextR = '';
		visionContextRefR = '';
		setVisionSeverityStrRight();
		setVisionDurationStrRight();
		setVisionContextStrRight();
		deactivateBtn('stableBtnRight');
		deactivateBtn('gradWorseBtnRight');
		deactivateBtn('slightWorseBtnRight');
		deactivateBtn('WorseBtnRight');
		deactivateBtn('gradImprovedBtnRight');
		deactivateBtn('slightImprovedBtnRight');
		deactivateBtn('improvedBtnRight');
		deactivateBtn('sinceLastSeenBtnRight');
		deactivateBtn('pastFewDaysBtnRight');
		deactivateBtn('pastWeekBtnRight');
		deactivateBtn('pastMonthBtnRight');
		deactivateBtn('pastYearBtnRight');
		deactivateBtn('drivingBtnRight');
		deactivateBtn('readingBtnRight');
		deactivateBtn('computerBtnRight');
		deactivateBtn('allDistancesBtnRight');
		deactivateBtn('dailyActivitiesBtnRight');
		deactivateFld('visionSeverityListRight');
		deactivateFld('visionDurationListRight');
		deactivateFld('visionContextListRight');
		qualityBool1R = false;
		qualityBool2R = false;
		qualityBool3R = false;
		qualityBool4R = false;
		qualityBool5R = false;
		qualityBool6R = false;
		qualityBool7R = false;
		qualityBool8R = false;
	}
	if(target == 'OU' || target == 'OS') {
		visionSeverityL = '';
		visionDurationL = '';
		visionContextL = '';
		visionContextRefL = '';
		setVisionSeverityStrLeft();
		setVisionDurationStrLeft();
		setVisionContextStrLeft();
		deactivateBtn('stableBtnLeft');
		deactivateBtn('gradWorseBtnLeft');
		deactivateBtn('slightWorseBtnLeft');
		deactivateBtn('WorseBtnLeft');
		deactivateBtn('gradImprovedBtnLeft');
		deactivateBtn('slightImprovedBtnLeft');
		deactivateBtn('improvedBtnLeft');
		deactivateBtn('sinceLastSeenBtnLeft');
		deactivateBtn('pastFewDaysBtnLeft');
		deactivateBtn('pastWeekBtnLeft');
		deactivateBtn('pastMonthBtnLeft');
		deactivateBtn('pastYearBtnLeft');
		deactivateBtn('drivingBtnLeft');
		deactivateBtn('readingBtnLeft');
		deactivateBtn('computerBtnLeft');
		deactivateBtn('allDistancesBtnLeft');
		deactivateBtn('dailyActivitiesBtnLeft');
		deactivateFld('visionSeverityListLeft');
		deactivateFld('visionDurationListLeft');
		deactivateFld('visionContextListLeft');
		qualityBool1L = false;
		qualityBool2L = false;
		qualityBool3L = false;
		qualityBool4L = false;
		qualityBool5L = false;
		qualityBool6L = false;
		qualityBool7L = false;
		qualityBool8L = false;
	}
	refreshQualityBtns();
}

function setSurgeryReason(value) {
	surgeryReason = value;
	setSurgeryReasonStr();
	setSurgeryReasonNeededFalse();
	unlockPostOpDrops();
	unlockPostOpInstructions();
}

function setSurgeryReasonStr() {
	if(surgeryReason == '' || surgeryReason == '') {surgeryReasonStr = '';}
	else if(surgeryReason == 'asteroid') {surgeryReasonStr = ' asteroid hyalosis';}
	else if(surgeryReason == 'cat') {surgeryReasonStr = ' a cataract';}
	else if(surgeryReason == 'catMat') {surgeryReasonStr = ' a mature cataract';}
	else if(surgeryReason == 'endophth') {surgeryReasonStr = ' endophthalmitis';}
	else if(surgeryReason == 'erm') {surgeryReasonStr = ' an epiretinal membrane';}
	else if(surgeryReason == 'floaters') {surgeryReasonStr = ' floaters';}
	else if(surgeryReason == 'macHoleRepair') {surgeryReasonStr = ' macular hole repair';}
	else if(surgeryReason == 'opacities') {surgeryReasonStr = ' opacities';}
	else if(surgeryReason == 'pvr') {surgeryReasonStr = ' proliferative vitreoretinopathy';}
	else if(surgeryReason == 'retainedLens') {surgeryReasonStr = ' retained lens material';}
	else if(surgeryReason == 'rdRepair') {surgeryReasonStr = ' retinal detachment repair';}
	else if(surgeryReason == 'submacHeme') {surgeryReasonStr = ' a submacular hemorrhage';}
	else if(surgeryReason == 'subretHeme') {surgeryReasonStr = ' a subretinal hemorrhage';}
	else if(surgeryReason == 'tractionRD') {surgeryReasonStr = ' a tractional retinal detachment';}
	else if(surgeryReason == 'vitHeme') {surgeryReasonStr = ' a vitreous hemorrhage';}
	else if(surgeryReason == 'vmt') {surgeryReasonStr = ' vitreomacular traction';}
	else if(surgeryReason == '') {surgeryReasonStr = '';}
}

function setSurgeryComfort(value) {
	surgeryComfort = value;
	setSurgeryComfortStr();
	setSurgeryComfortNeededFalse();
	unlockPostOpDrops();
	unlockPostOpInstructions();
}

function setSurgeryComfortStr() {
	if(male == false && female == false) { //checking to see if should say 'report' or 'reports'
		if(surgeryComfort == '' || surgeryComfort == '') {surgeryComfortStr = '';}
		else if(surgeryComfort == 'goodComfort') {surgeryComfortStr = ' did well overnight and report no significant discomfort or difficulty sleeping';}
		else if(surgeryComfort == 'eyeSore') {surgeryComfortStr = ' report the eye feels very sore';}
		else if(surgeryComfort == 'soreLastNight') {surgeryComfortStr = ' did well overnight and report some minor soreness, but no significant discomfort or difficulty sleeping';}
		else if(surgeryComfort == 'soreSinceSurgery') {surgeryComfortStr = ' report the eye has been sore since the surgery';}
		else if(surgeryComfort == 'soreAcetaminophen') {surgeryComfortStr = ' report the eye was sore last night, but acetaminophen helped';}
		else if(surgeryComfort == 'positioningSore') {surgeryComfortStr = ' report soreness due to the' + posOrientationStr + ' positioning';}	
		else if(surgeryComfort == '') {surgeryComfortStr = '';}
	}
	else {
		if(surgeryComfort == '' || surgeryComfort == '') {surgeryComfortStr = '';}
		else if(surgeryComfort == 'goodComfort') {surgeryComfortStr = ' did well overnight and reports no significant discomfort or difficulty sleeping';}
		else if(surgeryComfort == 'eyeSore') {surgeryComfortStr = ' reports the eye feels very sore';}
		else if(surgeryComfort == 'soreLastNight') {surgeryComfortStr = ' did well overnight and reports some minor soreness, but no significant discomfort or difficulty sleeping';}
		else if(surgeryComfort == 'soreSinceSurgery') {surgeryComfortStr = ' reports the eye has been sore since the surgery';}
		else if(surgeryComfort == 'soreAcetaminophen') {surgeryComfortStr = ' reports the eye was sore last night, but acetaminophen helped';}
		else if(surgeryComfort == 'positioningSore') {surgeryComfortStr = ' reports soreness due to the' + posOrientationStr + ' positioning';}	
		else if(surgeryComfort == '') {surgeryComfortStr = '';}
	}
}

function setPositioningQ(value) {
	if(value == 'yes') {posCompliantBool = true;}
	if(value == 'no') {posCompliantBool = false;}
}

function setGlareQ(value) {
	if(value == 'yes') {glareBool = true;}
	if(value == 'no') {glareBool = false;}
}

function setAREDSQ(value) {
	if(value == 'yes') {aredsBool = true;}
	if(value == 'no') {aredsBool = false;}
}

function setPosOrientation(target) {
	if(target == 'overnight') {posOrientationStr = ' overnight';}
	if(target == 'facedown') {posOrientationStr = ' face down';}
	if(target == 'rightdown') {posOrientationStr = ' right side down';}
	if(target == 'leftdown') {posOrientationStr = ' left side down';}
}

function setPOSteroid(value) {
	POSteroid = value;
	setPOSteroidStr();
	setDropsInstilledStr();
}

function setPOSteroidStr() {
	if(POSteroid == 'prednisolone') {POSteroidStr = ' Prednisolone';}
	else if(POSteroid == 'durezol') {POSteroidStr = ' Durezol';}
}

function setPOAntibiotic(value) {
	POAntibiotic = value;
	setPOAntibioticStr();
	setDropsInstilledStr();
}

function setPOAntibioticStr() {
	if(POAntibiotic == 'ofloxacin') {POAntibioticStr = ' Ofloxacin';}
	else if(POAntibiotic == 'moxifloxacin') {POAntibioticStr = ' Moxifloxacin';}
	else if(POAntibiotic == 'polytrim') {POAntibioticStr = ' Polymyxin/Trimethoprim';}
	else if(POAntibiotic == 'vigamox') {POAntibioticStr = ' Vigamox';}
}

function setDropsInstilled(value) {
	dropsInstilled = value;
	setDropsInstilledStr();
}

function setDropsInstilledStr() {
	if(dropsInstilled == '' || dropsInstilled == '') {dropsInstilledStr = '';}
	else if(dropsInstilled == 'yes') {
		dropsInstilledStr = POSteroidStr + ' and' + POAntibioticStr + ' drops were instilled in' + laterality2AStr1 + '.';
	}
	else if(dropsInstilled == 'no') {
		if(dropsNotInstilledReason == '' || dropsNotInstilledReason == 'blank') {
			hideContent('dropsNotInstilledCustomResponse');
			dropsInstilledStr = '';
		}
		if(dropsNotInstilledReason == 'dropsNotHere') {
			hideContent('dropsNotInstilledCustomResponse');
			showContent('instructionsReviewed');
			dropsInstilledStr = ' The patient does not have' + pronoun6 + ' postoperative drops with' + pronoun4 + ' in the office today.';
		}
		if(dropsNotInstilledReason == 'declinedHelp') {
			hideContent('dropsNotInstilledCustomResponse');
			showContent('instructionsReviewed');
			dropsInstilledStr = ' The patient declined help with instilling the first round postoperative drops in clinic today.';
		}
		if(dropsNotInstilledReason == 'custom') {
			showContent('dropsNotInstilledCustomResponse');
		}
	}
}

function setDropsNotInstilledReason(value) {
	dropsNotInstilledReason = value;
	setDropsInstilledStr();
}

function setPOInstructionsReviewed(value) {
	POInstructionsReviewed = value;
	setPOInstructionsReviewedStr();
}

function setPOInstructionsReviewedStr() {
	if(POInstructionsReviewed == '' || POInstructionsReviewed == '') {POInstructionsReviewedStr = '';}
	else if(POInstructionsReviewed == 'yes') {POInstructionsReviewedStr = ' The routine postoperative drop medication and eye shield instructions were reviewed, and written instructions were given to the patient during work-up.';}
	else if(POInstructionsReviewed == 'no') {POInstructionsReviewedStr = pronoun1 + ' would like to review the postoperative instructions with the doctor.';}
}



function getDropFreqList(target) { //not using right now, will consolidate code after launch)
	var dropFreqList = '';
	var element;

	dropFreqList += '<option value="blank">not using OD</option>';
	dropFreqList += '<option value="qD">once daily</option>';
	dropFreqList += '<option value="qHS">once in the evening</option>';
	dropFreqList += '<option value="BID">twice daily</option>';
	dropFreqList += '<option value="TID">3 times daily</option>';
	dropFreqList += '<option value="QID">4 times daily</option>';
	dropFreqList += '<option value="q4Hrs">every 4 hours</option>';
	dropFreqList += '<option value="q3Hrs">every 3 hours</option>';
	dropFreqList += '<option value="q2Hrs">every 2 hours</option>';
	dropFreqList += '<option value="q1Hr">every hour</option>';
	document.getElementById('alphaganODOptions');      

	//Examples to possibly add:
	//dropFreqList += '<option value="q4HrsAwake">every 4 hours while awake</option>';
	//dropFreqList += '<option value="q4HrsAsleep">every 4 hours including overnight</option>';
}

function copyDropFreq(target) {
	var elementOD = '';
	var elementOS = '';
	if(target == 'alphaganOD') {
		elementOD = document.getElementById('alphaganFreqOD').value;
		document.getElementById('alphaganFreqOS').value = elementOD;
	}
	if(target == 'alphaganOS') {
		elementOD = document.getElementById('alphaganFreqOS').value;
		document.getElementById('alphaganFreqOD').value = elementOD;
	}
	if(target == 'azoptOD') {
		elementOD = document.getElementById('azoptFreqOD').value;
		document.getElementById('azoptFreqOS').value = elementOD;
	}
	if(target == 'azoptOS') {
		elementOD = document.getElementById('azoptFreqOS').value;
		document.getElementById('azoptFreqOD').value = elementOD;
	}
	if(target == 'betimolOD') {
		elementOD = document.getElementById('betimolFreqOD').value;
		document.getElementById('betimolFreqOS').value = elementOD;
	}
	if(target == 'betimolOS') {
		elementOD = document.getElementById('betimolFreqOS').value;
		document.getElementById('betimolFreqOD').value = elementOD;
	}
	if(target == 'brimonidineOD') {
		elementOD = document.getElementById('brimonidineFreqOD').value;
		document.getElementById('brimonidineFreqOS').value = elementOD;
	}
	if(target == 'brimonidineOS') {
		elementOD = document.getElementById('brimonidineFreqOS').value;
		document.getElementById('brimonidineFreqOD').value = elementOD;
	}
	if(target == 'combiganOD') {
		elementOD = document.getElementById('combiganFreqOD').value;
		document.getElementById('combiganFreqOS').value = elementOD;
	}
	if(target == 'combiganOS') {
		elementOD = document.getElementById('combiganFreqOS').value;
		document.getElementById('combiganFreqOD').value = elementOD;
	}
	if(target == 'cosoptOD') {
		elementOD = document.getElementById('cosoptFreqOD').value;
		document.getElementById('cosoptFreqOS').value = elementOD;
	}
	if(target == 'cosoptOS') {
		elementOD = document.getElementById('cosoptFreqOS').value;
		document.getElementById('cosoptFreqOD').value = elementOD;
	}
	if(target == 'dorzolamideOD') {
		elementOD = document.getElementById('dorzolamideFreqOD').value;
		document.getElementById('dorzolamideFreqOS').value = elementOD;
	}
	if(target == 'dorzolamideOS') {
		elementOD = document.getElementById('dorzolamideFreqOS').value;
		document.getElementById('dorzolamideFreqOD').value = elementOD;
	}
	if(target == 'dorzolamide-timololOD') {
		elementOD = document.getElementById('dorzolamide-timololFreqOD').value;
		document.getElementById('dorzolamide-timololFreqOS').value = elementOD;
	}
	if(target == 'dorzolamide-timololOS') {
		elementOD = document.getElementById('dorzolamide-timololFreqOS').value;
		document.getElementById('dorzolamide-timololFreqOD').value = elementOD;
	}			
	if(target == 'latanoprostOD') {
		elementOD = document.getElementById('latanoprostFreqOD').value;
		document.getElementById('latanoprostFreqOS').value = elementOD;
	}
	if(target == 'latanoprostOS') {
		elementOD = document.getElementById('latanoprostFreqOS').value;
		document.getElementById('latanoprostFreqOD').value = elementOD;
	}
	if(target == 'lumiganOD') {
		elementOD = document.getElementById('lumiganFreqOD').value;
		document.getElementById('lumiganFreqOS').value = elementOD;
	}
	if(target == 'lumiganOS') {
		elementOD = document.getElementById('lumiganFreqOS').value;
		document.getElementById('lumiganFreqOD').value = elementOD;
	}
	if(target == 'rhopressaOD') {
		elementOD = document.getElementById('rhopressaFreqOD').value;
		document.getElementById('rhopressaFreqOS').value = elementOD;
	}
	if(target == 'rhopressaOS') {
		elementOD = document.getElementById('rhopressaFreqOS').value;
		document.getElementById('rhopressaFreqOD').value = elementOD;
	}
	if(target == 'rocklatanOD') {
		elementOD = document.getElementById('rocklatanFreqOD').value;
		document.getElementById('rocklatanFreqOS').value = elementOD;
	}
	if(target == 'rocklatanOS') {
		elementOD = document.getElementById('rocklatanFreqOS').value;
		document.getElementById('rocklatanFreqOD').value = elementOD;
	}
	if(target == 'simbrinzaOD') {
		elementOD = document.getElementById('simbrinzaFreqOD').value;
		document.getElementById('simbrinzaFreqOS').value = elementOD;
	}
	if(target == 'simbrinzaOS') {
		elementOD = document.getElementById('simbrinzaFreqOS').value;
		document.getElementById('simbrinzaFreqOD').value = elementOD;
	}
	if(target == 'timololOD') {
		elementOD = document.getElementById('timololFreqOD').value;
		document.getElementById('timololFreqOS').value = elementOD;
	}
	if(target == 'timololOS') {
		elementOD = document.getElementById('timololFreqOS').value;
		document.getElementById('timololFreqOD').value = elementOD;
	}
	if(target == 'travatanOD') {
		elementOD = document.getElementById('travatanFreqOD').value;
		document.getElementById('travatanFreqOS').value = elementOD;
	}
	if(target == 'travatanOS') {
		elementOD = document.getElementById('travatanFreqOS').value;
		document.getElementById('travatanFreqOD').value = elementOD;
	}
	if(target == 'vyzultaOD') {
		elementOD = document.getElementById('vyzultaFreqOD').value;
		document.getElementById('vyzultaFreqOS').value = elementOD;
	}
	if(target == 'vyzultaOS') {
		elementOD = document.getElementById('vyzultaFreqOS').value;
		document.getElementById('vyzultaFreqOD').value = elementOD;
	}
	if(target == 'zioptanOD') {
		elementOD = document.getElementById('zioptanFreqOD').value;
		document.getElementById('zioptanFreqOS').value = elementOD;
	}
	if(target == 'zioptanOS') {
		elementOD = document.getElementById('zioptanFreqOS').value;
		document.getElementById('zioptanFreqOD').value = elementOD;
	}
	if(target == 'durezolOD') {
		elementOD = document.getElementById('durezolFreqOD').value;
		document.getElementById('durezolFreqOS').value = elementOD;
	}
	if(target == 'durezolOS') {
		elementOD = document.getElementById('durezolFreqOS').value;
		document.getElementById('durezolFreqOD').value = elementOD;
	}
	if(target == 'maxitrolOD') {
		elementOD = document.getElementById('maxitrolFreqOD').value;
		document.getElementById('maxitrolFreqOS').value = elementOD;
	}
	if(target == 'maxitrolOS') {
		elementOD = document.getElementById('maxitrolFreqOS').value;
		document.getElementById('maxitrolFreqOD').value = elementOD;
	}
	if(target == 'prednisoloneOD') {
		elementOD = document.getElementById('prednisoloneFreqOD').value;
		document.getElementById('prednisoloneFreqOS').value = elementOD;
	}
	if(target == 'prednisoloneOS') {
		elementOD = document.getElementById('prednisoloneFreqOS').value;
		document.getElementById('prednisoloneFreqOD').value = elementOD;
	}
	if(target == 'bromfenacOD') {
		elementOD = document.getElementById('bromfenacFreqOD').value;
		document.getElementById('bromfenacFreqOS').value = elementOD;
	}
	if(target == 'bromfenacOS') {
		elementOD = document.getElementById('bromfenacFreqOS').value;
		document.getElementById('bromfenacFreqOD').value = elementOD;
	}
	if(target == 'diclofenacOD') {
		elementOD = document.getElementById('diclofenacFreqOD').value;
		document.getElementById('diclofenacFreqOS').value = elementOD;
	}
	if(target == 'diclofenacOS') {
		elementOD = document.getElementById('diclofenacFreqOS').value;
		document.getElementById('diclofenacFreqOD').value = elementOD;
	}
	if(target == 'ilevroOD') {
		elementOD = document.getElementById('ilevroFreqOD').value;
		document.getElementById('ilevroFreqOS').value = elementOD;
	}
	if(target == 'ilevroOS') {
		elementOD = document.getElementById('ilevroFreqOS').value;
		document.getElementById('ilevroFreqOD').value = elementOD;
	}
	if(target == 'prolensaOD') {
		elementOD = document.getElementById('prolensaFreqOD').value;
		document.getElementById('prolensaFreqOS').value = elementOD;
	}
	if(target == 'prolensaOS') {
		elementOD = document.getElementById('prolensaFreqOS').value;
		document.getElementById('prolensaFreqOD').value = elementOD;
	}
	if(target == 'ofloxacinOD') {
		elementOD = document.getElementById('ofloxacinFreqOD').value;
		document.getElementById('ofloxacinFreqOS').value = elementOD;
	}
	if(target == 'ofloxacinOS') {
		elementOD = document.getElementById('ofloxacinFreqOS').value;
		document.getElementById('ofloxacinFreqOD').value = elementOD;
	}
	if(target == 'moxifloxacinOD') {
		elementOD = document.getElementById('moxifloxacinFreqOD').value;
		document.getElementById('moxifloxacinFreqOS').value = elementOD;
	}
	if(target == 'moxifloxacinOS') {
		elementOD = document.getElementById('moxifloxacinFreqOS').value;
		document.getElementById('moxifloxacinFreqOD').value = elementOD;
	}
	if(target == 'polymyxinOD') {
		elementOD = document.getElementById('polymyxinFreqOD').value;
		document.getElementById('polymyxinFreqOS').value = elementOD;
	}
	if(target == 'polymyxinOS') {
		elementOD = document.getElementById('polymyxinFreqOS').value;
		document.getElementById('polymyxinFreqOD').value = elementOD;
	}
	if(target == 'vigamoxOD') {
		elementOD = document.getElementById('vigamoxFreqOD').value;
		document.getElementById('vigamoxFreqOS').value = elementOD;
	}
	if(target == 'vigamoxOS') {
		elementOD = document.getElementById('vigamoxFreqOS').value;
		document.getElementById('vigamoxFreqOD').value = elementOD;
	}
}

function setOtherDefaults(value) {
//Set other defaults base on surgery selection
	if(value == 'complexCat' || value == 'extraCapCat' || value == 'phacoIOL' || value == 'oilRemoval' || value == 'vitOilRemoval') {
		if(apptType == '1DayPO') {
			var targetList = document.getElementById('surgeryReasonList1');
			activateFld('surgeryReasonList1');ignoreBtn('ermBtn1');ignoreBtn('floatersBtn1');ignoreBtn('rdRepairBtn1');ignoreBtn('vitHemeBtn1');ignoreBtn('UnspecSxReasonBtn1');setSurgeryReason('');showContent('postOpDrops');

		}
		else if(apptType == 'otherPO') {
			var targetList = document.getElementById('surgeryReasonList2');
			activateFld('surgeryReasonList2');ignoreBtn('ermBtn2');ignoreBtn('floatersBtn2');ignoreBtn('rdRepairBtn2');ignoreBtn('vitHemeBtn2');ignoreBtn('UnspecSxReasonBtn2');setSurgeryReason('');showContent('postOpDrops');
		}
		targetList.selectedIndex = targetList.options.length - 1;
		setSurgeryReasonNeededFalse();
	}
}

function getAddInfo(value) {
	var addInfoCode = '';

	if(addInfoSwitch == 1) {  //currently obsolete (add info text area currently just on side panel, not at end of scenarios) - 09/09/20
		addInfoCode +=
				 '<center>'
	            +'<font size="4" style="font-style: italic;">Text entered here will be appended to the HPI.</font>'
	            +'<br>'
	            +'<textarea rows="2" cols="100" style="background-color:#e6faff; max-width:100%;" id="addInfoText1" oninput="setAddInfoSwitch(1);setAddInfoStr();generateHPI();"></textarea>'
	            +'<br>'
	            +'</center>';
    }
   	if(addInfoSwitch == 2) {
		addInfoCode +=
				 '<center>'
	            +'<font size="4" style="font-style: italic;">Text here will be appended to the HPI.</font>'
	            +'<br>'
	            +'<textarea rows="2" cols="100" style="background-color:#e6faff; max-width:90%;" id="addInfoText2" oninput="setAddInfoSwitch(2);setAddInfoStr();generateHPI();"></textarea>'
	            +'<br>'
	            +'</center>';
    }

	document.getElementById(value).innerHTML = addInfoCode;
}











//borrowed code from https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp
function openNav() {
  document.getElementById("mySidepanel").style.width = "40%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
//code above borrowed from https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp









function copyHPI() {
	var element = document.getElementById("HPIText");
	element.select();
	document.execCommand("copy");
}
