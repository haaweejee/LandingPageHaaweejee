package id.haaweejee.landingpage.styles


import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.transform
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.selectors.hover
import id.haaweejee.landingpage.models.Theme
import org.jetbrains.compose.web.ExperimentalComposeWebApi
import org.jetbrains.compose.web.css.deg
import org.jetbrains.compose.web.css.filter
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.rgba

val NavigationItemStyle = CssStyle {
    base {
        Modifier
            .styleModifier {
                property("--bs-link-color", Theme.Secondary.rgb)
            }
            .color(Theme.Secondary.rgb)
            .transition(Transition.of(property = "color", duration = 200.ms))
    }
    hover {
        Modifier
            .styleModifier {
                property("--bs-link-hover-color", Theme.Primary.rgb)
            }
            .color(Theme.Primary.rgb)
    }
}


val LogoStyle = CssStyle {
    base {
        Modifier
            .transform { rotate(0.deg) }
            .transition(Transition.of(property = "transform", duration = 200.ms))
    }
    hover {
        Modifier.transform { rotate((-10).deg) }
    }
}

val SocialLinkStyle = CssStyle {
    base {
        Modifier
            .color(Theme.Gray.rgb)
            .transition(Transition.of(property = "color", duration = 200.ms))
    }
    hover {
        Modifier.color(Theme.Primary.rgb)
    }
}

val GithubLinkStyle = CssStyle {
    base {
        Modifier
            .color(Theme.Gray.rgb)
            .transition(Transition.of(property = "color", duration = 200.ms))
    }
    hover {
        Modifier.color(Colors.Black)
    }
}

val UpworkLinkStyle = CssStyle {
    base {
        Modifier
            .color(Theme.Gray.rgb)
            .transition(Transition.of(property = "color", duration = 200.ms))
    }
    hover {
        Modifier.color(rgba(21, 168, 0, 1f))
    }
}

val MainButtonStyle = CssStyle {
    base {
        Modifier
            .width(100.px)
            .transition(Transition.of(property = "width", duration = 200.ms))
    }
    hover {
        Modifier.width(120.px)
    }
}

val MainButtonCVStyle = CssStyle {
    base {
        Modifier
            .width(180.px)
            .transition(Transition.of(property = "width", duration = 200.ms))
    }
    hover {
        Modifier.width(200.px)
    }
}

@OptIn(ExperimentalComposeWebApi::class)
val MainImageStyle = CssStyle {
    base {
        Modifier.styleModifier {
            filter {
                grayscale(100.percent)
            }
        }
//            .transition(Transition.of(property = "filter", duration = 200.ms))
    }
//    hover {
//        Modifier.styleModifier {
//            filter {
//                grayscale(0.percent)
//            }
//        }
//    }
}