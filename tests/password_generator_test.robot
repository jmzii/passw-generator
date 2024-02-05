*** Settings ***
Library           SeleniumLibrary


*** Variables ***
${BASE_URL}       http://localhost:5173
${BROWSER}        chrome
${COPY_BUTTON}    //div[@class='copyPwd']
${PASSWORD}    //input[@id='result']


*** Test Cases ***
Default Password Test
    [Documentation]    Generating password with default options
    Open Browser  ${BASE_URL}  ${BROWSER}
    Page Has Elements
    Generate Password
    Validate Default Password
    Close Browser

Password With Numbers
    [Documentation]    Generating password that includes numbers
    Open Browser  ${BASE_URL}  ${BROWSER}
    Page Has Elements
    Select Checkbox    id=number
    Generate Password
    Checkbox Should Be Selected    id=number
    Validate Password With numbers
    Close Browser

Password With Multiple Requirements
    [Documentation]    Generating password that includes numbers, symbols, uppercase letters
    Open Browser  ${BASE_URL}  ${BROWSER}
    Page Has Elements
    Select All Checkboxes
    Generate Password
    Validate Password With Multiple Requirements
    Close Browser    

[Teardown]    Close All Browsers


*** Keywords ***
Page Has Elements
    Page Should Contain Element    id=root
    Page Should Contain Element    id=pwd-form
    Page Should Contain Checkbox    id=number
    Page Should Contain Checkbox    id=uppercase
    Page Should Contain Checkbox    id=symbol

Generate Password
    Click Element    css=#pwd-form button

Select All Checkboxes
    Select Checkbox    id=number
    Select Checkbox    id=uppercase
    Select Checkbox    id=symbol

Validate Default Password
    ${generatedPassword}    Get Value    ${PASSWORD}
    Should Match Regexp  ${generatedPassword}  [a-z]

Validate Password With Numbers
    ${generatedPassword}    Get Value    ${PASSWORD}
    Should Match Regexp  ${generatedPassword}  [0-9]

Validate Password With Symbols
    ${generatedPassword}    Get Value    ${PASSWORD}
    Should Match Regexp    ${generatedPassword}  ! @ # $ % ^ & * ( )

Validate Password With Multiple Requirements
    ${generatedPassword}    Get Value    ${PASSWORD}
    Should Match Regexp  ${generatedPassword}  [!@$%^&*a-zA-Z0-9]