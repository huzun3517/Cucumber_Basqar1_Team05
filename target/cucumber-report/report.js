$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1085624,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with valid username and password",
  "description": "",
  "id": "login-functionality;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter username and password and click login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 22423211485,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_username_and_password_and_click_login_button()"
});
formatter.result({
  "duration": 14279008227,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 120308,
  "status": "passed"
});
formatter.after({
  "duration": 10383163704,
  "status": "passed"
});
formatter.uri("3.6_SubjectsCreateDelete.feature");
formatter.feature({
  "line": 1,
  "name": "Subjects Create Delete Functionality",
  "description": "",
  "id": "subjects-create-delete-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 141975,
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
  "duration": 6323416751,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_username_and_password_and_click_login_button()"
});
formatter.result({
  "duration": 5501422601,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 37062,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create and delete a Subjects",
  "description": "",
  "id": "subjects-create-delete-functionality;create-and-delete-a-subjects",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "education"
      ],
      "line": 12
    },
    {
      "cells": [
        "setup5"
      ],
      "line": 13
    },
    {
      "cells": [
        "subject"
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
        "StatisticsTeam5"
      ],
      "line": 20
    },
    {
      "cells": [
        "codeInput",
        "Group5"
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
        "subjectCategory"
      ],
      "line": 24
    },
    {
      "cells": [
        "subjectOption"
      ],
      "line": 25
    },
    {
      "cells": [
        "style"
      ],
      "line": 26
    },
    {
      "cells": [
        "subjectOption"
      ],
      "line": 27
    },
    {
      "cells": [
        "saveButton"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User delete the \"StatisticsTeam5\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "General.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "duration": 2171422543,
  "status": "passed"
});
formatter.match({
  "location": "General.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 1522558629,
  "status": "passed"
});
formatter.match({
  "location": "General.userSendingTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 2223713245,
  "status": "passed"
});
formatter.match({
  "location": "General.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 3801318828,
  "status": "passed"
});
formatter.match({
  "location": "General.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 1556297931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "StatisticsTeam5",
      "offset": 17
    }
  ],
  "location": "General.user_delete_the(String)"
});
formatter.result({
  "duration": 6640113922,
  "status": "passed"
});
formatter.match({
  "location": "General.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 1474319632,
  "status": "passed"
});
formatter.after({
  "duration": 7907495025,
  "status": "passed"
});
});