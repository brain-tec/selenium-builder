builder.selenium2.io.addLangFormatter({
  name: "Odoo 9.0 EE",
  extension: ".robot",
  not: "not ",
  start:
    "*** Settings ***\n" +
    "\n" +
    "Documentation  Test generated by SeleniumBuilder for OpenERP 9.0 Enterprise\n" +
    "Resource       odoo_9_0_EE.robot\n" +
    "Library        Collections\n" +
    "Library        Selenium2Library\n" +
    "Variables      ${CONFIG}\n" +
    "\n" +
    "Suite Setup      Run Keywords      Set Up\n" +
    "\n" +
    "\n" +
    "*** Test Cases ***\n" +
    "Valid Login\n" +
    "\tLogin" +
    "\n" +
    "This is my test\n",
  end:
    "\n",
  lineForType: {
    "get":
      "\tGo To\t{url}\n",
    "goBack":
      "\tGo Back\n",
    "goForward":
      "NOT SUPPORTED\tgoForward\n",
    "clickElement":
    	"\t{locator}\n",
    "setElementText": function(stepType, locatorType, locatorIndex) {
      console.log(stepType, locatorType, locatorIndex);
      var value = stepType.text;
      value = value.replace(/\\n/g, "\\\\n");
      value = value.replace(/\r?\n/g, "\\n");
      return "\t" + stepType.locator.values['openerp70'][0] + "\t" + value + "\n";
    },
    "sendKeysToElement":
    	"\t{locator}\t{text}\n",
    "setElementSelected":
    	"\t{locator}\n",
    "setElementNotSelected":
    	"\t{locator}\n",
    "submitElement":
      "NOT SUPPORTED\tsubmitElement {locator}\n",
    "close":
      "\tClose Browser\n",
    "verifyTextPresent":
      "\tElement Should Contain   xpath=//html/body  {text}\n",
    "assertTextPresent":
      "\tElement Should Contain   xpath=//html/body  {text}\n",
    "waitForTextPresent":
      "\tWait Until Page Contains   {text}\n",
    "verifyBodyText":
      "\tPage Should Contain   {text}\n",
    "assertBodyText":
        "\tPage Should Contain   {text}\n",
    "waitForBodyText":
        "\tWait Until Page Contains   {text}\n",
    "verifyElementPresent":
        "\tPage Should Contain Element   {locator}\n",
    "assertElementPresent":
      "\tPage Should Contain Element   {locator}\n",
    "waitForElementPresent":
      "\tWait Until Page Contains Element   {locator}\n",
    "verifyPageSource":
        "\tElement Text Should Be   xpath=//html/body   {source}\n",
    "assertPageSource":
      "\tElement Text Should Be   xpath=//html/body   {source}\n",
    "waitForPageSource":
      "\tWait Until Page Contains   {source}\n",
    "verifyText":
      "\tElement Should Contain   {locator}   {text}\n",
    "assertText":
      "\tElement Should Contain   {locator}   {text}\n",
    "waitForText":
      "\tWait Until Page Contains Element   {locator}\n",
    "verifyCurrentUrl":
      "\tLocation Should Be   {url}\n",
    "assertCurrentUrl":
      "if {posNot}(wd.current_url == {url}):\n" +
      "    wd.close()\n" +
      "    raise Exception(\"{negNot}assertCurrentUrl failed\")\n",
    "waitForCurrentUrl":
      "",
    "verifyTitle":
      "if {posNot}(wd.title == {title}):\n" +
      "    print(\"{negNot}verifyTitle failed\")\n",
    "assertTitle":
      "if {posNot}(wd.title == {title}):\n" +
      "    wd.close()\n" +
      "    raise Exception(\"{negNot}assertTitle failed\")\n",
    "waitForTitle":
      "",
    "verifyElementSelected":
      "if {posNot}wd.{locatorBy}({locator}).is_selected():\n" +
      "    print(\"{negNot}verifyElementSelected failed\")\n",
    "assertElementSelected":
      "if {posNot}wd.{locatorBy}({locator}).is_selected():\n" +
      "    wd.close()\n" +
      "    raise Exception(\"{negNot}assertElementSelected failed\")\n",
    "waitForElementSelected":
      "",
    "verifyElementValue":
      "if {posNot}wd.{locatorBy}({locator}).value == \"{value}\":\n" +
      "    print(\"{negNot}verifyElementValue failed\")\n",
    "assertElementValue":
      "if {posNot}wd.{locatorBy}({locator}).value == \"{value}\":\n" +
      "    wd.close()\n" +
      "    raise Exception(\"{negNot}assertElementValue failed\")\n",
    "element.waitForValue":
      "",
    "verifyCookieByName":
      "if {posNot}(wd.get_cookie({name}) == {value}):\n" +
      "    print(\"{negNot}verifyCookieByName failed\")\n",
    "assertCookieByName":
      "if {posNot}(wd.get_cookie({name}) == {value}):\n" +
      "    wd.close()\n" +
      "    raise Exception(\"{negNot}assertCookieByName failed\")\n",
    "waitForCookieByName":
      "",
    "verifyCookiePresent":
      "if {posNot}wd.get_cookie({name}):\n" +
      "    print(\"{negNot}verifyCookiePresent failed\")\n",
    "assertCookiePresent":
      "if {posNot}wd.get_cookie({name}):\n" +
      "    wd.close()\n" +
      "    raise Exception(\"{negNot}assertCookiePresent failed\")\n",
    "waitForCookiePresent":
      "",
    "storeTitle":
      "${{variable}} = wd.title\n"
  },
  locatorByForType: function(stepType, locatorType, locatorIndex) {
	console.log('locatorByForType',stepType, locatorType, locatorIndex);
    if ({
      "assertElementPresent": 1,
      "verifyElementPresent": 1
    }[stepType.name]) {
      return {
        "class": "find_elements_by_class_name",
        "id": "find_elements_by_id",
        "link text": "find_elements_by_link_text",
        "xpath": "find_elements_by_xpath",
        "css selector": "find_elements_by_css_selector",
        "name": "find_elements_by_name",
        "openerp70": "openerp70"
      }[locatorType];
    }
    return {
      "class": "find_element_by_class_name",
      "id": "find_element_by_id",
      "link text": "find_element_by_link_text",
      "xpath": "find_element_by_xpath",
      "css selector": "find_element_by_css_selector",
      "name": "find_element_by_name",
      "openerp70": "openerp70"
    }[locatorType];
  },
  /**
   * Processes a parameter value into an appropriately escaped expression. Mentions of variables
   * with the ${foo} syntax are transformed into expressions that concatenate the variables and
   * literals.
   * For example:
   * a${b}c
   * becomes:
   * "a" + str(b) + "c"
   *
   * It would be much nicer to be using string.format here, but the minimum required Python version
   * Selenium appears to be 2.5, and string.format only turns up in 2.6.
   */
  escapeValue: function(stepType, value, pName) {
    if (stepType.name.startsWith("store") && pName == "variable") { return value; }
    // This function takes a string literal and escapes it and wraps it in quotes.
    function esc(v) { return "\"" + v.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\""; }

    // The following is a transducer that produces the escaped expression by going over each
    // character of the input.
    var output = "";       // Escaped expression.
    var lastChunk = "";    // Accumulates letters of the current literal.
    var hasDollar = false; // Whether we've just encountered a $ character.
    var insideVar = false; // Whether we are reading in the name of a variable.
    var varName = "";      // Accumulates letters of the current variable.
    for (var i = 0; i < value.length; i++) {
      var ch = value.substring(i, i + 1);
      if (insideVar) {
        if (ch == "}") {
          // We've finished reading in the name of a variable.
          // If this isn't the start of the expression, use + to concatenate it.
          if (output.length > 0) { output += " + "; }
          output += "str(" + varName + ")";
          insideVar = false;
          hasDollar = false;
          varName = "";
        } else {
          // This letter is part of the name of the variable we're reading in.
          varName += ch;
        }
      } else {
        // We're not currently reading in the name of a variable.
        if (hasDollar) {
          // But we *have* just encountered a $, so if this character is a {, we are about to
          // do a variable.
          if (ch == "{") {
            insideVar = true;
            if (lastChunk.length > 0) {
              // Add the literal we've read in to the text.
              if (output.length > 0) { output += " + "; }
              output += esc(lastChunk);
            }
            lastChunk = "";
          } else {
            // No, it was just a lone $.
            hasDollar = false;
            lastChunk += "$" + ch;
          }
        } else {
          // This is the "normal case" - accumulating the letters of a literal. Unless the letter
          // is a $, in which case this may be the start of a
          if (ch == "$") { hasDollar = true; } else { lastChunk += ch; }
        }
      }
    }
    // Append the final literal, if any, to the output.
    if (lastChunk.length > 0) {
      if (output.length > 0) { output += " + "; }
    	output += lastChunk;
//      	output += esc(lastChunk);
    }
    return output;
  },
  usedVar: function(varName) { return varName; },
  unusedVar: function(varName) { return varName; }
});

if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }
