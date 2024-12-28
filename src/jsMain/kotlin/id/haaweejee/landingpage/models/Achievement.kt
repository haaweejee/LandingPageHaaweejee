package id.haaweejee.landingpage.models

enum class Achievement(
    val icon: String,
    val number: Int,
    val description: String,
) {
    Completed(
        icon = "checkmark_icon.svg",
        number = 120,
        description = "Completed Projects"
    ),
    Active(
        icon = "shield_icon.svg",
        number = 12,
        description = "Active Projects"
    ),
    Satisfied(
        icon = "happy_icon.svg",
        number = 42,
        description = "Satisfied Clients"
    ),
    Team(
        icon = "user_icon.svg",
        number = 10,
        description = "Team Members"
    )
}