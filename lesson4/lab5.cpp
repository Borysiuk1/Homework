#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <string.h>
#include <stdio.h>

#define LAST_MESSAGE 255

int main(){
	int msquit;
	charpathname[] = “msg1.c”;
		key_t key;
	int i, len;

	struct mymsgbuf{
		long mtype;
		char mtext[81];
} mybuf;
if ((key = ftok(pathname)) < 0) {
	printf (“Can\’t generate key\n”);
	exit (-1);
}
if ((msqid = msget(key, 0660 | IPC_CREAT)) < 0) {
	printf (“Can\’t get msqid\n”);
	exit (-1);
}
	for (i = 1; i <= 5; i++) {
	mybuf.mtype = 1;
	strcpy(mybuf.mtext, “This is text message”);
	len = strlen(mybuf.text) + 1;

	if (msgsnd(msqid, (struct msbuf *) &mybuf, len, 0) < 0) {
		printf (“Can\’t send message to queue\n”);
		msqctl(msqid, IPS_RMID , (struct msqid_ds *) NULL);
		exit (-1);
	}
}
mybuf.mtype = LAST_MESSAGE;
len = 0;
if (msqsnd(msqid, (struct msbuf *) &mybuf, len, 0) < 0) {
	printf (“Can\’t send message to queue\n”);
	msgctl(msqid, IPS_RMID , (struct msqid_ds *) NULL);
	exit (-1);
}
return 0;
}




