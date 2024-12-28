package id.haaweejee.landingpage.pages

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.core.Page
import id.haaweejee.landingpage.components.BackToTopButton
import id.haaweejee.landingpage.components.OverflowMenu
import id.haaweejee.landingpage.sections.AboutSection
import id.haaweejee.landingpage.sections.AchievementsSection
import id.haaweejee.landingpage.sections.ContactSection
import id.haaweejee.landingpage.sections.ExperienceSection
import id.haaweejee.landingpage.sections.FooterSection
import id.haaweejee.landingpage.sections.MainSection
import id.haaweejee.landingpage.sections.PortfolioSection
import id.haaweejee.landingpage.sections.ServiceSection
import id.haaweejee.landingpage.sections.TestimonialSection

@Page
@Composable
fun HomePage() {
    var menuOpened by remember { mutableStateOf(false) }
    Box(
        modifier = Modifier.fillMaxSize()
    ) {
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.Top,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            MainSection(
                onMenuClicked = {
                    menuOpened = true
                }
            )
            AboutSection()
            ExperienceSection()
            ServiceSection()
            PortfolioSection()
//            AchievementsSection()
//            TestimonialSection()
            ContactSection()
            FooterSection()
        }
        BackToTopButton()
        if (menuOpened) {
            OverflowMenu {
                menuOpened = false
            }
        }
    }
}
