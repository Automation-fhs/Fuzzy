#include "FuzzySet.h"

class Fuzzy
{
public:
    Fuzzy(float posCP[7], float posErr, float veloCP[7], float veloErr, float FuzzyRules[7][7]);
    float Result();

private:
    struct
    {
        FuzzySet Position[7];
        FuzzySet Velo[7];
    } FuzzyCP;
    float _posCP[7];
    float _veloCP[7];
    float _FuzzyRules[7][7];
};