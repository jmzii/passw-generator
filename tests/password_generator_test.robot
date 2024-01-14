*** Settings ***
Library           SeleniumLibrary


*** Variables ***
${BASE_URL}       http://localhost:5173
${BROWSER}        chrome
${COPY_BUTTON}    //div[@class='copyPwd']
${PASSWORD}    //input[@id='result']


*** Test Cases ***
# Test case 1: Generating password with default options
Default Password Test
    Open Browser  ${BASE_URL}  ${BROWSER}
    Sleep   1s
    Page Has Elements
    Generate Password
    Sleep    1s
    Validate Default Password
    Close Browser

# Test case 2: Generating password that includes numbers
Password With Numbers
    Open Browser  ${BASE_URL}  ${BROWSER}
    Sleep   1s
    Page Has Elements
    Select Checkbox    id=number
    Sleep    1s
    Generate Password
    Sleep    1s
    Checkbox Should Be Selected    id=number
    Validate Password With numbers
    Close Browser

# Test case 3: Generating password that includes numbers, symbols, uppercase letters
Password With Multiple Requirements
    Open Browser  ${BASE_URL}  ${BROWSER}
    Sleep    1s
    Page Has Elements
    Select Checkbox    id=number
    Select Checkbox    id=uppercase
    Select Checkbox    id=symbol
    Sleep    1s
    Generate Password
    Sleep    1s
    Validate Password With Multiple Requirements
    Close Browser
    

[Teardown]    Close All Browsers


*** Keywords ***
Page Has Elements
    Page Should Contain Checkbox    id=number
    Page Should Contain Checkbox    id=uppercase
    Page Should Contain Checkbox    id=symbol

Generate Password
    Click Element    css=#pwd-form button

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