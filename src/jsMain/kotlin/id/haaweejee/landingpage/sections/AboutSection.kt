package id.haaweejee.landingpage.sections

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.compose.css.FontStyle
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import id.haaweejee.landingpage.components.ProgrammingCard
import id.haaweejee.landingpage.components.SectionTitle
import id.haaweejee.landingpage.models.ProgrammingLanguage
import id.haaweejee.landingpage.models.Section
import id.haaweejee.landingpage.models.Skill
import id.haaweejee.landingpage.models.Theme
import id.haaweejee.landingpage.styles.AboutImageStyle
import id.haaweejee.landingpage.styles.AboutTextStyle
import id.haaweejee.landingpage.util.FONT_FAMILY
import id.haaweejee.landingpage.util.ObserveViewPortEntered
import id.haaweejee.landingpage.util.SECTION_WIDTH
import id.haaweejee.landingpage.util.animateNumbers
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Text

@Composable
fun AboutSection() {
    Box(
        modifier = Modifier
            .id(Section.About.id)
            .maxWidth(SECTION_WIDTH.px)
            .padding(top = 30.px),
        contentAlignment = Alignment.TopCenter
    ) {
        AboutContent()
    }
}

@Composable
fun AboutContent() {
    val breakpoint = rememberBreakpoint()
    Column(
        modifier = Modifier
            .fillMaxWidth(if (breakpoint >= Breakpoint.MD) 100.percent else 90.percent)
            .maxWidth(1200.px),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        AboutMe()
    }
}

@Composable
fun AboutImage() {
    Box(
        modifier = Modifier.fillMaxWidth(),
        contentAlignment = Alignment.Center
    ) {
        Image(
            modifier = AboutImageStyle.toModifier().fillMaxWidth(80.percent),
            src = "about_image.png",
            description = ""
        )
    }
}

@Composable
fun AboutMe() {
    var viewportEntered by remember { mutableStateOf(false) }
    val animatedPercentage = remember { mutableStateListOf(0, 0, 0, 0, 0) }
    val coroutineScope = rememberCoroutineScope()

    ObserveViewPortEntered(
        sectionId = Section.About.id,
        distanceFromTop = 700.0,
        onViewPortEntered = {
            viewportEntered = true
            Skill.entries.forEach { skill ->
                coroutineScope.launch {
                    animateNumbers(
                        number = skill.percentage.value.toInt(),
                        onUpdate = {
                            animatedPercentage[skill.ordinal] = it
                        }
                    )
                }
            }
        }
    )

    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.Center
    ) {
        SectionTitle(section = Section.About)
        P(
            attrs = AboutTextStyle.toModifier()
                .margin(top = 25.px, bottom = 10.px)
                .maxWidth(500.px)
                .fontFamily(FONT_FAMILY)
                .fontSize(18.px)
                .fontWeight(FontWeight.Normal)
                .fontStyle(FontStyle.Italic)
                .color(Theme.Secondary.rgb)
                .toAttrs()
        ) {
            Text(
                "Mobile Developer with 3+ years of experience in mobile app development. with Experience in " +
                        "Media Industry and Technology Company, so that we can discuss about best solution or your business. " +
                        "Open to Discuss if you have any consultation about tech and product"
            )
        }

        P(
            attrs = AboutTextStyle.toModifier()
                .margin(top = 0.px)
                .maxWidth(500.px)
                .fontFamily(FONT_FAMILY)
                .fontSize(18.px)
                .fontWeight(FontWeight.Normal)
                .color(Theme.Secondary.rgb)
                .toAttrs()
        ) {
            Text("My Ability:")
        }
        SimpleGrid(
            modifier = Modifier
                .fillMaxWidth()
                .margin(top = 15.px),
            numColumns = numColumns(base = 2, md = 3)
        ) {
            ProgrammingLanguage.entries.forEach { language ->
                ProgrammingCard(
                    name = language.title,
                    image = language.image
                )
            }
        }
    }
}