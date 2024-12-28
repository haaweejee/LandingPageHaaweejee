import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.BasePath
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.navigation.remove
import com.varabyte.kobweb.silk.defer.DeferringHost
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable

public fun main() {
    AppGlobals.initialize(mapOf("title" to "Landing Page"))
    BasePath.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { id.haaweejee.landingpage.pages.HomePage() }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerStyle("about-image", id.haaweejee.landingpage.styles.AboutImageStyle)
        ctx.theme.registerStyle("about-text", id.haaweejee.landingpage.styles.AboutTextStyle)
        ctx.theme.registerStyle(
            "programming-card",
            id.haaweejee.landingpage.styles.ProgrammingCardStyle
        )
        ctx.theme.registerStyle(
            "back-to-top-button",
            id.haaweejee.landingpage.styles.BackToTopButtonStyle
        )
        ctx.theme.registerStyle("input", id.haaweejee.landingpage.styles.InputStyle)
        ctx.theme.registerStyle(
            "navigation-item",
            id.haaweejee.landingpage.styles.NavigationItemStyle
        )
        ctx.theme.registerStyle("logo", id.haaweejee.landingpage.styles.LogoStyle)
        ctx.theme.registerStyle("social-link", id.haaweejee.landingpage.styles.SocialLinkStyle)
        ctx.theme.registerStyle("github-link", id.haaweejee.landingpage.styles.GithubLinkStyle)
        ctx.theme.registerStyle("upwork-link", id.haaweejee.landingpage.styles.UpworkLinkStyle)
        ctx.theme.registerStyle("main-button", id.haaweejee.landingpage.styles.MainButtonStyle)
        ctx.theme.registerStyle("main-button-cv", id.haaweejee.landingpage.styles.MainButtonCVStyle)
        ctx.theme.registerStyle("main-image", id.haaweejee.landingpage.styles.MainImageStyle)
        ctx.theme.registerStyle(
            "portfolio-section",
            id.haaweejee.landingpage.styles.PortfolioSectionStyle
        )
        ctx.theme.registerStyle(
            "portfolio-arrow-icon",
            id.haaweejee.landingpage.styles.PortfolioArrowIconStyle
        )
        ctx.theme.registerStyle("service-card", id.haaweejee.landingpage.styles.ServiceCardStyle)
    }

    router.tryRoutingTo(BasePath.remove(window.location.href.removePrefix(window.origin)),
            UpdateHistoryMode.REPLACE)

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    val root = document.getElementById("root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    renderComposable(rootElementId = "root") {
        id.haaweejee.landingpage.AppEntry {
            router.renderActivePage { DeferringHost { it() } }
        }
    }
}
