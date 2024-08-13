#include <Arduino.h>
#include "Fuzzy.h"

// put function declarations here:
float posCP[] = {-35,-30,-5,0,5,30,35};
float veloCP[] = {-200,-100,-20,0,20,100,200};
float PWMVal[] = {255,255,255,255,200,100,0,-100,-200,-255,-255,-255,-255};

float FuzzyRules[7][7] = {
    {PWMVal[0],PWMVal[1],PWMVal[2],PWMVal[3],PWMVal[4],PWMVal[5],PWMVal[6]},
    {PWMVal[1],PWMVal[2],PWMVal[3],PWMVal[4],PWMVal[5],PWMVal[6],PWMVal[7]},
    {PWMVal[2],PWMVal[3],PWMVal[4],PWMVal[5],PWMVal[6],PWMVal[7],PWMVal[8]},
    {PWMVal[3],PWMVal[4],PWMVal[5],PWMVal[6],PWMVal[7],PWMVal[8],PWMVal[9]},
    {PWMVal[4],PWMVal[5],PWMVal[6],PWMVal[7],PWMVal[8],PWMVal[9],PWMVal[10]},
    {PWMVal[5],PWMVal[6],PWMVal[7],PWMVal[8],PWMVal[9],PWMVal[10],PWMVal[11]},
    {PWMVal[6],PWMVal[7],PWMVal[8],PWMVal[9],PWMVal[10],PWMVal[11],PWMVal[12]}
};

Fuzzy FuzzyTest = Fuzzy(posCP,1,veloCP,10, FuzzyRules);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println(FuzzyTest.Result(4,0));
}

void loop() {
  // put your main code here, to run repeatedly:
}

// put function definitions here:
