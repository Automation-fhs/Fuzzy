#include "Fuzzy.h"

Fuzzy::Fuzzy(float posCP[7], float posErr, float veloCP[7], float veloErr, float FuzzyRules[7][7])
{
    for (int i = 0; i < 7; i++)
    {
        this->_posCP[i] = posCP[i];
        this->_veloCP[i] = veloCP[i];
        for (int j = 0; j < 7; j++)
        {
        }
    }

    this->_FuzzyRules = FuzzyRules;
}