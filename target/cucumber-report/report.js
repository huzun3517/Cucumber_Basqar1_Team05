$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("3.1_CountryCreateDelete.feature");
formatter.feature({
  "line": 1,
  "name": "Country Create Delete Functionality",
  "description": "",
  "id": "country-create-delete-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1071940,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 16175836312,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_username_and_password_and_click_login_button()"
});
formatter.result({
  "duration": 7563625323,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 50746,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create and delete a Country",
  "description": "",
  "id": "country-create-delete-functionality;create-and-delete-a-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "setupOne"
      ],
      "line": 12
    },
    {
      "cells": [
        "parameters"
      ],
      "line": 13
    },
    {
      "cells": [
        "country"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User sending the keys in the form content class",
  "rows": [
    {
      "cells": [
        "nameInput",
        "USA"
      ],
      "line": 20
    },
    {
      "cells": [
        "codeInput",
        "007"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User delete the \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "General.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "duration": 1413952322,
  "status": "passed"
});
formatter.match({
  "location": "General.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 962350399,
  "status": "passed"
});
formatter.match({
  "location": "General.userSendingTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 1006429927,
  "status": "passed"
});
formatter.match({
  "location": "General.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 343026975,
  "status": "passed"
});
formatter.match({
  "location": "General.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 1015478695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 17
    }
  ],
  "location": "General.user_delete_the(String)"
});
formatter.result({
  "duration": 4546450340,
  "status": "passed"
});
formatter.match({
  "location": "General.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 757072236,
  "status": "passed"
});
formatter.after({
  "duration": 7319977991,
  "status": "passed"
});
formatter.uri("3.2_CityCreateDelete.feature");
formatter.feature({
  "line": 1,
  "name": "Cities Create Delete Functionality",
  "description": "",
  "id": "cities-create-delete-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 289082,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 10484933546,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_username_and_password_and_click_login_button()"
});
formatter.result({
  "duration": 16413272666,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 94079,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create and delete a Cities",
  "description": "",
  "id": "cities-create-delete-functionality;create-and-delete-a-cities",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "setupOne"
      ],
      "line": 12
    },
    {
      "cells": [
        "parameters"
      ],
      "line": 13
    },
    {
      "cells": [
        "cities"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 17
    },
    {
      "cells": [
        "countrySelect"
      ],
      "line": 18
    },
    {
      "cells": [
        "countryOption"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User sending the keys in the form content class",
  "rows": [
    {
      "cells": [
        "nameInput",
        "Milano"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User delete the \"Milano\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "General.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "duration": 3067997468,
  "status": "passed"
});
formatter.match({
  "location": "General.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 8527861880,
  "status": "passed"
});
formatter.match({
  "location": "General.userSendingTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 941137396,
  "status": "passed"
});
formatter.match({
  "location": "General.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 636417440,
  "status": "passed"
});
formatter.match({
  "location": "General.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 1510831152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Milano",
      "offset": 17
    }
  ],
  "location": "General.user_delete_the(String)"
});
formatter.result({
  "duration": 6677315361,
  "status": "passed"
});
formatter.match({
  "location": "General.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 1268617825,
  "status": "passed"
});
formatter.after({
  "duration": 6347427629,
  "status": "passed"
});
});