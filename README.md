# NETFLIX-GPT WITH REACT

* Implimentation
    * vite + tailwind css
    * implimented routes
    * SignIn,SignUp form & its validation
    * Stored data in fireBase FireStore-Database 
    * **Authentication with Firebase** 
    * inbuilt env
    * implimented context api for athenticating routes
    * signOut 
    * create a browse page with dynamic data from **TMDB**
    * **Intigrated Gpt in search bar**
* Essentials
    - Netflix-Header-Icon => https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
    - Netflix-bg-image => https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg
    - 

* Tips
    - for "Forms" there is a library called **formik**  which makes impliment "Form" easy like it help in validation error handling etc (jst check their website formik)
    - 



* re-render happens in case of useState
    - signin , signup button for swapping  btween 2 forms
    - if validation fail for showing errormsg

* **Firebase**
    - Firebase is a **backend platform by Google that helps developers build web and mobile apps without managing servers**,
    > simple way, its a platform for Backend as a service
        - It provides many ready-to-use features like:
            - Database – Store and sync data in real time (Firestore, Realtime Database).
            - Authentication – Allow users to log in using email, Google, Facebook, etc.
            - Storage – Save and retrieve files like images and videos.
            - Hosting – Deploy websites quickly with free SSL.
            - Functions – Run backend code without managing a server.
            - Analytics & Messaging – Track users and send notifications.
            - ETC.....................


* **InBuilt DotEnv and its Rule** 
    *  Vite has built-in support for environment variables. You can use .env files directly.
        - That means , no need to import or install any env cz Vite automatically loads .env files but it should be create in root of our project 
    * As a Rule for securty purpose use VITE first 
        - Vite only exposes environment variables to the frontend if they start with VITE_. Any variable without VITE_ will not be available in import.meta.env.This is done for security reasons—so that by default, sensitive backend variables (like database passwords) don’t get exposed accidentally.So, if you want to use an environment variable in a Vite React app, you must prefix it with VITE_.
    * In Vite, environment variables are accessed using 
        > import.meta.env 
        - instead of process.env.keyname


        
