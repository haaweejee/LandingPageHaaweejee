package id.haaweejee.landingpage.components

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.navigation.OpenLinkStrategy
import com.varabyte.kobweb.silk.components.icons.fa.*
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.style.toModifier
import id.haaweejee.landingpage.models.Theme
import id.haaweejee.landingpage.styles.GithubLinkStyle
import id.haaweejee.landingpage.styles.SocialLinkStyle
import id.haaweejee.landingpage.styles.UpworkLinkStyle
import org.jetbrains.compose.web.css.px

@Composable
fun SocialBar(row: Boolean = false) {
    if (row) {
        Row(
            modifier = Modifier
                .margin(top = 25.px)
                .padding(leftRight = 25.px)
                .minHeight(40.px)
                .borderRadius(r = 20.px)
                .backgroundColor(Theme.LighterGray.rgb),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center,
        ) {
            SocialLinks(row = true)
        }
    } else {
        Column(
            modifier = Modifier
                .margin(right = 25.px)
                .padding(topBottom = 25.px)
                .minWidth(40.px)
                .borderRadius(r = 20.px)
                .backgroundColor(Theme.White.rgb),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            SocialLinks()
        }
    }
}

@Composable
private fun SocialLinks(row: Boolean = false) {
    Link(
        path = "https://github.com/haaweejee",
        openExternalLinksStrategy = OpenLinkStrategy.IN_NEW_TAB
    ) {
        FaGithub(
            modifier = GithubLinkStyle.toModifier()
                .margin(
                    bottom = if (row) 0.px else 40.px,
                    right = if (row) 40.px else 0.px,
                ),
            size = IconSize.LG
        )
    }
    Link(
        path = "https://www.upwork.com/freelancers/~011c5a681c55900f1e?viewMode=1",
        openExternalLinksStrategy = OpenLinkStrategy.IN_NEW_TAB
    ) {
        FaUpwork(
            modifier = UpworkLinkStyle.toModifier()
                .margin(
                    bottom = if (row) 0.px else 40.px,
                    right = if (row) 40.px else 0.px,
                ),
            size = IconSize.LG
        )
    }
    Link(
        path = "https://medium.com/@hendrawanwib",
        openExternalLinksStrategy = OpenLinkStrategy.IN_NEW_TAB
    ) {
        FaMedium(
            modifier = GithubLinkStyle.toModifier()
                .margin(
                    bottom = if (row) 0.px else 40.px,
                    right = if (row) 40.px else 0.px,
                ),
            size = IconSize.LG
        )
    }
    Link(
        path = "https://www.linkedin.com/in/haaweejee/",
        openExternalLinksStrategy = OpenLinkStrategy.IN_NEW_TAB
    ) {
        FaLinkedin(
            modifier = SocialLinkStyle.toModifier(),
            size = IconSize.LG
        )
    }
}