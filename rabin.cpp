#include<stdio.h>
#include<string.h>
#include<iostream>
#include<vector>
using namespace std;
 
// d is the number of characters in input alphabet
#define d 256 //d це кількість символів в ввідному алфавіті
 
/*  pat  -> pattern
    txt  -> text
    q    -> A prime number
*/
 
void get_input(vector<char>& a)
{
    char c;
    while (1) //коли правда
    {
        c = getchar();
        if (c == '\n') // якщо с = перевод на нову строку, то стоп
        break;
        a.push_back(c); // пушить назад с
    }
    return;
}

void search(char *pat, char *txt, int q)
{
    int M = strlen(pat); // М = довжині патерну
    int N = strlen(txt); // Н = довжині тексту
    int i, j;
    int p = 0;  // значення хешу для патерну hash value for pattern
    int t = 0; // значення хешу для тексту hash value for txt
    int h = 1;
 
    // The value of h would be "pow(d, M-1)%q"
    for (i = 0; i < M-1; i++) // значення хешу буде піднесено до степені М-1
        h = (h*d)%q;
 
    // Calculate the hash value of pattern and first window of text
    for (i = 0; i < M; i++)
    {
        p = (d * p + pat[i]) % q;
        t = (d * t + txt[i]) % q;
    }
 
    // Slide the pattern over text one by one
    for (i = 0; i <= N - M; i++)
    {
 
        // Check the hash values of current window of text and pattern
        // If the hash values match then only check for characters on by one
        if ( p == t )
        {
            /* Check for characters one by one */
            for (j = 0; j < M; j++)
            {
                if (txt[i + j] != pat[j])
                    break;
            }
            if (j == M)  // if p == t and pat[0...M-1] = txt[i, i+1, ...i+M-1]
            {
                printf("Pattern found at index %d \n", i);
            }
        }
 
        // Calculate hash value for next window of text: Remove leading digit,
        // add trailing digit
        if ( i < N - M )
        {
            t = (d * (t - txt[i] * h) + txt[i + M]) % q;
 
            // We might get negative value of t, converting it to positive
            if (t < 0)
                t = (t + q);
        }
    }
}
 
int main()
{
    vector<char> txt; // в вектор записую строку
    vector<char> pat;
    cout<<"Введіть текст:";
    get_input(txt); // в полі інпута ввожу текст
    cout<<"Введіть шукану підстроку:";
    get_input(pat); // в полі інпута ввожу патерн
    
    char *text,*pattern;
    text=&txt[0]; // перемінна текст = 1 елементу масиву
    text[txt.size()]='\0'; // текст = 0
    pattern=&pat[0];
    pattern[pat.size()]='\0';
    int q = 101;  // A prime number
    search(pattern, text, q);
    getchar();
    return 0;
}
