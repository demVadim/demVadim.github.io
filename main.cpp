#include <iostream>
#include <string>
#include "FBullCowGame.h"

FBullCowGame BCGame;

void PrintIntro() 
{
    //intro the game
	constexpr int WORD_LENGTH = 9;
    std::cout << "Welcome to Bulls and Cows, a fun world game. \n";
    std::cout << "Can you guess the " << WORD_LENGTH;
    std::cout << " letter isogram I'm thinking of?\n";
    std::cout << std::endl;
    return;
}



std::string GetGuess()
{
    int CurrentTry = BCGame.GetCurrentTry();
    std::cout << "Try " << CurrentTry << ". Enter your guess: ";
    std::string Guess = "";
    std::getline(std::cin, Guess);
    return Guess;
}



void PlayGame() 
{
    BCGame.Reset();
    int MaxTries = BCGame.GetMaxTries();
    
    // loop for the number of turns asking for guess
    // TODO change from FOR to WHILE loop once we are validating tries
    for (int count = 1; count <= MaxTries; count++) {
        std::string Guess = GetGuess(); // TODO make loop checking valid

        // submit valid guess to the game
        // print numbers of buuls and cows
        std::cout << "Your guess was: " << Guess << std::endl;
        std::cout << std::endl;
    }

    //TODO summarise game
}

bool AskToPlayAgain()
{
    std::cout << "Do you want to play again (y/n)? ";
    std::string Response = "";
    std::getline(std::cin, Response);
    return (Response[0] == 'y') || (Response[0] == 'Y');
}


int main()
{
    bool bPlayAgain = false;
    do
    {
        PrintIntro();
        PlayGame();
        bPlayAgain = AskToPlayAgain();
    } while (bPlayAgain);
   
    

    //std::cout << std::endl;
    return 0;
}

