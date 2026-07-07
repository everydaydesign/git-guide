# Guide to Git

## Contents

- [1. If you have never used Git before](#1-if-you-have-never-used-git-before)
  - [1.1 What is Git?](#11-what-is-git)
  - [1.2 Why do we use Git in this course?](#12-why-do-we-use-git-in-this-course)
  - [1.3 What are you expected to know afterwards?](#13-what-are-you-expected-to-know-afterwards)
  - [1.4 What do you do when?](#14-what-do-you-do-when)
- [2. Getting started with group work](#2-getting-started-with-group-work)
- [3. Starting a group project](#3-starting-a-group-project)
  - [3.1 One person creates the repo](#31-one-person-creates-the-repo)
  - [3.2 Invite group members](#32-invite-group-members)
  - [3.3 Everyone opens the project](#33-everyone-opens-the-project)
  - [3.4 Create your branch](#34-create-your-branch)
- [4. Basic Git](#4-basic-git)
  - [4.1 Stage vs Commit](#41-stage-vs-commit--whats-the-difference)
  - [4.2 Saving changes (commit)](#42-saving-changes-commit)
  - [4.3 The three-step workflow](#43-the-three-step-workflow)
  - [4.4 Undoing changes](#44-undoing-changes)
  - [4.5 Viewing history](#45-viewing-history)
- [5. Group work with Git](#5-group-work-with-git)
  - [5.1 Push and Pull](#51-push-and-pull--syncing-with-github)
  - [5.2 Pull Requests](#52-pull-requests-pr--review-before-merging)
  - [5.3 Reviewing a Pull Request](#53-reviewing-a-pull-request)
  - [5.4 Requesting changes – example](#54-requesting-changes--example)
  - [5.5 Tips for good reviews](#55-tips-for-good-reviews)
  - [5.6 Merge conflicts](#56-merge-conflicts--when-two-people-change-the-same-file)
  - [5.7 .gitignore](#57-gitignore--files-that-shouldnt-be-shared)
- [6. Problems?](#6-problems)

---

## 1. If you have never used Git before

### 1.1 What is Git?

Git saves "snapshots" of your code so you can view history and undo changes. Instead of having files like `project_v1.php`, `project_v2_final.php`, `project_v2_final_FINAL.php`, Git keeps track of all changes automatically. You can go back to a previous version at any time.

### 1.2 Why do we use Git in this course?

- **Backup** – your code exists both locally and on GitHub.
- **Collaboration** – multiple people can work on the same project without overwriting each other's code.
- **History** – you can see who changed what and when.
- **Industry standard** – almost all developers use Git daily.

### 1.3 What are you expected to know afterwards?

| Basics | Group work |
|--------|------------|
| Understand what stage and commit mean | Create and switch between branches |
| Save changes with clear messages | Sync with GitHub (pull/push) |
| Undo changes | Create and review Pull Requests |
| | Resolve simple merge conflicts |

### 1.4 What do you do when?
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  DO ONCE (project start)              │    DO EVERY WORK SESSION            │
│  ───────────────────────              │    ──────────────────────           │
│  □ Create repo (one person)           │    □ Switch to main + Pull          │
│  □ Invite group members               │    □ Create/switch to your branch   │
│  □ Accept invitation                  │    □ Work on your code              │
│  □ Create your first Codespace        │    □ Stage → Commit → Push          │
│                                       │    □ Create PR + ask for review     │
│  COMMUNICATION                        │                                     │
│  ─────────────                        │                                     │
│  □ Decide who does what               │                                     │
│  □ Announce before working on a file  │                                     │
│  □ Review each other's Pull Requests  │                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2. Getting started with group work
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         GIT GROUP WORK – OVERVIEW                           │
│                                                                             │
│  1. ONE person creates the repo and invites the others as collaborators     │
│  2. Everyone does PULL from main to get the latest version                  │
│  3. Each person creates their own BRANCH for their task                     │
│  4. When finished: PUSH + create PULL REQUEST                               │
│  5. A group member REVIEWS your code                                        │
│  6. After approval: MERGE to main                                           │
│                                                                             │
│  Golden rule: Never work directly in main – always create a branch!         │
└─────────────────────────────────────────────────────────────────────────────┘

                            ┌──────────────────┐
                        1.  │   Lisa's GitHub  │
                            │   main branch    │◄────────────────────────────┐
                            │  (group's repo)  │                             │
                            └────────┬─────────┘                             │
                                     │                                       │
        ┌────────────────────────────┼────────────────────────────┐          │
        │ 2. pull                    │ 2. pull                    │ 2. pull  │
        ▼                            ▼                            ▼          │
  ┌────────────────┐          ┌────────────────┐          ┌────────────────┐ │
  │      Lisa      │          │      Erik      │          │      Anna      │ │
  │    Codespace   │          │    Codespace   │          │    Codespace   │ │
  │    (owner)     │          │ (collaborator) │          │ (collaborator) │ │
  └───────┬────────┘          └───────┬────────┘          └───────┬────────┘ │
          │                           │                           │          │
          ▼                           ▼                           ▼          │
      3. branch:                  3. branch:                  3. branch:     │
         contact                     products                    login       │
          │                           │                           │          │
          └───────────────────────────┼───────────────────────────┘          │
                                      │                                      │
                                      │ 4. push + PR                         │
                                      ▼                                      │
                            ┌──────────────────┐                             │
                        5.  │   Pull Request   │                             │
                            │    + Review      │                             │
                            └────────┬─────────┘                             │
                                     │                                       │
                                     │ 6. Merge                              │
                                     └───────────────────────────────────────┘
```

## 3. Starting a group project

### 3.1 One person creates the repo

One person in the group creates the project:

1. Go to the template repo for your project — [website](https://github.com/everydaydesign/website) for HTML/CSS, or [web-app](https://github.com/everydaydesign/web-app) for PHP/MySQL
2. Click **"Use this template"** → **"Create a new repository"**
3. Choose a name, e.g., `group1-design-project`
4. Select **Private** (if you do not want others to see it)
5. Click **Create repository**

### 3.2 Invite group members

The same person invites the rest of the group:

1. Go to the repo on GitHub
2. Click **Settings** → **Collaborators** (in the sidebar)
3. Click **Add people**
4. Search for the group member's GitHub username or email
5. Click **Add to repository**
6. Repeat for everyone in the group

Group members will receive an email and must accept the invitation!

### 3.3 Everyone opens the project

Once everyone has accepted the invitation:

1. Go to the repo on **github.com**
2. Click **"<> Code"** → **"Codespaces"**
3. Click **"Create codespace on main"**
4. Wait while the environment builds (about 1-2 minutes)

**Important:** Each person has their own Codespace – you do not work in the same window, but sync via Git!

**Next time you want to work:**
1. Go to [github.com/codespaces](https://github.com/codespaces)
2. Click on your existing Codespace (do not create a new one each time!)

### 3.4 Create your branch

Before you start coding, you need to create your own branch. A branch is a "copy" of the project where you can work without affecting others' code. Never work directly in `main`!

1. Look at the bottom left of Codespace – it says **main** (in the status bar)
2. Click on **main**
3. A menu appears at the top – select **Create new branch...**
4. Type a name that describes your task, e.g., `contact` or `products`
5. Press **Enter** – you are now on your new branch (check that the name has changed at the bottom)

You are now automatically on your new branch and can start working. All commits you make will go to your branch, not to main.

**Good branch names:**
```
contact
products
database-connection
startpage
```

**Every new work session** (when the branch already exists):
1. Click the branch name at the bottom left
2. Select your branch from the list

**Branch workflow:**
```
main         ●───────●───────────────────────●───────●
                     │                       ▲
                     │ 1. Create branch      │ 4. Merge (via PR)
                     ▼                       │
contact              ●─────●─────●───────────┘
                           │     │
                     2. commit  3. commit
```

> **Important: Everyone works in the same repo!**
>
> Group members should **not** create their own repos. Everyone opens Codespaces on the **team leader's repo** – the one created with "Use this template". That is where `.devcontainer/` lives, which installs PHP, MySQL and everything you need. If you create your own empty repo, you will not get a development environment.
>
> - The team leader creates the repo with **"Use this template"**
> - The team leader invites everyone as **collaborators**
> - Everyone opens Codespaces on the **same repo**
> - Everyone creates their own **branches** in their Codespace

---

## 4. Basic Git

### 4.1 Stage vs Commit – What is the difference?

Think of it like packing a suitcase for a trip:

| Step | Git term | Description |
|------|----------|-------------|
| 1. Choosing clothes | **Stage** | You select which files to include in the next save |
| 2. Closing the suitcase | **Commit** | You save a "snapshot" with a message |

**Why does stage exist?** You might have changed 5 files but only want to save 2 of them now. With stage, you choose exactly which changes belong together logically – e.g., "all changes for the login page" in one commit and "bugfix in the contact form" in another.

### 4.2 Saving changes (commit)

1. Click the **Source Control** icon in the sidebar (or `Ctrl+Shift+G`)
2. You'll see changed files under **Changes**
3. Click **+** (the plus sign) to stage files (choose which to include)
4. The files move to **Staged Changes**
5. Write a commit message – or click **✨** (the AI icon) to generate one automatically
6. Click **✓ Commit**

**Tip:** Commit often with clear messages – it makes it easier to find your way back!

### 4.3 The three-step workflow
```
      1. STAGE               2. COMMIT               3. PUSH
   (select files)         (save locally)       (share with group)
          │                      │                      │
          ▼                      ▼                      ▼
   ┌─────────────┐       ┌───────────────┐       ┌─────────────┐
   │ Click + on  │       │ Write message │       │ Click Sync  │
   │    files    │──────►│ (or ✨ for AI)│──────►│   or Push   │
   │             │       │    then ✓     │       │             │
   └─────────────┘       └───────────────┘       └─────────────┘
```

**Remember:** Stage → Commit → Push. Always in that order.

### 4.4 Undoing changes

| Situation | Solution |
|-----------|----------|
| **Undo changes in a file (not committed)** | Right-click the file → **Discard Changes** |
| **Remove file from staged** | Click **−** next to the file under Staged Changes |
| **Undo last commit** | **⋯** → **Commit** → **Undo Last Commit** |
| **Restore to previous version** | Right-click the file → **Open Timeline** → Select version |

### 4.5 Viewing history

1. Right-click a file in the file tree
2. Select **Open Timeline**
3. Click on a previous version to see the difference

---

## 5. Group work with Git

When multiple people work on the same project, you need to synchronize your changes via GitHub.

### 5.1 Push and Pull – syncing with GitHub

| Command | What it does | When |
|---------|--------------|------|
| **Pull** | Downloads others' changes from GitHub to you | Always before you start working |
| **Push** | Sends your commits to GitHub | When you're done with a change |

**How to do it:**

1. **Before you start working** – click **⋯** → **Pull** (or `Ctrl+Shift+P` → "Git: Pull")
2. **When you're done** – commit first, then **⋯** → **Push**

**Golden rule:** Pull before you start, push when you're done!
```
┌──────────────────────────────────────────┐
│              GitHub (Remote)             │
│         main branch on the server        │
└──────────────────────────────────────────┘
        │                    ▲
        │ 1. PULL            │ 2. PUSH
        │ (download)         │ (upload)
        ▼                    │
┌──────────────────────────────────────────┐
│           Your Codespace (local)         │
│          your copy of the project        │
└──────────────────────────────────────────┘
```

---

### 5.2 Pull Requests (PR) – review before merging

A Pull Request (PR) lets the group review your code before it is merged into main.

**Create a Pull Request:**

1. Push your branch to GitHub
2. Go to the repo on **github.com** → **Code** tab
3. If you see a yellow banner **"Compare & pull request"** – click it
4. **If no banner appears:**
   - Click the **Pull requests** tab
   - Click **New pull request** (green button)
   - Select your branch in the **compare** dropdown
5. Write a brief description of what you've done
6. Click **Create pull request**
7. Ask a group member to review and click **Merge pull request**

**Tip:** Write what they should look at, e.g., "Check that the form validates correctly"

**After your PR is merged:**
1. Switch back to `main` (click the branch name at the bottom)
2. Pull to download your merged changes
3. Delete your old branch (optional): **⋯** → **Branch** → **Delete Branch**

---

### 5.3 Reviewing a Pull Request

Anyone in the group can review – it does not have to be the same person every time. The only rule is that you do not review your own code.

**How to review:**

1. Go to the repo on **github.com**
2. Click the **Pull requests** tab
3. Click the PR you want to review
4. Click **Files changed** to see the changes

**Three options after reviewing:**

| Choice | When | What happens |
|--------|------|--------------|
| **Approve** | Everything looks good | PR can be merged |
| **Request changes** | Something needs to be fixed | Author must make changes |
| **Comment** | Questions or suggestions | No blocking |

---

### 5.4 Requesting changes – example

**Scenario:** Lisa has created a PR with a file called `q.php`. Erik thinks the name is unclear.

**Erik does the following:**

1. In **Files changed**, hover over the line with the filename
2. Click the **+** that appears
3. Write a comment:
```
Could you rename this file to something more descriptive?
For example, `search-query.php` or `product-query.php`
so it is clear what it does.
```

4. Click **Start a review**
5. When you've written all comments, click **Finish your review**
6. Select **Request changes** and click **Submit review**

**Lisa now sees:**
- PR cannot be merged
- Erik's comment on the file

**Lisa fixes it:**

1. Renames the file locally in VS Code
2. Commit: "Renamed q.php to product-query.php"
3. Pushes to the same branch

**Erik gets notified and:**

1. Checks that the change has been made
2. Clicks **Files changed** → **Review changes**
3. Selects **Approve**
4. Now Lisa (or Erik) can click **Merge pull request**

---

### 5.5 Tips for good reviews

**As a reviewer:**
- Be clear about what needs to change
- Explain why, not just what
- Suggest a solution
- Be kind – you're learning together!

**Examples of good comments:**
```
❌ "Bad name"
✅ "Could you rename this to something more descriptive? Suggestion: user-login.php"

❌ "Doesn't work"
✅ "This line will crash if $id is empty. Add an if statement to check first?"

❌ "Wrong"
✅ "This should be == instead of = (comparison, not assignment)"
```

**As an author:**
- Do not take criticism personally – it is about the code
- Ask if you do not understand the comment
- Say thanks for the feedback!

**Pull Request process**
```
  YOU (author)                                 REVIEWER
  ────────────                                 ────────
┌─────────────────┐
│ 1. Work in your │
│      branch     │
└────────┬────────┘
         ▼
┌─────────────────┐
│   2. Push to    │
│      GitHub     │
└────────┬────────┘
         ▼
┌─────────────────┐                      ┌─────────────────┐
│ 3. Create Pull  │─────────────────────►│ 4. Review code  │
│     Request     │                      └────────┬────────┘
└─────────────────┘                               │
                                                  ▼
                                  ┌─────────────────────────────────┐
                                  │           5. DECISION           │
                                  ├───────────┬───────────┬─────────┤
                                  │  Approve  │  Comment  │ Request │
                                  │ → Merge!  │ → Discuss │ changes │
                                  │           │           │  → Fix  │
                                  └───────────┴───────────┴─────────┘
```

---

### 5.6 Merge conflicts – when two people change the same file

A conflict occurs when two people have changed the same line. Git does not know which version should apply.

**What a conflict looks like:**

Lisa and Erik have both changed the navbar in `header.php`:
```php
<<<<<<< HEAD
// Erik's version
<nav>
    <a href="index.php">Home</a>
    <a href="products.php">Products</a>
</nav>
=======
// Lisa's version
<nav>
    <a href="index.php">Start</a>
    <a href="contact.php">Contact</a>
</nav>
>>>>>>> login-page
```

**Solution:** Talk to each other and combine:
```php
<nav>
    <a href="index.php">Home</a>
    <a href="products.php">Products</a>
    <a href="contact.php">Contact</a>
</nav>
```

**How to resolve it:**

1. VS Code highlights the conflict with colors
2. Click one of the options:
   - **Accept Current** – keep your version
   - **Accept Incoming** – use the other person's version
   - **Accept Both** – keep both
3. Or edit manually to the correct version
4. Remove `<<<<<<<`, `=======`, and `>>>>>>>` if they remain
5. Save the file
6. Stage and commit

**Avoiding conflicts:** Talk with your group about who is working on which file!

---

### 5.7 .gitignore – files that should not be shared

Some files should not be uploaded to GitHub. Create a file called `.gitignore` in the root folder (if it does not already exist):
```
# System files
.DS_Store
Thumbs.db

# Editor settings
.vscode/
*.swp

# Sensitive information
config.local.php
.env

# Temporary files
*.log
*.tmp
```

Never put passwords or API keys in Git!

---

## 6. Problems?

| Problem | Solution |
|---------|----------|
| Merge conflict | See the "Merge conflicts" section above |
| Can not push | Pull first, resolve any conflicts, then push |
| Accidentally committed to main | **⋯** → **Commit** → **Undo Last Commit**, create branch, commit again |
| Can not see others' changes | Pull from main |
| Wrong branch | Click the branch name at the bottom and switch |
