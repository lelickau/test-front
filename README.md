### How to launch the app
1. In the folder server (start the json-server): npm start
2. In the folder client (start the react): npm start


#### Application structure

| public
----favicon.ico
----index.html
----manifest.json
----robots.txt
| src
----| components
--------| errorModal
------------errorModal.scss
------------ErrorModal.tsx
--------| preloader
------------preloader.scss
------------Preloader.tsx
--------| UI
------------| buttonElem
----------------buttonElem.scss
----------------ButtonElem.tsx
------------| inputElem
----------------inputElem.scss
----------------InputElem.tsx
------------| selectElem
----------------selectElem.scss
----------------SelectElem.tsx
--------| userItem
------------userItem.scss
------------UserItem.tsx
----| helpers
--------sortData.ts
--------validate.ts
----| hooks
--------reduxHooks.ts
----| pages
--------| detailsPage
------------detailsPage.scss
------------DetailsPage.tsx
--------| mainPage
------------mainPage.scss
------------MainPage.tsx
----| store
--------| slices
------------userSlice.ts
--------index.ts
----| style
--------style.scss
----| types
--------IUser.ts
----App.tsx
----index.tsx
.env
tsconfig.json
| server
----fixtures.json