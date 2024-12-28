package id.haaweejee.landingpage.styles

import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.css.TransitionProperty
import com.varabyte.kobweb.compose.css.filter
import com.varabyte.kobweb.compose.css.functions.grayscale
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.opacity
import com.varabyte.kobweb.compose.ui.modifiers.rotate
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.selectors.hover
import id.haaweejee.landingpage.models.Theme
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.deg
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

val AboutImageStyle = CssStyle {
    base {
        Modifier
            .styleModifier { filter(grayscale(100.percent)) }
            .borderRadius(r = 0.px)
            .rotate(0.deg)
            .transition(Transition.of(property = TransitionProperty.All, duration = 200.ms))
    }
    hover {
        Modifier
            .styleModifier { filter(grayscale(0.percent)) }
            .borderRadius(r = 100.px)
            .rotate(10.deg)
    }
}

val AboutTextStyle = CssStyle {
    base {
        Modifier.opacity(50.percent)
    }
    hover {
        Modifier.opacity(100.percent)
    }
}

val ProgrammingCardStyle = CssStyle {
    base {
        Modifier
            .border(
                width = 2.px,
                style = LineStyle.Solid,
                color = Theme.LighterGray.rgb
            )
            .backgroundColor(Theme.White.rgb)
            .color(Theme.Secondary.rgb)
            .transition(
                transition = Transition.of(
                    property = "border",
                    duration = 200.ms
                ),
            )
            .transition(
                transition = Transition.of(
                    property = "background",
                    duration = 200.ms
                ),
            )
            .transition(
                transition = Transition.of(
                    property = "color",
                    duration = 200.ms
                ),
            )
    }
    hover {
        Modifier
            .border(
                width = 2.px,
                style = LineStyle.Solid,
                color = Theme.Primary.rgb
            )
            .backgroundColor(Theme.Primary.rgb)
            .color(Theme.White.rgb)

    }

    cssRule(" > #iconBox") {
        Modifier
            .backgroundColor(Colors.Transparent)
            .transition(
                transition = Transition.of(
                    property = "background",
                    duration = 200.ms
                ),
            )
    }

    cssRule(":hover > #iconBox") {
        Modifier.backgroundColor(Colors.White)
    }

}