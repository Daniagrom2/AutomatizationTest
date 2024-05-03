@echo off
cd /d %~dp0
start "Hub" java -jar selenium-server-4.19.1.jar hub
start "Node 1" java -jar selenium-server-4.19.1.jar node --detect-drivers true --driver-configuration display-name="Chrome" --max-sessions=3 stereotype="{\"browserName\": \"chrome\"}" webdriver-path="webdriver\chromedriver.exe" --publish-events tcp://localhost:4442 --subscribe-events tcp://localhost:4443
start "Node 2" java -jar selenium-server-4.19.1.jar node --detect-drivers true --driver-configuration display-name="Chrome" --max-sessions=3 stereotype="{\"browserName\": \"chrome\"}" webdriver-path="webdriver\chromedriver.exe" --publish-events tcp://localhost:4442 --subscribe-events tcp://localhost:4443 --port 5556
