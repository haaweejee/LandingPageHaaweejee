package id.haaweejee.landingpage.models

import org.jetbrains.compose.web.css.CSSSizeValue
import org.jetbrains.compose.web.css.CSSUnit
import org.jetbrains.compose.web.css.percent

enum class Skill(
    val title: String,
    val percentage: CSSSizeValue<CSSUnit.percent>
) {
    Creative(
        title = "Creative",
        percentage = 90.percent
    ),
    Accountable(
        title = "Accountable",
        percentage = 90.percent
    ),
    HardWorking(
        title = "Hard Working",
        percentage = 80.percent
    ),
    Value(
        title = "Value for Money",
        percentage = 85.percent
    ),
    Delivery(
        title = "On-Time Delivery",
        percentage = 75.percent
    ),

}

enum class ProgrammingLanguage(
    val title: String,
    val image: String
) {
    Kotlin(
        title = "Kotlin",
        image = "kotlin.svg"
    ),
    Flutter(
        title = "Flutter",
        image = "flutter.svg"
    ),
    Firebase(
        title = "Firebase",
        image = "firebase.svg"
    ),
    Go(
        title = "Golang",
        image = "go.svg"
    ),
    Github(
        title = "Github",
        image = "github.svg"
    ),
    Jira(
        title = "Jira",
        image = "jira.svg"
    ),
}