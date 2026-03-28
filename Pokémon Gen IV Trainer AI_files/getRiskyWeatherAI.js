function getRiskyWeatherAI(set) {
	let resultWeatherAIChecks = [];

    resultWeatherAIChecks.push(set)
    
    return resultWeatherAIChecks.filter(check => Object.hasOwn(riskyWeatherAICheckText, check));
};