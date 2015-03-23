Pre-Requisites

================================================
Visual Studio 2013 Update 4
NodeJS for Windows
NodeJs Tools (VS Extension)
Task Runner Explorer (VS Extension)


Running the Solution
================================================
Open IIS and ensure the ToDo.Server app is running under an Application Pool with administrator privileges 
Right click on ToDo.Client project
Select Open Command Prompt Here
Type "npm install --msvs-version=2013 --python=python2.7" and hit enter
Type "npm install gulp -g" and hit enter
Right click on gulpfile.js (in the root of ToDo.Client)
Select Task Runner Explorer
Find the Task Runner Explorer Pane and click the refresh button.
Double click on the "build" task
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

