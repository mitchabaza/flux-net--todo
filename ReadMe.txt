Pre-Requisites

================================================
Visual Studio 2013 Update 4
NodeJS for Windows
NodeJs Tools (VS Extension)
Task Runner Explorer (VS Extension)


Running the Solution
================================================
Right click on ToDo.Client project
Select Open Command Prompt Here
Type "npm Install --msvs_version=2013" and hit enter
Right click on gulpfile.js (in the root of ToDo.Client) and select Task Runner Explorer
Find the Task Runner Explorer Pane and click the Refresh icon.
Double click on the "build-dev" task
Confirm that this step executes without error.
Point your browser to http://localhost/ToDo/


Running the Tests
================================================
Install Python 2.7+
Update PATH envrinoment variable to include Python path (i.e. C:\Python27)
Open Node.js Interactive Window
Type ".npm test" and hit enter


Notes
================================================
There is a known performance issue in VS 2013 that causes NodeJs projects to consume high amounts of memory.  To avoid this issue, 
go to Tools-->Options-->Text Editor-->NodeJs-->Intellisense and select the 'No Intellisense' radio button under Intellisense Level

