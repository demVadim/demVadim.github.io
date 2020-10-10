#pragma once
#include<string>

//fdfdf



class FBullCowGame{
public:
	FBullCowGame();
	int GetMaxTries() const;
	int GetCurrentTry() const;
	bool IsGameWon() const;

	void Reset();
	bool CheckGuessValidity(std::string);
	// provide a method for counting bulls & cows, and increasing try #

private:
	int MyCurrentTry;
	int MyMaxTries;
};

