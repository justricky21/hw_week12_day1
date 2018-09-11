const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(){
    
}

ResultView.prototype.displayResult = function(checker){
    
    const resultElement = document.querySelector('#result');
    if (checker){
        resultElement.textContent = `Yes! This is a prime number!`;
    } else {
        resultElement.textContent = `No! This is not a prime number!`;
    }
}

ResultView.prototype.bindEvents = function() {
    PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
        const checkerBoolean = event.detail;
        this.displayResult(checkerBoolean);
    });
}

module.exports = ResultView;