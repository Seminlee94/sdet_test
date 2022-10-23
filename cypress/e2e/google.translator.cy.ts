import * as translatorFixtures from "../fixtures/translator-page-fixtures";
import * as translationJSON from "../fixtures/source-translate.json";

describe("Nuna tests", () => {

  const Demokratien_German_Spanish = translationJSON["Demokratien_German_Spanish"];

  beforeEach(() => {
    cy.visit("https://translate.google.com/");
  });

  it("select source language from the drop-down menu on the left", () => {
    translatorFixtures.clickLeftDropdownBtn();
  });

  it("select translation language from the drop-down menu on the right", () => {
    translatorFixtures.clickRightDropdownBtn();
  });

  it("enter the initial text in the input field on the left", () => {
    translatorFixtures.clickLeftDropdownBtn();
    /*
    cy.wait is not optimal solution so it needs another workaround.
    The problem here is that the `getLanguage()` is being clicked even before
    the language dropdown is shown which causes the `sourceTypeInput()`
    to not correctly get the textarea it needs
    */
    cy.wait(100);
    translatorFixtures.getSourceLanguage("Korean").click();
    translatorFixtures.sourceTypeInput("누나")
  });

  it("make sure that the actual translation result in the right field is correct", () => {
    translatorFixtures.clickLeftDropdownBtn();
    cy.wait(100);
    translatorFixtures.getSourceLanguage("Korean").click();
    translatorFixtures.sourceTypeInput("누나");
    translatorFixtures.assertTranslateWord("sister")
  });
  
  it("make sure that the actual translation result in the right field is correct", () => {
    translatorFixtures.clickLeftDropdownBtn();
    cy.wait(100);
    translatorFixtures.getSourceLanguage(Demokratien_German_Spanish["source_language"]).scrollIntoView().click();
    translatorFixtures.sourceTypeInput(Demokratien_German_Spanish["initial_text"]);
    translatorFixtures.clickRightDropdownBtn();
    cy.wait(100);
    translatorFixtures.getTranslateLanguage(translationJSON["Demokratien_German_Spanish"]["translation_language"]).scrollIntoView().click();
    translatorFixtures.assertTranslateWord(translationJSON["Demokratien_German_Spanish"]["expected_result"]);
  });

  it("click swap languages button and verify the result", () => {
    translatorFixtures.clickLeftDropdownBtn();
    cy.wait(100);
    translatorFixtures.getSourceLanguage(Demokratien_German_Spanish["source_language"]).scrollIntoView().click();
    translatorFixtures.sourceTypeInput(Demokratien_German_Spanish["initial_text"]);
    translatorFixtures.clickRightDropdownBtn();
    cy.wait(100);
    translatorFixtures.getTranslateLanguage(Demokratien_German_Spanish["translation_language"]).scrollIntoView().click();
    translatorFixtures.assertTranslateWord(Demokratien_German_Spanish["expected_result"]);
    translatorFixtures.clickSwapBtn();
    translatorFixtures.assertTranslateWord(Demokratien_German_Spanish["swapped_translated_text"]);
    translatorFixtures.assertSourceWord(Demokratien_German_Spanish["expected_result"]);
  });

  it("clear the input field, click 'select input tool' button, select screen keyboard and  enter 'Hi!' ", () => {
    translatorFixtures.clickLeftDropdownBtn();
    cy.wait(100);
    translatorFixtures.getSourceLanguage(Demokratien_German_Spanish["source_language"]).scrollIntoView().click();
    translatorFixtures.sourceTypeInput(Demokratien_German_Spanish["initial_text"]);
    translatorFixtures.clickInputTools();
    translatorFixtures.assertInputToolsDD();
    translatorFixtures.clickUSInternational();
    translatorFixtures.assertUSInternationalKeyBoard();
    translatorFixtures.clickClearSourceBtn();
    _clickAlphabetsOnKeyBoard("hi!")
  })

  const _clickAlphabetsOnKeyBoard = (word: string) => {
    for (let i=0; i<=word.length-1; i++) {
      /*
        definitely needs some workaround on this.
        I am not too familiar with keyboard regex,
        but something that can be easily done with more time and effort.
      */
      if (word[i] == '!') {
        translatorFixtures.clickShiftOnKB();
      }
      translatorFixtures.clickAlphabetsOnKB(word[i]);
    };
  };


})