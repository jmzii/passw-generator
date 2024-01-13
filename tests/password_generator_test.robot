*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${BASE_URL}       http://localhost:5173
${BROWSER}        chrome

*** Test Cases ***

# Test case 1: Generating password with default options
Default Password Test
    Open Browser  ${BASE_URL}  ${BROWSER}
    Sleep   2.5s
    Element Should Contain    class=container    Length
    Sleep    1s
    Click Button  Create password
    Sleep    1s
    Should Match Regexp  ${generatedPassword}  [a-z]

[Teardown]    Close Browser

*** Variables ***
${generatedPassword}=    Get Text id="result"