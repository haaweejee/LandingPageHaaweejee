package id.haaweejee.landingpage.models

enum class Experience(
    val number: String,
    val jobPosition: String,
    val description: List<String>,
    val company: String,
    val image: String,
    val from: String,
    val to: String
) {

    First(
        number = "01",
        jobPosition = "Android Developer",
        description = listOf(
            "Contribute with the team to develop the Dunia Games Android application based on a request from Telkomsel as the Product Owner.",
            "Carrying out the Application Deployment Process that has gone through several stages of Testing to Playstore.",
            "Refactoring Code Base like App Architecture from MVP (Model-View-Presenter) to MVVM (Model-View-ViewModel), View Base from XML to Jetpack Compose, and Java Code to Kotlin Code Base."
        ),
        company = "PT. Ako Media Asia (SALT Indonesia)",
        from = "April 2024",
        to = "Present",
        image = "salt-logo.svg"
    ),
    Second(
        number = "02",
        jobPosition = "Android Developer",
        description = listOf(
            "Implementation of Unit Testing in the android application to ensure the functions that have been made run well.",
            "Conduct research to create new features or technologies that will be implemented in the Kompas.id application.",
            "Plan, Implement, and Create Documentation for Clean Architecture on the Kompas.id Android Application to make the Application easy to maintain."
        ),
        company = "PT. Kompas Media Nusantara (Harian Kompas)",
        from = "Maret 2022",
        to = "April 2024",
        image = "kompas-logo.png"
    ),
    Third(
        number = "03",
        jobPosition = "Android Developer Fasilitator",
        description = listOf(
            "Lead group discussions and training sessions to enhance understanding of course materials.",
            "Provide one-on-one guidance to participants struggling with concepts or assignments.",
            "Motivate participants to achieve their learning goals and maintain consistent progress.",
            "Collaborate with mentors and Bangkit team members to streamline the learning experience."
        ),
        company = "Bangkit",
        from = "Februari 2022",
        to = "Juli 2022",
        image = "bangkit-logo.png"
    ),
    Four(
        number = "04",
        jobPosition = "Android Developer Intern",
        description = listOf(
            "Collaborate with UI/UX Designers to apply the designs that have been made to the Kompas.id Android Application.",
            "Implement the API that has been created by the backend team for use in the Kompas.id Android application.",
            "Conduct research to create new features or technologies that will be implemented in the Kompas.id application.",
        ),
        company = "PT. Kompas Media Nusantara (Harian Kompas)",
        from = "September 2021",
        to = "Februari 2022",
        image = "kompas-logo.png"
    ),
}