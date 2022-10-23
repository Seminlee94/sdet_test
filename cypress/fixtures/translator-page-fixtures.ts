const leftDropdownBtn = () => {
    return cy.get('[jsname="RCbdJd"]').eq(0).should('be.visible');
};

const rightDropdownBtn = () => {
    return cy.get('[jsname="zumM6d"]').eq(0).should('be.visible');
};

const getTranslatedWord = () => {
    return cy.get('[jsname="W297wb"]').should('be.visible');
};

const getSourceWord = () => {
    return cy.get('[jsname="BvKnce"]').should('be.visible');
};

const sourceInput = () => {
    return cy.get('[aria-label="Source text"]');
};

const getSwapBtn = () => {
    return cy.get('[jsname="dnDxad"]').eq(0).should('be.visible');
};

const getClearSourceBtn = () => {
    return cy.get('[aria-label="Clear source text"]').should('be.visible');
};

const getInputTools = () => {
    return cy.get('.ita-kd-icon-button.ita-kd-dropdown.ita-kd-right').should('be.visible');
};

const getInputToolsDD = () => {
    return cy.get('.ita-kd-dropdown-menu').should('be.visible');
};

const getUSInternationalInputTool = () => {
    return cy.get('.ita-kd-dropdown-menu').find('li').contains('span', 'US International');
};

const getUSInternationalKeyBoard = () => {
    return cy.get('.goog-container.goog-container-vertical.notranslate.vk-box');
};

const getAlphabetsOnKB = (char: string) => {
    return cy.get('.vk-btn').contains('span', char);
};

const getShiftOnKB = () => {
    return cy.get('#K16');
};

export const sourceTypeInput = (sourceWord: string) => {
    sourceInput().type(sourceWord);
};

export const assertTranslateWord = (translateWord: string) => {
    getTranslatedWord().should('include.text', translateWord);
};

export const assertSourceWord = (sourceWord: string) => {
    getSourceWord().should('include.text', sourceWord);
};

export const getSourceLanguage = (lang: string) => {
    return cy.get('[jsname="JpRUfc"]').eq(0).contains("div", lang);
};

export const getTranslateLanguage = (lang: string) => {
    return cy.get('[jsname="JpRUfc"]').eq(1).contains("div", lang);
};

export const clickLeftDropdownBtn = () => {
    leftDropdownBtn().scrollIntoView().click();
};

export const clickRightDropdownBtn = () => {
    rightDropdownBtn().scrollIntoView().click();
};

export const clickSwapBtn = () => {
    getSwapBtn().click();
};

export const clickClearSourceBtn = () => {
    getClearSourceBtn().click();
};

export const clickInputTools = () => {
    getInputTools().click()
};

export const assertInputToolsDD = () => {
    getInputToolsDD().should('be.visible');
};

export const clickUSInternational = () => {
    getUSInternationalInputTool().click();
};

export const assertUSInternationalKeyBoard = () => {
    getUSInternationalKeyBoard().should('be.visible');
};

export const clickAlphabetsOnKB = (char: string) => {
    getAlphabetsOnKB(char).click();
};

export const clickShiftOnKB = () => {
    getShiftOnKB().click();
};