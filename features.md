my app is basically a notification app. i want users to be able to manage which notifications they get from their services at a specific time or block them for a period.

list of requirements:

1. a user should a list of one or more services (could be the same service but with different credentials ie a private@gmail.com and a work@companyname.com which is a business google account).
2. each service can be configured to show a count. i want to start with unread email.
3. a user should be able to add one service at the time. connection should be done through oauth.
4. the backend is responsible for checking new unread items
5. clients require login to acces the backend and should be able to communicate using websockets to enable fast processing to display the unread count. other communication should be done using json:api calls.
6. the client will handle the viewing of the list. for instance:

- Gmail (2)
- Work (3)

7. it should be possible to snooze notifications for a period (today, this afternoon, next hour). i am unsure if the backend should handle this or the front-end.
8. in addition to 7 it should be able to snooze notifications based on a schedule.
9. snoozing could be done globally or per service or group based (for example a group work can include the work email and their github notifications.)
10. one user should be able to have multiple services.
11. notifications are basically a count (so google will respond with a unread count of 8). we will not be able to read the content of the notification.
