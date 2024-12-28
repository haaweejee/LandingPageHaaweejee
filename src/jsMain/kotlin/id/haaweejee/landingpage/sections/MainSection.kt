package id.haaweejee.landingpage.sections

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.ObjectFit
import com.varabyte.kobweb.compose.css.TextDecorationLine
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.objectFit
import com.varabyte.kobweb.compose.ui.modifiers.textDecorationLine
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import id.haaweejee.landingpage.components.Header
import id.haaweejee.landingpage.components.SocialBar
import id.haaweejee.landingpage.models.Section
import id.haaweejee.landingpage.models.Theme
import id.haaweejee.landingpage.styles.MainButtonCVStyle
import id.haaweejee.landingpage.styles.MainButtonStyle
import id.haaweejee.landingpage.styles.MainImageStyle
import id.haaweejee.landingpage.util.BACKGROUND_IMAGE
import id.haaweejee.landingpage.util.FONT_FAMILY
import id.haaweejee.landingpage.util.MAIN_IMAGE
import id.haaweejee.landingpage.util.SECTION_WIDTH
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Text

@Composable
fun MainSection(onMenuClicked: () -> Unit) {
    Box(
        modifier = Modifier
            .id(Section.Home.id)
            .maxWidth(SECTION_WIDTH.px),
        contentAlignment = Alignment.TopCenter
    ) {
        MainBackground()
        MainContent(onMenuClicked)
    }
}

@Composable
fun MainBackground() {
    Image(
        modifier = Modifier
            .fillMaxSize()
            .objectFit(ObjectFit.Cover),
        src = BACKGROUND_IMAGE,
        description = "Background Image"
    )
}

@Composable
fun MainContent(onMenuClicked: () -> Unit) {
    val breakpoint = rememberBreakpoint()

    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        Header(onMenuClicked = onMenuClicked)
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            MainText(breakpoint = breakpoint)
        }
    }
}

@Composable
fun MainText(breakpoint: Breakpoint) {
    Row(
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically
    ) {
        if (breakpoint > Breakpoint.MD) {
            SocialBar()
        }

        Column(
            modifier = Modifier.margin(
                leftRight = if (breakpoint < Breakpoint.SM) 20.px else 0.px
            )
        ) {
            P(
                attrs = Modifier
                    .margin(topBottom = 0.px)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(if (breakpoint >= Breakpoint.LG) 30.px else 20.px)
                    .fontWeight(FontWeight.Normal)
                    .color(Theme.Primary.rgb)
                    .toAttrs()
            ) {
                Text("Hello, I'm")
            }
            P(
                attrs = Modifier
                    .margin(top = 0.px, bottom = 0.px)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(if (breakpoint >= Breakpoint.LG) 40.px else 40.px)
                    .fontWeight(FontWeight.Bolder)
                    .color(Theme.Secondary.rgb)
                    .toAttrs()
            ) {
                Text("Hendrawan Wibowo")
            }
            P(
                attrs = Modifier
                    .margin(top = 10.px, bottom = 5.px)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(20.px)
                    .fontWeight(FontWeight.Bold)
                    .color(Theme.Secondary.rgb)
                    .toAttrs()
            ) {
                Text("Mobile Developer")
            }
            P(
                attrs = Modifier
                    .margin(bottom = 25.px)
                    .maxWidth(400.px)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(15.px)
                    .fontWeight(FontWeight.Normal)
                    .color(Theme.Secondary.rgb)
                    .toAttrs()
            ) {
                Text("Mobile Developer with 3+ years of experience in mobile app development. I can help you to bring your idea to reality with quality.")
            }
            if (breakpoint < Breakpoint.SM) {
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Button(
                        attrs = MainButtonCVStyle.toModifier()
                            .height(40.px)
                            .border(width = 0.px)
                            .borderRadius(r = 5.px)
                            .margin(bottom = 10.px)
                            .backgroundColor(Theme.Primary.rgb)
                            .color(Theme.White.rgb)
                            .cursor(Cursor.Pointer)
                            .toAttrs()
                    ) {
                        Link(
                            modifier = Modifier
                                .color(Theme.White.rgb)
                                .textDecorationLine(TextDecorationLine.None),
                            text = "Hire Me",
                            path = Section.Contact.path
                        )
                    }
                    Button(
                        attrs = MainButtonCVStyle.toModifier()
                            .height(40.px)
                            .border(width = 0.px)
                            .borderRadius(r = 5.px)
                            .backgroundColor(Theme.Primary.rgb)
                            .color(Theme.White.rgb)
                            .cursor(Cursor.Pointer)
                            .toAttrs()
                    ) {
                        Link(
                            modifier = Modifier
                                .color(Theme.White.rgb)
                                .textDecorationLine(TextDecorationLine.None),
                            text = "Download My CV",
                            path = "https://drive.google.com/file/d/1qcEN-e1juNRjimMdx6jxi79rhbRWJqCd/view?usp=sharing"
                        )
                    }
                }
            } else {
                Row {
                    Button(
                        attrs = MainButtonStyle.toModifier()
                            .height(40.px)
                            .border(width = 0.px)
                            .borderRadius(r = 5.px)
                            .margin(right = 10.px)
                            .backgroundColor(Theme.Primary.rgb)
                            .color(Theme.White.rgb)
                            .cursor(Cursor.Pointer)
                            .toAttrs()
                    ) {
                        Link(
                            modifier = Modifier
                                .color(Theme.White.rgb)
                                .textDecorationLine(TextDecorationLine.None),
                            text = "Hire Me",
                            path = Section.Contact.path
                        )
                    }
                    Button(
                        attrs = MainButtonCVStyle.toModifier()
                            .height(40.px)
                            .border(width = 0.px)
                            .borderRadius(r = 5.px)
                            .backgroundColor(Theme.Primary.rgb)
                            .color(Theme.White.rgb)
                            .cursor(Cursor.Pointer)
                            .toAttrs()
                    ) {
                        Link(
                            modifier = Modifier
                                .color(Theme.White.rgb)
                                .textDecorationLine(TextDecorationLine.None),
                            text = "Download My CV",
                            path = "https://drive.google.com/file/d/1yoyqlOOevWgEvm77tRyThD_PynL3zxxS/view?usp=sharing"
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun MainImage() {
    Column(
        modifier = MainImageStyle.toModifier().fillMaxSize(80.percent).fillMaxHeight(),
        verticalArrangement = Arrangement.Bottom
    ) {
        Image(
            modifier = Modifier.fillMaxWidth(),
            src = MAIN_IMAGE,
            description = ""
        )
    }
}