package id.haaweejee.landingpage.components

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextDecorationLine
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.icons.fa.FaBars
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import id.haaweejee.landingpage.models.Section
import id.haaweejee.landingpage.models.Theme
import id.haaweejee.landingpage.styles.LogoStyle
import id.haaweejee.landingpage.styles.NavigationItemStyle
import id.haaweejee.landingpage.util.FONT_FAMILY
import id.haaweejee.landingpage.util.LOGO_IMAGE
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.w3c.dom.Image

@Composable
fun Header(onMenuClicked: () -> Unit) {
    val breakpoint = rememberBreakpoint()
    Row(
        modifier = Modifier
            .fillMaxWidth(if (breakpoint > Breakpoint.MD) 80.percent else 90.percent)
            .margin(topBottom = 32.px),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        LeftSide(
            breakpoint = breakpoint,
            onMenuClicked = onMenuClicked
        )
        if (breakpoint > Breakpoint.MD) {
            RightSide()
        }
    }
}

@Composable
fun LeftSide(
    breakpoint: Breakpoint,
    onMenuClicked: () -> Unit
) {
    Row(
        verticalAlignment = Alignment.CenterVertically
    ) {
        if (breakpoint <= Breakpoint.MD) {
            FaBars(
                modifier = Modifier
                    .margin(right = 15.px)
                    .onClick {
                        onMenuClicked()
                    },
                size = IconSize.XL
            )
        }

        Image(
            modifier = LogoStyle.toModifier(),
            src = LOGO_IMAGE
        )
    }
}

@Composable
fun RightSide() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .borderRadius(r = 50.px)
            .backgroundColor(Theme.White.rgb)
            .padding(all = 20.px),
        horizontalArrangement = Arrangement.End
    ) {
        Section.entries.toTypedArray().take(6).forEach { section ->
            Link(
                modifier = NavigationItemStyle.toModifier()
                    .padding(right = 30.px)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(18.px)
                    .textDecorationLine(TextDecorationLine.None),
                path = section.path,
                text = section.title
            )
        }
    }
}