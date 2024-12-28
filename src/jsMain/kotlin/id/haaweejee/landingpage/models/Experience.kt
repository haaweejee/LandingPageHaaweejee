package id.haaweejee.landingpage.models

enum class Experience(
    val number: String,
    val jobPosition: String,
    val description: String,
    val company: String,
    val image: String,
    val from: String,
    val to: String
) {
    First(
        number = "01",
        jobPosition = "Android Developer",
        description = "1. Contribute with the team to develop the Dunia Games Android application based on a request from Telkomsel as the Product Owner.\n" +
                "2. Carrying out the Application Deployment Process that has gone through several stages of Testing to Playstore.\n" +
                "3. Refactoring Code Base like App Architecture from MVP (Model-View-Presenter) to MVVM (Model-View-ViewModel), View Base from XML to Jetpack Compose, and Java Code to Kotlin Code Base.\n",
        company = "PT. Ako Media Asia (SALT Indonesia)",
        from = "April 2024",
        to = "Present",
        image = "salt-logo.svg"
    ),
    Second(
        number = "02",
        jobPosition = "Android Developer",
        description = "1. Implementation of Unit Testing in the android application to ensure the functions that have been made run well.\n" +
                "2. Conduct research to create new features or technologies that will be implemented in the Kompas.id application.\n" +
                "3. Plan, Implement, and Create Documentation for Clean Architecture on the Kompas.id Android Application to make the Application easy to maintain.\n",
        company = "PT. Kompas Media Nusantara (Harian Kompas)",
        from = "Maret 2022",
        to = "April 2024",
        image = "kompas-logo.png"
    ),
    Third(
        number = "03",
        jobPosition = "Android Developer Fasilitator",
        description = "1. Contribute with the team to develop the Dunia Games Android application based on a request from Telkomsel as the Product Owner.\\n\" +\n" +
                "                \"2. Carrying out the Application Deployment Process that has gone through several stages of Testing to Playstore.\\n\" +\n" +
                "                \"3. Refactoring Code Base like App Architecture from MVP (Model-View-Presenter) to MVVM (Model-View-ViewModel), View Base from XML to Jetpack Compose, and Java Code to Kotlin Code Base.\\n\"",
        company = "Bangkit",
        from = "Februari 2022",
        to = "Juli 2022",
        image = "bangkit-logo.png"
    ),
}