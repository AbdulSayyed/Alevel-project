## A level project called Verbal Reasoning for 11+ Exam

- This file contains the steps taken to build this project. 
- Git is used to commit each step.
- Once I have done enough practice of creating html files and adding CSS and java scripts along with using Bootstrap-5. The main project started on Wednesday 14th February 2024.
- As I intend to use Bootsrtap5 locally I have downloaded the minified version of it.

### Step 1:

- The main folder is called `A-level-Project`.
- Where this Readme.md file is created. It is a markdown file  and git is initialised in this directory using `git init .`
- The `.` denotes the current folder.
- At this stage no commit exist and nothing has been staged.
- Once this is added, it is first staged using `git add -A .` it staged all files present in current folder.
- When log is taken of the commit it shows the following.
  
```
commit 14bf41b805feb441ed62d52a3cfaca8258996393 (HEAD -> main)
Author: SulaimanSayyed <Sullisayyed21@outlook.com>
Date:   Wed Feb 14 14:13:53 2024 +0000

    Initial Commit: Readme.md added for A level project
```
    > First commit is done.

### Step 2:

- A folder structure is created to keep files separate and organised shown below.
  
```
K:.
└───resources
    ├───bootstrap-5.0.2
    │   ├───css
    │   └───js
    ├───custom.css
    ├───data
    └───sounds
```

- Placed bootstrap minified css and js files.
- Also created custom.css for customising the style sheet besides bootstrap.
- For writing javascript code initially `script-1.js` is created.
- Data folder has a JSON file named `opposites.json` It contains only two questions. Thy are kept in JSON objects and values are kept in an array using bracket notations `[]`.
- Two sounds are used to denote the success or failure, they are kept in sounds folder.
- Following is the state of this project folder, `tree /F` command is used to get using microsoft terminal with `powershell 7.4.0`.
  
  ```
  K:.
│   ReadMe.md
│
└───resources
    ├───bootstrap-5.0.2
    │   ├───css
    │   │       bootstrap.bundle.min.js
    │   │       bootstrap.min.css
    │   │
    │   └───js
    ├───custom-css
    │       styles.css
    │
    ├───data
    │       opposites.json
    │
    ├───scripts
    │       script-1.js
    │
    └───sounds
            buzz.wav
            success.wav
```

### Step 3: