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


Running the Tests
================================================
Install Python 2.7+
Update PATH envrinoment variable to include Python path (i.e. C:\Python27)
Create new System environment variable called GYP_MSVS_VERSION with value 2013
Right click on ToDo.Client project
Select Open Command Prommpt Here
Type "npm test" and hit enter


Notes
================================================
There is a known performance issue in VS 2013 that causes NodeJs projects to consume high amounts of memory.  To avoid this issue, 
go to Tools-->Options-->Text Editor-->NodeJs-->Intellisense and select the No Intellisense radio button under Intellisense Level

