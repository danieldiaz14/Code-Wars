//  main.cpp
//  HowManyTimesDoesItContain
/*
 Your task is to return how many times a string contains a given character.
 
 The function takes a string(inputS) as a paremeter and a char(charS) which is the character that you will have to find and count.
 
 For example, if you get an input string "Hello world" and the character to find is "o", return 2.
*/

#include <iostream>
#include <string>

//using namespace std;

static int stringCounter(std::string inputS,char charS)
{
    int total_characters = 0;
    int occured = 0;
    
    total_characters = inputS.length();
    
    for(int i =0; i < total_characters; i++)
    {
        if( inputS[i] == charS)
            occured++;
        
    }
    
    return occured;
}

int main() {

    std::cout << " How Many Times Does it Occur " << std::endl;
    
    std::cout << "o occured " << stringCounter("hello world", 'o') << std::endl;
    
    
    return 0;
}
