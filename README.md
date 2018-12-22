# Rules develop on github 

> All of that thing about for members of RHP Team. That rules not using be out of.

# How to define name a branch using git?

Create a branch and switch to new branch.

``` git checkout -b dev-name```

> Note: name is real name of you. Example: My name is Tran Quoc Toan. I will set dev-name is dev-toantr. My name is Nguyen Van Hoang. I will set dev-name is dev-hoangnv


# How to fix conflict when merge new branch?

Merge branch means that you merge the two branches together, which is often used to merge another branch inot the branch master before pushing to the remote repository, or merge two branches into one to solver the same task.

> When you get a conflict error. You need to make sure the following.

* You need commit code old branch before merge.
* If You and your partner make file same. U need go to file delete code wrong.

**Example: I make branch-a and I want merge code of branch-b to my branch**

```git merge branch-b```

If you don't have a duty to change the code on some else's brnach. You can't push code into their branch. Thank you!