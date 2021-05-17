# daily-planner

Link to page: https://heynev.github.io/daily-planner/

Screen shots:
![image](https://user-images.githubusercontent.com/81537925/118419885-53594200-b68b-11eb-8575-9a851ee5ccf1.png)


GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar
1. The current day and time (eastern time- where I am at) is displayed at the top of the page underneath the header.

WHEN I scroll down
THEN I am presented with time blocks for standard business hours
2. There are time blocks from 9 am - 5 pm for the current day.

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
1. The past time block displays gray in color. The present time block displays red in color. The future time block displays red in color. 

WHEN I click into a time block
THEN I can enter an event
1. I click on the time block and can enter an event.

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
1. When I click the save button, it saves the event and key to the local storage.

WHEN I refresh the page
THEN the saved events persist
1. When the page is refreshed then the events for the day remain.
