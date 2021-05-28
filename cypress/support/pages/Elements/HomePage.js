class HomePage {

    onHomePage(){
        return cy.get('strong.mainHeading');
    }
}

export default HomePage;