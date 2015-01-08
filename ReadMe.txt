Pre-Requisites
================================================
Visual Studio 2013 Update 4
NodeJS for Windows
NodeJs Tools (VS Extension)
Task Runner Explorer (VS Extension)


Running the Solution
================================================
Right click on ToDo.Client project
Select Open Command Prommpt Here
Type "npm install" and hit enter
Right click on gulpfile.js (in the root of ToDo.Client)
Select Task Runner Explorer
Find the Task Runner Explorer Pane. 
Expand tasks.  Double click on the "default" task.
Confirm that this step executes without error.
Point your browser to http://localhost/ReactJs/

Notes
================================================
There is a known performance issue in VS 2013 that causes NodeJs projects to consume high amounts of memory.  To avoid this issue, 
go to Tools-->Options-->Text Editor-->NodeJs-->Intellisense and select the No Intellisense radio button under Intellisense Level

