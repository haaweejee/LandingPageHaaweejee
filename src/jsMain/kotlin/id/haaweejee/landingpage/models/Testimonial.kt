package id.haaweejee.landingpage.models

enum class Testimonial(
    val image: String,
    val fullName: String,
    val profession: String,
    val review: String,
) {
    First(
        image = "avatar1.png",
        fullName = "Milica Ilic",
        profession = "Web Designer",
        review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ),
    Second(
        image = "avatar2.png",
        fullName = "Stefan Jovanovic",
        profession = "Android Developer",
        review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ),
    Third(
        image = "avatar3.png",
        fullName = "Ana Milic",
        profession = "Business Analyst",
        review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ),
    Four(
        image = "avatar4.png",
        fullName = "Darko Pesic",
        profession = "Top Manager",
        review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ),
    Five(
        image = "avatar5.png",
        fullName = "Milena Nesovic",
        profession = "HR Recruiter",
        review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ),
    Six(
        image = "avatar6.png",
        fullName = "Aca Rodic",
        profession = "Cyber Security Analyst",
        review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ),
}