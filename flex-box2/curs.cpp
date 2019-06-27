#include<stdio.h>
#include<string.h>
#include<iostream>
#include<vector>
using namespace std;

#define d 256

void input(vector<char>& a)
{
    char c;
    while (1)
    {
        c = getchar();
        if (c == '\n') /
            break;
        a.push_back(c);
    }
    return;
}

void search(char *pid, char *txt, int q)
{
    int M = strlen(pid);
    int N = strlen(txt);
    int i, j;
    int p = 0;
    int t = 0;
    int h = 1;
    
    for (i = 0; i < M-1; i++) {
        h = (h*d)%q;
    }
    
    for (i = 0; i < M; i++) {
        p = (d * p + pid[i]) % q;
        t = (d * t + txt[i]) % q;
    }
    int counter = 0;
    for (i = 0; i <= N - M; i++) {
        if ( p == t ) {
            for (j = 0; j < M; j++) {
                if (txt[i + j] != pid[j])
                    break;
            }
            if (j == M) {
                cout << "Підрядок знайдений на " << i+1 << " позиції" << endl;
                counter++;
            }
        }
        
        if ( i < N - M ) {
            t = (d * (t - txt[i] * h) + txt[i + M]) % q;
            if (t < 0)
                t = (t + q);
        }
    }
    if ( counter == 0 ) {
        cout << "Шуканого підрядка немає в тексті" << endl;
    }
}

int main()
{
    vector<char> txt;
    vector<char> pid;
    cout<<"Введіть текст: ";
    input(txt);
    cout<<"Введіть шуканий підрядок: ";
    input(pid);
    char *text,*pidstroka;
    text=&txt[0]; // перемінна текст = 1 елементу масиву
    text[txt.size()]='\0'; // текст = 0
    pidstroka=&pid[0];
    pidstroka[pid.size()]='\0';
    int q = 101;  // просте число
    search(pidstroka, text, q);
    getchar();
    return 0;
}
