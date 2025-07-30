This program generates a completely random message everytime the
command line is launched.

The program is written in javascript, then version controlled using
Git, which then gets merged into a Git repository hosted on Github

The program achieves its purpose by first defining 3 strings in 3 
seperate arrays titled: subjects, actions, outcomes. 

A function titled "generateMessage" is then called which iterates 
through each array using a random JS method. After a random index in
each array is selected via the iterator, the function then joins the 
strings together before logging the message to the console. 